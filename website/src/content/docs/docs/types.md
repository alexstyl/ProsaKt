---
title: Types & imports
description: Describe nullable, generic, and function types and let Prosa.kt collect imports.
---

A `type {}` block describes exactly one named type or function type.

## Named and nullable types

```kotlin
ktValue("user") {
    type {
        reference("example.User")
        nullable = true
    }
    initializer { nullValue() }
}
```

Prosa.kt adds `import example.User` and emits `val user: User? = null`.

## Generic types

Use an `argument { type { ... } }` for each type argument:

```kotlin
ktValue("users") {
    type {
        reference("List")
        argument {
            type {
                reference("example.User")
                nullable = true
            }
        }
    }
    initializer { call("emptyList") }
}
```

The resulting type is `List<User?>`. Set `nullable` on the outer block for a nullable list instead. Nested type arguments can themselves be generic.

## Function types

```kotlin
ktFunction("transform") {
    parameter("map") {
        type {
            function {
                parameter("value") { type { reference("String") } }
                returns { type { reference("Int") } }
            }
        }
    }
}
```

This emits a parameter of type `(value: String) -> Int`. Function-type parameters may omit their names. Omitting `returns` in a function type defaults its result to `Unit`.

Set `nullable = true` on the enclosing type block for a nullable function type. Type blocks and function-type blocks also accept `annotations` as a list of annotation names.

## Imports

Use qualified symbol names, such as `reference("example.User")` or `call("example.makeUser")`, to collect imports automatically. Prosa.kt sorts and deduplicates imports and omits automatic imports from the file's own package, `kotlin`, and `kotlin.collections`.

If two collected symbols share a short name, they are emitted with qualified names. Declaration names are also considered when resolving collisions.

Add `ktImport("example.extensions.custom")` at file scope when you need an explicit import, for example for an extension used through a short name. Explicit imports are retained.

For member access, use a chain (`reference("user") { property("name") }`) instead of treating `"user.name"` as a qualified symbol.
