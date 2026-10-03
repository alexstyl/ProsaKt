package com.alexstyl.prosakt

import kotlin.test.Test

class ScopeCompilationTest {
    @Test
    fun expressionScopesCannotBeConstructedByConsumers() {
        withCompiledKotlin(
            "import com.alexstyl.prosakt.*\nval scope = object : ExpressionScope {}",
            includeProsaKt = true,
            expectedError = "sealed",
        )
    }

    @Test
    fun expressionFactoriesCannotBeUsedOutsideThePublicDsl() {
        listOf(
                "reference(\"user\")",
                "literal(1)",
                "nullValue()",
                "hexLiteral(255)",
                "type { reference(\"String\") }",
                "parameter(\"name\")",
            )
            .forEach { expression ->
                withCompiledKotlin(
                    "import com.alexstyl.prosakt.*\nval value = $expression",
                    includeProsaKt = true,
                    expectedError = "internal",
                )
            }
    }

    @Test
    fun scopesRejectStatementsAndDeclarationsInTheWrongContexts() {
        listOf(
                """
                ktFile {
                    returnStatement()
                }
            """
                    .trimIndent() to "unresolved reference 'returnStatement'",
                """
                ktFile {
                    ktClass("User") {
                        returnStatement()
                    }
                }
            """
                    .trimIndent() to "unresolved reference 'returnStatement'",
                """
                ktFile {
                    companionObject {
                    }
                }
            """
                    .trimIndent() to "unresolved reference 'companionObject'",
                """
                ktFile {
                    ktObject("Singleton") {
                        companionObject {
                        }
                    }
                }
            """
                    .trimIndent() to "unresolved reference 'companionObject'",
                """
                ktFile {
                    ktFunction("run") {
                        body {
                            ktInterface("Local") {
                            }
                        }
                    }
                }
            """
                    .trimIndent() to "cannot be called in this context",
                """
                ktFile {
                    ktValue("name") {
                        initializer {
                            ktValue("nested") {
                            }
                            literal(0)
                        }
                    }
                }
            """
                    .trimIndent() to "cannot be called in this context",
            )
            .forEach { (declaration, error) ->
                withCompiledKotlin(
                    "import com.alexstyl.prosakt.*\nval generated = $declaration",
                    includeProsaKt = true,
                    expectedError = error,
                )
            }
    }

    @Test
    fun constructorPropertiesAreUnavailableInOtherParameterScopes() {
        val declarations =
            listOf(
                """
                ktFile {
                    ktFunction("greet") {
                        parameter("name") {
                            property {
                            }
                        }
                    }
                }
            """
                    .trimIndent(),
                """
                ktFile {
                    ktValue("callback") {
                        initializer {
                            lambdaExpression {
                                parameter("name") {
                                    property {
                                    }
                                }
                                reference("name")
                            }
                        }
                    }
                }
            """
                    .trimIndent(),
                """
                ktFile {
                    ktValue("callback") {
                        type {
                            function {
                                parameter {
                                    property {
                                    }
                                    type {
                                        reference("String")
                                    }
                                }
                            }
                        }
                    }
                }
            """
                    .trimIndent(),
            )
        declarations.forEach { declaration ->
            withCompiledKotlin(
                "import com.alexstyl.prosakt.*\nval generated = $declaration",
                includeProsaKt = true,
                expectedError = "unresolved reference 'property'",
            )
        }
    }
}
