package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test
import com.alexstyl.prosakt.Visibility.Private
import com.alexstyl.prosakt.Visibility.Internal

class ObjectTest {
    @Test
    fun declaresAnObjectWithAnAnnotatedGetter() {
        val source = ktFile {
            ktObject("Names") {
                visibility = Private
                ktValue("name") {
                    visibility = Internal
                    type {
                        reference("String")
                    }
                    initializer {
                        literal("Alex")
                    }
                    getter {
                        annotations = listOf("example.Read")
                        body {
                            reference("field")
                        }
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            import example.Read

            private object Names {
                internal val name: String = "Alex"
                    @Read
                    get() {
                        return field
                    }
            }

        """.trimIndent())
    }

    @Test
    fun declaresAnObjectWithAnInferredProperty() {
        val source = ktFile {
            ktObject("Defaults") {
                visibility = Private
                ktValue("name") {
                    initializer {
                        literal("Guest")
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            private object Defaults {
                val name = "Guest"
            }

        """.trimIndent())
    }
}
