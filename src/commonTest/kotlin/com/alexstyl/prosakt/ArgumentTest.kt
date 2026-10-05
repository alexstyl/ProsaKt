package com.alexstyl.prosakt

import assertk.assertFailure
import assertk.assertThat
import assertk.assertions.hasMessage
import assertk.assertions.isEqualTo
import kotlin.test.Test

class ArgumentTest {
    @Test
    fun namedOverloadMatchesExistingSyntaxAndEscapesKeywords() {
        fun generate(shorthand: Boolean) = ktFile {
            ktValue("message") {
                initializer {
                    call("greeting") {
                        if (shorthand) argument("name") { literal("Alex") }
                        else
                            argument {
                                name = "name"
                                literal("Alex")
                            }
                    }
                }
            }
        }
        assertThat(generate(true)).isEqualTo(generate(false))
        assertThat(generate(true)).isEqualTo("val message = greeting(name = \"Alex\")\n")
        assertThat(
                ktFile {
                    ktValue("value") {
                        initializer { call("create") { argument("when") { literal(1) } } }
                    }
                }
            )
            .isEqualTo("val value = create(`when` = 1)\n")
    }

    @Test
    fun annotationsAcceptTheNamedOverload() {
        assertThat(
                ktFile {
                    ktFileAnnotation("kotlin.jvm.JvmName") {
                        argument("name") { literal("Generated") }
                    }
                    ktValue("enabled") { initializer { literal(true) } }
                }
            )
            .isEqualTo(
                "@file:JvmName(name = \"Generated\")\n\nimport kotlin.jvm.JvmName\n\nval enabled = true\n"
            )
    }

    @Test
    fun namedOverloadRejectsTypesAndConflictingNames() {
        assertFailure {
                ktFile {
                    ktValue("x") {
                        initializer {
                            call("create") { argument("value") { type { reference("String") } } }
                        }
                    }
                }
            }
            .hasMessage("Type arguments cannot have names")
        assertFailure {
                ktFile {
                    ktValue("x") {
                        initializer {
                            call("create") {
                                argument("value") {
                                    name = "other"
                                    literal(1)
                                }
                            }
                        }
                    }
                }
            }
            .hasMessage("Conflicting argument names")
    }

    @Test
    fun argumentConfigurationOrderDoesNotChangeItsMeaning() {
        assertThat(
                ktFile {
                    ktValue("result") {
                        initializer {
                            call("create") {
                                argument {
                                    literal("Alex")
                                    name = "name"
                                }
                            }
                        }
                    }
                }
            )
            .isEqualTo(
                """
            val result = create(name = "Alex")

        """
                    .trimIndent()
            )
    }

    @Test
    fun ambiguousOrMissingArgumentConfigurationsFailClearly() {
        assertFailure {
                ktFile {
                    ktValue("result") {
                        initializer {
                            call("create") {
                                argument {
                                    type { reference("User") }
                                    nullValue()
                                }
                            }
                        }
                    }
                }
            }
            .hasMessage("An argument must configure exactly one of type or value")
        assertFailure {
                ktFile {
                    ktValue("result") {
                        initializer { call("create") { argument { name = "name" } } }
                    }
                }
            }
            .hasMessage("An argument must configure exactly one of type or value")
        assertFailure {
                ktFile {
                    ktValue("result") {
                        type {
                            reference("List")
                            argument { literal(1) }
                        }
                    }
                }
            }
            .hasMessage("A nested type argument must configure a type")
    }

    @Test
    fun argumentBlocksSeparateTypesAndValuesWhilePreservingTheirOrder() {
        val source = ktFile {
            ktValue("result") {
                initializer {
                    call("example.create") {
                        argument { type { reference("example.User") } }
                        argument { reference("policy") }
                        argument {
                            type {
                                reference("kotlin.collections.List")
                                argument {
                                    type {
                                        reference("example.Role")
                                        nullable = true
                                    }
                                }
                            }
                        }
                        argument {
                            name = "name"
                            literal("Alex")
                        }
                    }
                }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            import example.Role
            import example.User
            import example.create

            val result = create<User, List<Role?>>(policy, name = "Alex")

        """
                    .trimIndent()
            )
    }

    @Test
    fun typeArgumentsCannotSilentlyUseValueArgumentNames() {
        assertFailure {
                ktFile {
                    ktValue("result") {
                        initializer {
                            call("create") {
                                argument {
                                    name = "name"
                                    type { reference("User") }
                                }
                            }
                        }
                    }
                }
            }
            .hasMessage("Type arguments cannot have names")
    }
}
