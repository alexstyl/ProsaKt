package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import com.alexstyl.prosakt.Visibility.Public
import kotlin.test.Test

class FunctionTest {
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
