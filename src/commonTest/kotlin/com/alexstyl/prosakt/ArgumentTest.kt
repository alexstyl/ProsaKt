package com.alexstyl.prosakt

import assertk.assertFailure
import assertk.assertThat
import assertk.assertions.hasMessage
import assertk.assertions.isEqualTo
import kotlin.test.Test

class ArgumentTest {
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
