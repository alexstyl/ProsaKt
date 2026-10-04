import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EditorState } from '@codemirror/state';
import { CompletionContext } from '@codemirror/autocomplete';
import { prosaKtCompletions } from '../src/playground/completions';

const complete = (doc: string, explicit = true) => prosaKtCompletions(new CompletionContext(EditorState.create({doc}), doc.length, explicit));
const labels = (doc: string) => complete(doc)?.options.map(option => option.label) ?? [];

test('offers the file builder at the root and declarations inside a file', () => {
  assert.deepEqual(labels('kt'), ['ktFile']);
  assert.ok(labels('ktFile {\n kt').includes('ktFunction'));
  assert.ok(!labels('ktFile {\n kt').includes('literal'));
});
test('follows nested receiver scopes and restores the parent after closing a block', () => {
  const start = 'ktFile { ktFunction("greet") {';
  assert.ok(labels(start).includes('parameter'));
  assert.ok(labels(start + ' returns { type {').includes('nullable'));
  assert.ok(labels(start + ' returns { type {} }\n').includes('body'));
  assert.ok(labels(start + ' body { literal("hello") {').includes('plus'));
  assert.ok(!labels(start + ' body { literal("hello") {').includes('ktFunction'));
});
test('constructor parameters suggest property blocks but function parameters do not', () => {
  assert.ok(labels('ktFile { ktClass("A") { constructor { parameter("name") {').includes('property'));
  assert.ok(!labels('ktFile { ktFunction("f") { parameter("name") {').includes('property'));
});
test('ignores braces and escaped quotes in strings and comments', () => {
  assert.ok(labels('ktFile { comment("{ \\" }")\n').includes('ktFunction'));
  assert.ok(labels('ktFile { /* { /* } */ } */\n').includes('ktFunction'));
  assert.ok(labels('ktFile { // }\n').includes('ktFunction'));
});
test('does not offer builder calls in strings, comments, argument lists or unknown blocks', () => {
  for (const source of ['ktFile { packageName("co', 'ktFile { // kt', 'ktFile { /* kt', 'ktFile { packageName(', 'ktFile { unknown {']) {
    assert.equal(complete(source), null);
  }
});
test('automatic completions require a prefix and replace only that prefix', () => {
  assert.equal(complete('ktFile { ', false), null);
  const result = complete('ktFile { ktF', false)!;
  assert.equal(result.from, 9);
  assert.equal(typeof result.options.find(option => option.label === 'ktFunction')?.apply, 'function');
});
