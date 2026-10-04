---
title: Values and Variables
description: "Use ktValue and ktVariable to generate properties and initializers."
sidebar:
  order: 16
---

## Declare values and variables

Use `ktValue()` for `val` and `ktVariable()` for `var`. Pass the property name as the argument. Use `initializer {}` to define its initial value.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktValue("greeting") {
        initializer {
            literal("Hello")
        }
    }
    ktVariable("requestCount") {
        initializer {
            literal(0)
        }
    }
}
```

Generated Kotlin:

```kotlin
val greeting = "Hello"
var requestCount = 0
```

## Specify a type

Use `type {}` directly inside the property block to specify its type. Use `reference()` inside it to name the type.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktValue("greeting") {
        type {
            reference("String")
        }
        initializer {
            literal("Hello")
        }
    }
}
```

Generated Kotlin:

```kotlin
val greeting: String = "Hello"
```

## Add a getter

Use `getter {}` to configure a custom getter and `body {}` inside it for the implementation. The getter returns its last expression.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktValue("greeting") {
        type {
            reference("String")
        }
        getter {
            body {
                literal("Hello")
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
val greeting: String
    get() {
        return "Hello"
    }
```

Use `delegate {}` instead of `initializer {}` for a delegated property. A property cannot combine a delegate with an initializer or a custom getter.
