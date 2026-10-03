package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class UnitDslCompilationTest {
    @Test
    fun callConfigurationCannotEmitCallsOrContinueItsReceiver() {
        listOf(
                """
                call("load") {
                    call("what")
                }
            """
                    .trimIndent(),
                """
                reference("service") {
                    call("load") {
                        argument {
                            literal("users")
                        }
                        call("what")
                    }
                }
            """
                    .trimIndent(),
                """
                reference("service") {
                    safeCall("load") {
                        property("name")
                    }
                }
            """
                    .trimIndent(),
            )
            .forEach { snippet ->
                withCompiledKotlin(
                    """
                    import com.alexstyl.prosakt.*
                    fun generate() = ktFile {
                        ktFunction("run") {
                            body {
                                $snippet
                            }
                        }
                    }
                """
                        .trimIndent(),
                    includeWriter = true,
                    expectedError = "cannot be called in this context",
                )
            }
    }

    @Test
    fun externalHelpersUseOnlyPublicScopesAndReturnUnit() {
        val consumer =
            """
            import com.alexstyl.prosakt.*

            fun ExpressionScope.greeting(): Unit {
                literal("Hello")
            }

            fun ChainScope.uppercase(): Unit {
                call("uppercase")
            }

            fun BlockScope.log(): Unit {
                call("println") {
                    argument {
                        greeting()
                    }
                }
            }

            fun generate(): String = ktFile {
                ktFunction("greet") {
                    body {
                        val emitted: Unit = log()
                        val chained: Unit = reference("name") {
                            val step: Unit = uppercase()
                        }
                    }
                }
                ktValue("message") {
                    initializer {
                        val emitted: Unit = greeting()
                    }
                }
            }
        """
                .trimIndent()
        withCompiledKotlin(consumer, includeWriter = true) { loader ->
            val generated = loader.loadClass("GeneratedKt").getMethod("generate").invoke(null)
            assertThat(generated)
                .isEqualTo(
                    """
                fun greet() {
                    println("Hello")
                    name.uppercase()
                }
                val message = "Hello"

            """
                        .trimIndent()
                )
        }
    }

    @Test
    fun internalNodesAreNotPartOfTheConsumerApi() {
        listOf("Expression", "Parameter", "TypeReference").forEach { name ->
            withCompiledKotlin(
                """
                    import com.alexstyl.prosakt.$name
                    private val inaccessible: $name? = null
                """
                    .trimIndent(),
                includeWriter = true,
                expectedError = "internal",
            )
        }
    }

    @Test
    fun chainedCallsEvaluateReceiverAndArgumentsOnceInOrder() {
        val generated = ktFile {
            ktFunction("run") {
                returns { type { reference("String") } }
                body {
                    chain {
                        call("createService")
                        call("load") { argument { call("input") } }
                        call("close")
                    }
                    reference("events")
                }
            }
        }
        val support =
            """
            var events = ""
            fun createService(): Service {
                events += "create;"
                return Service()
            }
            fun input(): String {
                events += "input;"
                return "users"
            }
            class Service {
                fun load(input: String): Service {
                    events += "load:" + input + ";"
                    return this
                }
                fun close() {
                    events += "close;"
                }
            }

        """
                .trimIndent()
        withCompiledKotlin(support + generated) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("run").invoke(null))
                .isEqualTo("create;input;load:users;close;")
        }
    }

    @Test
    fun safeChainsSkipArgumentsWhenTheReceiverIsNull() {
        val generated = ktFile {
            ktValue("result") {
                initializer {
                    reference("service") {
                        safeCall("get") { argument { call("index") } }
                        safeProperty("length")
                    }
                }
            }
        }
        val support =
            """
            val service: List<String>? = null
            fun index(): Int = error("Must not evaluate")

        """
                .trimIndent()
        withCompiledKotlin(support + generated) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null))
                .isEqualTo(null)
        }
    }
}
