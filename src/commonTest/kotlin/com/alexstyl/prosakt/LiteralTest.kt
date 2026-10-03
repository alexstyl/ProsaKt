package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class LiteralTest {
    @Test
    fun literalEscapingAndNumericKinds() {
        assertThat(
                ktFile {
                    ktValue("s") { initializer { literal("\"\\${'$'}name\n\u0000") } }
                    ktValue("f") { initializer { literal(1f) } }
                    ktValue("l") { initializer { literal(1L) } }
                    ktValue("d") { initializer { literal(1.0) } }
                    ktValue("hex") { initializer { hexLiteral(0xFF112233) } }
                }
            )
            .isEqualTo(
                """
            val s = "\"\\\${'$'}name\n\u0000"
            val f = 1.0f
            val l = 1L
            val d = 1.0
            val hex = 0xFF112233

        """
                    .trimIndent()
            )
    }

    @Test
    fun escapesKotlinStringSyntaxAndControlCharacters() {
        val source = ktFile {
            ktValue("message") { initializer { literal("\\\"\n\r\t\b${'$'}\u0000") } }
        }
        assertThat(source)
            .isEqualTo(
                """
            val message = "\\\"\n\r\t\b\${'$'}\u0000"

        """
                    .trimIndent()
            )
    }

    @Test
    fun keepsUnicodeCharactersReadable() {
        val source = ktFile { ktValue("message") { initializer { literal("Hello 世界 👋") } } }
        assertThat(source)
            .isEqualTo(
                """
            val message = "Hello 世界 👋"

        """
                    .trimIndent()
            )
    }
}
