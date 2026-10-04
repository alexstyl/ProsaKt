---
title: Interfaces
description: "Use ktInterface to generate interfaces, abstract members, and default implementations."
sidebar:
  order: 11
---

## Declare an interface

Use `ktInterface()` to declare an interface. Add functions with `ktFunction()`. Set `modifiers = listOf("abstract")` on a function to generate a declaration without a body.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktInterface("GreetingProvider") {
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
interface GreetingProvider {
    abstract fun greeting(): String
}
```

Use `returns {}` to configure the return type and `type {}` with `reference()` to name that type. The explicit `abstract` modifier is needed here because ordinary functions receive a body by default.

## Provide a default implementation

Use `body {}` on an interface function to generate a default implementation. Leave `abstract` out of `modifiers` when providing a body.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktInterface("GreetingProvider") {
        ktFunction("greeting") {
            returns {
                type {
                    reference("String")
                }
            }
            body {
                literal("Hello")
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
interface GreetingProvider {
    fun greeting(): String {
        return "Hello"
    }
}
```
