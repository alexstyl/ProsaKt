package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class SupertypeCompilationTest {
    @Test
    fun superclassCallsCompileForClassesAndObjects() {
        withCompiledKotlin(ktFile {
            ktClass("Base") {
                modifiers = listOf("open")
                constructor { parameter("name") {
                    type { reference("String") }; default { literal("default") }; property {}
                } }
            }
            ktClass("Child") { superclass("Base") { argument("name") { literal("Alex") } } }
            ktObject("Default") { superclass("Base") }
            ktValue("result") { initializer { chain { call("Child"); property("name") } } }
        }) { loader ->
            assertThat(loader.loadClass("GeneratedKt").getMethod("getResult").invoke(null)).isEqualTo("Alex")
        }
    }

    @Test
    fun generatedSupertypesCompileAndDispatchInterfaceMembers() {
        val source = ktFile {
            ktInterface("Indication") {
                ktFunction("label") {
                    returns { type { reference("String") } }
                    body { literal("none") }
                }
            }
            ktInterface("ThemeIndication") { supertype { reference("Indication") } }
            ktObject("NoIndication") {
                visibility = Visibility.Internal
                supertype { reference("ThemeIndication") }
            }
            ktClass("CustomIndication") {
                constructor {}
                supertype { reference("ThemeIndication") }
                ktFunction("label") {
                    modifiers = listOf("override")
                    returns { type { reference("String") } }
                    body { literal("custom") }
                }
            }
            ktValue("defaultLabel") {
                initializer { reference("NoIndication") { call("label") } }
            }
            ktValue("customLabel") {
                initializer { chain { call("CustomIndication"); call("label") } }
            }
        }
        withCompiledKotlin(source) { loader ->
            val file = loader.loadClass("GeneratedKt")
            assertThat(file.getMethod("getDefaultLabel").invoke(null)).isEqualTo("none")
            assertThat(file.getMethod("getCustomLabel").invoke(null)).isEqualTo("custom")
        }
    }
}
