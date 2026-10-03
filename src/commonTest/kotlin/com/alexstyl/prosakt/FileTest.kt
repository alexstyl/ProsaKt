package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class FileTest {
    @Test
    fun declarationsAndBlankLinesPreserveOrder() {
        assertThat(ktFile {
            ktValue("name") {
                initializer {
                    literal("Alex")
                }
            }
            line()
            ktVariable("count") {
                initializer {
                    literal(0)
                }
            }
            lines(-1)
            lines(0)
            lines(2)
            ktValue("enabled") {
                initializer {
                    literal(true)
                }
            }
        }).isEqualTo("""
            val name = "Alex"

            var count = 0


            val enabled = true

        """.trimIndent())
    }

    @Test
    fun keywordsAreEscapedInDeclarationsAndAccess() {
        assertThat(ktFile {
            packageName("example.when")
            ktValue("class") {
                initializer {
                    literal("yes")
                }
            }
            ktValue("copy") {
                initializer {
                    reference("class")
                }
            }
        }).isEqualTo("""
            package example.`when`

            val `class` = "yes"
            val copy = `class`

        """.trimIndent())
    }
}
