import { snippetCompletion, type CompletionContext, type CompletionResult } from '@codemirror/autocomplete';

type Builder = { label: string; template: string; detail: string; child?: string };
const call = (label: string, argument: string, detail: string, child?: string): Builder => ({
  label, detail, child,
  template: `${label}(${argument})${child ? ' {\n\t${}\n}' : ''}`,
});
const block = (label: string, child: string, detail: string): Builder => ({ label, child, detail, template: `${label} {\n\t\${}\n}` });
const property = (label: string, value: string, detail: string): Builder => ({ label, detail, template: `${label} = ${value}` });
const declarations = [
  call('ktFunction', '"${name}"', 'Declare a function', 'function'),
  call('ktClass', '"${Name}"', 'Declare a class', 'class'),
  call('ktValue', '"${name}"', 'Declare a val', 'property'),
  call('ktVariable', '"${name}"', 'Declare a var', 'property'),
  call('comment', '"${text}"', 'Add a code comment'),
  call('line', '', 'Add a blank line'),
  call('lines', '${1}', 'Add blank lines'),
];
const members = [
  ...declarations,
  call('ktInterface', '"${Name}"', 'Declare an interface', 'interface'),
  call('ktObject', '"${Name}"', 'Declare an object', 'object'),
];
const modifiers = [
  property('modifiers', 'listOf("${data}")', 'Declaration modifiers'),
  property('annotations', 'listOf("${com.example.Annotation}")', 'Declaration annotations'),
  property('visibility', 'Visibility.${Private}', 'Declaration visibility'),
];
const type = block('type', 'type', 'Configure a type');
const parameter = call('parameter', '"${name}"', 'Declare a parameter', 'parameter');
const expressions = [
  call('literal', '${"Hello"}', 'Emit a literal value'),
  call('reference', '"${name}"', 'Reference a value'),
  call('call', '"${functionName}"', 'Call a function', 'call'),
  call('nullValue', '', 'Emit null'),
  block('chain', 'chain', 'Build an expression chain'),
  block('lambdaExpression', 'lambda', 'Emit a lambda'),
  block('ifExpression', 'ifExpression', 'Emit a conditional expression'),
];
const statements = [
  ...declarations, ...expressions,
  block('returnStatement', 'expression', 'Return a value'),
  block('ifStatement', 'ifStatement', 'Emit a conditional statement'),
];
const scopes: Record<string, Builder[]> = {
  root: [block('ktFile', 'file', 'Generate a Kotlin file')],
  file: [...members, call('packageName', '"${com.example}"', 'Set the package'), call('ktImport', '"${com.example.Type}"', 'Add an import'), call('ktFileAnnotation', '"${Annotation}"', 'Add a file annotation', 'annotation')],
  class: [...members, ...modifiers, block('constructor', 'constructor', 'Primary constructor'), block('companionObject', 'object', 'Companion object')],
  interface: [...members, ...modifiers, block('companionObject', 'object', 'Companion object')],
  object: [...members, ...modifiers],
  function: [...modifiers, parameter, block('returns', 'returns', 'Configure the return type'), block('body', 'body', 'Function body')],
  constructor: [{ ...parameter, child: 'constructorParameter' }],
  parameter: [type, block('default', 'expression', 'Default parameter value'), call('modifier', '"${vararg}"', 'Parameter modifier')],
  constructorParameter: [type, block('default', 'expression', 'Default parameter value'), call('modifier', '"${vararg}"', 'Parameter modifier'), block('property', 'constructorProperty', 'Make this parameter a property')],
  constructorProperty: [property('mutable', '${true}', 'Use var instead of val'), property('visibility', 'Visibility.${Private}', 'Property visibility')],
  returns: [type],
  type: [call('reference', '"${String}"', 'Reference a type'), block('argument', 'argument', 'Generic type argument'), property('nullable', '${true}', 'Make the type nullable'), property('annotations', 'listOf("${Annotation}")', 'Type annotations')],
  property: [...modifiers, type, block('initializer', 'expression', 'Initial value'), block('delegate', 'expression', 'Property delegate'), block('getter', 'getter', 'Custom getter')],
  getter: [...modifiers, block('body', 'body', 'Getter body')],
  body: statements,
  lambda: [...statements, parameter],
  expression: expressions,
  call: [block('argument', 'argument', 'Call argument'), block('trailingLambda', 'lambda', 'Trailing lambda')],
  annotation: [block('argument', 'argument', 'Annotation argument')],
  argument: [...expressions, type, property('name', '"${name}"', 'Named argument')],
  ifExpression: [block('condition', 'expression', 'Condition'), block('then', 'expression', 'Value when true'), block('elseCase', 'expression', 'Value when false')],
  ifStatement: [block('condition', 'expression', 'Condition'), block('body', 'body', 'Statements when true')],
  chain: [
    ...expressions.filter(item => ['reference', 'literal', 'call'].includes(item.label)),
    call('safeCall', '"${functionName}"', 'Null-safe call', 'call'),
    call('property', '"${name}"', 'Access a property'),
    call('safeProperty', '"${name}"', 'Null-safe property access'),
    ...['plus', 'minus', 'times', 'div', 'rem', 'equalTo', 'notEqualTo', 'and', 'or', 'orElse', 'assign', 'index'].map(name => block(name, 'expression', 'Expression operation')),
    ...['classLiteral', 'not', 'unaryMinus'].map(name => call(name, '', 'Expression operation')),
    block('isType', 'type', 'Type check'),
    call('infixCall', '"${name}"', 'Infix function call', 'expression'),
  ],
};
// A chain after literal/reference has the same operations, without a starting expression.
scopes.chainTail = scopes.chain.filter(item => !['reference', 'literal'].includes(item.label));

// Track incomplete builder blocks without requiring the edited program to parse successfully.
function scopeAt(source: string): string | null {
  const stack = ['root'];
  const parentheses: string[] = [];
  let pending = '';
  for (let i = 0; i < source.length;) {
    if (source.startsWith('//', i)) {
      const end = source.indexOf('\n', i + 2);
      if (end === -1) return null;
      i = end + 1;
    } else if (source.startsWith('/*', i)) {
      let depth = 1;
      i += 2;
      while (i < source.length && depth) {
        if (source.startsWith('/*', i)) { depth++; i += 2; }
        else if (source.startsWith('*/', i)) { depth--; i += 2; }
        else i++;
      }
      if (depth) return null;
    } else if (source[i] === '"') {
      i++;
      while (i < source.length && source[i] !== '"') i += source[i] === '\\' ? 2 : 1;
      if (i >= source.length) return null;
      i++;
    } else if (/[A-Za-z_]/.test(source[i])) {
      const word = /^[A-Za-z_][A-Za-z_0-9]*/.exec(source.slice(i))![0];
      pending = word;
      i += word.length;
    } else {
      const char = source[i++];
      if (char === '(') parentheses.push(pending);
      if (char === ')') pending = parentheses.pop() ?? '';
      if (char === '{') {
        const parent = stack.at(-1)!;
        const builder = scopes[parent]?.find(item => item.label === pending);
        const child = ['literal', 'reference'].includes(pending) && ['expression', 'body', 'lambda', 'argument', 'chain'].includes(parent)
          ? 'chainTail' : builder?.child;
        stack.push(child ?? 'unknown');
        pending = '';
      }
      if (char === '}') { if (stack.length > 1) stack.pop(); pending = ''; }
      if (char === '=' || char === ';') pending = '';
    }
  }
  return parentheses.length ? null : stack.at(-1)!;
}

export function prosaKtCompletions(context: CompletionContext): CompletionResult | null {
  const word = context.matchBefore(/[A-Za-z_][A-Za-z_0-9]*/);
  if (!word && !context.explicit) return null;
  const from = word?.from ?? context.pos;
  const scope = scopeAt(context.state.doc.sliceString(0, from));
  if (!scope || !scopes[scope]) return null;
  return {
    from,
    options: scopes[scope].map(({ label, template, detail }) => snippetCompletion(template, { label, detail, type: template.includes(' = ') ? 'property' : 'function' })),
    validFor: /^[A-Za-z_][A-Za-z_0-9]*$/,
  };
}
