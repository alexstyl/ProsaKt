package com.alexstyl.prosakt

internal class Expression(
    val precedence: Int = 100,
    val statement: Boolean = false,
    private val renderCode: (RenderContext) -> Document,
) {
    fun render(context: RenderContext): Document = renderCode(context)
    fun operand(context: RenderContext, minimum: Int): Document =
        render(context).let { if (precedence < minimum) text("(") + it + ")" else it }
}

internal fun reference(name: String): Expression = Expression { c -> text(if (name in setOf("this", "super")) name else c.symbol(name)) }
internal fun nullValue(): Expression = Expression { _ -> text("null") }
internal fun literal(value: Any?): Expression {
    val code = when (value) {
        null -> "null"
        is String -> "\"${escapeString(value)}\""
        is Char -> "'${if (value == '\'') "\\'" else escapeString(value.toString()).replace("\\\"", "\"")}'"
        is Boolean, is Int, is Short, is Byte -> value.toString()
        is Long -> if (value == Long.MIN_VALUE) "(-9223372036854775807L - 1L)" else "${value}L"
        is UInt -> "${value}u"
        is ULong -> "${value}uL"
        is Float -> when {
            value.isNaN() -> "Float.NaN"
            value == Float.POSITIVE_INFINITY -> "Float.POSITIVE_INFINITY"
            value == Float.NEGATIVE_INFINITY -> "Float.NEGATIVE_INFINITY"
            else -> value.toString().let { if ('.' in it || 'E' in it || 'e' in it) it else "$it.0" } + "f"
        }
        is Double -> when {
            value.isNaN() -> "Double.NaN"
            value == Double.POSITIVE_INFINITY -> "Double.POSITIVE_INFINITY"
            value == Double.NEGATIVE_INFINITY -> "Double.NEGATIVE_INFINITY"
            else -> value.toString().let { if ('.' in it || 'E' in it || 'e' in it) it else "$it.0" }
        }
        else -> error("Not a Kotlin literal: $value")
    }
    return Expression(if (code.startsWith('-')) 80 else 100) { _ -> text(code) }
}
// Typed overloads preserve numeric kinds on JS, where Int/Float/Double share a runtime number.
internal fun literal(value: Int): Expression = Expression(if (value < 0) 80 else 100) { _ -> text(value.toString()) }
internal fun literal(value: Float): Expression = floatingLiteral(value.toDouble(), value.toString(), "Float", "f")
internal fun literal(value: Double): Expression = floatingLiteral(value, value.toString(), "Double", "")
private fun floatingLiteral(value: Double, text: String, type: String, suffix: String): Expression {
    val code = when {
        value.isNaN() -> "$type.NaN"
        value == Double.POSITIVE_INFINITY -> "$type.POSITIVE_INFINITY"
        value == Double.NEGATIVE_INFINITY -> "$type.NEGATIVE_INFINITY"
        else -> (if ('.' in text || 'E' in text || 'e' in text) text else "$text.0") + suffix
    }
    return Expression(if (code.startsWith('-')) 80 else 100) { _ -> text(code) }
}

internal fun hexLiteral(value: Long): Expression {
    require(value >= 0) { "Hex literals must be nonnegative" }
    return Expression { _ -> text("0x${value.toString(16).uppercase()}") }
}


/** A position that accepts an expression, or a body that records expression statements. */
@ProsaKtDsl
sealed interface ExpressionScope {
    fun reference(name: String, chain: ChainScope.() -> Unit = {}) {
        record(com.alexstyl.prosakt.reference(name), chain)
    }
    fun literal(value: Any?, chain: ChainScope.() -> Unit = {}) {
        record(com.alexstyl.prosakt.literal(value), chain)
    }
    fun literal(value: Int, chain: ChainScope.() -> Unit = {}) {
        record(com.alexstyl.prosakt.literal(value), chain)
    }
    fun literal(value: Float, chain: ChainScope.() -> Unit = {}) {
        record(com.alexstyl.prosakt.literal(value), chain)
    }
    fun literal(value: Double, chain: ChainScope.() -> Unit = {}) {
        record(com.alexstyl.prosakt.literal(value), chain)
    }
    fun hexLiteral(value: Long, chain: ChainScope.() -> Unit = {}) {
        record(com.alexstyl.prosakt.hexLiteral(value), chain)
    }
    fun nullValue(chain: ChainScope.() -> Unit = {}) {
        record(com.alexstyl.prosakt.nullValue(), chain)
    }
    fun call(name: String, configure: CallScope.() -> Unit = {}) {
        accept(buildCall(name, configure))
    }
    fun chain(body: ChainScope.() -> Unit) {
        accept(ChainScope(null, this is BlockScope).apply(body).result)
    }
    fun lambdaExpression(body: LambdaBodyScope.() -> Unit) {
        accept(buildLambda(body))
    }
    fun ifExpression(configure: IfExpressionScope.() -> Unit) {
        accept(IfExpressionScope().apply(configure).build())
    }
    fun whenExpression(configure: WhenScope.() -> Unit) {
        accept(WhenScope().apply(configure).build())
    }
    fun tryExpression(configure: TryScope.() -> Unit) {
        accept(TryScope().apply(configure).build())
    }
}

private fun ExpressionScope.record(expression: Expression, chain: ChainScope.() -> Unit) {
    accept(ChainScope(expression, this is BlockScope).apply(chain).result)
}

private fun ExpressionScope.accept(expression: Expression) {
    when (this) {
        is BlockScope -> code.expression(expression)
        is ArgumentScope -> {
            check(value == null) { "An argument must describe exactly one expression" }
            value = expression
        }
        is SingleExpressionScope -> {
            check(value == null) { "An expression block must describe exactly one expression" }
            value = expression
        }
    }
}

private class SingleExpressionScope : ExpressionScope {
    var value: Expression? = null
}

internal fun expression(body: ExpressionScope.() -> Unit): Expression =
    requireNotNull(SingleExpressionScope().apply(body).value) { "An expression block must describe an expression" }

@ProsaKtDsl
class ChainScope internal constructor(
    initial: Expression?,
    private val statementsAllowed: Boolean = false,
) {
    private var current: Expression? = initial
    internal val result: Expression
        get() = requireNotNull(current) { "A chain must start with a call" }

    private fun change(build: (Expression) -> Expression) {
        check(result.statement.not()) { "An assignment must be the last step of a statement" }
        current = build(result)
    }
    fun classLiteral() {
        change { receiver -> Expression(90) { c -> receiver.operand(c, 90) + "::class" } }
    }
    fun property(name: String) {
        change { receiver -> Expression(90) { c -> member(receiver.operand(c, 90), text(".${c.symbol(name)}")) } }
    }
    fun safeProperty(name: String) {
        change { receiver -> Expression(90) { c -> member(receiver.operand(c, 90), text("?.${c.symbol(name)}")) } }
    }
    fun call(name: String, configure: CallScope.() -> Unit = {}) {
        if (current == null) {
            current = buildCall(name, configure)
        } else {
            memberCall(name, false, configure)
        }
    }
    fun safeCall(name: String, configure: CallScope.() -> Unit = {}) {
        memberCall(name, true, configure)
    }
    private fun memberCall(name: String, safe: Boolean, configure: CallScope.() -> Unit) {
        change { receiver ->
            buildCall(name, configure, receiver, safe)
        }
    }
    fun index(body: ExpressionScope.() -> Unit) {
        val index = expression(body)
        change { receiver -> Expression(90) { c -> receiver.operand(c, 90) + delimited("[", listOf(index.render(c)), "]") } }
    }
    private fun binary(operator: String, precedence: Int, body: ExpressionScope.() -> Unit) {
        val right = expression(body)
        change { left -> Expression(precedence) { c ->
            (left.operand(c, precedence) + " $operator" + (softLine + right.operand(c, precedence + 1)).nested()).grouped()
        } }
    }
    fun plus(body: ExpressionScope.() -> Unit) { binary("+", 60, body) }
    fun minus(body: ExpressionScope.() -> Unit) { binary("-", 60, body) }
    fun times(body: ExpressionScope.() -> Unit) { binary("*", 70, body) }
    fun div(body: ExpressionScope.() -> Unit) { binary("/", 70, body) }
    fun rem(body: ExpressionScope.() -> Unit) { binary("%", 70, body) }
    fun equalTo(body: ExpressionScope.() -> Unit) { binary("==", 30, body) }
    fun notEqualTo(body: ExpressionScope.() -> Unit) { binary("!=", 30, body) }
    fun and(body: ExpressionScope.() -> Unit) { binary("&&", 20, body) }
    fun or(body: ExpressionScope.() -> Unit) { binary("||", 10, body) }
    fun orElse(body: ExpressionScope.() -> Unit) { binary("?:", 40, body) }
    fun infixCall(name: String, body: ExpressionScope.() -> Unit) {
        require(name.isNotBlank()) { "Call name cannot be blank" }
        val right = expression(body)
        change { left -> Expression(45) { c ->
            (left.operand(c, 45) + " ${c.symbol(name)}" + (softLine + right.operand(c, 46)).nested()).grouped()
        } }
    }
    fun not() {
        change { operand -> Expression(80) { c -> text("!(") + operand.render(c) + ")" } }
    }
    fun unaryMinus() {
        change { operand -> Expression(80) { c -> text("-(") + operand.render(c) + ")" } }
    }
    fun isType(body: TypeScope.() -> Unit) {
        val type = type(body)
        change { operand -> Expression(35) { c -> operand.operand(c, 35) + " is " + type.render(c) } }
    }
    fun assign(body: ExpressionScope.() -> Unit) {
        check(statementsAllowed) { "Assignments belong in a statement body" }
        val right = expression(body)
        change { left -> Expression(0, statement = true) { c -> left.render(c) + " = " + right.render(c) } }
    }
}

@ProsaKtDsl
class ArgumentScope internal constructor() : ExpressionScope {
    var name: String? = null
    internal var value: Expression? = null
    internal var configuredType: TypeReference? = null
        private set

    fun type(body: TypeScope.() -> Unit) {
        check(configuredType == null) { "Argument type has already been defined" }
        configuredType = com.alexstyl.prosakt.type(body)
    }

    internal fun validate() {
        require((configuredType == null) != (value == null)) {
            "An argument must configure exactly one of type or value"
        }
        require(configuredType == null || name == null) { "Type arguments cannot have names" }
    }
}

@ProsaKtDsl
class AnnotationScope internal constructor() {
    private val arguments = mutableListOf<Pair<String?, Expression>>()

    fun argument(body: ArgumentScope.() -> Unit) {
        val argument = ArgumentScope().apply(body).also { it.validate() }
        require(argument.configuredType == null) { "Annotation arguments must be values" }
        arguments += argument.name to requireNotNull(argument.value)
    }

    internal fun render(name: String, context: RenderContext): Document =
        text(context.symbol(name)) + if (arguments.isEmpty()) text("") else delimited("(", arguments.map { (name, value) ->
            text(name?.let { "${identifier(it)} = " } ?: "") + value.render(context)
        }, ")")
}

@ProsaKtDsl
class CallScope internal constructor() {
    private val arguments = mutableListOf<Pair<String?, Expression>>()
    private val types = mutableListOf<TypeReference>()
    private var trailing: Expression? = null

    fun argument(body: ArgumentScope.() -> Unit) {
        val argument = ArgumentScope().apply(body).also { it.validate() }
        val type = argument.configuredType
        if (type != null) types += type
        else arguments += argument.name to requireNotNull(argument.value)
    }
    fun trailingLambda(body: LambdaBodyScope.() -> Unit) {
        check(trailing == null) { "Trailing lambda has already been defined" }
        trailing = buildLambda(body, trailing = true)
    }
    internal fun renderCall(name: String, c: RenderContext): Document {
        val typeArgs = if (types.isEmpty()) text("") else delimited("<", types.map { it.render(c) }, ">")
        val args = arguments.map { (name, expression) ->
            text(name?.let { "${identifier(it)} = " } ?: "") + expression.render(c)
        }
        val parentheses = if (arguments.isEmpty() && trailing != null && types.isEmpty()) text("") else delimited("(", args, ")")
        return text(c.symbol(name)) + typeArgs + parentheses + (trailing?.let { text(" ") + it.render(c) } ?: text(""))
    }
}

private fun buildCall(
    name: String,
    configure: CallScope.() -> Unit,
    receiver: Expression? = null,
    safe: Boolean = false,
): Expression {
    require(name.isNotBlank()) { "Call name cannot be blank" }
    val scope = CallScope().apply(configure)
    return Expression(90) { c ->
        val call = scope.renderCall(name, c)
        receiver?.let { member(it.operand(c, 90), text(if (safe) "?." else ".") + call) } ?: call
    }
}

private fun buildLambda(body: LambdaBodyScope.() -> Unit, trailing: Boolean = false): Expression {
    val scope = LambdaBodyScope().apply(body)
    return Expression { c ->
        val header = if (scope.parameters.isEmpty()) text("{") else
            (text("{") + (softLine + scope.parameters.map { it.render(c) }.joined(text(",") + softLine) + " ->").nested()).grouped()
        lambdaLayout(
            header = header,
            body = scope.code.render(c),
            singleExpression = scope.code.isSingleExpression,
            trailing = trailing,
            empty = scope.code.isEmpty && scope.parameters.isEmpty(),
        )
    }
}

@ProsaKtDsl
class IfExpressionScope internal constructor() {
    private var condition: Expression? = null
    private var yes: Expression? = null
    private var no: Expression? = null
    fun condition(body: ExpressionScope.() -> Unit) {
        check(condition == null) { "Condition has already been defined" }
        condition = expression(body)
    }
    fun then(body: ExpressionScope.() -> Unit) {
        check(yes == null) { "Then branch has already been defined" }
        yes = expression(body)
    }
    fun elseCase(body: ExpressionScope.() -> Unit) {
        check(no == null) { "Else branch has already been defined" }
        no = expression(body)
    }
    internal fun build(): Expression {
        val condition = requireNotNull(condition) { "An if expression needs a condition" }
        val yes = requireNotNull(yes) { "An if expression needs a then branch" }
        val no = requireNotNull(no) { "An if expression needs an else branch" }
        return Expression(0) { c -> (text("if (") + condition.render(c) + ")" + (softLine + yes.render(c)).nested() + softLine + "else" + (softLine + no.render(c)).nested()).grouped() }
    }
}

@ProsaKtDsl
class WhenCaseScope internal constructor() {
    private var match: Expression? = null
    private var result: Expression? = null
    fun match(body: ExpressionScope.() -> Unit) {
        check(match == null) { "Case match has already been defined" }
        match = expression(body)
    }
    fun then(body: ExpressionScope.() -> Unit) {
        check(result == null) { "Case result has already been defined" }
        result = expression(body)
    }
    internal fun build() = requireNotNull(match) { "A case needs a match" } to requireNotNull(result) { "A case needs a result" }
}

@ProsaKtDsl
class WhenScope internal constructor() {
    private var subject: Expression? = null
    private val branches = mutableListOf<Pair<Expression?, Expression>>()
    fun subject(body: ExpressionScope.() -> Unit) {
        check(subject == null) { "Subject has already been defined" }
        subject = expression(body)
    }
    fun case(body: WhenCaseScope.() -> Unit) {
        check(branches.none { it.first == null }) { "Cases must precede elseCase" }
        branches += WhenCaseScope().apply(body).build()
    }
    fun elseCase(body: ExpressionScope.() -> Unit) {
        check(branches.none { it.first == null }) { "Else case has already been defined" }
        branches += null to expression(body)
    }
    internal fun build(): Expression {
        require(branches.isNotEmpty()) { "A when expression needs branches" }
        return Expression(0) { c ->
            val entries = branches.map { (match, result) ->
                (match?.render(c) ?: text("else")) + " -> " + result.render(c)
            }
            block(text("when") + (subject?.let { text(" (") + it.render(c) + ")" } ?: text("")), entries.joined(hardLine))
        }
    }
}

@ProsaKtDsl
class CatchScope internal constructor() {
    private var type: TypeReference? = null
    private var result: Expression? = null
    fun type(body: TypeScope.() -> Unit) {
        check(type == null) { "Catch type has already been defined" }
        type = com.alexstyl.prosakt.type(body)
    }
    fun body(body: ExpressionScope.() -> Unit) {
        check(result == null) { "Catch body has already been defined" }
        result = expression(body)
    }
    internal fun build() = requireNotNull(type) { "A catch needs a type" } to requireNotNull(result) { "A catch needs a body" }
}

@ProsaKtDsl
class TryScope internal constructor() {
    private var result: Expression? = null
    private val handlers = mutableListOf<Triple<String, TypeReference, Expression>>()
    fun body(body: ExpressionScope.() -> Unit) {
        check(result == null) { "Try body has already been defined" }
        result = expression(body)
    }
    fun catching(name: String, configure: CatchScope.() -> Unit) {
        val (type, result) = CatchScope().apply(configure).build()
        handlers += Triple(name, type, result)
    }
    internal fun build(): Expression {
        val result = requireNotNull(result) { "A try expression needs a body" }
        require(handlers.isNotEmpty()) { "A try expression needs a catch" }
        return Expression(0) { c ->
            block(text("try"), result.render(c)) + handlers.map { (name, type, result) ->
                block(text(" catch (${identifier(name)}: ") + type.render(c) + ")", result.render(c))
            }.joined(text(""))
        }
    }
}
