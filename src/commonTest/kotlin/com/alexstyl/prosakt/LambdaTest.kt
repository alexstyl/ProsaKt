package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class LambdaTest {
    @Test
    fun trailingLambdaBuildsAnExpressionBodyAndCollectsItsImports() {
        val source = ktFile {
            ktValue("user") {
                initializer {
                    call("factory") {
                        argument {
                            type {
                                reference("example.User")
                            }
                        }
                        trailingLambda {
                            call("example.User")
                        }
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            import example.User

            val user = factory<User>() { User() }

        """.trimIndent())
    }

    @Test
    fun trailingLambdasAndReturnLabels() {
        val output = ktFile {
            ktFunction("run") {
                body {
                    chain {
                        call("items")
                        call("forEach") {
                            trailingLambda {
                                parameter("item")
                                returnStatement(label = "forEach")
                            }
                        }
                    }
                }
            }
        }
        assertThat(output).isEqualTo("""
            fun run() {
                items()
                    .forEach { item ->
                        return@forEach
                    }
            }

        """.trimIndent())
    }
}
