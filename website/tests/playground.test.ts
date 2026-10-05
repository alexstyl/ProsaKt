import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseProgram } from '../src/playground/parser';
import { examples } from '../src/playground/examples';
import { generateKotlin } from '../src/vendor/prosakt/prosakt.mjs';

const generate = (source: string) => generateKotlin(JSON.stringify(parseProgram(source)));

test('Kotlin example generates a function and edits change declarations and expressions', () => {
  const source = examples[0].source.replace('"greet"', '"welcome"').replace('Hello, ', 'Hi, ');
  assert.equal(generate(source), 'package com.example\n\nfun welcome(name: String): String {\n    return "Hi, " + name\n}\n');
});

test('Compose example resolves imports, annotation, arguments, and nested calls', () => {
  const output = generate(examples[1].source);
  assert.ok(output.includes('import androidx.compose.material3.Text'));
  assert.ok(output.includes('@Composable\nfun Greeting(name: String = "World")'));
  assert.ok(output.includes('Column {\n        Text(text = "Hello, " + name)'));
  assert.ok(output.includes('Text("Made with Prosa.kt")'));
});

test('Advanced example generates constructor properties and a conditional return', () => {
  const output = generate(examples[2].source);
  assert.ok(output.includes('data class User(val name: String, var active: Boolean = true)'));
  assert.ok(output.includes('return if (active) name else "Inactive user"'));
});

test('new declarations are interpreted rather than matched to a preset', () => {
  assert.equal(generate('ktFile { ktVariable("count") { initializer { literal(42) } } }'), 'var count = 42\n');
});

test('escaped strings are decoded as Kotlin and safely regenerated', () => {
  const source = String.raw`ktFile { ktValue("message") { initializer { literal("Hi \"friend\" \$name\n\\\u263a") } } }`;
  assert.equal(generate(source), 'val message = "Hi \\"friend\\" \\$name\\n\\\\☺"\n');
});

test('comments and trailing commas work', () => {
  assert.equal(generate('/* outer /* inner */ */ ktFile { // a comment\n ktClass("User",) { modifiers = listOf("data",) } }'), 'data class User\n');
});

test('syntax errors identify the source location and recover on corrected input', () => {
  assert.throws(() => generate('ktFile {\n ktValue("name") {'), /Line 2.*Expected }/);
  assert.equal(generate('ktFile {}'), '\n');
});

test('unknown calls and wrong scopes are rejected with line numbers', () => {
  assert.throws(() => generate('ktFile {\n imaginary()\n}'), /Line 2: Unsupported builder call/);
  assert.throws(() => generate('ktFile { returns {} }'), /Unsupported builder call/);
});

test('unsupported Kotlin and string interpolation are not silently executed', () => {
  for (const source of ['val x = ktFile {}', 'ktFile { for (x in names) {} }', 'ktFile { literal("Hello $name") }', 'ktFile {}\nktFile {}']) {
    assert.throws(() => generate(source));
  }
});

test('invalid arguments and assignments are rejected', () => {
  for (const body of ['packageName(5)', 'packageName("a", "b")', 'ktClass("A") { modifiers = "data" }', 'lines(0.5)', 'lines(10000000)', 'ktClass("A") { imaginary = true }']) {
    assert.throws(() => generate(`ktFile { ${body} }`));
  }
});

test('input and nesting limits avoid unbounded work', () => {
  assert.throws(() => parseProgram(' '.repeat(50_001)), /50,000/);
  assert.throws(() => parseProgram('ktFile {' + 'body {'.repeat(65) + '}'.repeat(66)), /nested too deeply/);
});


test('numeric literals preserve decimal types', () => {
  assert.equal(generate('ktFile { ktValue("n") { initializer { literal(1.0) } } }'), 'val n = 1.0\n');
  assert.equal(generate('ktFile { ktValue("n") { initializer { literal(-12) } } }'), 'val n = -12\n');
  assert.throws(() => generate('ktFile { ktValue("n") { initializer { literal(2147483648) } } }'), /Int range/);
});

test('required blocks cannot be omitted and unused blocks are rejected', () => {
  assert.throws(() => generate('ktFile { ktFunction("run") { body() } }'), /requires a block/);
  assert.throws(() => generate('ktFile { packageName("a") {} }'), /does not accept a block/);
});

test('file headers and named argument shorthand work in the browser adapter', () => {
  assert.equal(generate(`ktFile {
    comment("Generated code. Do not edit.")
    packageName("example")
    ktValue("message") {
      initializer { call("greeting") { argument("name") { literal("Alex") } } }
    }
  }`), '// Generated code. Do not edit.\n\npackage example\n\nval message = greeting(name = "Alex")\n');
  assert.ok(generate(`ktFile {
    ktFileAnnotation("kotlin.jvm.JvmName") { argument("name") { literal("Generated") } }
  }`).startsWith('@file:JvmName(name = "Generated")'));
});
