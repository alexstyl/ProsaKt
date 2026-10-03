plugins {
    kotlin("multiplatform") version "2.1.20"
    `maven-publish`
    id("com.ncorti.ktfmt.gradle") version "0.23.0"
}

group = "com.alexstyl"

version = "0.1.0-SNAPSHOT"

kotlin {
    jvmToolchain(17)
    // Android consumers use the JVM artifact; this library has no Android-specific APIs.
    jvm()
    js {
        nodejs()
        browser { testTask { useKarma { useChromeHeadless() } } }
    }
    @OptIn(org.jetbrains.kotlin.gradle.ExperimentalWasmDsl::class)
    wasmJs {
        nodejs()
        browser { testTask { useKarma { useChromeHeadless() } } }
    }
    @OptIn(org.jetbrains.kotlin.gradle.ExperimentalWasmDsl::class) wasmWasi { nodejs() }

    macosArm64()
    macosX64()
    iosArm64()
    iosSimulatorArm64()
    iosX64()
    tvosArm64()
    tvosSimulatorArm64()
    tvosX64()
    watchosArm32()
    watchosArm64()
    watchosDeviceArm64()
    watchosSimulatorArm64()
    watchosX64()
    linuxArm64()
    linuxX64()
    mingwX64()
    androidNativeArm32()
    androidNativeArm64()
    androidNativeX86()
    androidNativeX64()

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
