package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class DelegationCompilationTest {
    @Test
    fun delegatedVariablesCompileAndReadTheirUpdatedValue() {
        val generated = ktFile {
            ktImport("kotlin.getValue")
            ktImport("kotlin.setValue")
            ktVariable("count") {
                type { reference("Int") }
                delegate {
                    call("kotlin.collections.mutableMapOf") {
                        argument { literal("count") { infixCall("kotlin.to") { literal(1) } } }
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
        withCompiledKotlin(generated) { loader ->
            val increment = loader.loadClass("GeneratedKt").getMethod("increment")
            assertThat(increment.invoke(null)).isEqualTo(2)
            assertThat(increment.invoke(null)).isEqualTo(3)
        }
    }

    @Test
    fun fileOptInAllowsAnOtherwiseRestrictedCall() {
        val generated = ktFile {
            ktFileAnnotation("kotlin.OptIn") { argument { reference("Gate") { classLiteral() } } }
            ktValue("result") { initializer { call("restricted") } }
        }
        val support =
            """
            @RequiresOptIn
            annotation class Gate

            @Gate
            fun restricted(): Int = 42
        """
                .trimIndent()
        withCompiledKotlin(generated + support) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null))
                .isEqualTo(42)
        }
    }
}
