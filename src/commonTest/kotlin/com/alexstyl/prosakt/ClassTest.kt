package com.alexstyl.prosakt

import assertk.assertFailure
import assertk.assertThat
import assertk.assertions.hasMessage
import assertk.assertions.isEqualTo
import com.alexstyl.prosakt.Visibility.Internal
import com.alexstyl.prosakt.Visibility.Private
import com.alexstyl.prosakt.Visibility.Public
import kotlin.test.Test

class ClassTest {
    @Test
    fun constructorParametersExplicitlyDeclareProperties() {
        assertThat(
                ktFile {
                    ktClass("Colors") {
                        constructor {
                            parameter("seed") { type { reference("Int") } }
                            parameter("background") {
                                property {
                                    visibility = Private
                                    mutable = true
                                }
                                type { reference("example.Color") }
                                default { reference("defaultColor") }
                            }
                            parameter("foreground") {
                                type { reference("example.Color") }
                                property {}
                            }
                        }
                    }
                }
            )
            .isEqualTo(
                """
            import example.Color

            class Colors(seed: Int, private var background: Color = defaultColor, val foreground: Color)

        """
                    .trimIndent()
            )
    }

    @Test
    fun constructorPropertyCannotBeConfiguredTwice() {
        assertFailure {
                ktFile {
                    ktClass("User") {
                        constructor {
                            parameter("name") {
                                property {}
                                property { mutable = true }
                            }
                        }
                    }
                }
            }
            .hasMessage("Constructor property has already been defined")
    }

    @Test
    fun classConfigurationAndConstructorDeclarationsPreserveMemberOrder() {
        assertThat(
                ktFile {
                    ktClass("User") {
                        visibility = Internal
                        annotations = listOf("example.Immutable")
                        modifiers = listOf("data")
                        ktValue("label") { initializer { reference("name") } }
                        constructor {
                            parameter("name") {
                                type { reference("String") }
                                property {}
                                default { literal("Alex") }
                            }
                            parameter("tags") {
                                type {
                                    reference("List")
                                    argument {
                                        type {
                                            reference("example.Tag")
                                            nullable = true
                                        }
                                    }
                                }
                                property { mutable = true }
                            }
                        }
                        line()
                        ktClass("Nested") { visibility = Private }
                    }
                    ktClass("Empty") { constructor {} }
                    ktClass("Implicit") {}
                }
            )
            .isEqualTo(
                """
            import example.Immutable
            import example.Tag

            @Immutable
            internal data class User(val name: String = "Alex", var tags: List<Tag?>) {
                val label = name

                private class Nested
            }
            class Empty()
            class Implicit

        """
                    .trimIndent()
            )
    }

    @Test
    fun duplicatePrimaryConstructorsAreNotSilentlyReplaced() {
        assertFailure {
                ktFile {
                    ktClass("User") {
                        constructor {}
                        constructor {}
                    }
                }
            }
            .hasMessage("Primary constructor has already been defined")
    }

    @Test
    fun declaresMembersWithTheirOwnVisibility() {
        val source = ktFile {
            ktClass("Counter") {
                visibility = Internal
                ktVariable("count") {
                    visibility = Private
                    type { reference("Int") }
                    initializer { literal(0) }
                }
                ktFunction("read") {
                    returns { type { reference("Int") } }
                    visibility = Public
                    body { reference("count") }
                }
                companionObject {
                    visibility = Private
                    ktValue("initial") { initializer { literal(0) } }
                }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            internal class Counter {
                private var count: Int = 0
                public fun read(): Int {
                    return count
                }
                private companion object {
                    val initial = 0
                }
            }

        """
                    .trimIndent()
            )
    }

    @Test
    fun declaresANamedCompanionWithAnExplicitEmptyFunctionBody() {
        val source = ktFile {
            ktClass("User") {
                companionObject("Factory") {
                    visibility = Internal
                    ktFunction("create") { body {} }
                }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            class User {
                internal companion object Factory {
                    fun create() {

                    }
                }
            }

        """
                    .trimIndent()
            )
    }
}
