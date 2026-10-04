---
title: Annotations
description: "Use annotations and ktFileAnnotation to generate declaration and file annotations."
sidebar:
  order: 18
---

## Annotate a declaration

Set `annotations` in a class, function, or property block to a list of annotation names. Use fully qualified names to let Prosa.kt add the imports. These declaration annotations are emitted without arguments.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktClass("User") {
        annotations = listOf("kotlinx.serialization.Serializable")
    }
}
```

Generated Kotlin:

```kotlin
import kotlinx.serialization.Serializable

@Serializable
class User
```

## Annotate the file

Use `ktFileAnnotation()` inside `ktFile {}` to add a file annotation. Use `argument {}` in its block to supply an annotation argument.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktFileAnnotation("kotlin.jvm.JvmName") {
        argument {
            literal("Greetings")
        }
    }
    packageName("com.example.greetings")
}
```

Generated Kotlin:

```kotlin
@file:JvmName("Greetings")

package com.example.greetings

import kotlin.jvm.JvmName
```

File annotations appear before the package declaration. The `@file:` prefix is generated for you.
