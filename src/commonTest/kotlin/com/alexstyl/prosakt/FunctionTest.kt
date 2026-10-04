package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import com.alexstyl.prosakt.Visibility.Public
import kotlin.test.Test
import kotlin.test.assertFailsWith

class FunctionTest {
    @Test
    fun abstractFunctionsDefaultToASignature() {
        val source = ktFile {
            ktClass("Greeting") {
                modifiers = listOf("abstract")
                ktFunction("greet") {
                    modifiers = listOf("abstract")
                    returns { type { reference("String") } }
                }
                ktFunction("reset") {}
            }
        }
        assertThat(source)
            .isEqualTo(
                "abstract class Greeting {\n    abstract fun greet(): String\n    fun reset() {\n\n    }\n}\n"
            )
    }

    @Test
    fun abstractFunctionsRejectExplicitBodiesRegardlessOfConfigurationOrder() {
        val configurations: List<FunctionScope.() -> Unit> =
            listOf(
                {
                    modifiers = listOf("abstract")
                    body {}
                },
                {
                    body { literal("Hello") }
                    modifiers = listOf("abstract")
                },
            )
        configurations.forEach { configure ->
            val failure =
                assertFailsWith<IllegalStateException> { ktFile { ktFunction("greet", configure) } }
            assertThat(failure.message).isEqualTo("An abstract function cannot have a body")
        }
    }

    @Test
    fun defaultsToAnEmptyBody() {
        val source = ktFile {
            packageName("com.example.greetings")
            ktFunction("greet") {}
        }
        assertThat(source).isEqualTo("package com.example.greetings\n\nfun greet() {\n\n}\n")
    }

    @Test
    fun defaultsToAnEmptyBodyWithoutConfiguration() {
        assertThat(ktFile { ktFunction("greet") }).isEqualTo("fun greet() {\n\n}\n")
    }

    @Test
    fun declaresParametersDefaultsReturnTypeAndBody() {
        val source = ktFile {
            ktFunction("greet") {
                visibility = Public
                parameter("prefix") {
                    type { reference("String") }
                    default { literal("Hello ") }
                }
                body { reference("prefix") { plus { literal("Alex") } } }
                returns { type { reference("String") } }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            public fun greet(prefix: String = "Hello "): String {
                return prefix + "Alex"
            }

        """
                    .trimIndent()
            )
    }
}
