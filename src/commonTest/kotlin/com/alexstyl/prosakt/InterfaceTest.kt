package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test
import com.alexstyl.prosakt.Visibility.Internal

class InterfaceTest {
    @Test
    fun declaresFunctionSignatureWithoutABody() {
        val source = ktFile {
            ktInterface("Named") {
                visibility = Internal
                ktFunction("name") {
                    returns {
                        type {
                            reference("String")
                        }
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            internal interface Named {
                fun name(): String
            }

        """.trimIndent())
    }

    @Test
    fun declaresPropertySignatureWithoutAnInitializer() {
        val source = ktFile {
            ktInterface("Named") {
                visibility = Internal
                ktValue("name") {
                    type {
                        reference("String")
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            internal interface Named {
                val name: String
            }

        """.trimIndent())
    }
}
