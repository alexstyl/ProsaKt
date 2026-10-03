package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class LiteralCompilationTest {
    @Test
    fun generatedLiteralsCompileAndRoundTripWithoutChangingTheirValue() {
        val original =
            "Quote: \" Backslash: \\ Newline: \n Tab: \t Return: \r Dollar: ${'$'}name Control: \u0000"
        val source = ktFile {
            packageName("example")
            ktValue("message") { initializer { literal(original) } }
            ktFunction("printMessage") {
                body { call("kotlin.io.println") { argument { reference("message") } } }
            }
        }
        withCompiledKotlin(source) { loader ->
            val generated = loader.loadClass("example.GeneratedKt")
            assertThat(generated.getMethod("getMessage").invoke(null)).isEqualTo(original)
        }
    }
}
