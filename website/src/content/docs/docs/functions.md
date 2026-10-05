---
title: Functions
description: "Use ktFunction to generate functions with parameters, default arguments, return types, and bodies."
sidebar:
  order: 13
---

## Declare a function

Use `ktFunction()` to declare a function. Use `returns {}` to configure its return type, then `type {}` and `reference()` to specify that type. Use `body {}` for its implementation and `literal()` for a literal value.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
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
fun greeting(): String {
    return "Hello"
}
```

With an explicit non-`Unit` return type, Prosa.kt returns the last expression in `body {}` automatically.


## Add a parameter

Use `parameter()` inside `ktFunction {}` to add a parameter. Pass its name as the argument. Use `type {}` and `reference()` inside the parameter block to specify its type. Use `reference()` in the function body to refer to the parameter.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
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
            reference("name")
        }
    }
}
```

Generated Kotlin:

```kotlin
fun greeting(name: String): String {
    return name
}
```

## Supply a default value

Use `default {}` inside the parameter block to generate a default argument. Use `literal()` inside it for a literal value.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktFunction("greeting") {
        parameter("name") {
            type {
                reference("String")
            }
            default {
                literal("World")
            }
        }
        returns {
            type {
                reference("String")
            }
        }
        body {
            reference("name")
        }
    }
}
```

Generated Kotlin:

```kotlin
fun greeting(name: String = "World"): String {
    return name
}
```

Call `parameter()` again for each additional parameter; their order is preserved. Use `modifier("vararg")` in a parameter block to add the `vararg` keyword. Constructor parameters also support `type {}` and `default {}`; see [Classes](/docs/classes/#add-a-primary-constructor).

## Generate a statement

Use `call()` inside `body {}` to generate a function call. Use `argument {}` to provide an argument. Omit `returns {}` for a function with an implicit `Unit` return type.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktFunction("printGreeting") {
        body {
            call("println") {
                argument {
                    literal("Hello")
                }
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
fun printGreeting() {
    println("Hello")
}
```

For a function without an implementation, set `modifiers = listOf("abstract")` in a valid abstract context, such as an interface.

## Supply named arguments

Use `argument("name") {}` inside `call {}` to name a value argument. The block supplies its value using `literal()`, `reference()`, or another expression. This overload is available in the development version, after `0.1.1`.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktValue("message") {
        initializer {
            call("greeting") {
                argument("name") { literal("Alex") }
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
val message = greeting(name = "Alex")
```

`argument { name = "name"; literal("Alex") }` remains supported and produces the same output. Use `argument { literal("Alex") }` for a positional argument. Arguments retain their declared order, and Kotlin keywords used as names are escaped automatically.

Named arguments must contain a value, not a `type {}` block. If the block also assigns `name`, it must match the name passed to `argument()`.

The same overload is available inside [file annotation blocks](/docs/annotations/#annotate-the-file).
