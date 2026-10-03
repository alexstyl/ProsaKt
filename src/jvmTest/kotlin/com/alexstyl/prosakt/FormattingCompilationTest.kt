package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class FormattingCompilationTest {
    @Test
    fun wrappedCallsOperatorsAndChainsCompileAndPreserveValues() {
        val source = ktFile {
            ktValue("result") {
                initializer {
                    chain {
                        call("listOf") {
                            argument {
                                literal(
                                    "The first sufficiently long string to wrap across the available width"
                                ) {
                                    plus { literal(" followed by its suffix") }
                                }
                            }
                            argument {
                                literal(
                                    "The second sufficiently long string to wrap across the available width"
                                )
                            }
                        }
                        call("joinToString") {
                            argument {
                                name = "separator"
                                literal("|")
                            }
                        }
                        property("length")
                    }
                }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            val result = listOf(
                "The first sufficiently long string to wrap across the available width" +
                    " followed by its suffix",
                "The second sufficiently long string to wrap across the available width"
            )
                .joinToString(separator = "|")
                .length

        """
                    .trimIndent()
            )
        withCompiledKotlin(source) { loader ->
            val expected =
                ("The first sufficiently long string to wrap across the available width" +
                        " followed by its suffix|The second sufficiently long string to wrap across the available width")
                    .length
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null))
                .isEqualTo(expected)
        }
    }

    @Test
    fun wrappedGenericAndFunctionTypesAndDefaultLambdasCompile() {
        val source = ktFile {
            ktClass("SearchConfigurationIdentifier")
            ktClass("ArchivedSearchConfiguration")
            ktClass("SearchConfiguration") {
                constructor {
                    parameter("configuration") {
                        type {
                            reference("Map")
                            argument { type { reference("SearchConfigurationIdentifier") } }
                            argument {
                                type {
                                    reference("List")
                                    argument {
                                        type {
                                            reference("ArchivedSearchConfiguration")
                                            nullable = true
                                        }
                                    }
                                    nullable = true
                                }
                            }
                        }
                        property {}
                    }
                    parameter("customize") {
                        type {
                            function {
                                parameter("originalSearchConfiguration") {
                                    type { reference("ArchivedSearchConfiguration") }
                                }
                                parameter("replacementSearchConfiguration") {
                                    type { reference("ArchivedSearchConfiguration") }
                                }
                                returns { type { reference("ArchivedSearchConfiguration") } }
                            }
                        }
                        default {
                            lambdaExpression {
                                parameter("original")
                                parameter("replacement")
                                reference("original")
                            }
                        }
                        property {}
                    }
                }
            }
        }
        withCompiledKotlin(source)
    }
}
