package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class ClassCompilationTest {
    @Test
    fun privateMutableConstructorPropertiesCompileAndRun() {
        val source = ktFile {
            ktClass("Counter") {
                constructor {
                    parameter("count") {
                        type { reference("Int") }
                        default { literal(0) }
                        property {
                            visibility = Visibility.Private
                            mutable = true
                        }
                    }
                }
                ktFunction("increment") {
                    returns { type { reference("Int") } }
                    body {
                        reference("count") { assign { reference("count") { plus { literal(1) } } } }
                        reference("count")
                    }
                }
            }
            ktValue("result") {
                initializer {
                    chain {
                        call("Counter")
                        call("increment")
                    }
                }
            }
        }
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null))
                .isEqualTo(1)
        }
    }

    @Test
    fun configuredConstructorsCompileWithPlainAndPropertyParameters() {
        val source = ktFile {
            ktClass("Profile") {
                constructor {
                    parameter("name") {
                        type { reference("String") }
                        default { literal("Alex") }
                    }
                    parameter("visits") {
                        type { reference("Int") }
                        property { mutable = true }
                        default { literal(0) }
                    }
                    parameter("tags") {
                        type {
                            reference("List")
                            argument {
                                type {
                                    reference("String")
                                    nullable = true
                                }
                            }
                        }
                        property {}
                        default { call("kotlin.collections.emptyList") }
                    }
                }
                ktValue("displayName") { initializer { reference("name") } }
            }
            ktClass("Empty") { constructor {} }
            ktValue("profile") { initializer { call("Profile") } }
            ktValue("result") { initializer { reference("profile") { property("displayName") } } }
            ktValue("empty") { initializer { call("Empty") } }
        }
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null))
                .isEqualTo("Alex")
        }
    }

    @Test
    fun classesGettersAndEarlyReturnsCompileAndRun() {
        val source = ktFile {
            ktClass("Greeter") {
                constructor {
                    parameter("name") {
                        type { reference("String") }
                        property {}
                    }
                }
                ktValue("greeting") {
                    type { reference("String") }
                    getter { body { literal("Hello ") { plus { reference("name") } } } }
                }
                ktFunction("greet") {
                    returns { type { reference("String") } }
                    body {
                        ifStatement {
                            condition { reference("name") { equalTo { literal("") } } }
                            body { returnStatement { literal("Guest") } }
                        }
                        reference("greeting")
                    }
                }
                companionObject {
                    ktFunction("guest") {
                        returns { type { reference("Greeter") } }
                        body { call("Greeter") { argument { literal("") } } }
                    }
                }
            }
            ktValue("result") {
                initializer {
                    reference("Greeter") {
                        property("Companion")
                        call("guest")
                        call("greet")
                    }
                }
            }
            ktValue("escaped") {
                initializer { literal("Quote: \" Dollar: ${'$'}name Slash: \\ Newline: \n") }
            }
            ktValue("math") {
                initializer {
                    literal(1) {
                        plus { literal(2) }
                        times { literal(3) }
                    }
                }
            }
        }
        withCompiledKotlin(source) { loader ->
            val generated = loader.loadClass("GeneratedKt")
            assertThat(generated.getMethod("getResult").invoke(null)).isEqualTo("Guest")
            assertThat(generated.getMethod("getMath").invoke(null)).isEqualTo(9)
            assertThat(generated.getMethod("getEscaped").invoke(null))
                .isEqualTo("Quote: \" Dollar: ${'$'}name Slash: \\ Newline: \n")
        }
    }
}
