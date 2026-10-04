export type Value = string | { number: string } | boolean | null | Value[];
export type Statement = {
  name: string;
  args: Value[];
  body: Statement[] | null;
  assignment: boolean;
  line: number;
};

// Parse builder calls, not executable JavaScript or general Kotlin programs.
export function parseProgram(source: string): Statement[] {
  if (source.length > 50_000) throw new Error('The playground supports up to 50,000 characters.');
  let position = 0;
  const fail = (message: string): never => {
    const before = source.slice(0, position);
    throw new Error(`Line ${before.split('\n').length}, column ${position - before.lastIndexOf('\n')}: ${message}`);
  };
  const skip = () => {
    while (position < source.length) {
      if (/\s/.test(source[position])) { position++; continue; }
      if (source.startsWith('//', position)) {
        while (position < source.length && source[position] !== '\n') position++;
      } else if (source.startsWith('/*', position)) {
        position += 2;
        let depth = 1;
        while (depth && position < source.length) {
          if (source.startsWith('/*', position)) { depth++; position += 2; }
          else if (source.startsWith('*/', position)) { depth--; position += 2; }
          else position++;
        }
        if (depth) fail('Unclosed comment.');
      } else break;
    }
  };
  const take = (text: string) => {
    skip();
    if (!source.startsWith(text, position)) return false;
    position += text.length;
    return true;
  };
  const expect = (text: string) => { if (!take(text)) fail(`Expected ${text}.`); };
  const identifier = () => {
    skip();
    const match = /^[A-Za-z_][A-Za-z_0-9.]*/.exec(source.slice(position));
    if (!match) return fail('Expected a Prosa.kt builder call.');
    position += match[0].length;
    return match[0];
  };
  const value = (depth = 0): Value => {
    if (depth > 64) fail('Values are nested too deeply.');
    skip();
    if (take('"')) {
      let result = '';
      while (position < source.length) {
        const char = source[position++];
        if (char === '"') return result;
        if (char === '\n' || char === '\r') fail('Use \\n inside a string.');
        if (char === '$' && /[A-Za-z_{]/.test(source[position] ?? '')) {
          fail('String templates are not supported here. Escape a literal dollar sign as \\$.');
        }
        if (char !== '\\') { result += char; continue; }
        const escape = source[position++];
        const escapes: Record<string, string> = { n: '\n', r: '\r', t: '\t', b: '\b', '"': '"', "'": "'", '\\': '\\', '$': '$' };
        if (escape === 'u') {
          const hex = source.slice(position, position + 4);
          if (!/^[\da-fA-F]{4}$/.test(hex)) fail('Expected four hexadecimal digits after \\u.');
          result += String.fromCharCode(parseInt(hex, 16));
          position += 4;
        } else if (Object.hasOwn(escapes, escape)) result += escapes[escape];
        else fail(`Unsupported escape: \\${escape}.`);
      }
      return fail('Unclosed string.');
    }
    const number = /^-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/.exec(source.slice(position));
    if (number) {
      position += number[0].length;
      const parsed = Number(number[0]);
      if (!Number.isFinite(parsed)) fail('Number is outside the supported range.');
      return { number: number[0] };
    }
    const name = identifier();
    if (name === 'true') return true;
    if (name === 'false') return false;
    if (name === 'null') return null;
    if (name === 'listOf' || name === 'emptyList') {
      expect('(');
      const values: Value[] = [];
      if (!take(')')) {
        do { values.push(value(depth + 1)); } while (take(',') && !source.slice(position).trimStart().startsWith(')'));
        expect(')');
      }
      if (name === 'emptyList' && values.length) fail('emptyList() takes no arguments.');
      return values;
    }
    if (/^(?:com\.alexstyl\.prosakt\.)?Visibility\.(Public|Internal|Protected|Private)$/.test(name)) return name.split('.').at(-1)!;
    return fail(`Unsupported value ${name}. Use literals or listOf(...).`);
  };
  const statements = (depth: number): Statement[] => {
    if (depth > 64) fail('Blocks are nested too deeply.');
    const result: Statement[] = [];
    while (true) {
      skip();
      if (position === source.length || source[position] === '}') return result;
      const line = source.slice(0, position).split('\n').length;
      const name = identifier();
      const assignment = take('=');
      const args: Value[] = [];
      let body: Statement[] | null = null;
      if (assignment) args.push(value());
      else {
        const parentheses = take('(');
        if (parentheses && !take(')')) {
          do { args.push(value()); } while (take(',') && !source.slice(position).trimStart().startsWith(')'));
          expect(')');
        }
        if (take('{')) { body = statements(depth + 1); expect('}'); }
        else if (!parentheses) fail('Expected (...) or a builder block { ... }.');
      }
      result.push({ name, args, body, assignment, line });
      take(';');
    }
  };
  const program = statements(0);
  skip();
  if (position !== source.length) fail('Unexpected closing brace.');
  if (program.length !== 1 || program[0].name !== 'ktFile' || program[0].assignment || program[0].args.length || program[0].body === null) {
    return fail('Start with one ktFile { ... } block.');
  }
  return program[0].body;
}
