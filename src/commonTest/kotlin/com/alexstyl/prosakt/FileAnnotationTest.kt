package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class FileAnnotationTest {
    @Test
    fun fileAnnotationsPrecedeThePackageAndCollectArgumentImports() {
        val source = ktFile {
            ktValue("enabled") {
                initializer {
                    literal(true)
                }
            }
            packageName("example")
            ktFileAnnotation("kotlin.OptIn") {
                argument {
                    reference("library.ExperimentalApi") {
                        classLiteral()
                    }
                }
            }
            ktFileAnnotation("kotlin.Suppress") {
                argument {
                    literal("UNCHECKED_CAST")
                }
            }
        }
        assertThat(source).isEqualTo("""
            @file:OptIn(ExperimentalApi::class)
            @file:Suppress("UNCHECKED_CAST")

            package example

            import library.ExperimentalApi

            val enabled = true

        """.trimIndent())
    }

    @Test
    fun annotationsAndExplicitImportsWorkWithoutAPackage() {
        val source = ktFile {
            ktImport("example.getValue")
            ktImport("example.getValue")
            ktImport("example.Value")
            ktFileAnnotation("example.Marker")
            ktValue("value") {
                initializer {
                    call("example.Value")
                }
            }
        }
        assertThat(source).isEqualTo("""
            @file:Marker

            import example.Marker
            import example.Value
            import example.getValue

            val value = Value()

        """.trimIndent())
    }

    @Test
    fun explicitImportsRemainAvailableWhenAutomaticReferencesCollide() {
        val source = ktFile {
            ktImport("first.User")
            ktValue("other") {
                initializer {
                    call("second.User")
                }
            }
        }
        assertThat(source).isEqualTo("""
            import first.User

            val other = second.User()

        """.trimIndent())
    }
}
