plugins {
    kotlin("multiplatform") version "2.1.20"
    `maven-publish`
    id("com.ncorti.ktfmt.gradle") version "0.23.0"
}

group = "com.alexstyl"

version = "0.1.0-SNAPSHOT"

kotlin {
    jvmToolchain(17)
    jvm()
    js { nodejs() }
    @OptIn(org.jetbrains.kotlin.gradle.ExperimentalWasmDsl::class) wasmJs { nodejs() }

    sourceSets {
        commonTest.dependencies {
            implementation(kotlin("test"))
            implementation("com.willowtreeapps.assertk:assertk:0.28.1")
        }
        jvmTest.dependencies {
            implementation("org.jetbrains.kotlin:kotlin-compiler-embeddable:2.1.20")
        }
    }
}

publishing {
    publications.withType<MavenPublication>().configureEach {
        pom {
            licenses {
                license {
                    name.set("MIT License")
                    url.set("https://opensource.org/license/mit")
                    distribution.set("repo")
                }
            }
        }
    }
}

ktfmt { kotlinLangStyle() }
