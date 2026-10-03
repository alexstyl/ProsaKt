package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class ImportTest {
    @Test
    fun packageCanComeAfterUsageAndFiltersSamePackageImports() {
        assertThat(
                ktFile {
                    ktValue("user") { initializer { call("example.User") } }
                    packageName("example")
                }
            )
            .isEqualTo(
                """
            package example

            val user = User()

        """
                    .trimIndent()
            )
    }

    @Test
    fun importsResolveCollisionsAndDeclarationsWithoutChangingOrder() {
        val output = ktFile {
            ktValue("a") { initializer { call("first.User") } }
            ktValue("b") { initializer { call("second.User") } }
            ktClass("Color")
            ktValue("c") { initializer { call("external.Color") } }
        }
        assertThat(output)
            .isEqualTo(
                """
            val a = first.User()
            val b = second.User()
            class Color
            val c = external.Color()

        """
                    .trimIndent()
            )
    }

    @Test
    fun namedArgumentsAndTypesCollectImports() {
        val output = ktFile {
            ktClass("User") {
                modifiers = listOf("data")
                annotations = listOf("example.Immutable")
                constructor {
                    parameter("name") {
                        type { reference("String") }
                        property {}
                    }
                }
            }
            ktValue("items") {
                type {
                    reference("kotlin.collections.List")
                    nullable = true
                    argument { type { reference("example.Item") } }
                }
                initializer { nullValue() }
            }
            ktValue("user") {
                initializer {
                    call("User") {
                        argument {
                            name = "name"
                            literal("Alex")
                        }
                    }
                }
            }
        }
        assertThat(output)
            .isEqualTo(
                """
            import example.Immutable
            import example.Item

            @Immutable
            data class User(val name: String)
            val items: List<Item>? = null
            val user = User(name = "Alex")

        """
                    .trimIndent()
            )
    }
}
