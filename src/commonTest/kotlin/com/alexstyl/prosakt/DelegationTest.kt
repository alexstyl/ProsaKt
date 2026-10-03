package com.alexstyl.prosakt

import assertk.assertFailure
import assertk.assertThat
import assertk.assertions.hasMessage
import assertk.assertions.isEqualTo
import kotlin.test.Test

class DelegationTest {
    @Test
    fun valuesAndVariablesCanUseDelegatesInFilesMembersAndBodies() {
        val source = ktFile {
            ktValue("cached") {
                delegate {
                    call("lazy") {
                        trailingLambda {
                            literal("Hello")
                        }
                    }
                }
            }
            ktClass("Example") {
                ktVariable("name") {
                    type {
                        reference("String")
                    }
                    delegate {
                        call("delegate")
                    }
                }
                ktFunction("run") {
                    body {
                        ktValue("local") {
                            delegate {
                                call("delegate")
                            }
                        }
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            val cached by lazy { "Hello" }
            class Example {
                var name: String by delegate()
                fun run() {
                    val local by delegate()
                }
            }

        """.trimIndent())
    }

    @Test
    fun delegateAndInitializerCannotBothBeConfigured() {
        listOf<PropertyScope.() -> Unit>(
            {
                initializer {
                    literal(1)
                }
                delegate {
                    call("delegate")
                }
            },
            {
                delegate {
                    call("delegate")
                }
                initializer {
                    literal(1)
                }
            },
        ).forEach { configure ->
            assertFailure {
                ktFile {
                    ktValue("value", configure)
                }
            }.hasMessage("A property cannot have both an initializer and a delegate")
        }
    }

    @Test
    fun duplicateDelegatesAreRejected() {
        assertFailure {
            ktFile {
                ktValue("value") {
                    delegate {
                        call("first")
                    }
                    delegate {
                        call("second")
                    }
                }
            }
        }.hasMessage("Property delegate has already been defined")
    }

    @Test
    fun delegatesAndCustomGettersCannotBeCombined() {
        listOf<PropertyScope.() -> Unit>(
            {
                delegate {
                    call("delegate")
                }
                getter {}
            },
            {
                getter {}
                delegate {
                    call("delegate")
                }
            },
        ).forEach { configure ->
            assertFailure {
                ktFile {
                    ktValue("value", configure)
                }
            }.hasMessage("A delegated property cannot have a custom getter")
        }
    }
}
