---
title: Expressions & calls
description: Build literals, function calls, chains, operators, and lambdas.
---

Expression blocks appear in initializers, arguments, defaults, and return statements. Each of those blocks must describe exactly one expression. A function or lambda body can contain multiple expression statements.

## Literals and references

- `literal("Hello")` emits a quoted, escaped string.
- `literal(42)`, `literal(42L)`, `literal(1.5f)`, and `literal(true)` emit Kotlin literals.
- `literal('a')` emits a character literal.
- `nullValue()` emits `null`.
- `hexLiteral(255)` emits `0xFF` and requires a nonnegative value.
- `reference("name")` emits a symbol reference.

String literals escape quotes, backslashes, dollar signs, and control characters. They do not interpolate generated Kotlin expressions. Use `plus` to concatenate an expression with a string.

## Calls and arguments

```kotlin
ktValue("user") {
    initializer {
        call("create") {
            argument { type { reference("example.User") } }
            argument {
                name = "name"
                literal("Alex")
            }
        }
    }
}
```

This generates `val user = create<User>(name = "Alex")` and imports `example.User`.

An argument describes either a type or a value. Type arguments cannot have names. Value arguments can be positional or named.

## Member chains

```kotlin
ktValue("label") {
    initializer {
        reference("user") {
            safeProperty("name")
            safeCall("uppercase")
            orElse { literal("Anonymous") }
        }
    }
}
```

Generates `val label = user?.name?.uppercase() ?: "Anonymous"`.

Use `property`, `safeProperty`, `call`, `safeCall`, and `index` for member access. To start a chain with a call, use:

```kotlin
ktValue("first") {
    initializer {
        chain {
            call("loadUsers")
            call("first")
            property("name")
        }
    }
}
```

## Operators

Inside a reference or literal chain, use these builders:

| Builder | Kotlin |
| --- | --- |
| `plus`, `minus`, `times`, `div`, `rem` | `+`, `-`, `*`, `/`, `%` |
| `equalTo`, `notEqualTo` | `==`, `!=` |
| `and`, `or` | `&&`, `\|\|` |
| `orElse` | `?:` |
| `infixCall("to") { ... }` | `left to right` |
| `not()`, `unaryMinus()` | `!(value)`, `-(value)` |
| `isType { reference("String") }` | `value is String` |
| `classLiteral()` | `value::class` |

Binary operators take a block for the right-hand expression. Parentheses are inserted as needed to preserve expression structure.

## Lambdas

```kotlin
ktValue("names") {
    initializer {
        reference("users") {
            call("map") {
                trailingLambda {
                    parameter("user")
                    reference("user") { property("name") }
                }
            }
        }
    }
}
```

Generates `val names = users.map { user -> user.name }`.

Use `lambdaExpression { ... }` when a lambda is itself a value or a normal argument. Lambda parameters can declare types. Lambda bodies leave the final expression without an explicit `return`, following Kotlin's lambda syntax.
