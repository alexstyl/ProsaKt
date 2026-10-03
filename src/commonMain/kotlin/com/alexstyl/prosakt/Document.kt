package com.alexstyl.prosakt

/** Layout stays structured until the entire file (including prefixes and imports) is available. */
internal sealed interface Document {
    val containsLambda: Boolean get() = false
}
private data class Text(val value: String) : Document
private data class Break(val flat: String?) : Document
private data class Concat(val parts: List<Document>) : Document {
    override val containsLambda = parts.any { it.containsLambda }
}
private data class Nest(val body: Document) : Document {
    override val containsLambda = body.containsLambda
}
private data class Group(val body: Document) : Document {
    override val containsLambda = body.containsLambda
}
private data class MemberChain(val receiver: Document, val members: List<Document>) : Document {
    override val containsLambda = receiver.containsLambda || members.any { it.containsLambda }
}
private data class ExpandTrailingLambdas(val body: Document) : Document {
    override val containsLambda = body.containsLambda
}
private data class LambdaLayout(
    val header: Document,
    val body: Document,
    val singleExpression: Boolean,
    val trailing: Boolean,
    val empty: Boolean,
) : Document {
    override val containsLambda = true

    fun layout(expandTrailing: Boolean): Document {
        if (empty) return text("{}")
        val nestedLambdas = body.containsLambda
        val line = if (singleExpression && nestedLambdas.not() && (trailing && expandTrailing).not()) softLine else hardLine
        val contents = if (nestedLambdas) ExpandTrailingLambdas(body) else body
        return (header + (line + contents).nested() + line + "}").grouped()
    }
}

internal fun lambdaLayout(
    header: Document,
    body: Document,
    singleExpression: Boolean,
    trailing: Boolean,
    empty: Boolean,
): Document = LambdaLayout(header, body, singleExpression, trailing, empty)

internal fun text(value: String): Document = Text(value)
internal val hardLine: Document = Break(null)
internal val softLine: Document = Break(" ")
internal val softBreak: Document = Break("")
internal operator fun Document.plus(other: Document): Document = Concat(listOf(this, other))
internal operator fun Document.plus(other: String): Document = this + text(other)
internal fun Document.nested(): Document = Nest(this)
internal fun Document.grouped(): Document = Group(this)
internal fun Iterable<Document>.joined(separator: Document): Document =
    Concat(flatMapIndexed { index, doc -> if (index == 0) listOf(doc) else listOf(separator, doc) })

internal fun delimited(open: String, contents: List<Document>, close: String): Document =
    if (contents.isEmpty()) text(open + close)
    else (text(open) + (softBreak + contents.joined(text(",") + softLine)).nested() + softBreak + close).grouped()

internal fun block(header: Document, body: Document): Document =
    header + " {" + (hardLine + body).nested() + hardLine + "}"

internal fun member(receiver: Document, suffix: Document): Document =
    if (receiver is MemberChain) receiver.copy(members = receiver.members + suffix)
    else MemberChain(receiver, listOf(suffix))

private fun MemberChain.layout(): Document =
    (receiver + members.map { softBreak + it }.joined(text("")).nested()).grouped()

private data class Pending(val document: Document, val indent: Int, val flat: Boolean, val expandTrailing: Boolean = false)

/** A group flattens only when it and the rest of the current line fit. */
internal fun Document.print(width: Int = 100): String {
    val pending = mutableListOf(Pending(this, 0, false))
    val output = StringBuilder()
    var column = 0
    var lineIndent = 0
    var atLineStart = true

    fun fits(first: Pending): Boolean {
        var remaining = width - column
        val lookahead = pending.toMutableList().apply { add(first) }
        while (remaining >= 0 && lookahead.isNotEmpty()) {
            val item = lookahead.removeAt(lookahead.lastIndex)
            when (val doc = item.document) {
                is Text -> remaining -= doc.value.length
                is Break -> {
                    if (item.flat.not()) return true
                    val flat = doc.flat ?: return false
                    remaining -= flat.length
                }
                is Concat -> doc.parts.asReversed().forEach { lookahead += item.copy(document = it) }
                is Nest -> lookahead += item.copy(document = doc.body, indent = item.indent + 4)
                is Group -> lookahead += item.copy(document = doc.body)
                is MemberChain -> lookahead += item.copy(document = doc.layout())
                is LambdaLayout -> lookahead += item.copy(document = doc.layout(item.expandTrailing))
                is ExpandTrailingLambdas -> lookahead += item.copy(document = doc.body, expandTrailing = true)
            }
        }
        return remaining >= 0
    }

    while (pending.isNotEmpty()) {
        val item = pending.removeAt(pending.lastIndex)
        when (val doc = item.document) {
            is Text -> if (doc.value.isNotEmpty()) {
                if (atLineStart) output.append(" ".repeat(lineIndent))
                output.append(doc.value)
                column += doc.value.length
                atLineStart = false
            }
            is Break -> if (item.flat && doc.flat != null) {
                output.append(doc.flat)
                column += doc.flat.length
            } else {
                output.append('\n')
                lineIndent = item.indent
                column = lineIndent
                atLineStart = true
            }
            is Concat -> doc.parts.asReversed().forEach { pending += item.copy(document = it) }
            is Nest -> pending += item.copy(document = doc.body, indent = item.indent + 4)
            is Group -> {
                val flattened = item.copy(document = doc.body, flat = true)
                pending += flattened.copy(flat = item.flat || fits(flattened))
            }
            is MemberChain -> pending += item.copy(document = doc.layout())
            is LambdaLayout -> pending += item.copy(document = doc.layout(item.expandTrailing))
            is ExpandTrailingLambdas -> pending += item.copy(document = doc.body, expandTrailing = true)
        }
    }
    return output.toString()
}
