---
title: Your first Kotlin file
description: Build a Kotlin source file step by step, from a package declaration to a function.
sidebar:
  order: 2
---

## 1. Start with ktFile

`ktFile {}` is the entry point to Prosa.kt. Use its block to describe the Kotlin source you want to generate. It returns that source as a `String`.

Use `packageName()` inside the block to specify the generated file’s package:

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    packageName("com.example.greetings")
}
```

Generated Kotlin:

```kotlin
package com.example.greetings
```

This block generates only a package declaration. The resulting string is stored in `source`; `ktFile` does not write a file to disk.

## 2. Add a function that returns a string

Use `ktFunction()` to declare a function, passing its name as the argument.

Use `returns {}` to configure the return type. Inside it, use `type {}` with `reference("String")` to specify `String`.

Use `body {}` to define the function’s body and `literal()` to generate a literal value. Here, `literal("Hello")` supplies the string the function returns:

```kotlin
val source = ktFile {
    packageName("com.example.greetings")
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
```

Generated Kotlin:

```kotlin
package com.example.greetings

fun greeting(): String {
    return "Hello"
}
```

With an explicit non-`Unit` return type, Prosa.kt automatically returns the body’s last expression. This function returns `"Hello"`.

## 3. Add a parameter

Use `parameter()` inside `ktFunction {}` to add a parameter to your function, passing its name as the argument. To specify its type, use `type {}` inside the parameter block, then `reference()` to name the type:

```kotlin
val source = ktFile {
    packageName("com.example.greetings")
    ktFunction("greeting") {
        parameter("name") {
            type {
                reference("String")
            }
        }
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
```

Generated Kotlin:

```kotlin
package com.example.greetings

fun greeting(name: String): String {
    return "Hello"
}
```

The function now accepts a name, but still returns `"Hello"`.

## 4. Use the parameter

Use `plus {}` inside the `literal()` block to append an expression to the string. Inside `plus {}`, use `reference("name")` to refer to the function’s parameter:

```kotlin
val source = ktFile {
    packageName("com.example.greetings")
    ktFunction("greeting") {
        parameter("name") {
            type {
                reference("String")
            }
        }
        returns {
            type {
                reference("String")
            }
        }
        body {
            literal("Hello, ") {
                plus {
                    reference("name")
                }
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
package com.example.greetings

fun greeting(name: String): String {
    return "Hello, " + name
}
```

`literal("Hello, ")` supplies the greeting text, and `reference("name")` supplies the parameter reference. `plus {}` joins them with `+` in the generated code.
