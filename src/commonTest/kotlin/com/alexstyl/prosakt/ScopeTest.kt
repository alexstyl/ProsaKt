package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class ScopeTest {
    @Test
    fun classesFunctionsAndLambdaScopesShareDeclarations() {
        val output = ktFile {
            ktObject("Example") {
                ktValue("a") { initializer { literal(1) } }
                ktFunction("run") {
                    body {
                        ktValue("b") { initializer { literal(2) } }
                        ktValue("nested") {
                            initializer {
                                lambdaExpression {
                                    parameter("name")
                                    ktValue("c") { initializer { literal(3) } }
                                    reference("name")
                                }
                            }
                        }
                    }
                }
            }
        }
        assertThat(output)
            .isEqualTo(
                """
            object Example {
                val a = 1
                fun run() {
                    val b = 2
                    val nested = { name ->
                        val c = 3
                        name
                    }
                }
            }

        """
                    .trimIndent()
            )
    }
}
