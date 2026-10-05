package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.contains
import assertk.assertions.isEqualTo
import kotlin.test.Test

class SupertypeTest {
    @Test
    fun superclassConstructorCallsSupportArgumentsAndImports() {
        assertThat(ktFile {
            ktClass("Child") {
                supertype { reference("example.Marker") }
                superclass("example.Base") { argument("name") { literal("Alex") } }
            }
            ktObject("Default") { superclass("example.Base") }
        }).isEqualTo("import example.Base\nimport example.Marker\n\nclass Child : Base(name = \"Alex\"), Marker\nobject Default : Base()\n")
    }

    @Test
    fun rejectsMultipleSuperclasses() {
        assertk.assertFailure {
            ktFile { ktClass("Child") { superclass("Base"); superclass("Other") } }
        }.transform { it.message }.isEqualTo("A superclass has already been defined")
    }

    @Test
    fun objectImplementsAnImportedInterface() {
        val source = ktFile {
            ktObject("NoIndication") {
                visibility = Visibility.Internal
                supertype { reference("androidx.compose.foundation.Indication") }
            }
        }
        assertThat(source).isEqualTo(
            "import androidx.compose.foundation.Indication\n\ninternal object NoIndication : Indication\n"
        )
    }

    @Test
    fun classesAndInterfacesSupportMultipleGenericSupertypes() {
        val source = ktFile {
            ktInterface("Names") {
                supertype {
                    reference("kotlin.collections.List")
                    argument { type { reference("String") } }
                }
                supertype { reference("example.Named") }
            }
            ktClass("Entry") {
                modifiers = listOf("abstract")
                constructor { parameter("id") { type { reference("Int") } } }
                supertype { reference("Names") }
            }
        }
        assertThat(source).contains("import example.Named")
        assertThat(source).contains("interface Names : List<String>, Named")
        assertThat(source).contains("abstract class Entry(id: Int) : Names")
    }

    @Test
    fun supertypeImportsRespectNameCollisions() {
        val source = ktFile {
            ktObject("Value") {
                supertype { reference("first.Marker") }
                supertype { reference("second.Marker") }
            }
        }
        assertThat(source).isEqualTo("object Value : first.Marker, second.Marker\n")
    }
}
