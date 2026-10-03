package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class OperatorTest {
    @Test
    fun operatorsPreserveTheExpressionTree() {
        assertThat(
                ktFile {
                    ktValue("a") {
                        initializer {
                            literal(1) {
                                plus { literal(2) }
                                times { literal(3) }
                            }
                        }
                    }
                    ktValue("b") {
                        initializer {
                            literal(10) { minus { literal(3) { minus { literal(1) } } } }
                        }
                    }
                    ktValue("c") { initializer { literal("1") { plus { literal("2") } } } }
                    ktValue("d") { initializer { literal(1) { equalTo { literal(1) } } } }
                }
            )
            .isEqualTo(
                """
            val a = (1 + 2) * 3
            val b = 10 - (3 - 1)
            val c = "1" + "2"
            val d = 1 == 1

        """
                    .trimIndent()
            )
    }
}
