---
title: Imports
description: "Learn how Prosa.kt collects imports from types, expressions, calls, and annotations."
sidebar:
  order: 20
---

## Imports are collected automatically

Use fully qualified names when referring to symbols outside the generated package. Prosa.kt collects those names, adds imports, and uses short names in the generated code.

These APIs participate in import collection:

- Use `reference()` for types and expressions, including types nested in generic arguments.
- Use `call()` for function and constructor calls, including chained calls.
- Set `annotations` to fully qualified annotation names for declarations and types, or use `ktFileAnnotation()` for file annotations.
- Use `property()`, `safeProperty()`, and `infixCall()` with fully qualified names when referring to imported extensions in a chain.

For example, use a qualified type in `returns {}` and a qualified constructor call in `body {}`:

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    packageName("com.example.greetings")
    ktFunction("createUser") {
        returns {
            type {
                reference("com.example.models.User")
            }
        }
        body {
            call("com.example.models.User") {
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
package com.example.greetings

import com.example.models.User

fun createUser(): User {
    return User()
}
```

Repeated uses of the same qualified name produce one import. Imports are sorted by name. Names in the generated package, `kotlin`, and `kotlin.collections` do not receive automatic imports. A short name such as `reference("User")` carries no package information, so it cannot add an import by itself.

## Collect imports from calls and annotations

Use `call()` with a fully qualified function name to import that function. Set `annotations` to fully qualified names to import annotations. Neither requires a separate `reference()` or `ktImport()` call:

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    packageName("com.example.greetings")
    ktFunction("logGreeting") {
        annotations = listOf("com.example.annotations.Generated")
        body {
            call("com.example.logging.logInfo") {
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
package com.example.greetings

import com.example.annotations.Generated
import com.example.logging.logInfo

@Generated
fun logGreeting() {
    logInfo("Hello")
}
```

The generated code uses the short names `Generated` and `logInfo`. The annotation and function must exist in your project or its dependencies; Prosa.kt generates their usage.

## Handle matching short names

Use fully qualified names in `reference()`, `call()`, and the other APIs above when symbols share a short name. Prosa.kt keeps those names qualified instead of adding ambiguous automatic imports.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktFunction("copyUser") {
        parameter("user") {
            type {
                reference("com.example.api.User")
            }
        }
        returns {
            type {
                reference("com.example.database.User")
            }
        }
        body {
            call("com.example.database.User") {
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
fun copyUser(user: com.example.api.User): com.example.database.User {
    return com.example.database.User()
}
```

The same rule applies when an imported symbol’s short name matches a declaration generated in the file.

## Add an explicit import

Use `ktImport()` inside `ktFile {}` when you need to add an import explicitly. Pass its fully qualified name. Explicit imports are also sorted and deduplicated.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktImport("com.example.models.User")
    ktFunction("createUser") {
        returns {
            type {
                reference("User")
            }
        }
        body {
            call("User") {
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
import com.example.models.User

fun createUser(): User {
    return User()
}
```

Explicit imports are retained even when automatic import filtering would omit them. Prefer fully qualified names in the builder APIs for automatic collision handling.
