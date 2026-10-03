package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class ExpressionCompilationTest {
    @Test
    fun directTrailingLambdasCompileWithAndWithoutParameters() {
        val source = ktFile {
            ktValue("result") {
                initializer {
                    call("kotlin.run") {
                        trailingLambda {
                            ktValue("numbers") {
                                initializer {
                                    call("kotlin.collections.listOf") {
                                        argument {
                                            literal(1)
                                        }
                                        argument {
                                            literal(2)
                                        }
                                    }
                                }
                            }
                            reference("numbers") {
                                call("fold") {
                                    argument {
                                        literal(0)
                                    }
                                    trailingLambda {
                                        parameter("total")
                                        parameter("item") {
                                            type {
                                                reference("Int")
                                            }
                                        }
                                        reference("total") {
                                            plus {
                                                reference("item")
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
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null)).isEqualTo(3)
        }
    }

    @Test
    fun unifiedTypeAndValueArgumentsCompileAndRun() {
        val source = ktFile {
            ktValue("result") {
                initializer {
                    chain {
                        call("kotlin.collections.listOf") {
                            argument {
                                type {
                                    reference("String")
                                }
                            }
                            argument {
                                literal("Alex")
                            }
                            argument {
                                literal("Sam")
                            }
                        }
                        call("joinToString") {
                            argument {
                                name = "separator"
                                literal("|")
                            }
                            argument {
                                name = "prefix"
                                literal("[")
                            }
                            argument {
                                name = "postfix"
                                literal("]")
                            }
                        }
                    }
                }
            }
        }
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null))
            .isEqualTo("[Alex|Sam]")
        }
    }

    @Test
    fun generatedNestedLambdasCompileAndRun() {
        val source = ktFile {
            packageName("example")
            ktValue("message") {
                initializer {
                    call("kotlin.text.buildString") {
                        trailingLambda {
                            call("append") {
                                argument {
                                    literal("Hello")
                                }
                            }
                            call("append") {
                                argument {
                                    literal(" world")
                                }
                            }
                        }
                    }
                }
            }
        }
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("example.GeneratedKt").getMethod("getMessage").invoke(null))
            .isEqualTo("Hello world")
        }
    }

    @Test
    fun callsPreserveOrderAndSingleEvaluation() {
        val source = ktFile {
            packageName("example")
            ktVariable("events") {
                initializer {
                    literal("")
                }
            }
            ktFunction("mark") {
                parameter("name") {
                    type {
                        reference("String")
                    }
                }
                returns {
                    type {
                        reference("String")
                    }
                }
                body {
                    reference("events") {
                        assign {
                            reference("events") {
                                plus {
                                    reference("name")
                                }
                            }
                        }
                    }
                    reference("name")
                }
            }
            ktValue("load") {
                initializer {
                    lambdaExpression {
                        call("mark") {
                            argument {
                                literal("A")
                            }
                        }
                        ktValue("cached") {
                            initializer {
                                call("mark") {
                                    argument {
                                        literal("B")
                                    }
                                }
                            }
                        }
                        call("mark") {
                            argument {
                                call("mark") {
                                    argument {
                                        literal("C")
                                    }
                                }
                            }
                        }
                    }
                }
            }
            ktFunction("run") {
                returns {
                    type {
                        reference("String")
                    }
                }
                body {
                    call("load")
                    reference("events")
                }
            }
        }
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("example.GeneratedKt").getMethod("run").invoke(null)).isEqualTo("ABCC")
        }
    }

    @Test
    fun nestedTryAndBranchesCompileAndExecute() {
        val source = ktFile {
            ktValue("result") {
                initializer {
                    ifExpression {
                        condition {
                            literal(true)
                        }
                        then {
                            tryExpression {
                                body {
                                    call("error") {
                                        argument {
                                            literal("failed")
                                        }
                                    }
                                }
                                catching("e") {
                                    type {
                                        reference("IllegalStateException")
                                    }
                                    body {
                                        literal("fallback")
                                    }
                                }
                            }
                        }
                        elseCase {
                            literal("other")
                        }
                    }
                }
            }
        }
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null)).isEqualTo("fallback")
        }
    }
}
