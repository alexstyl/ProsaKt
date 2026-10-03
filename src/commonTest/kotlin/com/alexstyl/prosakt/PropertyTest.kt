package com.alexstyl.prosakt

import assertk.assertFailure
import assertk.assertThat
import assertk.assertions.hasMessage
import assertk.assertions.isEqualTo
import kotlin.test.Test

class PropertyTest {
    @Test
    fun propertyTypesAreConfiguredIndependentlyOfInitializers() {
        assertThat(ktFile {
            ktValue("users") {
                initializer {
                    nullValue()
                }
                type {
                    reference("kotlin.collections.List")
                    nullable = true
                    argument {
                        type {
                            reference("example.User")
                            nullable = true
                        }
                    }
                }
            }
            ktVariable("count") {
                type {
                    reference("Int")
                }
                initializer {
                    literal(0)
                }
            }
            ktValue("inferred") {
                initializer {
                    literal(true)
                }
            }
        }).isEqualTo("""
            import example.User

            val users: List<User?>? = null
            var count: Int = 0
            val inferred = true

        """.trimIndent())
    }

    @Test
    fun duplicatePropertyTypesAreNotSilentlyReplaced() {
        assertFailure {
            ktFile {
                ktValue("count") {
                    type {
                        reference("Int")
                    }
                    type {
                        reference("String")
                    }
                }
            }
        }.hasMessage("Property type has already been defined")
    }

    @Test
    fun initializerAndGetterAreIndependentOfConfigurationOrder() {
        fun source(initializerFirst: Boolean) = ktFile {
            ktValue("count") {
                type {
                    reference("Int")
                }
                if (initializerFirst) initializer {
                    literal(1)
                }
                getter {
                    body {
                        reference("field") {
                            plus {
                                literal(1)
                            }
                        }
                    }
                }
                if (initializerFirst.not()) initializer {
                    literal(1)
                }
            }
        }
        val expected = """
            val count: Int = 1
                get() {
                    return field + 1
                }

        """.trimIndent()
        assertThat(source(true)).isEqualTo(expected)
        assertThat(source(false)).isEqualTo(expected)
    }

    @Test
    fun propertyConfigurationDoesNotUseItsReturnValueAsAnInitializer() {
        assertThat(ktFile {
            ktValue("count") {
                type {
                    reference("Int")
                }
                10
            }
        }).isEqualTo("""
            val count: Int

        """.trimIndent())
    }

    @Test
    fun duplicateInitializersAreNotSilentlyReplaced() {
        assertFailure {
            ktFile {
                ktValue("count") {
                    initializer {
                        literal(1)
                    }
                    initializer {
                        literal(2)
                    }
                }
            }
        }.hasMessage("Property initializer has already been defined")
    }

    @Test
    fun accessorBlocksAndNullInitializersRemainDistinct() {
        val source = ktFile {
            ktValue("missing") {
                type {
                    reference("String")
                    nullable = true
                }
                initializer {
                    nullValue()
                }
            }
            ktValue("label") {
                type {
                    reference("String")
                }
                getter {
                    annotations = listOf("example.Readable")
                    body {
                        literal("Hello")
                    }
                }
            }
        }
        assertThat(source).isEqualTo("""
            import example.Readable

            val missing: String? = null
            val label: String
                @Readable
                get() {
                    return "Hello"
                }

        """.trimIndent())
    }
}
