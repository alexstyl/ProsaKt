package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class TypeCompilationTest {
    @Test
    fun configuredFunctionTypesCompileAndRun() {
        val source = ktFile {
            ktFunction("apply") {
                parameter("transform") {
                    type {
                        function {
                            annotations = listOf("Marker")
                            parameter {
                                type {
                                    reference("String")
                                }
                            }
                            returns {
                                type {
                                    reference("String")
                                }
                            }
                        }
                    }
                    default {
                        lambdaExpression {
                            reference("it")
                        }
                    }
                }
                returns {
                    type {
                        reference("String")
                    }
                }
                body {
                    call("transform") {
                        argument {
                            literal("Alex")
                        }
                    }
                }
            }
            ktValue("optional") {
                type {
                    nullable = true
                    function {
                        annotations = listOf("Marker")
                        parameter("value") {
                            type {
                                reference("String")
                                nullable = true
                            }
                        }
                        returns {
                            type {
                                function {
                                }
                            }
                        }
                    }
                }
                initializer {
                    nullValue()
                }
            }
            ktValue("result") {
                initializer {
                    call("apply")
                }
            }
        }
        withCompiledKotlin("@Target(AnnotationTarget.TYPE) annotation class Marker\n" + source) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null)).isEqualTo("Alex")
        }
    }

    @Test
    fun nestedNullableTypeArgumentsCompileAndRun() {
        val source = ktFile {
            ktValue("result") {
                type {
                    reference("List")
                    argument {
                        type {
                            reference("List")
                            nullable = true
                            argument {
                                type {
                                    reference("String")
                                    nullable = true
                                }
                            }
                        }
                    }
                }
                initializer {
                    call("kotlin.collections.listOf") {
                        argument {
                            type {
                                reference("List")
                                nullable = true
                                argument {
                                    type {
                                        reference("String")
                                        nullable = true
                                    }
                                }
                            }
                        }
                        argument {
                            nullValue()
                        }
                        argument {
                            call("kotlin.collections.listOf") {
                                argument {
                                    type {
                                        reference("String")
                                        nullable = true
                                    }
                                }
                                argument {
                                    literal("Alex")
                                }
                                argument {
                                    nullValue()
                                }
                            }
                        }
                    }
                }
            }
        }
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null))
            .isEqualTo(listOf(null, listOf("Alex", null)))
        }
    }
}
