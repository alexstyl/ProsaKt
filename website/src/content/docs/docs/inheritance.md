---
title: Inheritance
description: "Declare supertypes on classes, objects, and interfaces with supertype."
sidebar:
  order: 13
---

:::note[Unreleased]
`supertype {}` is available in the development version and is not included in the published `0.1.1` release.
:::

Use `supertype {}` inside `ktClass`, `ktObject`, or `ktInterface` to declare an inherited type. The block uses the same type DSL as other type declarations: `reference()` names the type, and `argument { type {} }` supplies generic type arguments.

## Declare an object's supertype

```kotlin
import com.alexstyl.prosakt.Visibility
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktObject("NoIndication") {
        visibility = Visibility.Internal
        supertype { reference("androidx.compose.foundation.Indication") }
    }
}
```

Generated Kotlin:

```kotlin
import androidx.compose.foundation.Indication

internal object NoIndication : Indication
```

Qualified references participate in automatic import resolution, including name-collision handling.

## Inherit and override members

Classes and objects can implement inherited members using `modifiers = listOf("override")`. Interfaces can extend other interfaces using the same `supertype {}` block.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktInterface("GreetingProvider") {
        ktFunction("greeting") {
            modifiers = listOf("abstract")
            returns { type { reference("String") } }
        }
    }
    ktInterface("NamedGreetingProvider") {
        supertype { reference("GreetingProvider") }
    }
    ktClass("Greeter") {
        supertype { reference("NamedGreetingProvider") }
        ktFunction("greeting") {
            modifiers = listOf("override")
            returns { type { reference("String") } }
            body { literal("Hello") }
        }
    }
}
```

Generated Kotlin:

```kotlin
interface GreetingProvider {
    abstract fun greeting(): String
}
interface NamedGreetingProvider : GreetingProvider
class Greeter : NamedGreetingProvider {
    override fun greeting(): String {
        return "Hello"
    }
}
```

## Multiple and generic supertypes

Call `supertype {}` once for each inherited type. Types appear in the order they are declared.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktInterface("Named")
    ktInterface("Names") {
        supertype {
            reference("kotlin.collections.List")
            argument { type { reference("String") } }
        }
        supertype { reference("Named") }
    }
}
```

Generated Kotlin:

```kotlin
interface Named
interface Names : List<String>, Named
```

## Call a superclass constructor

Use `superclass("Base")` inside `ktClass {}` or `ktObject {}` to inherit from a class and call its constructor. Without a block, the call has no arguments. Inside the optional block, use `argument()` to supply constructor values or generic type arguments, as with ordinary function calls.

```kotlin
import com.alexstyl.prosakt.ktFile

val source = ktFile {
    ktClass("Child") {
        supertype { reference("example.Marker") }
        superclass("example.Base") {
            argument("name") { literal("Alex") }
        }
    }
    ktObject("Default") {
        superclass("example.Base")
    }
}
```

Generated Kotlin:

```kotlin
import example.Base
import example.Marker

class Child : Base(name = "Alex"), Marker
object Default : Base()
```

The superclass appears before implemented interfaces. Only one superclass can be configured per declaration. `Base` must be inheritable and expose a matching constructor. Available since `0.2.0`.

## Current limits

Use `supertype {}` for type references and `superclass()` for superclass constructor calls. Supertype delegation, such as `Service by delegate`, is not supported yet. Kotlin's inheritance rules still apply to the generated code.
