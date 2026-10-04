---
title: Control flow
description: Generate conditional expressions, when branches, try/catch, assignments, and returns.
---

## If expressions

`ifExpression` requires a condition and both branches:

```kotlin
ktValue("label") {
    initializer {
        ifExpression {
            condition { reference("ready") }
            then { literal("Ready") }
            elseCase { literal("Waiting") }
        }
    }
}
```

Generates `val label = if (ready) "Ready" else "Waiting"`.

## When expressions

```kotlin
ktValue("status") {
    initializer {
        whenExpression {
            subject { reference("code") }
            case {
                match { literal(200) }
                then { literal("OK") }
            }
            elseCase { literal("Unknown") }
        }
    }
}
```

Omit `subject` for a condition-based `when`. Add cases before `elseCase`. The builder requires at least one branch; you are responsible for making the generated expression exhaustive where Kotlin requires it.

## Try / catch expressions

```kotlin
ktValue("result") {
    initializer {
        tryExpression {
            body { call("load") }
            catching("e") {
                type { reference("Exception") }
                body { reference("fallback") }
            }
        }
    }
}
```

The try body and each catch body describe one expression. At least one catch is required. There is no `finally` builder in 0.1.0.

## Statements and explicit returns

```kotlin
ktFunction("increment") {
    returns { type { reference("Int") } }
    body {
        ktVariable("count") { initializer { literal(0) } }
        reference("count") {
            assign { reference("count") { plus { literal(1) } } }
        }
        ifStatement {
            condition { reference("count") { equalTo { literal(1) } } }
            body { returnStatement { literal(5) } }
        }
        returnStatement { reference("count") }
    }
}
```

Assignments are only allowed in statement bodies and must be the last step in a chain. `ifStatement` emits a conditional statement with a body. Use `returnStatement()` for a bare return, or pass `label = "map"` for a labeled return where valid in Kotlin.
