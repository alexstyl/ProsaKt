---
title: Files
description: "Place comments before package declarations or beside generated declarations."
sidebar:
  order: 9
---

## Add a file comment

Use `comment()` inside `ktFile {}` before `packageName()` to put a generated-file notice or license text above the package declaration. Pass plain text without comment markers; each line receives a `//` prefix. This ordering behavior is available in the development version, after `0.1.1`.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    comment("Generated code. Do not edit.")
    packageName("example")
    comment("The greeting")
    ktValue("message") {
        initializer { literal("Hello") }
    }
}
```

Generated Kotlin:

```kotlin
// Generated code. Do not edit.

package example

// The greeting
val message = "Hello"
```

`ktValue()` declares a property, `initializer {}` supplies its value, and `literal()` emits a literal expression. See [Values and Variables](/docs/properties/) for more on property declarations.

Place comments where they belong: leading comments before the first file annotation, package declaration, or explicit import stay at the top. Comments between those file directives stay with the following directive. Comments among declarations remain in the declaration body. File annotations, the package, and imports still use Kotlin's required ordering, and automatically resolved imports appear before declarations.

Call `comment()` multiple times to append comments in order, or pass a multiline string. Each line is emitted as a line comment. Without file directives or imports, comments remain directly beside the declarations that follow them.
