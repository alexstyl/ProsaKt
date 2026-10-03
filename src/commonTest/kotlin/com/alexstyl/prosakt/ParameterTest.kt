package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class ParameterTest {
    @Test
    fun defaultBlocksUseExpressionsWithoutInferringLambdas() {
        assertThat(
                ktFile {
                    ktFunction("greet") {
                        parameter("name") {
                            type { reference("String") }
                            default { literal("Alex") }
                        }
                    }
                    ktFunction("load") {
                        parameter("value") {
                            default { call("fallback") }
                            type { reference("String") }
                        }
                    }
                    ktFunction("transform") {
                        parameter("customize") {
                            default { reference("it") }
                            type { function {} }
                        }
                    }
                    ktFunction("optional") {
                        parameter("callback") {
                            type {
                                nullable = true
                                function {}
                            }
                            default { nullValue() }
                        }
                    }
                }
            )
            .isEqualTo(
                """
            fun greet(name: String = "Alex")
            fun load(value: String = fallback())
            fun transform(customize: () -> Unit = it)
            fun optional(callback: (() -> Unit)? = null)

        """
                    .trimIndent()
            )
    }
}
