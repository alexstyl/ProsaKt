export const examples = [
  {
    name: 'Kotlin Code',
    source: `ktFile {
    packageName("com.example")

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
}`,
  },
  {
    name: 'Compose',
    source: `ktFile {
    packageName("com.example.ui")

    ktFunction("Greeting") {
        annotations = listOf("androidx.compose.runtime.Composable")
        parameter("name") {
            type { reference("String") }
            default { literal("World") }
        }
        body {
            call("androidx.compose.foundation.layout.Column") {
                trailingLambda {
                    call("androidx.compose.material3.Text") {
                        argument {
                            name = "text"
                            literal("Hello, ") {
                                plus { reference("name") }
                            }
                        }
                    }
                    call("androidx.compose.material3.Text") {
                        argument { literal("Made with Prosa.kt") }
                    }
                }
            }
        }
    }
}`,
  },
  {
    name: 'Advanced',
    source: `ktFile {
    packageName("com.example.models")

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
        ktFunction("displayName") {
            returns { type { reference("String") } }
            body {
                ifExpression {
                    condition { reference("active") }
                    then { reference("name") }
                    elseCase { literal("Inactive user") }
                }
            }
        }
    }
}`,
  },
] as const;
