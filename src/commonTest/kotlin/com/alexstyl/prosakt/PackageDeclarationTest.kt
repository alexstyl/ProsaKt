package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import assertk.assertions.isFailure
import assertk.assertions.isInstanceOf
import assertk.assertions.messageContains
import kotlin.test.Test

class PackageDeclarationTest {
    @Test
    fun packageIsOptional() {
        val source = ktFile { ktValue("message") { initializer { literal("Hello") } } }
        assertThat(source)
            .isEqualTo(
                """
            val message = "Hello"

        """
                    .trimIndent()
            )
    }

    @Test
    fun packagePlacementDoesNotDependOnCallOrder() {
        fun FileScope.declarations() {
            ktFunction("greet") {
                annotations = listOf("example.Marker")
                body {
                    call("example.hello")
                    call("other.world")
                }
            }
        }
        val packageFirst = ktFile {
            packageName("example")
            declarations()
        }
        val packageLast = ktFile {
            declarations()
            packageName("example")
        }
        assertThat(packageLast).isEqualTo(packageFirst)
        assertThat(packageLast)
            .isEqualTo(
                """
            package example

            import other.world

            @Marker
            fun greet() {
                hello()
                world()
            }
            """
                    .trimIndent() + "\n"
            )
    }

    @Test
    fun importsAreKeptWithoutAPackageDeclaration() {
        val source = ktFile { ktValue("result") { initializer { reference("example.answer") } } }
        assertThat(source)
            .isEqualTo(
                """
            import example.answer

            val result = answer

        """
                    .trimIndent()
            )
    }

    @Test
    fun duplicatePackageDeclarationsAreRejected() {
        assertThat(
                runCatching {
                    ktFile {
                        packageName("example")
                        packageName("example")
                    }
                }
            )
            .isFailure()
            .isInstanceOf<IllegalStateException>()
            .messageContains("Package name has already been declared")
    }

    @Test
    fun blankPackageDeclarationsAreRejected() {
        assertThat(runCatching { ktFile { packageName(" ") } })
            .isFailure()
            .isInstanceOf<IllegalArgumentException>()
            .messageContains("Package name cannot be blank")
    }
}
