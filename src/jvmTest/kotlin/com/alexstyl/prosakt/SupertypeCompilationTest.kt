package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class SupertypeCompilationTest {
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
