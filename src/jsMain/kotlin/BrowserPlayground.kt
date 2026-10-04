@file:OptIn(ExperimentalJsExport::class)

import com.alexstyl.prosakt.*

/** Runs parsed playground builder calls through the actual ProsaKt implementation. */
@JsExport
fun generateKotlin(program: String): String = ktFile { execute(this, JSON.parse(program)) }

private fun execute(scope: Any, nodes: dynamic) {
    if (nodes == null) return
    for (index in 0 until (nodes.length as Int)) {
        val node = nodes[index]
        try {
            applyNode(scope, node)
        } catch (error: Throwable) {
            if (error.message?.startsWith("Line ") == true) throw error
            error("Line ${node.line}: ${error.message ?: "Invalid builder call"}")
        }
    }
}

private fun applyNode(scope: Any, node: dynamic) {
    val name = node.name as String
    val args = node.args
    val count = args.length as Int
    val block: Any.() -> Unit = { execute(this, node.body) }
    fun string(): String {
        require(count == 1 && jsTypeOf(args[0]) == "string") { "$name expects one string argument" }
        return args[0] as String
    }
    fun noArgs() {
        require(count == 0) { "$name takes no arguments" }
    }
    fun strings(): List<String> {
        require(count == 1 && js("Array.isArray(args[0])") as Boolean) {
            "$name expects listOf(...)"
        }
        return (0 until (args[0].length as Int)).map {
            require(jsTypeOf(args[0][it]) == "string") { "$name expects a list of strings" }
            args[0][it] as String
        }
    }
    fun boolean(): Boolean {
        require(count == 1 && jsTypeOf(args[0]) == "boolean") { "$name expects true or false" }
        return args[0] as Boolean
    }
    fun visibility(): Visibility = Visibility.valueOf(string())
    fun number(): String {
        require(count == 1 && args[0] != null && jsTypeOf(args[0].number) == "string") {
            "$name expects a number"
        }
        return args[0].number as String
    }

    if (node.assignment as Boolean) {
        when {
            name == "modifiers" && scope is DeclarationScope -> scope.modifiers = strings()
            name == "modifiers" && scope is MemberScope -> scope.modifiers = strings()
            name == "annotations" && scope is DeclarationScope -> scope.annotations = strings()
            name == "annotations" && scope is MemberScope -> scope.annotations = strings()
            name == "annotations" && scope is TypeScope -> scope.annotations = strings()
            name == "visibility" && scope is DeclarationScope -> scope.visibility = visibility()
            name == "visibility" && scope is MemberScope -> scope.visibility = visibility()
            name == "visibility" && scope is ConstructorPropertyScope ->
                scope.visibility = visibility()
            name == "nullable" && scope is TypeScope -> scope.nullable = boolean()
            name == "mutable" && scope is ConstructorPropertyScope -> scope.mutable = boolean()
            name == "name" && scope is ArgumentScope -> scope.name = string()
            else -> error("Unsupported property '$name' in this block")
        }
        return
    }

    val named =
        setOf(
            "packageName",
            "ktImport",
            "ktFileAnnotation",
            "ktFunction",
            "ktClass",
            "ktInterface",
            "ktObject",
            "ktValue",
            "ktVariable",
            "parameter",
            "reference",
            "call",
            "safeCall",
            "property",
            "safeProperty",
            "modifier",
            "comment",
            "infixCall",
        )
    if (name !in named && name != "literal" && name != "lines") noArgs()
    if (
        name in
            setOf(
                "packageName",
                "ktImport",
                "modifier",
                "comment",
                "line",
                "lines",
                "nullValue",
                "classLiteral",
                "not",
                "unaryMinus",
            )
    ) {
        require(node.body == null) { "$name does not accept a block" }
    }
    val needsBlock =
        setOf(
            "constructor",
            "returns",
            "body",
            "type",
            "argument",
            "initializer",
            "delegate",
            "getter",
            "default",
            "trailingLambda",
            "chain",
            "lambdaExpression",
            "ifExpression",
            "ifStatement",
            "condition",
            "then",
            "elseCase",
            "index",
            "plus",
            "minus",
            "times",
            "div",
            "rem",
            "equalTo",
            "notEqualTo",
            "and",
            "or",
            "orElse",
            "infixCall",
            "isType",
            "assign",
        )
    if (name in needsBlock || (name == "property" && scope is ConstructorParameterScope)) {
        require(node.body != null) { "$name requires a block { ... }" }
    }
    if (scope is ChainScope && name in setOf("property", "safeProperty")) {
        require(node.body == null) { "$name does not accept a block" }
    }
    when {
        name == "packageName" && scope is FileScope -> scope.packageName(string())
        name == "ktImport" && scope is FileScope -> scope.ktImport(string())
        name == "ktFileAnnotation" && scope is FileScope -> scope.ktFileAnnotation(string(), block)
        name == "ktFunction" && scope is DeclarationContainerScope ->
            scope.ktFunction(string(), block)
        name == "ktClass" && scope is DeclarationContainerScope -> scope.ktClass(string(), block)
        name == "ktValue" && scope is DeclarationContainerScope -> scope.ktValue(string(), block)
        name == "ktVariable" && scope is DeclarationContainerScope ->
            scope.ktVariable(string(), block)
        name == "ktInterface" && scope is FileScope -> scope.ktInterface(string(), block)
        name == "ktInterface" && scope is MemberScope -> scope.ktInterface(string(), block)
        name == "ktObject" && scope is FileScope -> scope.ktObject(string(), block)
        name == "ktObject" && scope is MemberScope -> scope.ktObject(string(), block)
        name == "companionObject" && scope is ClassScope -> scope.companionObject(configure = block)
        name == "companionObject" && scope is InterfaceScope ->
            scope.companionObject(configure = block)
        name == "constructor" && scope is ClassScope -> scope.constructor(block)
        name == "parameter" && scope is ConstructorScope -> scope.parameter(string(), block)
        name == "parameter" && scope is FunctionScope -> scope.parameter(string(), block)
        name == "parameter" && scope is LambdaBodyScope -> scope.parameter(string(), block)
        name == "property" && scope is ConstructorParameterScope -> {
            noArgs()
            scope.property(block)
        }
        name == "modifier" && scope is ParameterScope -> scope.modifier(string())
        name == "default" && scope is ParameterScope -> scope.default(block)
        name == "returns" && scope is FunctionScope -> scope.returns(block)
        name == "body" && scope is FunctionScope -> scope.body(block)
        name == "body" && scope is GetterScope -> scope.body(block)
        name == "body" && scope is IfStatementScope -> scope.body(block)
        name == "type" && scope is ParameterScope -> scope.type(block)
        name == "type" && scope is TypeSlotScope -> scope.type(block)
        name == "type" && scope is PropertyScope -> scope.type(block)
        name == "type" && scope is ArgumentScope -> scope.type(block)
        name == "reference" && scope is TypeScope -> {
            require(node.body == null) { "Type references do not accept a block" }
            scope.reference(string())
        }
        name == "argument" && scope is TypeScope -> scope.argument(block)
        name == "initializer" && scope is PropertyScope -> scope.initializer(block)
        name == "delegate" && scope is PropertyScope -> scope.delegate(block)
        name == "getter" && scope is PropertyScope -> scope.getter(block)
        name == "argument" && scope is CallScope -> scope.argument(block)
        name == "argument" && scope is AnnotationScope -> scope.argument(block)
        name == "trailingLambda" && scope is CallScope -> scope.trailingLambda(block)
        name == "reference" && scope is ExpressionScope -> scope.reference(string(), block)
        name == "literal" && scope is ExpressionScope -> {
            require(count == 1) { "literal expects one value" }
            val value = args[0]
            if (value != null && jsTypeOf(value) == "object") {
                val text = number()
                if ('.' in text || 'e' in text.lowercase()) scope.literal(text.toDouble(), block)
                else
                    scope.literal(
                        requireNotNull(text.toIntOrNull()) {
                            "Integer is outside the supported Int range"
                        },
                        block,
                    )
            } else {
                require(value == null || jsTypeOf(value) in setOf("string", "boolean")) {
                    "literal expects a string, number, boolean, or null"
                }
                scope.literal(value as Any?, block)
            }
        }
        name == "nullValue" && scope is ExpressionScope -> scope.nullValue()
        name == "call" && scope is ExpressionScope -> scope.call(string(), block)
        name == "chain" && scope is ExpressionScope -> scope.chain(block)
        name == "lambdaExpression" && scope is ExpressionScope -> scope.lambdaExpression(block)
        name == "ifExpression" && scope is ExpressionScope -> scope.ifExpression(block)
        name == "ifStatement" && scope is BlockScope -> scope.ifStatement(block)
        name == "condition" && scope is IfStatementScope -> scope.condition(block)
        name == "condition" && scope is IfExpressionScope -> scope.condition(block)
        name == "then" && scope is IfExpressionScope -> scope.then(block)
        name == "elseCase" && scope is IfExpressionScope -> scope.elseCase(block)
        name == "returnStatement" && scope is BlockScope ->
            scope.returnStatement(body = if (node.body == null) null else block)
        name == "line" && scope is CodeScope -> scope.line()
        name == "lines" && scope is CodeScope -> {
            val number = number().toDouble()
            require(number % 1.0 == 0.0 && number in 0.0..100.0) {
                "lines expects an integer from 0 to 100"
            }
            scope.lines(number.toInt())
        }
        name == "comment" && scope is CodeScope -> scope.comment(string())
        scope is ChainScope ->
            when (name) {
                "call" -> scope.call(string(), block)
                "safeCall" -> scope.safeCall(string(), block)
                "property" -> scope.property(string())
                "safeProperty" -> scope.safeProperty(string())
                "classLiteral" -> scope.classLiteral()
                "index" -> scope.index(block)
                "plus" -> scope.plus(block)
                "minus" -> scope.minus(block)
                "times" -> scope.times(block)
                "div" -> scope.div(block)
                "rem" -> scope.rem(block)
                "equalTo" -> scope.equalTo(block)
                "notEqualTo" -> scope.notEqualTo(block)
                "and" -> scope.and(block)
                "or" -> scope.or(block)
                "orElse" -> scope.orElse(block)
                "infixCall" -> scope.infixCall(string(), block)
                "not" -> scope.not()
                "unaryMinus" -> scope.unaryMinus()
                "isType" -> scope.isType(block)
                "assign" -> scope.assign(block)
                else -> error("Unsupported chain call '$name'")
            }
        else -> error("Unsupported builder call '$name' in this block")
    }
}
