package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class ExpressionEmissionTest {
    @Test
    fun nestedArgumentBlocksDoNotLeakStatementsOrArgumentsToTheirParent() {
        assertThat(ktFile {
            ktFunction("run") {
                body {
                    call("consume") {
                        argument {
                            name = "input"
                            call("load") {
                                argument {
                                    type {
                                        reference("String")
                                    }
                                }
                                argument {
                                    literal(1)
                                }
                            }
                        }
                        argument {
                            literal(2)
                        }
                    }
                }
            }
        }).isEqualTo("""
            fun run() {
                consume(input = load<String>(1), 2)
            }

        """.trimIndent())
    }

    @Test
    fun initializerBlockBuildsOneExpressionWithoutEmittingIntermediateCalls() {
        val source = ktFile {
            ktFunction("run") {
                body {
                    call("before")
                    ktValue("result") {
                        initializer {
                            call("transform") {
                                argument {
                                    call("read")
                                }
                            }
                        }
                    }
                    call("after")
                }
            }
        }
        assertThat(source).isEqualTo("""
            fun run() {
                before()
                val result = transform(read())
                after()
            }

        """.trimIndent())
    }

    @Test
    fun standaloneCallsAndNestedCallsDoNotDuplicate() {
        assertThat(ktFile {
            ktValue("load") {
                initializer {
                    lambdaExpression {
                        call("logStart")
                        ktValue("cached") {
                            initializer {
                                call("readCache")
                            }
                        }
                        call("resolve") {
                            argument {
                                call("decorate") {
                                    argument {
                                        reference("cached")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }).isEqualTo("""
            val load = {
                logStart()
                val cached = readCache()
                resolve(decorate(cached))
            }
        """.trimIndent() + "\n")
    }

    @Test
    fun chainsEmitTheirReceiverAndArgumentsOnce() {
        assertThat(ktFile {
            ktFunction("run") {
                body {
                    chain {
                        call("user")
                        property("name")
                        call("uppercase")
                    }
                    call("finish") {
                        argument {
                            name = "result"
                            call("result")
                        }
                    }
                }
            }
        }).isEqualTo("""
            fun run() {
                user().name.uppercase()
                finish(result = result())
            }
        """.trimIndent() + "\n")
    }

    @Test
    fun lambdaFinalReferenceIsRecorded() {
        assertThat(ktFile {
            ktValue("load") {
                initializer {
                    lambdaExpression {
                        ktValue("loaded") {
                            initializer {
                                call("loadUser")
                            }
                        }
                        reference("loaded")
                    }
                }
            }
        }).isEqualTo("""
            val load = {
                val loaded = loadUser()
                loaded
            }

        """.trimIndent())
    }
}
