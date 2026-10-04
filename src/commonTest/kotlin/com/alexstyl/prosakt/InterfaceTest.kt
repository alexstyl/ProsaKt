package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import com.alexstyl.prosakt.Visibility.Internal
import kotlin.test.Test

class InterfaceTest {
    @Test
    fun declaresFunctionWithDefaultEmptyBody() {
        val source = ktFile {
            ktInterface("Named") {
                visibility = Internal
                ktFunction("greet") {}
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            internal interface Named {
                fun greet() {

                }
            }

        """
                    .trimIndent()
            )
    }

    @Test
    fun declaresPropertySignatureWithoutAnInitializer() {
        val source = ktFile {
            ktInterface("Named") {
                visibility = Internal
                ktValue("name") { type { reference("String") } }
            }
        }
        assertThat(source)
            .isEqualTo(
                """
            internal interface Named {
                val name: String
            }

        """
                    .trimIndent()
            )
    }
}
