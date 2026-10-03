package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class FormattingTest {
    @Test
    fun longCallsWrapArgumentsWhileShortNestedCallsStayInline() {
        val source = ktFile {
            ktFunction("screen") {
                body {
                    call("TextField") {
                        argument {
                            name = "value"
                            reference("currentSearchQuery")
                        }
                        argument {
                            name = "onValueChange"
                            reference("updateSearchQuery")
                        }
                        argument {
                            name = "modifier"
                            reference("Modifier") {
                                call("fillMaxWidth")
                            }
                        }
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            fun screen() {
                TextField(
                    value = currentSearchQuery,
                    onValueChange = updateSearchQuery,
                    modifier = Modifier.fillMaxWidth()
                )
            }

        """.trimIndent())
    }

    @Test
    fun simpleLambdasFitInlineAndMultipleStatementsRemainSeparate() {
        val source = ktFile {
            ktValue("identity") {
                initializer {
                    lambdaExpression {
                        reference("it")
                    }
                }
            }
            line()
            ktValue("load") {
                initializer {
                    lambdaExpression {
                        call("logStart")
                        call("readCache")
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            val identity = { it }

            val load = {
                logStart()
                readCache()
            }

        """.trimIndent())
    }

    @Test
    fun constructorsAndFunctionsWrapTheirParameters() {
        val source = ktFile {
            ktClass("SearchConfiguration") {
                constructor {
                    parameter("initialSearchQuery") {
                        type {
                            reference("String")
                        }
                        property {}
                    }
                    parameter("maximumNumberOfResults") {
                        type {
                            reference("Int")
                        }
                        property {}
                    }
                    parameter("includeArchivedResults") {
                        type {
                            reference("Boolean")
                        }
                        property {}
                    }
                }
                ktFunction("findMatchingResults") {
                    parameter("initialSearchQuery") {
                        type {
                            reference("String")
                        }
                    }
                    parameter("maximumNumberOfResults") {
                        type {
                            reference("Int")
                        }
                    }
                    parameter("includeArchivedResults") {
                        type {
                            reference("Boolean")
                        }
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            class SearchConfiguration(
                val initialSearchQuery: String,
                val maximumNumberOfResults: Int,
                val includeArchivedResults: Boolean
            ) {
                fun findMatchingResults(
                    initialSearchQuery: String,
                    maximumNumberOfResults: Int,
                    includeArchivedResults: Boolean
                )
            }

        """.trimIndent())
    }

    @Test
    fun chainsWrapAtMemberBoundariesWithOneContinuationIndent() {
        val source = ktFile {
            ktValue("result") {
                initializer {
                    reference("searchConfiguration") {
                        call("includeAllArchivedResults")
                        call("sortByMostRecentlyUpdated")
                        call("takeFirstMatchingResult")
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            val result = searchConfiguration
                .includeAllArchivedResults()
                .sortByMostRecentlyUpdated()
                .takeFirstMatchingResult()

        """.trimIndent())
    }

    @Test
    fun commentsAndExplicitBlankLinesPreventLambdaFlattening() {
        val source = ktFile {
            ktValue("load") {
                initializer {
                    lambdaExpression {
                        comment("Read from cache first")
                        call("readCache")
                        lines(2)
                        call("loadFresh")
                    }
                }
            }
            line()
            ktValue("pending") {
                initializer {
                    lambdaExpression {
                        comment("TODO")
                    }
                }
            }
            ktValue("empty") {
                initializer {
                    lambdaExpression {}
                }
            }
        }
        assertThat(source).isEqualTo("""
            val load = {
                // Read from cache first
                readCache()


                loadFresh()
            }

            val pending = {
                // TODO
            }
            val empty = {}

        """.trimIndent())
    }

    @Test
    fun nestedTypesWrapAndStillCollectImports() {
        val source = ktFile {
            ktValue("configuration") {
                type {
                    reference("kotlin.collections.Map")
                    argument {
                        type {
                            reference("example.SearchConfigurationIdentifier")
                        }
                    }
                    argument {
                        type {
                            reference("kotlin.collections.List")
                            argument {
                                type {
                                    reference("example.ArchivedSearchConfiguration")
                                    nullable = true
                                }
                            }
                            nullable = true
                        }
                    }
                }
                initializer {
                    call("emptyMap")
                }
            }
        }
        assertThat(source).isEqualTo("""
            import example.ArchivedSearchConfiguration
            import example.SearchConfigurationIdentifier

            val configuration: Map<
                SearchConfigurationIdentifier,
                List<ArchivedSearchConfiguration?>?
            > = emptyMap()

        """.trimIndent())
    }

    @Test
    fun fileAnnotationsWrapBeforeThePackageAndImports() {
        val source = ktFile {
            ktFileAnnotation("OptIn") {
                argument {
                    reference("example.ExperimentalSearchConfigurationApi") {
                        classLiteral()
                    }
                }
                argument {
                    reference("example.ExperimentalArchivedSearchConfigurationApi") {
                        classLiteral()
                    }
                }
            }
            packageName("example.generated")
            ktClass("Configuration")
        }
        assertThat(source).isEqualTo("""
            @file:OptIn(
                ExperimentalSearchConfigurationApi::class,
                ExperimentalArchivedSearchConfigurationApi::class
            )

            package example.generated

            import example.ExperimentalArchivedSearchConfigurationApi
            import example.ExperimentalSearchConfigurationApi

            class Configuration

        """.trimIndent())
    }

    @Test
    fun longLambdaParameterListsWrapInsideTheirBraces() {
        val source = ktFile {
            ktValue("choose") {
                initializer {
                    lambdaExpression {
                        parameter("originalSearchConfiguration") {
                            type {
                                reference("ArchivedSearchConfiguration")
                            }
                        }
                        parameter("replacementSearchConfiguration") {
                            type {
                                reference("ArchivedSearchConfiguration")
                            }
                        }
                        reference("originalSearchConfiguration")
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            val choose = {
                originalSearchConfiguration: ArchivedSearchConfiguration,
                replacementSearchConfiguration: ArchivedSearchConfiguration ->
                originalSearchConfiguration
            }

        """.trimIndent())
    }

    @Test
    fun nestedTrailingLambdasKeepTheirHierarchyEvenWhenTheyFitOnOneLine() {
        val source = ktFile {
            ktFunction("App") {
                body {
                    call("NavHost") {
                        argument {
                            name = "startDestination"
                            literal("home")
                        }
                        trailingLambda {
                            call("composable") {
                                argument {
                                    literal("home")
                                }
                                trailingLambda {
                                    call("HomeScreen") {
                                        argument {
                                            name = "transform"
                                            lambdaExpression {
                                                reference("it")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            fun App() {
                NavHost(startDestination = "home") {
                    composable("home") {
                        HomeScreen(transform = { it })
                    }
                }
            }

        """.trimIndent())
    }

    @Test
    fun nestedTrailingLambdaWithASimpleLeafStillExpandsBothLevels() {
        val source = ktFile {
            ktFunction("App") {
                body {
                    call("NavHost") {
                        trailingLambda {
                            call("composable") {
                                argument {
                                    literal("home")
                                }
                                trailingLambda {
                                    call("HomeScreen")
                                }
                            }
                        }
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            fun App() {
                NavHost {
                    composable("home") {
                        HomeScreen()
                    }
                }
            }

        """.trimIndent())
    }

    @Test
    fun emptyNestedLambdasKeepTheOuterHierarchy() {
        val source = ktFile {
            ktFunction("App") {
                body {
                    call("Column") {
                        trailingLambda {
                            call("Box") {
                                trailingLambda {}
                            }
                        }
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            fun App() {
                Column {
                    Box {}
                }
            }

        """.trimIndent())
    }
}
