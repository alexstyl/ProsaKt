package com.alexstyl.prosakt

private class Entry(val expression: Expression? = null, val blank: Boolean = false, val code: (RenderContext) -> Document)

internal class CodeBuilder {
    private val entries = mutableListOf<Entry>()
    internal val isSingleExpression: Boolean get() = entries.size == 1 && entries.single().expression != null
    internal val isEmpty: Boolean get() = entries.isEmpty()
    internal val declaredNames = mutableSetOf<String>()
    internal fun expression(expression: Expression) {
        entries += Entry(expression.takeUnless { it.statement }) { c -> expression.render(c) }
    }
    internal fun emit(code: (RenderContext) -> Document) { entries += Entry(code = code) }
    internal fun render(c: RenderContext, returns: Boolean = false): Document {
        c.declarations += declaredNames
        val last = entries.indexOfLast { it.blank.not() }
        return entries.mapIndexed { index, entry ->
            if (returns && index == last && entry.expression != null) text("return ") + entry.expression.render(c)
            else entry.code(c)
        }.joined(hardLine)
    }
    fun line() { entries += Entry(blank = true) { text("") } }
    fun lines(count: Int) { repeat(count.coerceAtLeast(0)) { line() } }
    fun comment(text: String) { emit { _ -> text.lines().map { text("// $it") }.joined(hardLine) } }
    fun returnStatement(expression: Expression? = null, label: String? = null) {
        emit { c -> text("return" + (label?.let { "@${identifier(it)}" } ?: "")) + (expression?.let { text(" ") + it.render(c) } ?: text("")) }
    }
    fun value(name: String, configure: PropertyScope.() -> Unit) {
        property("val", name, configure)
    }

    fun variable(name: String, configure: PropertyScope.() -> Unit) {
        property("var", name, configure)
    }

    private fun property(keyword: String, name: String, configure: PropertyScope.() -> Unit) {
        val property = PropertyScope().apply(configure)
        declaredNames += name
        emit { c -> property.render(keyword, name, c) }
    }

    fun function(name: String, configure: FunctionScope.() -> Unit = {}) {
        val function = FunctionScope().apply(configure)
        declaredNames += name
        emit { c -> function.render(name, c) }
    }

    fun defineClass(name: String, configure: ClassScope.() -> Unit = {}) {
        val scope = ClassScope().apply(configure)
        container("class", name, scope)
    }
    fun defineInterface(name: String, configure: InterfaceScope.() -> Unit = {}) {
        container("interface", name, InterfaceScope().apply(configure))
    }
    fun defineObject(name: String, configure: ObjectScope.() -> Unit = {}) {
        container("object", name, ObjectScope().apply(configure))
    }
    fun companionObject(name: String? = null, configure: ObjectScope.() -> Unit = {}) {
        container("companion object", name, ObjectScope().apply(configure))
    }
    private fun container(kind: String, name: String?, scope: MemberScope) {
        name?.let { declaredNames += it }
        emit { c -> scope.render(kind, name, c) }
    }
}

