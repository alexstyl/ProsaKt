---
title: Types
description: "Use type, reference, argument, and nullable to describe Kotlin types."
sidebar:
  order: 17
---

## Reference a type

Use `type {}` where a builder expects a type. Inside it, use `reference()` with the type’s name. Set `nullable = true` in the same block to add `?`.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktValue("nickname") {
        type {
            reference("String")
            nullable = true
        }
        initializer {
            literal(null)
        }
    }
}
```

Generated Kotlin:

```kotlin
val nickname: String? = null
```

## Add type arguments

Use `argument {}` inside a type block to add a generic type argument. Use `type {}` inside the argument block to describe that argument’s type.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktValue("names") {
        type {
            reference("kotlin.collections.List")
            argument {
                type {
                    reference("String")
                }
            }
        }
        initializer {
            call("kotlin.collections.emptyList") {
            }
        }
    }
}
```

Generated Kotlin:

```kotlin
val names: List<String> = emptyList()
```

Use fully qualified names for types outside the generated package. Prosa.kt collects the required imports automatically; see [Imports](/docs/imports/).
