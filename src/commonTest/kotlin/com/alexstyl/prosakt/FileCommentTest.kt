package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class FileCommentTest {
    @Test
    fun commentsBeforeAndAfterPackageStayOnTheirRespectiveSides() {
        assertThat(ktFile {
            comment("Before package")
            packageName("example")
            comment("Before declaration")
            ktValue("value") { initializer { literal(1) } }
        }).isEqualTo("// Before package\n\npackage example\n\n// Before declaration\nval value = 1\n")
    }

    @Test
    fun commentsBetweenFileDirectivesStayWithTheFollowingDirective() {
        assertThat(ktFile {
            comment("Before annotation")
            ktFileAnnotation("kotlin.Suppress") { argument { literal("unused") } }
            comment("Before package")
            packageName("example")
            comment("Before import")
            ktImport("example.other.Type")
            comment("Before declaration")
            ktValue("value") { initializer { literal(1) } }
        }).isEqualTo("""
            // Before annotation

            @file:Suppress("unused")

            // Before package

            package example

            // Before import
            import example.other.Type

            // Before declaration
            val value = 1

        """.trimIndent())
    }

    @Test
    fun leadingCommentsPrecedeFileDirectives() {
        val source = ktFile {
            comment("Generated code. Do not edit.")
            comment("Copyright Example\nAll rights reserved.")
            packageName("example")
            ktFileAnnotation("kotlin.Suppress") { argument { literal("unused") } }
            comment("Declaration comment")
            ktValue("items") {
                initializer {
                    call("java.util.ArrayList") { argument { type { reference("String") } } }
                }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            // Generated code. Do not edit.
            // Copyright Example
            // All rights reserved.

            @file:Suppress("unused")

            package example

            import java.util.ArrayList

            // Declaration comment
            val items = ArrayList<String>()

        """
                    .trimIndent()
            )
    }

    @Test
    fun headerWorksWithoutPackageOrImports() {
        assertThat(
                ktFile {
                    comment("Generated code. Do not edit.")
                    ktValue("message") { initializer { literal("Hello") } }
                }
            )
            .isEqualTo("// Generated code. Do not edit.\nval message = \"Hello\"\n")
    }
}
