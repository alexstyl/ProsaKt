package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class FileCompilationTest {
    @Test
    fun abstractFunctionsWithoutBodiesCompile() {
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
        withCompiledKotlin(source)
    }

    @Test
    fun generatedDefaultFunctionBodyCompilesAndRuns() {
        val source = ktFile {
            packageName("com.example.greetings")
            ktFunction("greet") {}
        }
        withCompiledKotlin(source) { loader ->
            loader.loadClass("com.example.greetings.GeneratedKt").getMethod("greet").invoke(null)
        }
    }

    @Test
    fun generatedFileWithoutPackageCompilesAndRuns() {
        val source = ktFile { ktValue("message") { initializer { literal("Hello") } } }
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getMessage").invoke(null))
                .isEqualTo("Hello")
        }
    }
}
