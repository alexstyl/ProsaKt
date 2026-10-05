package com.alexstyl.prosakt

enum class Visibility(internal val keyword: String) {
    Public("public"),
    Internal("internal"),
    Protected("protected"),
    Private("private"),
}

private fun declarationModifiers(visibility: Visibility?, modifiers: List<String>): String =
    (listOfNotNull(visibility?.keyword) + modifiers).joinToString("") { "$it " }

private val keywords =
    setOf(
        "as",
        "break",
        "class",
        "continue",
        "do",
        "else",
        "false",
        "for",
        "fun",
        "if",
        "in",
        "interface",
        "is",
        "null",
        "object",
        "package",
        "return",
        "super",
        "this",
        "throw",
        "true",
        "try",
        "typealias",
        "typeof",
        "val",
        "var",
        "when",
        "while",
    )

internal fun identifier(name: String): String =
    when {
        name.startsWith('`') && name.endsWith('`') -> name
        name in keywords || name.matches(Regex("[A-Za-z_][A-Za-z0-9_]*")).not() -> "`$name`"
        else -> name
    }

internal class RenderContext(
    val packageName: String?,
    private val explicitImports: Set<String> = emptySet(),
) {
    val symbols = linkedSetOf<String>().apply { addAll(explicitImports) }
    val declarations = mutableSetOf<String>()
    var collecting = true

    private fun short(name: String) = name.substringAfterLast('.')

    private fun qualified(name: String) =
        name.split('.').joinToString(".", transform = ::identifier)

    private fun collision(name: String) =
        short(name) in declarations || symbols.any { it != name && short(it) == short(name) }

    fun symbol(name: String): String {
        if ('.' !in name) return identifier(name)
        symbols += name
        if (collecting.not() && collision(name)) return qualified(name)
        return identifier(short(name))
    }

    fun imports(): List<String> =
        (symbols.filter {
                it.substringBeforeLast('.') != packageName &&
                    collision(it).not() &&
                    it.substringBeforeLast('.') !in setOf("kotlin", "kotlin.collections")
            } + explicitImports)
            .distinct()
            .sorted()
            .map(::qualified)
}

internal class TypeReference(private val code: (RenderContext) -> Document) {
    internal fun render(c: RenderContext) = code(c)
}

@ProsaKtDsl
class TypeScope internal constructor() {
    var nullable: Boolean = false
    var annotations: List<String> = emptyList()
    private var name: String? = null
    private var function: FunctionTypeScope? = null
    private val arguments = mutableListOf<TypeReference>()

    fun reference(name: String) {
        check(this.name == null && function == null) { "Type has already been defined" }
        this.name = name
    }

    fun function(body: FunctionTypeScope.() -> Unit) {
        check(name == null && function == null) { "Type has already been defined" }
        function = FunctionTypeScope().apply(body)
    }

    fun argument(body: ArgumentScope.() -> Unit) {
        val argument = ArgumentScope().apply(body).also { it.validate() }
        arguments +=
            requireNotNull(argument.configuredType) {
                "A nested type argument must configure a type"
            }
    }

    internal fun build(): TypeReference {
        val name = name
        val function = function
        check(name != null || function != null) { "Type must define a reference or function" }
        check(function == null || arguments.isEmpty()) {
            "Function types cannot have generic arguments"
        }
        val arguments = arguments.toList()
        val nullable = nullable
        val annotations = annotations.toList()
        val signature = function?.build()
        return TypeReference { c ->
            val core =
                signature?.render(c)
                    ?: (text(c.symbol(requireNotNull(name))) +
                        if (arguments.isEmpty()) text("")
                        else delimited("<", arguments.map { it.render(c) }, ">"))
            text(annotations.joinToString("") { "@${c.symbol(it)} " }) +
                (if (nullable && signature != null) text("(") + core + ")?"
                else core + if (nullable) "?" else "")
        }
    }
}

@ProsaKtDsl
class TypeSlotScope internal constructor() {
    internal var configuredType: TypeReference? = null
        private set

    fun type(body: TypeScope.() -> Unit) {
        check(configuredType == null) { "Type has already been defined" }
        configuredType = com.alexstyl.prosakt.type(body)
    }

    internal fun build() = requireNotNull(configuredType) { "A type must be configured" }
}

@ProsaKtDsl
class FunctionTypeScope internal constructor() {
    var annotations: List<String> = emptyList()
    private val parameters = mutableListOf<Pair<String?, TypeReference>>()
    private var result: TypeReference? = null

    fun parameter(name: String? = null, body: TypeSlotScope.() -> Unit) {
        parameters += name to TypeSlotScope().apply(body).build()
    }

    fun returns(body: TypeSlotScope.() -> Unit) {
        check(result == null) { "Return type has already been defined" }
        result = TypeSlotScope().apply(body).build()
    }

    internal fun build(): TypeReference {
        val parameters = parameters.toList()
        val annotations = annotations.toList()
        val result = result ?: type { reference("Unit") }
        return TypeReference { c ->
            text(annotations.joinToString("") { "@${c.symbol(it)} " }) +
                delimited(
                    "(",
                    parameters.map { (name, type) ->
                        text(name?.let { "${identifier(it)}: " } ?: "") + type.render(c)
                    },
                    ")",
                ) +
                " -> " +
                result.render(c)
        }
    }
}

internal fun type(body: TypeScope.() -> Unit): TypeReference = TypeScope().apply(body).build()

internal class Parameter(
    val name: String,
    internal val type: TypeReference?,
    internal val initializer: Expression?,
    private val property: String?,
    private val modifiers: List<String>,
) {
    internal fun render(c: RenderContext): Document =
        text((modifiers + listOfNotNull(property)).joinToString("") { "$it " } + identifier(name)) +
            (type?.let { text(": ") + it.render(c) } ?: text("")) +
            (initializer?.let { text(" = ") + it.render(c) } ?: text(""))
}

@ProsaKtDsl
open class ParameterScope internal constructor() {
    private var declaredType: TypeReference? = null
    private var initializer: Expression? = null
    private val modifiers = mutableListOf<String>()

    fun type(body: TypeScope.() -> Unit) {
        check(declaredType == null) { "Parameter type has already been defined" }
        declaredType = com.alexstyl.prosakt.type(body)
    }

    fun default(body: ExpressionScope.() -> Unit) {
        initializer = expression(body)
    }

    fun modifier(value: String) {
        modifiers += value
    }

    internal fun build(name: String, property: String? = null) =
        Parameter(name, declaredType, initializer, property, modifiers.toList())
}

internal fun parameter(name: String, body: ParameterScope.() -> Unit = {}): Parameter =
    ParameterScope().apply(body).build(name)

@ProsaKtDsl
open class CodeScope internal constructor() {
    internal val code = CodeBuilder()

    fun line() = code.line()

    fun lines(count: Int) = code.lines(count)

    fun comment(text: String) = code.comment(text)
}

@ProsaKtDsl
open class DeclarationContainerScope internal constructor() : CodeScope() {
    fun ktValue(name: String, configure: PropertyScope.() -> Unit) = code.value(name, configure)

    fun ktVariable(name: String, configure: PropertyScope.() -> Unit) =
        code.variable(name, configure)

    fun ktFunction(name: String, configure: FunctionScope.() -> Unit = {}) =
        code.function(name, configure)

    fun ktClass(name: String, configure: ClassScope.() -> Unit = {}) =
        code.defineClass(name, configure)
}

@ProsaKtDsl
open class BlockScope internal constructor() : DeclarationContainerScope(), ExpressionScope {
    fun returnStatement(label: String? = null, body: (ExpressionScope.() -> Unit)? = null) {
        code.returnStatement(body?.let { expression(it) }, label)
    }

    fun ifStatement(configure: IfStatementScope.() -> Unit) {
        val scope = IfStatementScope().apply(configure)
        val condition = requireNotNull(scope.condition) { "An if statement needs a condition" }
        val body = requireNotNull(scope.statements) { "An if statement needs a body" }
        code.emit { c -> block(text("if (") + condition.render(c) + ")", body.render(c)) }
    }
}

@ProsaKtDsl
class IfStatementScope internal constructor() {
    internal var condition: Expression? = null
    internal var statements: CodeBuilder? = null

    fun condition(body: ExpressionScope.() -> Unit) {
        check(condition == null) { "Condition has already been defined" }
        condition = expression(body)
    }

    fun body(body: BlockScope.() -> Unit) {
        check(statements == null) { "Body has already been defined" }
        statements = BlockScope().apply(body).code
    }
}

class FunctionBodyScope internal constructor() : BlockScope()

class GetterBodyScope internal constructor() : BlockScope()

class LambdaBodyScope internal constructor() : BlockScope() {
    internal val parameters = mutableListOf<Parameter>()

    fun parameter(name: String, configure: ParameterScope.() -> Unit = {}) {
        parameters += com.alexstyl.prosakt.parameter(name, configure)
    }
}

@ProsaKtDsl
open class DeclarationScope internal constructor() {
    var visibility: Visibility? = null
    var modifiers: List<String> = emptyList()
    var annotations: List<String> = emptyList()

    internal fun prefix(c: RenderContext): Document =
        annotations.map { text("@${c.symbol(it)}") + hardLine }.joined(text("")) +
            declarationModifiers(visibility, modifiers)
}

@ProsaKtDsl
class FunctionScope internal constructor() : DeclarationScope() {
    internal val parameters = mutableListOf<Parameter>()
    private var resultType: TypeReference? = null
    private var statements: CodeBuilder? = null

    fun parameter(name: String, configure: ParameterScope.() -> Unit = {}) {
        parameters += com.alexstyl.prosakt.parameter(name, configure)
    }

    fun returns(configure: TypeSlotScope.() -> Unit) {
        check(resultType == null) { "Return type has already been defined" }
        resultType = TypeSlotScope().apply(configure).build()
    }

    fun body(block: FunctionBodyScope.() -> Unit) {
        check(statements == null) { "Function body has already been defined" }
        statements = FunctionBodyScope().apply(block).code
    }

    internal fun render(name: String, c: RenderContext): Document {
        val result = resultType?.render(c)
        val signature =
            prefix(c) +
                "fun ${identifier(name)}" +
                delimited("(", parameters.map { it.render(c) }, ")") +
                (result?.let { text(": ") + it } ?: text(""))
        if ("abstract" in modifiers) {
            check(statements == null) { "An abstract function cannot have a body" }
            return signature
        }
        return block(
            signature,
            statements?.render(c, result != null && result.print() != "Unit") ?: text(""),
        )
    }
}

@ProsaKtDsl
class GetterScope internal constructor() : DeclarationScope() {
    private var statements: CodeBuilder? = null

    fun body(block: GetterBodyScope.() -> Unit) {
        check(statements == null) { "Getter body has already been defined" }
        statements = GetterBodyScope().apply(block).code
    }

    internal fun render(c: RenderContext): Document =
        prefix(c) +
            (statements?.let { block(text("get()"), it.render(c, returns = true)) } ?: text("get"))
}

@ProsaKtDsl
class ConstructorScope internal constructor() {
    internal val parameters = mutableListOf<Parameter>()

    fun parameter(name: String, configure: ConstructorParameterScope.() -> Unit = {}) {
        parameters += ConstructorParameterScope().apply(configure).buildConstructorParameter(name)
    }
}

@ProsaKtDsl
class ConstructorParameterScope internal constructor() : ParameterScope() {
    private var property: ConstructorPropertyScope? = null

    fun property(configure: ConstructorPropertyScope.() -> Unit) {
        check(property == null) { "Constructor property has already been defined" }
        property = ConstructorPropertyScope().apply(configure)
    }

    internal fun buildConstructorParameter(name: String): Parameter =
        build(name, property?.render())
}

@ProsaKtDsl
class ConstructorPropertyScope internal constructor() {
    var visibility: Visibility? = null
    var mutable: Boolean = false

    internal fun render(): String =
        declarationModifiers(visibility, emptyList()) + if (mutable) "var" else "val"
}

@ProsaKtDsl
open class MemberScope internal constructor() : DeclarationContainerScope() {
    var visibility: Visibility? = null
    var modifiers: List<String> = emptyList()
    var annotations: List<String> = emptyList()

    fun ktInterface(name: String, configure: InterfaceScope.() -> Unit = {}) =
        code.defineInterface(name, configure)

    fun ktObject(name: String, configure: ObjectScope.() -> Unit = {}) =
        code.defineObject(name, configure)

    private val supertypes = mutableListOf<TypeReference>()

    fun supertype(body: TypeScope.() -> Unit) {
        supertypes += type(body)
    }

    internal open fun constructorHeader(c: RenderContext): Document = text("")

    internal fun render(kind: String, name: String?, c: RenderContext): Document {
        val prefix =
            annotations.map { text("@${c.symbol(it)}") + hardLine }.joined(text("")) +
                declarationModifiers(visibility, modifiers)
        val header =
            prefix + kind + (name?.let { " ${identifier(it)}" } ?: "") + constructorHeader(c) +
                if (supertypes.isEmpty()) text("")
                else text(" : ") + supertypes.map { it.render(c) }.joined(text(", "))
        val contents = code.render(c)
        return if (code.isEmpty) header else block(header, contents)
    }
}

class ClassScope internal constructor() : MemberScope() {
    fun companionObject(name: String? = null, configure: ObjectScope.() -> Unit = {}) =
        code.companionObject(name, configure)

    internal var constructor: ConstructorScope? = null
        private set

    @kotlin.js.JsName("configureConstructor")
    fun constructor(configure: ConstructorScope.() -> Unit) {
        check(constructor == null) { "Primary constructor has already been defined" }
        constructor = ConstructorScope().apply(configure)
    }

    internal override fun constructorHeader(c: RenderContext): Document =
        constructor?.let { delimited("(", it.parameters.map { it.render(c) }, ")") } ?: text("")
}

class InterfaceScope internal constructor() : MemberScope() {
    fun companionObject(name: String? = null, configure: ObjectScope.() -> Unit = {}) =
        code.companionObject(name, configure)
}

class ObjectScope internal constructor() : MemberScope()

@ProsaKtDsl
class PropertyScope internal constructor() : DeclarationScope() {
    internal var declaredType: TypeReference? = null
        private set

    fun type(body: TypeScope.() -> Unit) {
        check(declaredType == null) { "Property type has already been defined" }
        declaredType = com.alexstyl.prosakt.type(body)
    }

    internal var initializer: Expression? = null
        private set

    private var getter: GetterScope? = null
    private var delegate: Expression? = null

    fun initializer(body: ExpressionScope.() -> Unit) {
        check(initializer == null) { "Property initializer has already been defined" }
        check(delegate == null) { "A property cannot have both an initializer and a delegate" }
        initializer = expression(body)
    }

    fun delegate(body: ExpressionScope.() -> Unit) {
        check(delegate == null) { "Property delegate has already been defined" }
        check(initializer == null) { "A property cannot have both an initializer and a delegate" }
        check(getter == null) { "A delegated property cannot have a custom getter" }
        delegate = expression(body)
    }

    fun getter(configure: GetterScope.() -> Unit) {
        check(delegate == null) { "A delegated property cannot have a custom getter" }
        check(getter == null) { "Getter has already been defined" }
        getter = GetterScope().apply(configure)
    }

    internal fun render(keyword: String, name: String, c: RenderContext): Document =
        prefix(c) +
            "$keyword ${identifier(name)}" +
            (declaredType?.let { text(": ") + it.render(c) } ?: text("")) +
            (initializer?.let { text(" = ") + it.render(c) } ?: text("")) +
            (delegate?.let { text(" by ") + it.render(c) } ?: text("")) +
            (getter?.let { (hardLine + it.render(c)).nested() } ?: text(""))
}

class FileScope internal constructor() : DeclarationContainerScope() {
    fun ktInterface(name: String, configure: InterfaceScope.() -> Unit = {}) =
        code.defineInterface(name, configure)

    fun ktObject(name: String, configure: ObjectScope.() -> Unit = {}) =
        code.defineObject(name, configure)

    internal val explicitImports = linkedSetOf<String>()
    internal val fileAnnotations = mutableListOf<Pair<String, AnnotationScope>>()

    fun ktImport(name: String) {
        require(name.isNotBlank()) { "Import name cannot be blank" }
        explicitImports += name
    }

    fun ktFileAnnotation(name: String, configure: AnnotationScope.() -> Unit = {}) {
        require(name.isNotBlank()) { "Annotation name cannot be blank" }
        fileAnnotations += name to AnnotationScope().apply(configure)
    }

    internal var packageValue: String? = null

    fun packageName(name: String) {
        require(name.isNotBlank()) { "Package name cannot be blank" }
        check(packageValue == null) { "Package name has already been declared" }
        packageValue = name
    }
}

fun ktFile(body: FileScope.() -> Unit): String {
    val scope = FileScope().apply(body)
    val context = RenderContext(scope.packageValue, scope.explicitImports)
    scope.code.render(context)
    scope.fileAnnotations.forEach { (name, annotation) -> annotation.render(name, context) }
    context.collecting = false
    val code = scope.code.render(context)
    val sections = mutableListOf<Document>()
    if (scope.fileAnnotations.isNotEmpty()) {
        sections +=
            scope.fileAnnotations
                .map { (name, annotation) -> text("@file:") + annotation.render(name, context) }
                .joined(hardLine)
    }
    scope.packageValue?.let {
        sections += text("package ${it.split('.').joinToString(".", transform = ::identifier)}")
    }
    val imports = context.imports()
    if (imports.isNotEmpty()) sections += imports.map { text("import $it") }.joined(hardLine)
    sections += code
    return (sections.joined(hardLine + hardLine) + hardLine).print()
}
