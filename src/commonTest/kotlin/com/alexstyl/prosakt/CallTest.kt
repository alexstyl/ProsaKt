package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class CallTest {
    @Test
    fun memberReferencesImportTheirOwner() {
        val source = ktFile {
            ktValue("status") { initializer { reference("example.Status") { property("Ready") } } }
        }
        assertThat(source)
            .isEqualTo(
                """
            import example.Status

            val status = Status.Ready

        """
                    .trimIndent()
            )
    }

    @Test
    fun infixCallsCollectImportsFromNestedArguments() {
        val source = ktFile {
            ktValue("settings") {
                initializer {
                    reference("example.Defaults") {
                        infixCall("example.merge") {
                            call("example.options") {
                                argument {
                                    name = "timeout"
                                    literal(12) { property("example.units.seconds") }
                                }
                            }
                        }
                    }
                }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            import example.Defaults
            import example.merge
            import example.options
            import example.units.seconds

            val settings = Defaults merge options(timeout = 12.seconds)

        """
                    .trimIndent()
            )
    }

    @Test
    fun callsCanFollowExtensionProperties() {
        val source = ktFile {
            ktValue("duration") {
                initializer {
                    literal(12) {
                        property("example.units.seconds")
                        call("toString")
                    }
                }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            import example.units.seconds

            val duration = 12.seconds.toString()

        """
                    .trimIndent()
            )
    }
}
