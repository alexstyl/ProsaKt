---
title: Classes
description: "Use ktClass to generate classes, primary constructors, constructor properties, and members."
sidebar:
  order: 10
---

## Declare a class

Use `ktClass()` inside `ktFile {}` to declare a class. Pass the class name as its argument.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktClass("GreetingService") {
    }
}
```

Generated Kotlin:

```kotlin
class GreetingService
```


## Add a primary constructor

Use `constructor {}` inside `ktClass {}` to configure the primary constructor. Use `parameter()` inside it to add a parameter, then `type {}` and `reference()` to specify its type.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktClass("GreetingService") {
        constructor {
            parameter("prefix") {
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
class GreetingService(prefix: String)
```

## Declare constructor properties

Use `property {}` inside a constructor parameter to generate a `val` property. Set `mutable = true` inside that block to generate `var` instead. Set `modifiers = listOf("data")` on the class to generate a data class.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktClass("User") {
        modifiers = listOf("data")
        constructor {
            parameter("name") {
                type {
                    reference("String")
                }
                property {
                }
            }
            parameter("active") {
                type {
                    reference("Boolean")
                }
                default {
                    literal(true)
                }
                property {
                    mutable = true
                }
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
data class User(val name: String, var active: Boolean = true)
```

Use `visibility = Visibility.Private` inside `property {}` to make a constructor property private. Call `constructor {}` once per class; add all primary-constructor parameters inside it.

## Add members

Use `ktFunction()`, `ktValue()`, or `ktVariable()` inside the class block to add members. Use `body {}` inside a function to define its implementation.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktClass("GreetingService") {
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
class GreetingService {
    fun greeting(): String {
        return "Hello"
    }
}
```

To add declaration keywords such as `open`, use `modifiers`; see [Visibility & modifiers](/docs/visibility/).
