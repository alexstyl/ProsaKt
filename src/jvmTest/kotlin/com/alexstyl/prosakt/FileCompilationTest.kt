package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class FileCompilationTest {
    @Test
    fun headerAndNamedArgumentsCompileTogether() {
        val source = ktFile {
            comment("Generated code. Do not edit.")
            ktFileAnnotation("kotlin.jvm.JvmName") { argument("name") { literal("NamedFile") } }
            packageName("example")
            ktFunction("greeting") {
                parameter("name") { type { reference("String") } }
                returns { type { reference("String") } }
                body { reference("name") }
            }
            ktValue("message") {
                initializer { call("greeting") { argument("name") { literal("Alex") } } }
            }
        }
        withCompiledKotlin(source) { loader ->
            assertThat(loader.loadClass("example.NamedFile").getMethod("getMessage").invoke(null))
                .isEqualTo("Alex")
        }
    }

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
