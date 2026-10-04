---
title: Declarations
description: Generate properties, functions, classes, interfaces, and objects.
---

Examples below belong inside `ktFile { ... }` unless shown otherwise.

## Properties

Use `ktValue` for `val` and `ktVariable` for `var`. Types are optional when the generated Kotlin can infer them.

```kotlin
ktValue("name") {
    type { reference("String") }
    initializer { literal("Alex") }
}
ktVariable("count") {
    initializer { literal(0) }
}
```

Generates:

```kotlin
val name: String = "Alex"
var count = 0
```

### Getters and delegates

```kotlin
ktValue("answer") {
    type { reference("Int") }
    getter {
        body { literal(42) }
    }
}
ktValue("message") {
    delegate {
        call("lazy") {
            trailingLambda { literal("Hello") }
        }
    }
}
```

A getter returns its final expression. A delegated property cannot also have an initializer or custom getter.

## Functions

```kotlin
ktFunction("greet") {
    parameter("name") {
        type { reference("String") }
        default { literal("world") }
    }
    returns { type { reference("String") } }
    body {
        literal("Hello, ") { plus { reference("name") } }
    }
}
```

Use `modifier("vararg")` inside a parameter block for a vararg parameter. Use a function's `modifiers` list for modifiers such as `suspend`.

Omitting `body` generates only a signature, useful for interface members. `body {}` emits an empty block. An explicit non-`Unit` return type makes the final expression a return statement.

## Classes and constructors

```kotlin
ktClass("User") {
    modifiers = listOf("data")
    constructor {
        parameter("name") {
            type { reference("String") }
            property {}
        }
        parameter("active") {
            type { reference("Boolean") }
            property { mutable = true }
            default { literal(true) }
        }
    }
}
```

Generates:

```kotlin
data class User(val name: String, var active: Boolean = true)
```

A constructor parameter becomes a property only when you add `property {}`. It is a `val` by default; `mutable = true` makes it a `var`. Constructor properties also accept `visibility`.

Add `ktValue`, `ktVariable`, `ktFunction`, or nested declarations directly inside the class block. `companionObject { ... }` adds a companion; pass a name for a named companion.

## Interfaces and objects

```kotlin
ktInterface("Greeter") {
    ktFunction("greet") {
        returns { type { reference("String") } }
    }
}
ktObject("Defaults") {
    ktValue("name") { initializer { literal("world") } }
}
```

Interfaces can also contain a `companionObject`. Classes and interfaces with no members are emitted without an empty body.

## Visibility, annotations, and modifiers

Declarations accept `visibility`, `annotations`, and `modifiers`:

```kotlin
ktClass("InternalModel") {
    visibility = com.alexstyl.prosakt.Visibility.Internal
    annotations = listOf("example.Generated")
    modifiers = listOf("data")
    constructor {
        parameter("id") {
            type { reference("String") }
            property {}
        }
    }
}
```

`Visibility` supports `Public`, `Internal`, `Protected`, and `Private`. Leaving it unset emits no visibility keyword. Qualified annotation names participate in automatic imports. Declaration annotations are names without arguments; file annotations have an argument builder.

Modifiers are emitted as supplied. Prosa.kt does not check whether a modifier combination or declaration is valid Kotlin in its context.
