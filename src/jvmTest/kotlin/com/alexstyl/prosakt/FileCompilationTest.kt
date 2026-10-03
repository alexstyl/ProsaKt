package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class FileCompilationTest {
    @Test
    fun generatedFileWithoutPackageCompilesAndRuns() {
        val source = ktFile {
            ktValue("message") {
                initializer {
                    literal("Hello")
                }
            }
        }
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getMessage").invoke(null))
                .isEqualTo("Hello")
        }
    }
}
