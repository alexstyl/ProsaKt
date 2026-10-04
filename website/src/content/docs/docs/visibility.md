---
title: Visibility & modifiers
description: "Set visibility and modifiers on generated Kotlin declarations."
sidebar:
  order: 19
---

## Set visibility

Set `visibility` inside a declaration block using `Visibility.Public`, `Visibility.Internal`, `Visibility.Protected`, or `Visibility.Private`. If you leave it unset, Prosa.kt emits no visibility keyword.

```kotlin
import com.alexstyl.prosakt.ktFile
import com.alexstyl.prosakt.Visibility

val source = ktFile {
    ktClass("GreetingService") {
        visibility = Visibility.Internal
        ktValue("prefix") {
            visibility = Visibility.Private
            initializer {
                literal("Hello")
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
internal class GreetingService {
    private val prefix = "Hello"
}
```

## Add modifiers

Set `modifiers` to a list of Kotlin modifier keywords, such as `open`, `data`, `override`, or `abstract`. The keywords are emitted in the order you supply.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktClass("GreetingProvider") {
        modifiers = listOf("abstract")
        ktFunction("greeting") {
            modifiers = listOf("abstract")
            returns {
                type {
                    reference("String")
                }
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
abstract class GreetingProvider {
    abstract fun greeting(): String
}
```

An `abstract` function is emitted without a body, and cannot also configure `body {}`. Choose modifiers that are valid for the declaration and its context; Prosa.kt does not act as a Kotlin compiler.
