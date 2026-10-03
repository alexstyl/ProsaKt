package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.isEqualTo
import kotlin.test.Test

class DocumentTest {
    @Test
    fun exactlyFittingGroupsStayInlineAndOneExtraColumnBreaksThem() {
        val doc = text("call") + delimited("(", listOf(text("first"), text("second")), ")")
        assertThat(doc.print(width = 19)).isEqualTo("""
            call(first, second)
        """.trimIndent())
        assertThat(doc.print(width = 18)).isEqualTo("""
            call(
                first,
                second
            )
        """.trimIndent())
    }

    @Test
    fun fitChecksIncludeTextFollowingTheGroup() {
        val doc = text("call") + delimited("(", listOf(text("first"), text("second")), ")") + ".done()"
        assertThat(doc.print(width = 24)).isEqualTo("""
            call(
                first,
                second
            ).done()
        """.trimIndent())
    }

    @Test
    fun nestedGroupsCanStayInlineWhenTheirParentBreaks() {
        val inner = text("nested") + delimited("(", listOf(text("a"), text("b")), ")")
        val doc = text("outer") + delimited("(", listOf(inner, text("anotherArgument")), ")")
        assertThat(doc.print(width = 24)).isEqualTo("""
            outer(
                nested(a, b),
                anotherArgument
            )
        """.trimIndent())
    }

    @Test
    fun explicitBlankLinesHaveNoTrailingWhitespace() {
        val doc = block(text("fun run()"), text("first()") + hardLine + hardLine + text("last()"))
        assertThat(doc.print()).isEqualTo("""
            fun run() {
                first()

                last()
            }
        """.trimIndent())
    }

    @Test
    fun unbreakableTextIsNeverRewrittenToMeetTheWidth() {
        assertThat(text("\"a long string literal\"").print(width = 5)).isEqualTo("""
            "a long string literal"
        """.trimIndent())
    }
}
