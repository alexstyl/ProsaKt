---
title: Objects
description: "Use ktObject and companionObject to generate singleton and companion objects."
sidebar:
  order: 12
---

## Declare an object

Use `ktObject()` to declare a singleton object. Use the same member builders as a class, such as `ktValue()` and `ktFunction()`.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktObject("Defaults") {
        ktValue("greeting") {
            initializer {
                literal("Hello")
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
object Defaults {
    val greeting = "Hello"
}
```

## Add a companion object

Use `companionObject {}` inside `ktClass {}` or `ktInterface {}`. Pass a name to `companionObject()` if you want a named companion.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktClass("GreetingService") {
        companionObject {
            ktValue("DEFAULT_GREETING") {
                modifiers = listOf("const")
                initializer {
                    literal("Hello")
                }
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
class GreetingService {
    companion object {
        const val DEFAULT_GREETING = "Hello"
    }
}
```
