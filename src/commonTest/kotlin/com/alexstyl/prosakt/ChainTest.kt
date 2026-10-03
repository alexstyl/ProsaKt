package com.alexstyl.prosakt

import assertk.assertFailure
import assertk.assertThat
import assertk.assertions.hasMessage
import assertk.assertions.isEqualTo
import kotlin.test.Test

class ChainTest {
    @Test
    fun blankCallNamesAreRejectedInEveryCallPosition() {
        listOf("", "   ").forEach { name ->
            assertFailure {
                ktFile {
                    ktFunction("run") {
                        body {
                            call(name)
                        }
                    }
                }
            }.hasMessage("Call name cannot be blank")
            assertFailure {
                ktFile {
                    ktFunction("run") {
                        body {
                            reference("service") {
                                call(name)
                            }
                        }
                    }
                }
            }.hasMessage("Call name cannot be blank")
            assertFailure {
                ktFile {
                    ktFunction("run") {
                        body {
                            reference("service") {
                                safeCall(name)
                            }
                        }
                    }
                }
            }.hasMessage("Call name cannot be blank")
            assertFailure {
                ktFile {
                    ktFunction("run") {
                        body {
                            reference("service") {
                                infixCall(name) {
                                    literal(1)
                                }
                            }
                        }
                    }
                }
            }.hasMessage("Call name cannot be blank")
            assertFailure {
                ktFile {
                    ktFunction("run") {
                        body {
                            chain {
                                call(name)
                            }
                        }
                    }
                }
            }.hasMessage("Call name cannot be blank")
        }
    }

    @Test
    fun aCallChainRequiresAnInitialCall() {
        assertFailure {
            ktFile {
                ktValue("result") {
                    initializer {
                        chain {}
                    }
                }
            }
        }.hasMessage("A chain must start with a call")
        assertFailure {
            ktFile {
                ktValue("result") {
                    initializer {
                        chain {
                            property("name")
                        }
                    }
                }
            }
        }.hasMessage("A chain must start with a call")
    }

    @Test
    fun siblingStepsExtendOneChainAndBodiesKeepSeparateStatements() {
        val source = ktFile {
            ktFunction("run") {
                body {
                    reference("service") {
                        call("load") {
                            argument {
                                literal("users")
                            }
                        }
                        call("close")
                    }
                    reference("logger") {
                        call("finished")
                    }
                }
            }
        }
        assertThat(source).isEqualTo(
            """
            fun run() {
                service.load("users").close()
                logger.finished()
            }

        """.trimIndent()
        )
    }

    @Test
    fun safeAccessAndIndexingContinueInSourceOrder() {
        val source = ktFile {
            ktValue("name") {
                initializer {
                    reference("service") {
                        safeCall("load")
                        safeProperty("users")
                        safeCall("get") {
                            argument {
                                literal(0)
                            }
                        }
                        safeProperty("name")
                    }
                }
            }
            ktValue("first") {
                initializer {
                    reference("users") {
                        index {
                            literal(0)
                        }
                        property("name")
                    }
                }
            }
        }
        assertThat(source).isEqualTo(
            """
            val name = service?.load()?.users?.get(0)?.name
            val first = users[0].name

        """.trimIndent()
        )
    }

    @Test
    fun indexedAssignmentsAreStatementsAndDoNotBecomeReturns() {
        val source = ktFile {
            ktFunction("replace") {
                body {
                    reference("users") {
                        index {
                            literal(0)
                        }
                        assign {
                            reference("replacement")
                        }
                    }
                }
            }
        }
        assertThat(source).isEqualTo(
            """
            fun replace() {
                users[0] = replacement
            }

        """.trimIndent()
        )
    }

    @Test
    fun expressionPositionsRejectMissingOrMultipleRoots() {
        assertFailure {
            ktFile {
                ktValue("result") {
                    initializer {}
                }
            }
        }.hasMessage("An expression block must describe an expression")
        assertFailure {
            ktFile {
                ktValue("result") {
                    initializer {
                        call("first")
                        call("second")
                    }
                }
            }
        }.hasMessage("An expression block must describe exactly one expression")
        assertFailure {
            ktFile {
                ktValue("result") {
                    initializer {
                        call("consume") {
                            argument {
                                literal(1)
                                literal(2)
                            }
                        }
                    }
                }
            }
        }.hasMessage("An argument must describe exactly one expression")
    }

    @Test
    fun assignmentsCannotBeEmbeddedInExpressionsOrContinued() {
        assertFailure {
            ktFile {
                ktValue("result") {
                    initializer {
                        reference("count") {
                            assign {
                                literal(1)
                            }
                        }
                    }
                }
            }
        }.hasMessage("Assignments belong in a statement body")
        assertFailure {
            ktFile {
                ktFunction("run") {
                    body {
                        reference("count") {
                            assign {
                                literal(1)
                            }
                            property("name")
                        }
                    }
                }
            }
        }.hasMessage("An assignment must be the last step of a statement")
    }
}
