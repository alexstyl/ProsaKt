package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class ControlFlowTest {
    @Test
    fun branchingExpressionsNestInsideInitializers() {
        val source = ktFile {
            ktValue("label") {
                initializer {
                    ifExpression {
                        condition { reference("ready") }
                        then { call("yes") }
                        elseCase { nullValue() }
                    }
                }
            }
            ktValue("status") {
                initializer {
                    whenExpression {
                        subject { reference("code") }
                        case {
                            match { literal(200) }
                            then { literal("OK") }
                        }
                        elseCase { call("error") { argument { literal("Unknown") } } }
                    }
                }
            }
            ktValue("result") {
                initializer {
                    tryExpression {
                        body { call("load") }
                        catching("e") {
                            type { reference("Exception") }
                            body { reference("fallback") }
                        }
                    }
                }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            val label = if (ready) yes() else null
            val status = when (code) {
                200 -> "OK"
                else -> error("Unknown")
            }
            val result = try {
                load()
            } catch (e: Exception) {
                fallback
            }

        """
                    .trimIndent()
            )
    }

    @Test
    fun assignmentsAndReturnsAreStatements() {
        assertThat(
                ktFile {
                    ktFunction("increment") {
                        returns { type { reference("Int") } }
                        body {
                            ktVariable("count") { initializer { literal(0) } }
                            reference("count") {
                                assign { reference("count") { plus { literal(1) } } }
                            }
                            ifStatement {
                                condition { reference("count") { equalTo { literal(1) } } }
                                body { returnStatement { literal(5) } }
                            }
                            returnStatement { reference("count") }
                        }
                    }
                }
            )
            .isEqualTo(
                """
            fun increment(): Int {
                var count = 0
                count = count + 1
                if (count == 1) {
                    return 5
                }
                return count
            }
            """
                    .trimIndent() + "\n"
            )
    }
}
