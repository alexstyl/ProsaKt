package com.alexstyl.prosakt

@DslMarker annotation class ProsaKtDsl

internal fun escapeString(text: String): String {
    return buildString {
        text.forEach { character ->
            when (character) {
                '\\' -> append("\\\\")
                '"' -> append("\\\"")
                '$' -> append("\\$")
                '\n' -> append("\\n")
                '\r' -> append("\\r")
                '\t' -> append("\\t")
                '\b' -> append("\\b")
                else -> {
                    if (
                        character.code < 32 ||
                            character.code == 127 ||
                            character == '\u2028' ||
                            character == '\u2029'
                    ) {
                        append("\\u")
                        append(character.code.toString(16).padStart(4, '0'))
                    } else {
                        append(character)
                    }
                }
            }
        }
    }
}
