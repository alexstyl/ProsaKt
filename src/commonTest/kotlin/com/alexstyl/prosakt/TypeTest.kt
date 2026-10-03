package com.alexstyl.prosakt

import assertk.assertFailure
import assertk.assertThat
import assertk.assertions.hasMessage
import assertk.assertions.isEqualTo
import kotlin.test.Test

class TypeTest {
    @Test
    fun namedAndFunctionTypesShareExplicitTypeBlocks() {
        assertThat(
                ktFile {
                    ktFunction("invoke") {
                        parameter("customize") {
                            type {
                                function {
                                    annotations = listOf("example.Composable")
                                    parameter { type { reference("example.Values") } }
                                    returns { type { reference("example.Values") } }
                                }
                            }
                        }
                    }
                    ktValue("callbacks") {
                        type {
                            reference("List")
                            argument {
                                type {
                                    nullable = true
                                    function {
                                        parameter("name") { type { reference("String") } }
                                        returns {
                                            type {
                                                reference("String")
                                                nullable = true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            )
            .isEqualTo(
                """
            import example.Composable
            import example.Values

            fun invoke(customize: @Composable (Values) -> Values)
            val callbacks: List<((name: String) -> String?)?>

        """
                    .trimIndent()
            )
    }

    @Test
    fun typeBlocksRequireOneExplicitTypeDescription() {
        assertFailure { ktFile { ktValue("result") { type {} } } }
            .hasMessage("Type must define a reference or function")
        assertFailure {
                ktFile {
                    ktValue("result") {
                        type {
                            reference("User")
                            function {}
                        }
                    }
                }
            }
            .hasMessage("Type has already been defined")
    }

    @Test
    fun nestedTypesOwnTheirNullabilityAndCollectImports() {
        val source = ktFile {
            ktValue("result") {
                initializer {
                    call("create") {
                        argument {
                            type {
                                reference("kotlin.collections.Map")
                                argument { type { reference("String") } }
                                argument {
                                    type {
                                        reference("kotlin.collections.List")
                                        nullable = true
                                        argument {
                                            type {
                                                reference("example.User")
                                                nullable = true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        argument {
                            name = "name"
                            literal("Alex")
                        }
                    }
                }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            import example.User

            val result = create<Map<String, List<User?>?>>(name = "Alex")

        """
                    .trimIndent()
            )
    }
}
