---
title: Installation
description: Add Prosa.kt to a Kotlin or Kotlin Multiplatform project using Maven Central.
---

Prosa.kt generates Kotlin source through a declarative API. Version **0.1.0** is available on Maven Central.

## Kotlin/JVM

Add Maven Central to your dependency repositories (often in `settings.gradle.kts`), then add the dependency to your module's `build.gradle.kts`:

```kotlin
repositories {
    mavenCentral()
}

dependencies {
    implementation("com.alexstyl:prosakt:0.1.0")
}
```

If your project centralizes repositories in `dependencyResolutionManagement`, add `mavenCentral()` there instead of the module.

## Kotlin Multiplatform

With `mavenCentral()` configured, add Prosa.kt to the source set where your generator lives:

```kotlin
kotlin {
    sourceSets {
        commonMain.dependencies {
            implementation("com.alexstyl:prosakt:0.1.0")
        }
    }
}
```

The library publishes JVM, JavaScript, WebAssembly (JS and WASI), and Kotlin/Native variants, including Apple, Linux, Windows, and Android Native targets. Gradle selects the variant for your target. The library is built with Kotlin 2.1.20.

## Import the entry point

```kotlin
import com.alexstyl.prosakt.ktFile
```

For explicit visibility, also import `com.alexstyl.prosakt.Visibility`.

Prosa.kt returns source text. It does not compile it, write files, or register generated sources with Gradle. You control those steps in your generator.

Continue with [your first file](/docs/first-file/).
