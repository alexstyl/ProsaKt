---
title: Your first file
description: Generate a complete Kotlin file with ktFile, parameters, and a return value.
---

Call `ktFile` with a block describing your declarations. It returns a formatted `String`.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    packageName("hello")
    ktFunction("greet") {
        parameter("name") {
            type { reference("String") }
        }
        returns { type { reference("String") } }
        body {
            literal("Hello, ") {
                plus { reference("name") }
            }
        }
    }
}
```

The result:

```kotlin
package hello

fun greet(name: String): String {
    return "Hello, " + name
}
```

## How the blocks work

- **Declarations** use `ktFunction`, `ktClass`, `ktValue`, and related functions.
- **Types** are described in `type { }` blocks with `reference` or `function`.
- **Expressions** use `literal`, `reference`, `call`, and other expression builders.
- **Bodies** record declarations and expressions in the order you add them.

Builder calls describe generated code; they do not run it. For example, `call("println")` generates a call to `println`.

When a function has an explicit non-`Unit` return type, Prosa.kt adds `return` to its last expression. With no return type, the body emits statements instead. You can also use `returnStatement { ... }` explicitly.

## Use Kotlin to generate Kotlin

The builder is ordinary Kotlin. Loops and conditions in the builder run as part of your generator:

```kotlin
val source = ktFile {
    for (name in listOf("first", "second")) {
        ktValue(name) {
            initializer { literal(name) }
        }
    }
}
```

This generates:

```kotlin
val first = "first"
val second = "second"
```

## Save the result

On the JVM you can use your usual file APIs:

```kotlin
java.io.File("Greeting.kt").writeText(source)
```

In common code, pass the string to your own platform-specific storage layer. `ktFile` does not require a filename or filesystem.
