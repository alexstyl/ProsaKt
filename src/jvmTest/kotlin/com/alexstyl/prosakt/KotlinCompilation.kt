package com.alexstyl.prosakt

import assertk.assertThat
import assertk.assertions.contains
import assertk.assertions.isEqualTo
import java.io.ByteArrayOutputStream
import java.io.PrintStream
import java.net.URLClassLoader
import java.nio.file.Files
import org.jetbrains.kotlin.cli.common.ExitCode
import org.jetbrains.kotlin.cli.jvm.K2JVMCompiler

internal fun withCompiledKotlin(
    source: String,
    includeWriter: Boolean = false,
    expectedError: String? = null,
    assertion: (ClassLoader) -> Unit = {},
) {
    val directory = Files.createTempDirectory("prosakt-compile-").toFile()
    try {
        val input = directory.resolve("Generated.kt").apply { writeText(source) }
        val output = directory.resolve("classes")
        val messages = ByteArrayOutputStream()
        val stdlib = java.io.File(Unit::class.java.protectionDomain.codeSource.location.toURI())
        val classpath = buildList {
            add(stdlib.absolutePath)
            if (includeWriter) add(java.io.File(ParameterScope::class.java.protectionDomain.codeSource.location.toURI()).absolutePath)
        }.joinToString(java.io.File.pathSeparator)
        val result = PrintStream(messages).use { stream ->
            K2JVMCompiler().exec(
                stream,
                "-no-stdlib", "-no-reflect", "-classpath", classpath,
                "-jvm-target", "17", "-d", output.absolutePath, input.absolutePath,
            )
        }
        if (expectedError == null) {
            assertThat(result, messages.toString()).isEqualTo(ExitCode.OK)
            URLClassLoader(arrayOf(output.toURI().toURL()), ParameterScope::class.java.classLoader).use(assertion)
        } else {
            assertThat(result, messages.toString()).isEqualTo(ExitCode.COMPILATION_ERROR)
            assertThat(messages.toString()).contains(expectedError)
        }
    } finally {
        directory.deleteRecursively()
    }
}
