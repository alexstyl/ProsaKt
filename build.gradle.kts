import org.yaml.snakeyaml.LoaderOptions
import org.yaml.snakeyaml.Yaml
import org.yaml.snakeyaml.constructor.SafeConstructor

buildscript {
    repositories { mavenCentral() }
    dependencies { classpath("org.yaml:snakeyaml:2.4") }
}

plugins {
    kotlin("multiplatform") version "2.1.20"
    id("com.vanniktech.maven.publish") version "0.35.0"
    id("com.ncorti.ktfmt.gradle") version "0.23.0"
}

val packageMetadata =
    Yaml(SafeConstructor(LoaderOptions().apply { setAllowDuplicateKeys(false) }))
        .load<Any>(providers.fileContents(layout.projectDirectory.file("package.yml")).asText.get())
        as? Map<*, *> ?: error("package.yml must contain a mapping")

fun Map<*, *>.requiredString(key: String): String =
    (get(key) as? String)?.takeIf { it.isNotBlank() }
        ?: error("package.yml requires a non-empty string for '$key'")

fun Map<*, *>.requiredMapping(key: String): Map<*, *> =
    get(key) as? Map<*, *> ?: error("package.yml requires a '$key' mapping")

fun Map<*, *>.requiredMappings(key: String): List<Map<*, *>> {
    val entries = get(key) as? List<*>
    require(!entries.isNullOrEmpty()) { "package.yml requires a non-empty '$key' list" }
    return entries.mapIndexed { index, entry ->
        entry as? Map<*, *> ?: error("package.yml requires a mapping at '$key[$index]'")
    }
}

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

mavenPublishing {
    publishToMavenCentral(automaticRelease = true, validateDeployment = false)
    if (providers.gradleProperty("signingInMemoryKey").orNull?.isNotBlank() == true) {
        signAllPublications()
    }
    coordinates(
        groupId = packageMetadata.requiredString("groupId"),
        artifactId = packageMetadata.requiredString("artifactId"),
        version = packageMetadata.requiredString("version"),
    )

    pom {
        name.set(packageMetadata.requiredString("name"))
        description.set(packageMetadata.requiredString("description"))
        url.set(packageMetadata.requiredString("url"))
        licenses {
            packageMetadata.requiredMappings("licenses").forEach { metadata ->
                license {
                    name.set(metadata.requiredString("name"))
                    url.set(metadata.requiredString("url"))
                    distribution.set(metadata.requiredString("distribution"))
                }
            }
        }
        developers {
            packageMetadata.requiredMappings("developers").forEach { metadata ->
                developer {
                    id.set(metadata.requiredString("id"))
                    name.set(metadata.requiredString("name"))
                    url.set(metadata.requiredString("url"))
                }
            }
        }
        issueManagement {
            val metadata = packageMetadata.requiredMapping("issueManagement")
            system.set(metadata.requiredString("system"))
            url.set(metadata.requiredString("url"))
        }
        scm {
            val metadata = packageMetadata.requiredMapping("scm")
            connection.set(metadata.requiredString("connection"))
            developerConnection.set(metadata.requiredString("developerConnection"))
            url.set(metadata.requiredString("url"))
        }
    }
}

ktfmt { kotlinLangStyle() }
