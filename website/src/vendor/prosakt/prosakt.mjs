import {
  VOID7hggqo3abtya as VOID,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instance104q5opgivhr8 as Unit_instance,
  lines3g90sq0zeq43v as lines,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$1s1wkrw82c0iw as ArrayList_init_$Create$,
  ArrayList_init_$Create$2qnngtk1et9r9 as ArrayList_init_$Create$_0,
  LinkedHashSet_init_$Create$3qv13l7kzf0ni as LinkedHashSet_init_$Create$,
  singleo93pzdgfc557 as single,
  addAll1k27qatfgp3k5 as addAll,
  checkIndexOverflow3frtmheghr0th as checkIndexOverflow,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  Enum3alwj03lh1n41 as Enum,
  listOfNotNull1v4ggfackvuny as listOfNotNull,
  plus310ted5e4i90h as plus,
  joinToString1cxrrlmo0chqs as joinToString,
  Regex_init_$Create$xe1wdfnzfij1 as Regex_init_$Create$,
  _Char___init__impl__6a9atx281r2pd9o601g as _Char___init__impl__6a9atx,
  startsWith1bgirhbedtv2y as startsWith,
  endsWith278181ii8uuo as endsWith,
  substringAfterLast3r0t0my8cpqhk as substringAfterLast,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  split3d3yeauc4rm2n as split,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  emptySetcxexqki71qfa as emptySet,
  contains2el4s70rdq4ld as contains,
  substringBeforeLastqh7oeuvefdek as substringBeforeLast,
  setOf45ia9pnfhe90 as setOf,
  distinct10qe1scfdvu5k as distinct,
  sorted354mfsiv4s7x5 as sorted,
  toString1pkumu07cwy4m as toString,
  IllegalArgumentException_init_$Create$310sysrobvll9 as IllegalArgumentException_init_$Create$,
  emptyList1g2z5xcrvp2zy as emptyList,
  IllegalStateException_init_$Create$3ib9qa3pip8n4 as IllegalStateException_init_$Create$,
  toList3jhuyej2anx2q as toList,
  isBlank1dvkhjjvox3p0 as isBlank,
  to2cs3ny02qtbcb as to,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  listOf1jh22dvmctj1r as listOf,
  listOfvhqybd2zx248 as listOf_0,
  plus20p0vtfmu0596 as plus_0,
  mutableListOf6oorvk2mtdmp as mutableListOf,
  StringBuilder_init_$Create$2mwec1027v00x as StringBuilder_init_$Create$,
  get_lastIndex1yw0x4k50k51w as get_lastIndex,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  asReversed308kw52j6ls1u as asReversed,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  repeat2w4c6j8zoq09o as repeat,
  toMutableList20rdgwi7d3cwi as toMutableList,
  toString30pk9tzaqopn as toString_0,
  isNaNymqb93xtq8w8 as isNaN_0,
  isNaN3ixot6a1mjs5h as isNaN_1,
  ULong3f9k7s38t3rfp as ULong,
  UInt1hthisrv6cndi as UInt,
  Long2qws0ah9gnpki as Long,
  toString35i91qxh73cps as toString_1,
  replace3le3ie7l9k8aq as replace,
  Char19o2r8palgjof as Char,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixd2xlaiz5u3itpv as Char__toInt_impl_vasixd,
  toString1h6jjoch8cjt8 as toString_2,
  padStart36w1507hs626a as padStart,
  startsWith26w8qjqapeeq6 as startsWith_0,
  toDouble1kn912gjoizjp as toDouble,
  numberToInt1ygmcfwhs2fkq as numberToInt,
  toIntOrNull3w2d066r9pvwm as toIntOrNull,
  until1jbpn0z3f8lbg as until,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(Entry, 'Entry');
initMetadataForClass(CodeBuilder, 'CodeBuilder', CodeBuilder);
initMetadataForClass(Visibility, 'Visibility', VOID, Enum);
initMetadataForClass(RenderContext, 'RenderContext');
initMetadataForClass(TypeReference, 'TypeReference');
initMetadataForClass(TypeScope, 'TypeScope');
initMetadataForClass(TypeSlotScope, 'TypeSlotScope');
initMetadataForClass(Parameter, 'Parameter');
initMetadataForClass(ParameterScope, 'ParameterScope');
initMetadataForClass(CodeScope, 'CodeScope');
initMetadataForClass(DeclarationContainerScope, 'DeclarationContainerScope', VOID, CodeScope);
function reference(name, chain) {
  record(this, reference_0(name), chain);
}
function literal(value, chain) {
  record(this, literal_2(value), chain);
}
function literal_0(value, chain) {
  record(this, literal_3(value), chain);
}
function literal_1(value, chain) {
  record(this, literal_4(value), chain);
}
function nullValue(chain) {
  record(this, nullValue_0(), chain);
}
function nullValue$default(chain, $super) {
  var tmp;
  if (chain === VOID) {
    tmp = ExpressionScope$nullValue$lambda;
  } else {
    tmp = chain;
  }
  chain = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.ob(chain);
    tmp_0 = Unit_instance;
  } else {
    nullValue(chain);
    tmp_0 = Unit_instance;
  }
  return tmp_0;
}
function call(name, configure) {
  accept(this, buildCall(name, configure));
}
function chain(body) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ChainScope(null, this instanceof BlockScope);
  body(this_0);
  accept(this, this_0.af());
}
function lambdaExpression(body) {
  accept(this, buildLambda(body));
}
function ifExpression(configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new IfExpressionScope();
  configure(this_0);
  accept(this, this_0.ga());
}
initMetadataForInterface(ExpressionScope, 'ExpressionScope');
initMetadataForClass(BlockScope, 'BlockScope', VOID, DeclarationContainerScope, [DeclarationContainerScope, ExpressionScope]);
initMetadataForClass(IfStatementScope, 'IfStatementScope');
initMetadataForClass(FunctionBodyScope, 'FunctionBodyScope', VOID, BlockScope);
initMetadataForClass(GetterBodyScope, 'GetterBodyScope', VOID, BlockScope);
initMetadataForClass(LambdaBodyScope, 'LambdaBodyScope', VOID, BlockScope);
initMetadataForClass(DeclarationScope, 'DeclarationScope');
initMetadataForClass(FunctionScope, 'FunctionScope', VOID, DeclarationScope);
initMetadataForClass(GetterScope, 'GetterScope', VOID, DeclarationScope);
initMetadataForClass(ConstructorScope, 'ConstructorScope');
initMetadataForClass(ConstructorParameterScope, 'ConstructorParameterScope', VOID, ParameterScope);
initMetadataForClass(ConstructorPropertyScope, 'ConstructorPropertyScope');
initMetadataForClass(MemberScope, 'MemberScope', VOID, DeclarationContainerScope);
initMetadataForClass(ClassScope, 'ClassScope', VOID, MemberScope);
initMetadataForClass(InterfaceScope, 'InterfaceScope', VOID, MemberScope);
initMetadataForClass(ObjectScope, 'ObjectScope', VOID, MemberScope);
initMetadataForClass(PropertyScope, 'PropertyScope', VOID, DeclarationScope);
initMetadataForClass(FileScope, 'FileScope', VOID, DeclarationContainerScope);
function get_containsLambda() {
  return false;
}
initMetadataForInterface(Document, 'Document');
initMetadataForClass(Text, 'Text', VOID, VOID, [Document]);
initMetadataForClass(Break, 'Break', VOID, VOID, [Document]);
initMetadataForClass(Concat, 'Concat', VOID, VOID, [Document]);
initMetadataForClass(Nest, 'Nest', VOID, VOID, [Document]);
initMetadataForClass(Group, 'Group', VOID, VOID, [Document]);
initMetadataForClass(MemberChain, 'MemberChain', VOID, VOID, [Document]);
initMetadataForClass(ExpandTrailingLambdas, 'ExpandTrailingLambdas', VOID, VOID, [Document]);
initMetadataForClass(LambdaLayout, 'LambdaLayout', VOID, VOID, [Document]);
initMetadataForClass(Pending, 'Pending');
initMetadataForClass(Expression, 'Expression');
initMetadataForClass(SingleExpressionScope, 'SingleExpressionScope', SingleExpressionScope, VOID, [ExpressionScope]);
initMetadataForClass(ChainScope, 'ChainScope');
initMetadataForClass(ArgumentScope, 'ArgumentScope', VOID, VOID, [ExpressionScope]);
initMetadataForClass(AnnotationScope, 'AnnotationScope');
initMetadataForClass(CallScope, 'CallScope');
initMetadataForClass(IfExpressionScope, 'IfExpressionScope');
//endregion
function Entry(expression, blank, code) {
  expression = expression === VOID ? null : expression;
  blank = blank === VOID ? false : blank;
  this.p7_1 = expression;
  this.q7_1 = blank;
  this.r7_1 = code;
}
function property($this, keyword, name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new PropertyScope();
  configure(this_0);
  var property = this_0;
  // Inline function 'kotlin.collections.plusAssign' call
  $this.t7_1.e(name);
  $this.u7(CodeBuilder$property$lambda(property, keyword, name));
}
function container($this, kind, name, scope) {
  if (name == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.plusAssign' call
    $this.t7_1.e(name);
  }
  $this.u7(CodeBuilder$container$lambda(scope, kind, name));
}
function CodeBuilder$expression$lambda($expression) {
  return function (c) {
    return $expression.y7(c);
  };
}
function CodeBuilder$line$lambda(it) {
  return text('');
}
function CodeBuilder$comment$lambda($text) {
  return function (_unused_var__etf5q3) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = lines($text);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var tmp$ret$0 = text('// ' + item);
      destination.e(tmp$ret$0);
    }
    return joined(destination, get_hardLine());
  };
}
function CodeBuilder$returnStatement$lambda($label, $expression) {
  return function (c) {
    var tmp0_safe_receiver = $label;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = '@' + identifier(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = text('return' + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs));
    var tmp2_safe_receiver = $expression;
    var tmp_1;
    if (tmp2_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = plus_1(text(' '), tmp2_safe_receiver.y7(c));
    }
    var tmp3_elvis_lhs = tmp_1;
    return plus_1(tmp_0, tmp3_elvis_lhs == null ? text('') : tmp3_elvis_lhs);
  };
}
function CodeBuilder$property$lambda($property, $keyword, $name) {
  return function (c) {
    return $property.g8($keyword, $name, c);
  };
}
function CodeBuilder$function$lambda($function, $name) {
  return function (c) {
    return $function.n8($name, c);
  };
}
function CodeBuilder$container$lambda($scope, $kind, $name) {
  return function (c) {
    return $scope.s8($kind, $name, c);
  };
}
function CodeBuilder() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.s7_1 = ArrayList_init_$Create$_0();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableSetOf' call
  tmp_0.t7_1 = LinkedHashSet_init_$Create$();
}
protoOf(CodeBuilder).t8 = function () {
  return this.s7_1.j() === 1 && !(single(this.s7_1).p7_1 == null);
};
protoOf(CodeBuilder).u8 = function () {
  return this.s7_1.e1();
};
protoOf(CodeBuilder).v8 = function (expression) {
  var tmp2 = this.s7_1;
  // Inline function 'kotlin.takeUnless' call
  var tmp;
  if (!expression.w7_1) {
    tmp = expression;
  } else {
    tmp = null;
  }
  var tmp_0 = tmp;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new Entry(tmp_0, VOID, CodeBuilder$expression$lambda(expression));
  tmp2.e(element);
};
protoOf(CodeBuilder).u7 = function (code) {
  var tmp0 = this.s7_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new Entry(VOID, VOID, code);
  tmp0.e(element);
};
protoOf(CodeBuilder).w8 = function (c, returns) {
  var tmp0 = c.a9_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var elements = this.t7_1;
  addAll(tmp0, elements);
  var tmp2 = this.s7_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlin.collections.indexOfLast' call
    var iterator = tmp2.g1(tmp2.j());
    while (iterator.p2()) {
      if (!iterator.r2().q7_1) {
        tmp$ret$2 = iterator.q2();
        break $l$block;
      }
    }
    tmp$ret$2 = -1;
  }
  var last = tmp$ret$2;
  // Inline function 'kotlin.collections.mapIndexed' call
  var this_0 = this.s7_1;
  // Inline function 'kotlin.collections.mapIndexedTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var index = 0;
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    var index_0 = checkIndexOverflow(_unary__edvuaz);
    var tmp$ret$3 = returns && index_0 === last && !(item.p7_1 == null) ? plus_1(text('return '), item.p7_1.y7(c)) : item.r7_1(c);
    destination.e(tmp$ret$3);
  }
  return joined(destination, get_hardLine());
};
protoOf(CodeBuilder).c9 = function (c, returns, $super) {
  returns = returns === VOID ? false : returns;
  return $super === VOID ? this.w8(c, returns) : $super.w8.call(this, c, returns);
};
protoOf(CodeBuilder).d9 = function () {
  var tmp0 = this.s7_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new Entry(VOID, true, CodeBuilder$line$lambda);
  tmp0.e(element);
};
protoOf(CodeBuilder).e9 = function (count) {
  // Inline function 'kotlin.repeat' call
  var times = coerceAtLeast(count, 0);
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.d9();
    }
     while (inductionVariable < times);
};
protoOf(CodeBuilder).f9 = function (text) {
  this.u7(CodeBuilder$comment$lambda(text));
};
protoOf(CodeBuilder).g9 = function (expression, label) {
  this.u7(CodeBuilder$returnStatement$lambda(label, expression));
};
protoOf(CodeBuilder).h9 = function (name, configure) {
  property(this, 'val', name, configure);
};
protoOf(CodeBuilder).i9 = function (name, configure) {
  property(this, 'var', name, configure);
};
protoOf(CodeBuilder).j9 = function (name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new FunctionScope();
  configure(this_0);
  var function_0 = this_0;
  // Inline function 'kotlin.collections.plusAssign' call
  this.t7_1.e(name);
  this.u7(CodeBuilder$function$lambda(function_0, name));
};
protoOf(CodeBuilder).k9 = function (name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ClassScope();
  configure(this_0);
  var scope = this_0;
  container(this, 'class', name, scope);
};
protoOf(CodeBuilder).l9 = function (name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new InterfaceScope();
  configure(this_0);
  container(this, 'interface', name, this_0);
};
protoOf(CodeBuilder).m9 = function (name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ObjectScope();
  configure(this_0);
  container(this, 'object', name, this_0);
};
protoOf(CodeBuilder).n9 = function (name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ObjectScope();
  configure(this_0);
  container(this, 'companion object', name, this_0);
};
function get_keywords() {
  _init_properties_Declarations_kt__5banjb();
  return keywords;
}
var keywords;
var Visibility_Public_instance;
var Visibility_Internal_instance;
var Visibility_Protected_instance;
var Visibility_Private_instance;
function valueOf(value) {
  switch (value) {
    case 'Public':
      return Visibility_Public_getInstance();
    case 'Internal':
      return Visibility_Internal_getInstance();
    case 'Protected':
      return Visibility_Protected_getInstance();
    case 'Private':
      return Visibility_Private_getInstance();
    default:
      Visibility_initEntries();
      THROW_IAE('No enum constant value.');
      break;
  }
}
var Visibility_entriesInitialized;
function Visibility_initEntries() {
  if (Visibility_entriesInitialized)
    return Unit_instance;
  Visibility_entriesInitialized = true;
  Visibility_Public_instance = new Visibility('Public', 0, 'public');
  Visibility_Internal_instance = new Visibility('Internal', 1, 'internal');
  Visibility_Protected_instance = new Visibility('Protected', 2, 'protected');
  Visibility_Private_instance = new Visibility('Private', 3, 'private');
}
function Visibility(name, ordinal, keyword) {
  Enum.call(this, name, ordinal);
  this.q9_1 = keyword;
}
function declarationModifiers(visibility, modifiers) {
  _init_properties_Declarations_kt__5banjb();
  var tmp = plus(listOfNotNull(visibility == null ? null : visibility.q9_1), modifiers);
  return joinToString(tmp, '', VOID, VOID, VOID, VOID, declarationModifiers$lambda);
}
function identifier(name) {
  _init_properties_Declarations_kt__5banjb();
  var tmp;
  if (startsWith(name, _Char___init__impl__6a9atx(96)) && endsWith(name, _Char___init__impl__6a9atx(96))) {
    tmp = name;
  } else {
    var tmp_0;
    if (get_keywords().f1(name)) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.matches' call
      tmp_0 = !Regex_init_$Create$('[A-Za-z_][A-Za-z0-9_]*').m5(name);
    }
    if (tmp_0) {
      tmp = '`' + name + '`';
    } else {
      tmp = name;
    }
  }
  return tmp;
}
function short($this, name) {
  return substringAfterLast(name, _Char___init__impl__6a9atx(46));
}
function qualified($this, name) {
  var tmp = split(name, charArrayOf([_Char___init__impl__6a9atx(46)]));
  return joinToString(tmp, '.', VOID, VOID, VOID, VOID, identifier$ref());
}
function collision($this, name) {
  var tmp;
  if ($this.a9_1.f1(short($this, name))) {
    tmp = true;
  } else {
    var tmp0 = $this.z8_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.e1();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (!(element === name) && short($this, element) === short($this, name)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp = tmp$ret$0;
  }
  return tmp;
}
function identifier$ref() {
  var l = function (p0) {
    return identifier(p0);
  };
  l.callableName = 'identifier';
  return l;
}
function RenderContext(packageName, explicitImports) {
  explicitImports = explicitImports === VOID ? emptySet() : explicitImports;
  this.x8_1 = packageName;
  this.y8_1 = explicitImports;
  var tmp = this;
  // Inline function 'kotlin.collections.linkedSetOf' call
  // Inline function 'kotlin.apply' call
  var this_0 = LinkedHashSet_init_$Create$();
  this_0.o(this.y8_1);
  tmp.z8_1 = this_0;
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableSetOf' call
  tmp_0.a9_1 = LinkedHashSet_init_$Create$();
  this.b9_1 = true;
}
protoOf(RenderContext).r9 = function (name) {
  if (!contains(name, _Char___init__impl__6a9atx(46)))
    return identifier(name);
  // Inline function 'kotlin.collections.plusAssign' call
  this.z8_1.e(name);
  if (!this.b9_1 && collision(this, name))
    return qualified(this, name);
  return identifier(short(this, name));
};
protoOf(RenderContext).s9 = function () {
  // Inline function 'kotlin.collections.filter' call
  var tmp0 = this.z8_1;
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$_0();
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    if (!(substringBeforeLast(element, _Char___init__impl__6a9atx(46)) === this.x8_1) && !collision(this, element) && !setOf(['kotlin', 'kotlin.collections']).f1(substringBeforeLast(element, _Char___init__impl__6a9atx(46)))) {
      destination.e(element);
    }
  }
  // Inline function 'kotlin.collections.map' call
  var this_0 = sorted(distinct(plus(destination, this.y8_1)));
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s_0 = this_0.g();
  while (_iterator__ex2g4s_0.h()) {
    var item = _iterator__ex2g4s_0.i();
    var tmp$ret$3 = qualified(this, item);
    destination_0.e(tmp$ret$3);
  }
  return destination_0;
};
function TypeReference(code) {
  this.t9_1 = code;
}
protoOf(TypeReference).u9 = function (c) {
  return this.t9_1(c);
};
function TypeScope$build$lambda$lambda($c) {
  return function (it) {
    return '@' + $c.r9(it) + ' ';
  };
}
function TypeScope$build$lambda($signature, $name, $arguments, $annotations, $nullable) {
  return function (c) {
    var tmp0_safe_receiver = $signature;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u9(c);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.requireNotNull' call
      var tmp0 = $name;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0 == null) {
          var message = 'Required value was null.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0;
          break $l$block;
        }
      }
      var tmp$ret$2 = tmp$ret$1;
      var tmp_0 = text(c.r9(tmp$ret$2));
      var tmp_1;
      if ($arguments.e1()) {
        tmp_1 = text('');
      } else {
        // Inline function 'kotlin.collections.map' call
        var this_0 = $arguments;
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var _iterator__ex2g4s = this_0.g();
        while (_iterator__ex2g4s.h()) {
          var item = _iterator__ex2g4s.i();
          var tmp$ret$3 = item.u9(c);
          destination.e(tmp$ret$3);
        }
        tmp_1 = delimited('<', destination, '>');
      }
      tmp = plus_1(tmp_0, tmp_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var core = tmp;
    return plus_1(text(joinToString($annotations, '', VOID, VOID, VOID, VOID, TypeScope$build$lambda$lambda(c))), $nullable && !($signature == null) ? plus_2(plus_1(text('('), core), ')?') : plus_2(core, $nullable ? '?' : ''));
  };
}
function TypeScope() {
  this.v9_1 = false;
  this.w9_1 = emptyList();
  this.x9_1 = null;
  this.y9_1 = null;
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.z9_1 = ArrayList_init_$Create$_0();
}
protoOf(TypeScope).aa = function (name) {
  // Inline function 'kotlin.check' call
  if (!(this.x9_1 == null && this.y9_1 == null)) {
    var message = 'Type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.x9_1 = name;
};
protoOf(TypeScope).ba = function (body) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ArgumentScope();
  body(this_0);
  // Inline function 'kotlin.also' call
  this_0.fa();
  var argument = this_0;
  var tmp4 = this.z9_1;
  var tmp3 = argument.ea_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp3 == null) {
      var message = 'A nested type argument must configure a type';
      throw IllegalArgumentException_init_$Create$(toString(message));
    } else {
      tmp$ret$4 = tmp3;
      break $l$block;
    }
  }
  // Inline function 'kotlin.collections.plusAssign' call
  var element = tmp$ret$4;
  tmp4.e(element);
};
protoOf(TypeScope).ga = function () {
  var name = this.x9_1;
  var function_0 = this.y9_1;
  // Inline function 'kotlin.check' call
  if (!(!(name == null) || !(function_0 == null))) {
    var message = 'Type must define a reference or function';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.check' call
  if (!(function_0 == null || this.z9_1.e1())) {
    var message_0 = 'Function types cannot have generic arguments';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  var arguments_0 = toList(this.z9_1);
  var nullable = this.v9_1;
  var annotations = toList(this.w9_1);
  var signature = function_0 == null ? null : function_0.ga();
  return new TypeReference(TypeScope$build$lambda(signature, name, arguments_0, annotations, nullable));
};
function TypeSlotScope() {
  this.ka_1 = null;
}
protoOf(TypeSlotScope).la = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.ka_1 == null)) {
    var message = 'Type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.ka_1 = type(body);
};
protoOf(TypeSlotScope).ga = function () {
  var tmp0 = this.ka_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp0 == null) {
      var message = 'A type must be configured';
      throw IllegalArgumentException_init_$Create$(toString(message));
    } else {
      tmp$ret$1 = tmp0;
      break $l$block;
    }
  }
  return tmp$ret$1;
};
function FunctionTypeScope$build$lambda($this$type) {
  $this$type.aa('Unit');
  return Unit_instance;
}
function FunctionTypeScope$build$lambda$lambda($c) {
  return function (it) {
    return '@' + $c.r9(it) + ' ';
  };
}
function FunctionTypeScope$build$lambda_0($annotations, $parameters, $result) {
  return function (c) {
    var tmp = text(joinToString($annotations, '', VOID, VOID, VOID, VOID, FunctionTypeScope$build$lambda$lambda(c)));
    // Inline function 'kotlin.collections.map' call
    var this_0 = $parameters;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var name = item.m7();
      var type = item.n7();
      var tmp_0;
      if (name == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = identifier(name) + ': ';
      }
      var tmp1_elvis_lhs = tmp_0;
      var tmp$ret$2 = plus_1(text(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs), type.u9(c));
      destination.e(tmp$ret$2);
    }
    return plus_1(plus_2(plus_1(tmp, delimited('(', destination, ')')), ' -> '), $result.u9(c));
  };
}
function type(body) {
  _init_properties_Declarations_kt__5banjb();
  // Inline function 'kotlin.apply' call
  var this_0 = new TypeScope();
  body(this_0);
  return this_0.ga();
}
function Parameter$render$lambda(it) {
  return it + ' ';
}
function Parameter(name, type, initializer, property, modifiers) {
  this.ma_1 = name;
  this.na_1 = type;
  this.oa_1 = initializer;
  this.pa_1 = property;
  this.qa_1 = modifiers;
}
protoOf(Parameter).u9 = function (c) {
  var tmp = plus(this.qa_1, listOfNotNull(this.pa_1));
  var tmp_0 = text(joinToString(tmp, '', VOID, VOID, VOID, VOID, Parameter$render$lambda) + identifier(this.ma_1));
  var tmp0_safe_receiver = this.na_1;
  var tmp_1;
  if (tmp0_safe_receiver == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_1 = plus_1(text(': '), tmp0_safe_receiver.u9(c));
  }
  var tmp1_elvis_lhs = tmp_1;
  var tmp_2 = plus_1(tmp_0, tmp1_elvis_lhs == null ? text('') : tmp1_elvis_lhs);
  var tmp2_safe_receiver = this.oa_1;
  var tmp_3;
  if (tmp2_safe_receiver == null) {
    tmp_3 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_3 = plus_1(text(' = '), tmp2_safe_receiver.y7(c));
  }
  var tmp3_elvis_lhs = tmp_3;
  return plus_1(tmp_2, tmp3_elvis_lhs == null ? text('') : tmp3_elvis_lhs);
};
function ParameterScope() {
  this.ra_1 = null;
  this.sa_1 = null;
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.ta_1 = ArrayList_init_$Create$_0();
}
protoOf(ParameterScope).la = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.ra_1 == null)) {
    var message = 'Parameter type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.ra_1 = type(body);
};
protoOf(ParameterScope).ua = function (body) {
  this.sa_1 = expression(body);
};
protoOf(ParameterScope).va = function (value) {
  // Inline function 'kotlin.collections.plusAssign' call
  this.ta_1.e(value);
};
protoOf(ParameterScope).wa = function (name, property) {
  return new Parameter(name, this.ra_1, this.sa_1, property, toList(this.ta_1));
};
protoOf(ParameterScope).xa = function (name, property, $super) {
  property = property === VOID ? null : property;
  return $super === VOID ? this.wa(name, property) : $super.wa.call(this, name, property);
};
function parameter(name, body) {
  var tmp;
  if (body === VOID) {
    tmp = parameter$lambda;
  } else {
    tmp = body;
  }
  body = tmp;
  _init_properties_Declarations_kt__5banjb();
  // Inline function 'kotlin.apply' call
  var this_0 = new ParameterScope();
  body(this_0);
  return this_0.xa(name);
}
function CodeScope() {
  this.ya_1 = new CodeBuilder();
}
protoOf(CodeScope).d9 = function () {
  return this.ya_1.d9();
};
protoOf(CodeScope).e9 = function (count) {
  return this.ya_1.e9(count);
};
protoOf(CodeScope).f9 = function (text) {
  return this.ya_1.f9(text);
};
function DeclarationContainerScope() {
  CodeScope.call(this);
}
protoOf(DeclarationContainerScope).ab = function (name, configure) {
  return this.ya_1.h9(name, configure);
};
protoOf(DeclarationContainerScope).bb = function (name, configure) {
  return this.ya_1.i9(name, configure);
};
protoOf(DeclarationContainerScope).cb = function (name, configure) {
  return this.ya_1.j9(name, configure);
};
protoOf(DeclarationContainerScope).db = function (name, configure) {
  return this.ya_1.k9(name, configure);
};
function BlockScope$ifStatement$lambda($condition, $body) {
  return function (c) {
    return block(plus_2(plus_1(text('if ('), $condition.y7(c)), ')'), $body.c9(c));
  };
}
function BlockScope() {
  DeclarationContainerScope.call(this);
}
protoOf(BlockScope).fb = function (label, body) {
  var tmp;
  if (body == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = expression(body);
  }
  this.ya_1.g9(tmp, label);
};
protoOf(BlockScope).gb = function (label, body, $super) {
  label = label === VOID ? null : label;
  body = body === VOID ? null : body;
  var tmp;
  if ($super === VOID) {
    this.fb(label, body);
    tmp = Unit_instance;
  } else {
    tmp = $super.fb.call(this, label, body);
  }
  return tmp;
};
protoOf(BlockScope).hb = function (configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new IfStatementScope();
  configure(this_0);
  var scope = this_0;
  var tmp1 = scope.ib_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp1 == null) {
      var message = 'An if statement needs a condition';
      throw IllegalArgumentException_init_$Create$(toString(message));
    } else {
      tmp$ret$2 = tmp1;
      break $l$block;
    }
  }
  var condition = tmp$ret$2;
  var tmp2 = scope.jb_1;
  var tmp$ret$4;
  $l$block_0: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp2 == null) {
      var message_0 = 'An if statement needs a body';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    } else {
      tmp$ret$4 = tmp2;
      break $l$block_0;
    }
  }
  var body = tmp$ret$4;
  this.ya_1.u7(BlockScope$ifStatement$lambda(condition, body));
};
function IfStatementScope() {
  this.ib_1 = null;
  this.jb_1 = null;
}
protoOf(IfStatementScope).ub = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.ib_1 == null)) {
    var message = 'Condition has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.ib_1 = expression(body);
};
protoOf(IfStatementScope).vb = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.jb_1 == null)) {
    var message = 'Body has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new BlockScope();
  body(this_0);
  tmp.jb_1 = this_0.ya_1;
};
function FunctionBodyScope() {
  BlockScope.call(this);
}
function GetterBodyScope() {
  BlockScope.call(this);
}
function LambdaBodyScope() {
  BlockScope.call(this);
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.xb_1 = ArrayList_init_$Create$_0();
}
protoOf(LambdaBodyScope).yb = function (name, configure) {
  var tmp0 = this.xb_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = parameter(name, configure);
  tmp0.e(element);
};
function DeclarationScope() {
  this.zb_1 = null;
  this.ac_1 = emptyList();
  this.bc_1 = emptyList();
}
protoOf(DeclarationScope).cc = function (c) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.bc_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var tmp$ret$0 = plus_1(text('@' + c.r9(item)), get_hardLine());
    destination.e(tmp$ret$0);
  }
  return plus_2(joined(destination, text('')), declarationModifiers(this.zb_1, this.ac_1));
};
function FunctionScope() {
  DeclarationScope.call(this);
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.k8_1 = ArrayList_init_$Create$_0();
  this.l8_1 = null;
  this.m8_1 = null;
}
protoOf(FunctionScope).yb = function (name, configure) {
  var tmp0 = this.k8_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = parameter(name, configure);
  tmp0.e(element);
};
protoOf(FunctionScope).dc = function (configure) {
  // Inline function 'kotlin.check' call
  if (!(this.l8_1 == null)) {
    var message = 'Return type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new TypeSlotScope();
  configure(this_0);
  tmp.l8_1 = this_0.ga();
};
protoOf(FunctionScope).ec = function (block) {
  // Inline function 'kotlin.check' call
  if (!(this.m8_1 == null)) {
    var message = 'Function body has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new FunctionBodyScope();
  block(this_0);
  tmp.m8_1 = this_0.ya_1;
};
protoOf(FunctionScope).n8 = function (name, c) {
  var tmp0_safe_receiver = this.l8_1;
  var result = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u9(c);
  var tmp = plus_2(this.cc(c), 'fun ' + identifier(name));
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.k8_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var tmp$ret$0 = item.u9(c);
    destination.e(tmp$ret$0);
  }
  var tmp_0 = plus_1(tmp, delimited('(', destination, ')'));
  var tmp_1;
  if (result == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_1 = plus_1(text(': '), result);
  }
  var tmp2_elvis_lhs = tmp_1;
  var signature = plus_1(tmp_0, tmp2_elvis_lhs == null ? text('') : tmp2_elvis_lhs);
  var tmp3_safe_receiver = this.m8_1;
  var tmp_2;
  if (tmp3_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = block(signature, tmp3_safe_receiver.w8(c, !(result == null) && !(print(result) === 'Unit')));
  }
  var tmp4_elvis_lhs = tmp_2;
  return tmp4_elvis_lhs == null ? signature : tmp4_elvis_lhs;
};
function GetterScope() {
  DeclarationScope.call(this);
  this.ic_1 = null;
}
protoOf(GetterScope).jc = function (block) {
  // Inline function 'kotlin.check' call
  if (!(this.ic_1 == null)) {
    var message = 'Getter body has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new GetterBodyScope();
  block(this_0);
  tmp.ic_1 = this_0.ya_1;
};
protoOf(GetterScope).u9 = function (c) {
  var tmp = this.cc(c);
  var tmp0_safe_receiver = this.ic_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = block(text('get()'), tmp0_safe_receiver.w8(c, true));
  }
  var tmp1_elvis_lhs = tmp_0;
  return plus_1(tmp, tmp1_elvis_lhs == null ? text('get') : tmp1_elvis_lhs);
};
function ConstructorScope() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.kc_1 = ArrayList_init_$Create$_0();
}
protoOf(ConstructorScope).lc = function (name, configure) {
  var tmp1 = this.kc_1;
  // Inline function 'kotlin.apply' call
  var this_0 = new ConstructorParameterScope();
  configure(this_0);
  // Inline function 'kotlin.collections.plusAssign' call
  var element = this_0.qc(name);
  tmp1.e(element);
};
function ConstructorParameterScope() {
  ParameterScope.call(this);
  this.pc_1 = null;
}
protoOf(ConstructorParameterScope).rc = function (configure) {
  // Inline function 'kotlin.check' call
  if (!(this.pc_1 == null)) {
    var message = 'Constructor property has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new ConstructorPropertyScope();
  configure(this_0);
  tmp.pc_1 = this_0;
};
protoOf(ConstructorParameterScope).qc = function (name) {
  var tmp0_safe_receiver = this.pc_1;
  return this.wa(name, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uc());
};
function ConstructorPropertyScope() {
  this.sc_1 = null;
  this.tc_1 = false;
}
protoOf(ConstructorPropertyScope).uc = function () {
  return declarationModifiers(this.sc_1, emptyList()) + (this.tc_1 ? 'var' : 'val');
};
function MemberScope() {
  DeclarationContainerScope.call(this);
  this.p8_1 = null;
  this.q8_1 = emptyList();
  this.r8_1 = emptyList();
}
protoOf(MemberScope).vc = function (name, configure) {
  return this.ya_1.l9(name, configure);
};
protoOf(MemberScope).wc = function (name, configure) {
  return this.ya_1.m9(name, configure);
};
protoOf(MemberScope).xc = function (c) {
  return text('');
};
protoOf(MemberScope).s8 = function (kind, name, c) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.r8_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var tmp$ret$0 = plus_1(text('@' + c.r9(item)), get_hardLine());
    destination.e(tmp$ret$0);
  }
  var prefix = plus_2(joined(destination, text('')), declarationModifiers(this.p8_1, this.q8_1));
  var tmp = plus_2(prefix, kind);
  var tmp_0;
  if (name == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = ' ' + identifier(name);
  }
  var tmp1_elvis_lhs = tmp_0;
  var header = plus_1(plus_2(tmp, tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs), this.xc(c));
  var contents = this.ya_1.c9(c);
  return this.ya_1.u8() ? header : block(header, contents);
};
function ClassScope$companionObject$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function ClassScope() {
  MemberScope.call(this);
  this.cd_1 = null;
}
protoOf(ClassScope).n9 = function (name, configure) {
  return this.ya_1.n9(name, configure);
};
protoOf(ClassScope).dd = function (name, configure, $super) {
  name = name === VOID ? null : name;
  var tmp;
  if (configure === VOID) {
    tmp = ClassScope$companionObject$lambda;
  } else {
    tmp = configure;
  }
  configure = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.n9(name, configure);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.n9.call(this, name, configure);
  }
  return tmp_0;
};
protoOf(ClassScope).configureConstructor = function (configure) {
  // Inline function 'kotlin.check' call
  if (!(this.cd_1 == null)) {
    var message = 'Primary constructor has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new ConstructorScope();
  configure(this_0);
  tmp.cd_1 = this_0;
};
protoOf(ClassScope).xc = function (c) {
  var tmp0_safe_receiver = this.cd_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = tmp0_safe_receiver.kc_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var tmp$ret$0 = item.u9(c);
      destination.e(tmp$ret$0);
    }
    tmp = delimited('(', destination, ')');
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? text('') : tmp1_elvis_lhs;
};
function InterfaceScope$companionObject$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function InterfaceScope() {
  MemberScope.call(this);
}
protoOf(InterfaceScope).n9 = function (name, configure) {
  return this.ya_1.n9(name, configure);
};
protoOf(InterfaceScope).id = function (name, configure, $super) {
  name = name === VOID ? null : name;
  var tmp;
  if (configure === VOID) {
    tmp = InterfaceScope$companionObject$lambda;
  } else {
    tmp = configure;
  }
  configure = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.n9(name, configure);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.n9.call(this, name, configure);
  }
  return tmp_0;
};
function ObjectScope() {
  MemberScope.call(this);
}
function PropertyScope() {
  DeclarationScope.call(this);
  this.c8_1 = null;
  this.d8_1 = null;
  this.e8_1 = null;
  this.f8_1 = null;
}
protoOf(PropertyScope).la = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.c8_1 == null)) {
    var message = 'Property type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.c8_1 = type(body);
};
protoOf(PropertyScope).jd = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.d8_1 == null)) {
    var message = 'Property initializer has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.check' call
  if (!(this.f8_1 == null)) {
    var message_0 = 'A property cannot have both an initializer and a delegate';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  this.d8_1 = expression(body);
};
protoOf(PropertyScope).kd = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.f8_1 == null)) {
    var message = 'Property delegate has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.check' call
  if (!(this.d8_1 == null)) {
    var message_0 = 'A property cannot have both an initializer and a delegate';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  // Inline function 'kotlin.check' call
  if (!(this.e8_1 == null)) {
    var message_1 = 'A delegated property cannot have a custom getter';
    throw IllegalStateException_init_$Create$(toString(message_1));
  }
  this.f8_1 = expression(body);
};
protoOf(PropertyScope).ld = function (configure) {
  // Inline function 'kotlin.check' call
  if (!(this.f8_1 == null)) {
    var message = 'A delegated property cannot have a custom getter';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.check' call
  if (!(this.e8_1 == null)) {
    var message_0 = 'Getter has already been defined';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new GetterScope();
  configure(this_0);
  tmp.e8_1 = this_0;
};
protoOf(PropertyScope).g8 = function (keyword, name, c) {
  var tmp = plus_2(this.cc(c), keyword + ' ' + identifier(name));
  var tmp0_safe_receiver = this.c8_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = plus_1(text(': '), tmp0_safe_receiver.u9(c));
  }
  var tmp1_elvis_lhs = tmp_0;
  var tmp_1 = plus_1(tmp, tmp1_elvis_lhs == null ? text('') : tmp1_elvis_lhs);
  var tmp2_safe_receiver = this.d8_1;
  var tmp_2;
  if (tmp2_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = plus_1(text(' = '), tmp2_safe_receiver.y7(c));
  }
  var tmp3_elvis_lhs = tmp_2;
  var tmp_3 = plus_1(tmp_1, tmp3_elvis_lhs == null ? text('') : tmp3_elvis_lhs);
  var tmp4_safe_receiver = this.f8_1;
  var tmp_4;
  if (tmp4_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = plus_1(text(' by '), tmp4_safe_receiver.y7(c));
  }
  var tmp5_elvis_lhs = tmp_4;
  var tmp_5 = plus_1(tmp_3, tmp5_elvis_lhs == null ? text('') : tmp5_elvis_lhs);
  var tmp6_safe_receiver = this.e8_1;
  var tmp_6;
  if (tmp6_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = nested(plus_1(get_hardLine(), tmp6_safe_receiver.u9(c)));
  }
  var tmp7_elvis_lhs = tmp_6;
  return plus_1(tmp_5, tmp7_elvis_lhs == null ? text('') : tmp7_elvis_lhs);
};
function FileScope() {
  DeclarationContainerScope.call(this);
  var tmp = this;
  // Inline function 'kotlin.collections.linkedSetOf' call
  tmp.nd_1 = LinkedHashSet_init_$Create$();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp_0.od_1 = ArrayList_init_$Create$_0();
  this.pd_1 = null;
}
protoOf(FileScope).vc = function (name, configure) {
  return this.ya_1.l9(name, configure);
};
protoOf(FileScope).wc = function (name, configure) {
  return this.ya_1.m9(name, configure);
};
protoOf(FileScope).qd = function (name) {
  // Inline function 'kotlin.text.isNotBlank' call
  // Inline function 'kotlin.require' call
  if (!!isBlank(name)) {
    var message = 'Import name cannot be blank';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.collections.plusAssign' call
  this.nd_1.e(name);
};
protoOf(FileScope).rd = function (name, configure) {
  // Inline function 'kotlin.text.isNotBlank' call
  // Inline function 'kotlin.require' call
  if (!!isBlank(name)) {
    var message = 'Annotation name cannot be blank';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var tmp3 = this.od_1;
  // Inline function 'kotlin.apply' call
  var this_0 = new AnnotationScope();
  configure(this_0);
  // Inline function 'kotlin.collections.plusAssign' call
  var element = to(name, this_0);
  tmp3.e(element);
};
protoOf(FileScope).sd = function (name) {
  // Inline function 'kotlin.text.isNotBlank' call
  // Inline function 'kotlin.require' call
  if (!!isBlank(name)) {
    var message = 'Package name cannot be blank';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.check' call
  if (!(this.pd_1 == null)) {
    var message_0 = 'Package name has already been declared';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  this.pd_1 = name;
};
function ktFile(body) {
  _init_properties_Declarations_kt__5banjb();
  // Inline function 'kotlin.apply' call
  var this_0 = new FileScope();
  body(this_0);
  var scope = this_0;
  var context = new RenderContext(scope.pd_1, scope.nd_1);
  scope.ya_1.c9(context);
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = scope.od_1.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    var name = element.m7();
    var annotation = element.n7();
    annotation.n8(name, context);
  }
  context.b9_1 = false;
  var code = scope.ya_1.c9(context);
  // Inline function 'kotlin.collections.mutableListOf' call
  var sections = ArrayList_init_$Create$_0();
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!scope.od_1.e1()) {
    // Inline function 'kotlin.collections.map' call
    var this_1 = scope.od_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      var name_0 = item.m7();
      var annotation_0 = item.n7();
      var tmp$ret$5 = plus_1(text('@file:'), annotation_0.n8(name_0, context));
      destination.e(tmp$ret$5);
    }
    // Inline function 'kotlin.collections.plusAssign' call
    var element_0 = joined(destination, get_hardLine());
    sections.e(element_0);
  }
  var tmp0_safe_receiver = scope.pd_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    var tmp = split(tmp0_safe_receiver, charArrayOf([_Char___init__impl__6a9atx(46)]));
    // Inline function 'kotlin.collections.plusAssign' call
    var element_1 = text('package ' + joinToString(tmp, '.', VOID, VOID, VOID, VOID, identifier$ref_0()));
    sections.e(element_1);
  }
  var imports = context.s9();
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!imports.e1()) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(imports, 10));
    var _iterator__ex2g4s_1 = imports.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_0 = _iterator__ex2g4s_1.i();
      var tmp$ret$13 = text('import ' + item_0);
      destination_0.e(tmp$ret$13);
    }
    // Inline function 'kotlin.collections.plusAssign' call
    var element_2 = joined(destination_0, get_hardLine());
    sections.e(element_2);
  }
  // Inline function 'kotlin.collections.plusAssign' call
  sections.e(code);
  return print(plus_1(joined(sections, plus_1(get_hardLine(), get_hardLine())), get_hardLine()));
}
function declarationModifiers$lambda(it) {
  _init_properties_Declarations_kt__5banjb();
  return it + ' ';
}
function parameter$lambda(_this__u8e3s4) {
  _init_properties_Declarations_kt__5banjb();
  return Unit_instance;
}
function identifier$ref_0() {
  var l = function (p0) {
    return identifier(p0);
  };
  l.callableName = 'identifier';
  return l;
}
function Visibility_Public_getInstance() {
  Visibility_initEntries();
  return Visibility_Public_instance;
}
function Visibility_Internal_getInstance() {
  Visibility_initEntries();
  return Visibility_Internal_instance;
}
function Visibility_Protected_getInstance() {
  Visibility_initEntries();
  return Visibility_Protected_instance;
}
function Visibility_Private_getInstance() {
  Visibility_initEntries();
  return Visibility_Private_instance;
}
var properties_initialized_Declarations_kt_clvwbp;
function _init_properties_Declarations_kt__5banjb() {
  if (!properties_initialized_Declarations_kt_clvwbp) {
    properties_initialized_Declarations_kt_clvwbp = true;
    keywords = setOf(['as', 'break', 'class', 'continue', 'do', 'else', 'false', 'for', 'fun', 'if', 'in', 'interface', 'is', 'null', 'object', 'package', 'return', 'super', 'this', 'throw', 'true', 'try', 'typealias', 'typeof', 'val', 'var', 'when', 'while']);
  }
}
function get_hardLine() {
  _init_properties_Document_kt__u55c91();
  return hardLine;
}
var hardLine;
function get_softLine() {
  _init_properties_Document_kt__u55c91();
  return softLine;
}
var softLine;
function get_softBreak() {
  _init_properties_Document_kt__u55c91();
  return softBreak;
}
var softBreak;
function Document() {
}
function Text(value) {
  this.vd_1 = value;
}
protoOf(Text).toString = function () {
  return 'Text(value=' + this.vd_1 + ')';
};
protoOf(Text).hashCode = function () {
  return getStringHashCode(this.vd_1);
};
protoOf(Text).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Text))
    return false;
  var tmp0_other_with_cast = other instanceof Text ? other : THROW_CCE();
  if (!(this.vd_1 === tmp0_other_with_cast.vd_1))
    return false;
  return true;
};
function Break(flat) {
  this.wd_1 = flat;
}
protoOf(Break).toString = function () {
  return 'Break(flat=' + this.wd_1 + ')';
};
protoOf(Break).hashCode = function () {
  return this.wd_1 == null ? 0 : getStringHashCode(this.wd_1);
};
protoOf(Break).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Break))
    return false;
  var tmp0_other_with_cast = other instanceof Break ? other : THROW_CCE();
  if (!(this.wd_1 == tmp0_other_with_cast.wd_1))
    return false;
  return true;
};
function Concat(parts) {
  this.xd_1 = parts;
  var tmp = this;
  var tmp0 = this.xd_1;
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp_0;
    if (isInterface(tmp0, Collection)) {
      tmp_0 = tmp0.e1();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp$ret$0 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (element.ud()) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
    }
    tmp$ret$0 = false;
  }
  tmp.yd_1 = tmp$ret$0;
}
protoOf(Concat).ud = function () {
  return this.yd_1;
};
protoOf(Concat).toString = function () {
  return 'Concat(parts=' + toString(this.xd_1) + ')';
};
protoOf(Concat).hashCode = function () {
  return hashCode(this.xd_1);
};
protoOf(Concat).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Concat))
    return false;
  var tmp0_other_with_cast = other instanceof Concat ? other : THROW_CCE();
  if (!equals(this.xd_1, tmp0_other_with_cast.xd_1))
    return false;
  return true;
};
function Nest(body) {
  this.zd_1 = body;
  this.ae_1 = this.zd_1.ud();
}
protoOf(Nest).ud = function () {
  return this.ae_1;
};
protoOf(Nest).toString = function () {
  return 'Nest(body=' + toString(this.zd_1) + ')';
};
protoOf(Nest).hashCode = function () {
  return hashCode(this.zd_1);
};
protoOf(Nest).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Nest))
    return false;
  var tmp0_other_with_cast = other instanceof Nest ? other : THROW_CCE();
  if (!equals(this.zd_1, tmp0_other_with_cast.zd_1))
    return false;
  return true;
};
function Group(body) {
  this.be_1 = body;
  this.ce_1 = this.be_1.ud();
}
protoOf(Group).ud = function () {
  return this.ce_1;
};
protoOf(Group).toString = function () {
  return 'Group(body=' + toString(this.be_1) + ')';
};
protoOf(Group).hashCode = function () {
  return hashCode(this.be_1);
};
protoOf(Group).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Group))
    return false;
  var tmp0_other_with_cast = other instanceof Group ? other : THROW_CCE();
  if (!equals(this.be_1, tmp0_other_with_cast.be_1))
    return false;
  return true;
};
function MemberChain(receiver, members) {
  this.de_1 = receiver;
  this.ee_1 = members;
  var tmp = this;
  var tmp_0;
  if (this.de_1.ud()) {
    tmp_0 = true;
  } else {
    var tmp0 = this.ee_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_1;
      if (isInterface(tmp0, Collection)) {
        tmp_1 = tmp0.e1();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (element.ud()) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp_0 = tmp$ret$0;
  }
  tmp.fe_1 = tmp_0;
}
protoOf(MemberChain).ud = function () {
  return this.fe_1;
};
protoOf(MemberChain).ge = function (receiver, members) {
  return new MemberChain(receiver, members);
};
protoOf(MemberChain).he = function (receiver, members, $super) {
  receiver = receiver === VOID ? this.de_1 : receiver;
  members = members === VOID ? this.ee_1 : members;
  return $super === VOID ? this.ge(receiver, members) : $super.ge.call(this, receiver, members);
};
protoOf(MemberChain).toString = function () {
  return 'MemberChain(receiver=' + toString(this.de_1) + ', members=' + toString(this.ee_1) + ')';
};
protoOf(MemberChain).hashCode = function () {
  var result = hashCode(this.de_1);
  result = imul(result, 31) + hashCode(this.ee_1) | 0;
  return result;
};
protoOf(MemberChain).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof MemberChain))
    return false;
  var tmp0_other_with_cast = other instanceof MemberChain ? other : THROW_CCE();
  if (!equals(this.de_1, tmp0_other_with_cast.de_1))
    return false;
  if (!equals(this.ee_1, tmp0_other_with_cast.ee_1))
    return false;
  return true;
};
function ExpandTrailingLambdas(body) {
  this.ie_1 = body;
  this.je_1 = this.ie_1.ud();
}
protoOf(ExpandTrailingLambdas).ud = function () {
  return this.je_1;
};
protoOf(ExpandTrailingLambdas).toString = function () {
  return 'ExpandTrailingLambdas(body=' + toString(this.ie_1) + ')';
};
protoOf(ExpandTrailingLambdas).hashCode = function () {
  return hashCode(this.ie_1);
};
protoOf(ExpandTrailingLambdas).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ExpandTrailingLambdas))
    return false;
  var tmp0_other_with_cast = other instanceof ExpandTrailingLambdas ? other : THROW_CCE();
  if (!equals(this.ie_1, tmp0_other_with_cast.ie_1))
    return false;
  return true;
};
function LambdaLayout(header, body, singleExpression, trailing, empty) {
  this.ke_1 = header;
  this.le_1 = body;
  this.me_1 = singleExpression;
  this.ne_1 = trailing;
  this.oe_1 = empty;
  this.pe_1 = true;
}
protoOf(LambdaLayout).ud = function () {
  return this.pe_1;
};
protoOf(LambdaLayout).qe = function (expandTrailing) {
  if (this.oe_1)
    return text('{}');
  var nestedLambdas = this.le_1.ud();
  var line = this.me_1 && !nestedLambdas && !(this.ne_1 && expandTrailing) ? get_softLine() : get_hardLine();
  var contents = nestedLambdas ? new ExpandTrailingLambdas(this.le_1) : this.le_1;
  return grouped(plus_2(plus_1(plus_1(this.ke_1, nested(plus_1(line, contents))), line), '}'));
};
protoOf(LambdaLayout).toString = function () {
  return 'LambdaLayout(header=' + toString(this.ke_1) + ', body=' + toString(this.le_1) + ', singleExpression=' + this.me_1 + ', trailing=' + this.ne_1 + ', empty=' + this.oe_1 + ')';
};
protoOf(LambdaLayout).hashCode = function () {
  var result = hashCode(this.ke_1);
  result = imul(result, 31) + hashCode(this.le_1) | 0;
  result = imul(result, 31) + getBooleanHashCode(this.me_1) | 0;
  result = imul(result, 31) + getBooleanHashCode(this.ne_1) | 0;
  result = imul(result, 31) + getBooleanHashCode(this.oe_1) | 0;
  return result;
};
protoOf(LambdaLayout).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof LambdaLayout))
    return false;
  var tmp0_other_with_cast = other instanceof LambdaLayout ? other : THROW_CCE();
  if (!equals(this.ke_1, tmp0_other_with_cast.ke_1))
    return false;
  if (!equals(this.le_1, tmp0_other_with_cast.le_1))
    return false;
  if (!(this.me_1 === tmp0_other_with_cast.me_1))
    return false;
  if (!(this.ne_1 === tmp0_other_with_cast.ne_1))
    return false;
  if (!(this.oe_1 === tmp0_other_with_cast.oe_1))
    return false;
  return true;
};
function lambdaLayout(header, body, singleExpression, trailing, empty) {
  _init_properties_Document_kt__u55c91();
  return new LambdaLayout(header, body, singleExpression, trailing, empty);
}
function text(value) {
  _init_properties_Document_kt__u55c91();
  return new Text(value);
}
function plus_1(_this__u8e3s4, other) {
  _init_properties_Document_kt__u55c91();
  return new Concat(listOf([_this__u8e3s4, other]));
}
function plus_2(_this__u8e3s4, other) {
  _init_properties_Document_kt__u55c91();
  return plus_1(_this__u8e3s4, text(other));
}
function nested(_this__u8e3s4) {
  _init_properties_Document_kt__u55c91();
  return new Nest(_this__u8e3s4);
}
function grouped(_this__u8e3s4) {
  _init_properties_Document_kt__u55c91();
  return new Group(_this__u8e3s4);
}
function joined(_this__u8e3s4, separator) {
  _init_properties_Document_kt__u55c91();
  // Inline function 'kotlin.collections.flatMapIndexed' call
  // Inline function 'kotlin.collections.flatMapIndexedTo' call
  var destination = ArrayList_init_$Create$_0();
  var index = 0;
  var _iterator__ex2g4s = _this__u8e3s4.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    var list = checkIndexOverflow(_unary__edvuaz) === 0 ? listOf_0(element) : listOf([separator, element]);
    addAll(destination, list);
  }
  return new Concat(destination);
}
function delimited(open, contents, close) {
  _init_properties_Document_kt__u55c91();
  return contents.e1() ? text(open + close) : grouped(plus_2(plus_1(plus_1(text(open), nested(plus_1(get_softBreak(), joined(contents, plus_1(text(','), get_softLine()))))), get_softBreak()), close));
}
function block(header, body) {
  _init_properties_Document_kt__u55c91();
  return plus_2(plus_1(plus_1(plus_2(header, ' {'), nested(plus_1(get_hardLine(), body))), get_hardLine()), '}');
}
function member(receiver, suffix) {
  _init_properties_Document_kt__u55c91();
  var tmp;
  if (receiver instanceof MemberChain) {
    tmp = receiver.he(VOID, plus_0(receiver.ee_1, suffix));
  } else {
    tmp = new MemberChain(receiver, listOf_0(suffix));
  }
  return tmp;
}
function layout(_this__u8e3s4) {
  _init_properties_Document_kt__u55c91();
  // Inline function 'kotlin.collections.map' call
  var this_0 = _this__u8e3s4.ee_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var tmp$ret$0 = plus_1(get_softBreak(), item);
    destination.e(tmp$ret$0);
  }
  return grouped(plus_1(_this__u8e3s4.de_1, nested(joined(destination, text('')))));
}
function Pending(document, indent, flat, expandTrailing) {
  expandTrailing = expandTrailing === VOID ? false : expandTrailing;
  this.re_1 = document;
  this.se_1 = indent;
  this.te_1 = flat;
  this.ue_1 = expandTrailing;
}
protoOf(Pending).ve = function (document, indent, flat, expandTrailing) {
  return new Pending(document, indent, flat, expandTrailing);
};
protoOf(Pending).we = function (document, indent, flat, expandTrailing, $super) {
  document = document === VOID ? this.re_1 : document;
  indent = indent === VOID ? this.se_1 : indent;
  flat = flat === VOID ? this.te_1 : flat;
  expandTrailing = expandTrailing === VOID ? this.ue_1 : expandTrailing;
  return $super === VOID ? this.ve(document, indent, flat, expandTrailing) : $super.ve.call(this, document, indent, flat, expandTrailing);
};
protoOf(Pending).toString = function () {
  return 'Pending(document=' + toString(this.re_1) + ', indent=' + this.se_1 + ', flat=' + this.te_1 + ', expandTrailing=' + this.ue_1 + ')';
};
protoOf(Pending).hashCode = function () {
  var result = hashCode(this.re_1);
  result = imul(result, 31) + this.se_1 | 0;
  result = imul(result, 31) + getBooleanHashCode(this.te_1) | 0;
  result = imul(result, 31) + getBooleanHashCode(this.ue_1) | 0;
  return result;
};
protoOf(Pending).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Pending))
    return false;
  var tmp0_other_with_cast = other instanceof Pending ? other : THROW_CCE();
  if (!equals(this.re_1, tmp0_other_with_cast.re_1))
    return false;
  if (!(this.se_1 === tmp0_other_with_cast.se_1))
    return false;
  if (!(this.te_1 === tmp0_other_with_cast.te_1))
    return false;
  if (!(this.ue_1 === tmp0_other_with_cast.ue_1))
    return false;
  return true;
};
function print(_this__u8e3s4, width) {
  width = width === VOID ? 100 : width;
  _init_properties_Document_kt__u55c91();
  var pending = mutableListOf([new Pending(_this__u8e3s4, 0, false)]);
  var output = StringBuilder_init_$Create$();
  var column = {_v: 0};
  var lineIndent = 0;
  var atLineStart = true;
  $l$loop: while (true) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!!pending.e1()) {
      break $l$loop;
    }
    var item = pending.v2(get_lastIndex(pending));
    var doc = item.re_1;
    if (doc instanceof Text) {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = doc.vd_1;
      if (charSequenceLength(this_0) > 0) {
        if (atLineStart) {
          output.u4(repeat(' ', lineIndent));
        }
        output.u4(doc.vd_1);
        column._v = column._v + doc.vd_1.length | 0;
        atLineStart = false;
      }
    } else {
      if (doc instanceof Break)
        if (item.te_1 && !(doc.wd_1 == null)) {
          output.u4(doc.wd_1);
          column._v = column._v + doc.wd_1.length | 0;
        } else {
          output.v4(_Char___init__impl__6a9atx(10));
          lineIndent = item.se_1;
          column._v = lineIndent;
          atLineStart = true;
        }
       else {
        if (doc instanceof Concat) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = asReversed(doc.xd_1).g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            // Inline function 'kotlin.collections.plusAssign' call
            var element_0 = item.we(element);
            pending.e(element_0);
          }
        } else {
          if (doc instanceof Nest) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_1 = item.we(doc.zd_1, item.se_1 + 4 | 0);
            pending.e(element_1);
          } else {
            if (doc instanceof Group) {
              var flattened = item.we(doc.be_1, VOID, true);
              // Inline function 'kotlin.collections.plusAssign' call
              var element_2 = flattened.we(VOID, VOID, item.te_1 || print$fits(width, column, pending, flattened));
              pending.e(element_2);
            } else {
              if (doc instanceof MemberChain) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element_3 = item.we(layout(doc));
                pending.e(element_3);
              } else {
                if (doc instanceof LambdaLayout) {
                  // Inline function 'kotlin.collections.plusAssign' call
                  var element_4 = item.we(doc.qe(item.ue_1));
                  pending.e(element_4);
                } else {
                  if (doc instanceof ExpandTrailingLambdas) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    var element_5 = item.we(doc.ie_1, VOID, VOID, true);
                    pending.e(element_5);
                  } else {
                    noWhenBranchMatchedException();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return output.toString();
}
function print$fits($width, column, pending, first) {
  var remaining = $width - column._v | 0;
  // Inline function 'kotlin.apply' call
  var this_0 = toMutableList(pending);
  this_0.e(first);
  var lookahead = this_0;
  $l$loop: while (true) {
    var tmp;
    if (remaining >= 0) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !lookahead.e1();
    } else {
      tmp = false;
    }
    if (!tmp) {
      break $l$loop;
    }
    var item = lookahead.v2(get_lastIndex(lookahead));
    var doc = item.re_1;
    if (doc instanceof Text)
      remaining = remaining - doc.vd_1.length | 0;
    else {
      if (doc instanceof Break) {
        if (!item.te_1)
          return true;
        var tmp0_elvis_lhs = doc.wd_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var flat = tmp_0;
        remaining = remaining - flat.length | 0;
      } else {
        if (doc instanceof Concat) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = asReversed(doc.xd_1).g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            // Inline function 'kotlin.collections.plusAssign' call
            var element_0 = item.we(element);
            lookahead.e(element_0);
          }
        } else {
          if (doc instanceof Nest) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_1 = item.we(doc.zd_1, item.se_1 + 4 | 0);
            lookahead.e(element_1);
          } else {
            if (doc instanceof Group) {
              // Inline function 'kotlin.collections.plusAssign' call
              var element_2 = item.we(doc.be_1);
              lookahead.e(element_2);
            } else {
              if (doc instanceof MemberChain) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element_3 = item.we(layout(doc));
                lookahead.e(element_3);
              } else {
                if (doc instanceof LambdaLayout) {
                  // Inline function 'kotlin.collections.plusAssign' call
                  var element_4 = item.we(doc.qe(item.ue_1));
                  lookahead.e(element_4);
                } else {
                  if (doc instanceof ExpandTrailingLambdas) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    var element_5 = item.we(doc.ie_1, VOID, VOID, true);
                    lookahead.e(element_5);
                  } else {
                    noWhenBranchMatchedException();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return remaining >= 0;
}
var properties_initialized_Document_kt_e1mksj;
function _init_properties_Document_kt__u55c91() {
  if (!properties_initialized_Document_kt_e1mksj) {
    properties_initialized_Document_kt_e1mksj = true;
    hardLine = new Break(null);
    softLine = new Break(' ');
    softBreak = new Break('');
  }
}
function Expression(precedence, statement, renderCode) {
  precedence = precedence === VOID ? 100 : precedence;
  statement = statement === VOID ? false : statement;
  this.v7_1 = precedence;
  this.w7_1 = statement;
  this.x7_1 = renderCode;
}
protoOf(Expression).y7 = function (context) {
  return this.x7_1(context);
};
protoOf(Expression).xe = function (context, minimum) {
  // Inline function 'kotlin.let' call
  var it = this.y7(context);
  return this.v7_1 < minimum ? plus_2(plus_1(text('('), it), ')') : it;
};
function reference_0(name) {
  return new Expression(VOID, VOID, reference$lambda(name));
}
function nullValue_0() {
  return new Expression(VOID, VOID, nullValue$lambda);
}
function literal_2(value) {
  var tmp;
  if (value == null) {
    tmp = 'null';
  } else {
    if (!(value == null) ? typeof value === 'string' : false) {
      tmp = '"' + escapeString(value) + '"';
    } else {
      if (value instanceof Char) {
        tmp = "'" + (equals(value, new Char(_Char___init__impl__6a9atx(39))) ? "\\'" : replace(escapeString(toString_1(value.s_1)), '\\"', '"')) + "'";
      } else {
        var tmp_0;
        var tmp_1;
        if (!(value == null) ? typeof value === 'boolean' : false) {
          tmp_1 = true;
        } else {
          tmp_1 = !(value == null) ? typeof value === 'number' : false;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          var tmp_2;
          if (!(value == null) ? typeof value === 'number' : false) {
            tmp_2 = true;
          } else {
            tmp_2 = !(value == null) ? typeof value === 'number' : false;
          }
          tmp_0 = tmp_2;
        }
        if (tmp_0) {
          tmp = toString(value);
        } else {
          if (value instanceof Long) {
            tmp = equals(value, new Long(0, -2147483648)) ? '(-9223372036854775807L - 1L)' : value.toString() + 'L';
          } else {
            if (value instanceof UInt) {
              tmp = '' + value + 'u';
            } else {
              if (value instanceof ULong) {
                tmp = '' + value + 'uL';
              } else {
                if (!(value == null) ? typeof value === 'number' : false) {
                  var tmp_3;
                  if (isNaN_1(value)) {
                    tmp_3 = 'Float.NaN';
                  } else if (value === Infinity) {
                    tmp_3 = 'Float.POSITIVE_INFINITY';
                  } else if (value === -Infinity) {
                    tmp_3 = 'Float.NEGATIVE_INFINITY';
                  } else {
                    // Inline function 'kotlin.let' call
                    var it = value.toString();
                    tmp_3 = (contains(it, _Char___init__impl__6a9atx(46)) || contains(it, _Char___init__impl__6a9atx(69)) || contains(it, _Char___init__impl__6a9atx(101)) ? it : it + '.0') + 'f';
                  }
                  tmp = tmp_3;
                } else {
                  if (!(value == null) ? typeof value === 'number' : false) {
                    var tmp_4;
                    if (isNaN_0(value)) {
                      tmp_4 = 'Double.NaN';
                    } else if (value === Infinity) {
                      tmp_4 = 'Double.POSITIVE_INFINITY';
                    } else if (value === -Infinity) {
                      tmp_4 = 'Double.NEGATIVE_INFINITY';
                    } else {
                      // Inline function 'kotlin.let' call
                      var it_0 = value.toString();
                      tmp_4 = contains(it_0, _Char___init__impl__6a9atx(46)) || contains(it_0, _Char___init__impl__6a9atx(69)) || contains(it_0, _Char___init__impl__6a9atx(101)) ? it_0 : it_0 + '.0';
                    }
                    tmp = tmp_4;
                  } else {
                    var message = 'Not a Kotlin literal: ' + toString_0(value);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  var code = tmp;
  var tmp_5 = startsWith(code, _Char___init__impl__6a9atx(45)) ? 80 : 100;
  return new Expression(tmp_5, VOID, literal$lambda(code));
}
function literal_3(value) {
  var tmp = value < 0 ? 80 : 100;
  return new Expression(tmp, VOID, literal$lambda_0(value));
}
function literal_4(value) {
  return floatingLiteral(value, value.toString(), 'Double', '');
}
function floatingLiteral(value, text, type, suffix) {
  var code = isNaN_0(value) ? type + '.NaN' : value === Infinity ? type + '.POSITIVE_INFINITY' : value === -Infinity ? type + '.NEGATIVE_INFINITY' : (contains(text, _Char___init__impl__6a9atx(46)) || contains(text, _Char___init__impl__6a9atx(69)) || contains(text, _Char___init__impl__6a9atx(101)) ? text : text + '.0') + suffix;
  var tmp = startsWith(code, _Char___init__impl__6a9atx(45)) ? 80 : 100;
  return new Expression(tmp, VOID, floatingLiteral$lambda(code));
}
function ExpressionScope$nullValue$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function ExpressionScope() {
}
function record(_this__u8e3s4, expression, chain) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ChainScope(expression, _this__u8e3s4 instanceof BlockScope);
  chain(this_0);
  accept(_this__u8e3s4, this_0.af());
}
function accept(_this__u8e3s4, expression) {
  if (_this__u8e3s4 instanceof BlockScope) {
    _this__u8e3s4.ya_1.v8(expression);
  } else {
    if (_this__u8e3s4 instanceof ArgumentScope) {
      // Inline function 'kotlin.check' call
      if (!(_this__u8e3s4.da_1 == null)) {
        var message = 'An argument must describe exactly one expression';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      _this__u8e3s4.da_1 = expression;
    } else {
      if (_this__u8e3s4 instanceof SingleExpressionScope) {
        // Inline function 'kotlin.check' call
        if (!(_this__u8e3s4.ef_1 == null)) {
          var message_0 = 'An expression block must describe exactly one expression';
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
        _this__u8e3s4.ef_1 = expression;
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
}
function SingleExpressionScope() {
  this.ef_1 = null;
}
function expression(body) {
  // Inline function 'kotlin.apply' call
  var this_0 = new SingleExpressionScope();
  body(this_0);
  var tmp1 = this_0.ef_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp1 == null) {
      var message = 'An expression block must describe an expression';
      throw IllegalArgumentException_init_$Create$(toString(message));
    } else {
      tmp$ret$2 = tmp1;
      break $l$block;
    }
  }
  return tmp$ret$2;
}
function change($this, build) {
  // Inline function 'kotlin.check' call
  if (!!$this.af().w7_1) {
    var message = 'An assignment must be the last step of a statement';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  $this.ze_1 = build($this.af());
}
function memberCall($this, name, safe, configure) {
  change($this, ChainScope$memberCall$lambda(name, configure, safe));
}
function binary($this, operator, precedence, body) {
  var right = expression(body);
  change($this, ChainScope$binary$lambda(precedence, operator, right));
}
function ChainScope$classLiteral$lambda(receiver) {
  return new Expression(90, VOID, ChainScope$classLiteral$lambda$lambda(receiver));
}
function ChainScope$classLiteral$lambda$lambda($receiver) {
  return function (c) {
    return plus_2($receiver.xe(c, 90), '::class');
  };
}
function ChainScope$property$lambda$lambda($receiver, $name) {
  return function (c) {
    return member($receiver.xe(c, 90), text('.' + c.r9($name)));
  };
}
function ChainScope$property$lambda($name) {
  return function (receiver) {
    return new Expression(90, VOID, ChainScope$property$lambda$lambda(receiver, $name));
  };
}
function ChainScope$safeProperty$lambda$lambda($receiver, $name) {
  return function (c) {
    return member($receiver.xe(c, 90), text('?.' + c.r9($name)));
  };
}
function ChainScope$safeProperty$lambda($name) {
  return function (receiver) {
    return new Expression(90, VOID, ChainScope$safeProperty$lambda$lambda(receiver, $name));
  };
}
function ChainScope$memberCall$lambda($name, $configure, $safe) {
  return function (receiver) {
    return buildCall($name, $configure, receiver, $safe);
  };
}
function ChainScope$index$lambda$lambda($receiver, $index) {
  return function (c) {
    return plus_1($receiver.xe(c, 90), delimited('[', listOf_0($index.y7(c)), ']'));
  };
}
function ChainScope$index$lambda($index) {
  return function (receiver) {
    return new Expression(90, VOID, ChainScope$index$lambda$lambda(receiver, $index));
  };
}
function ChainScope$binary$lambda$lambda($left, $precedence, $operator, $right) {
  return function (c) {
    return grouped(plus_1(plus_2($left.xe(c, $precedence), ' ' + $operator), nested(plus_1(get_softLine(), $right.xe(c, $precedence + 1 | 0)))));
  };
}
function ChainScope$binary$lambda($precedence, $operator, $right) {
  return function (left) {
    return new Expression($precedence, VOID, ChainScope$binary$lambda$lambda(left, $precedence, $operator, $right));
  };
}
function ChainScope$infixCall$lambda$lambda($left, $name, $right) {
  return function (c) {
    return grouped(plus_1(plus_2($left.xe(c, 45), ' ' + c.r9($name)), nested(plus_1(get_softLine(), $right.xe(c, 46)))));
  };
}
function ChainScope$infixCall$lambda($name, $right) {
  return function (left) {
    return new Expression(45, VOID, ChainScope$infixCall$lambda$lambda(left, $name, $right));
  };
}
function ChainScope$not$lambda(operand) {
  return new Expression(80, VOID, ChainScope$not$lambda$lambda(operand));
}
function ChainScope$not$lambda$lambda($operand) {
  return function (c) {
    return plus_2(plus_1(text('!('), $operand.y7(c)), ')');
  };
}
function ChainScope$unaryMinus$lambda(operand) {
  return new Expression(80, VOID, ChainScope$unaryMinus$lambda$lambda(operand));
}
function ChainScope$unaryMinus$lambda$lambda($operand) {
  return function (c) {
    return plus_2(plus_1(text('-('), $operand.y7(c)), ')');
  };
}
function ChainScope$isType$lambda$lambda($operand, $type) {
  return function (c) {
    return plus_1(plus_2($operand.xe(c, 35), ' is '), $type.u9(c));
  };
}
function ChainScope$isType$lambda($type) {
  return function (operand) {
    return new Expression(35, VOID, ChainScope$isType$lambda$lambda(operand, $type));
  };
}
function ChainScope$assign$lambda$lambda($left, $right) {
  return function (c) {
    return plus_1(plus_2($left.y7(c), ' = '), $right.y7(c));
  };
}
function ChainScope$assign$lambda($right) {
  return function (left) {
    return new Expression(0, true, ChainScope$assign$lambda$lambda(left, $right));
  };
}
function ChainScope(initial, statementsAllowed) {
  statementsAllowed = statementsAllowed === VOID ? false : statementsAllowed;
  this.ye_1 = statementsAllowed;
  this.ze_1 = initial;
}
protoOf(ChainScope).af = function () {
  var tmp0 = this.ze_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp0 == null) {
      var message = 'A chain must start with a call';
      throw IllegalArgumentException_init_$Create$(toString(message));
    } else {
      tmp$ret$1 = tmp0;
      break $l$block;
    }
  }
  return tmp$ret$1;
};
protoOf(ChainScope).ff = function () {
  change(this, ChainScope$classLiteral$lambda);
};
protoOf(ChainScope).gf = function (name) {
  change(this, ChainScope$property$lambda(name));
};
protoOf(ChainScope).hf = function (name) {
  change(this, ChainScope$safeProperty$lambda(name));
};
protoOf(ChainScope).qb = function (name, configure) {
  if (this.ze_1 == null) {
    this.ze_1 = buildCall(name, configure);
  } else {
    memberCall(this, name, false, configure);
  }
};
protoOf(ChainScope).if = function (name, configure) {
  memberCall(this, name, true, configure);
};
protoOf(ChainScope).jf = function (body) {
  var index = expression(body);
  change(this, ChainScope$index$lambda(index));
};
protoOf(ChainScope).kf = function (body) {
  binary(this, '+', 60, body);
};
protoOf(ChainScope).lf = function (body) {
  binary(this, '-', 60, body);
};
protoOf(ChainScope).mf = function (body) {
  binary(this, '*', 70, body);
};
protoOf(ChainScope).nf = function (body) {
  binary(this, '/', 70, body);
};
protoOf(ChainScope).of = function (body) {
  binary(this, '%', 70, body);
};
protoOf(ChainScope).pf = function (body) {
  binary(this, '==', 30, body);
};
protoOf(ChainScope).qf = function (body) {
  binary(this, '!=', 30, body);
};
protoOf(ChainScope).rf = function (body) {
  binary(this, '&&', 20, body);
};
protoOf(ChainScope).sf = function (body) {
  binary(this, '||', 10, body);
};
protoOf(ChainScope).tf = function (body) {
  binary(this, '?:', 40, body);
};
protoOf(ChainScope).uf = function (name, body) {
  // Inline function 'kotlin.text.isNotBlank' call
  // Inline function 'kotlin.require' call
  if (!!isBlank(name)) {
    var message = 'Call name cannot be blank';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var right = expression(body);
  change(this, ChainScope$infixCall$lambda(name, right));
};
protoOf(ChainScope).vf = function () {
  change(this, ChainScope$not$lambda);
};
protoOf(ChainScope).wf = function () {
  change(this, ChainScope$unaryMinus$lambda);
};
protoOf(ChainScope).xf = function (body) {
  var type_0 = type(body);
  change(this, ChainScope$isType$lambda(type_0));
};
protoOf(ChainScope).yf = function (body) {
  // Inline function 'kotlin.check' call
  if (!this.ye_1) {
    var message = 'Assignments belong in a statement body';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var right = expression(body);
  change(this, ChainScope$assign$lambda(right));
};
function ArgumentScope() {
  this.ca_1 = null;
  this.da_1 = null;
  this.ea_1 = null;
}
protoOf(ArgumentScope).la = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.ea_1 == null)) {
    var message = 'Argument type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.ea_1 = type(body);
};
protoOf(ArgumentScope).fa = function () {
  // Inline function 'kotlin.require' call
  if (!!(this.ea_1 == null === (this.da_1 == null))) {
    var message = 'An argument must configure exactly one of type or value';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(this.ea_1 == null || this.ca_1 == null)) {
    var message_0 = 'Type arguments cannot have names';
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
};
function AnnotationScope() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.td_1 = ArrayList_init_$Create$_0();
}
protoOf(AnnotationScope).ba = function (body) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ArgumentScope();
  body(this_0);
  // Inline function 'kotlin.also' call
  this_0.fa();
  var argument = this_0;
  // Inline function 'kotlin.require' call
  if (!(argument.ea_1 == null)) {
    var message = 'Annotation arguments must be values';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var tmp5 = this.td_1;
  var tmp = argument.ca_1;
  // Inline function 'kotlin.requireNotNull' call
  var tmp0 = argument.da_1;
  var tmp$ret$6;
  $l$block: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp0 == null) {
      var message_0 = 'Required value was null.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    } else {
      tmp$ret$6 = tmp0;
      break $l$block;
    }
  }
  var tmp$ret$7 = tmp$ret$6;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = to(tmp, tmp$ret$7);
  tmp5.e(element);
};
protoOf(AnnotationScope).n8 = function (name, context) {
  var tmp = text(context.r9(name));
  var tmp_0;
  if (this.td_1.e1()) {
    tmp_0 = text('');
  } else {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.td_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var name_0 = item.m7();
      var value = item.n7();
      var tmp_1;
      if (name_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_1 = identifier(name_0) + ' = ';
      }
      var tmp1_elvis_lhs = tmp_1;
      var tmp$ret$2 = plus_1(text(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs), value.y7(context));
      destination.e(tmp$ret$2);
    }
    tmp_0 = delimited('(', destination, ')');
  }
  return plus_1(tmp, tmp_0);
};
function CallScope() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.zf_1 = ArrayList_init_$Create$_0();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp_0.ag_1 = ArrayList_init_$Create$_0();
  this.bg_1 = null;
}
protoOf(CallScope).ba = function (body) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ArgumentScope();
  body(this_0);
  // Inline function 'kotlin.also' call
  this_0.fa();
  var argument = this_0;
  var type = argument.ea_1;
  if (!(type == null)) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.ag_1.e(type);
  } else {
    var tmp6 = this.zf_1;
    var tmp = argument.ca_1;
    // Inline function 'kotlin.requireNotNull' call
    var tmp0 = argument.da_1;
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$5 = tmp0;
        break $l$block;
      }
    }
    var tmp$ret$6 = tmp$ret$5;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = to(tmp, tmp$ret$6);
    tmp6.e(element);
  }
};
protoOf(CallScope).cg = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.bg_1 == null)) {
    var message = 'Trailing lambda has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.bg_1 = buildLambda(body, true);
};
protoOf(CallScope).dg = function (name, c) {
  var tmp;
  if (this.ag_1.e1()) {
    tmp = text('');
  } else {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.ag_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var tmp$ret$0 = item.u9(c);
      destination.e(tmp$ret$0);
    }
    tmp = delimited('<', destination, '>');
  }
  var typeArgs = tmp;
  // Inline function 'kotlin.collections.map' call
  var this_1 = this.zf_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
  var _iterator__ex2g4s_0 = this_1.g();
  while (_iterator__ex2g4s_0.h()) {
    var item_0 = _iterator__ex2g4s_0.i();
    var name_0 = item_0.m7();
    var expression = item_0.n7();
    var tmp_0;
    if (name_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = identifier(name_0) + ' = ';
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp$ret$5 = plus_1(text(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs), expression.y7(c));
    destination_0.e(tmp$ret$5);
  }
  var args = destination_0;
  var parentheses = this.zf_1.e1() && !(this.bg_1 == null) && this.ag_1.e1() ? text('') : delimited('(', args, ')');
  var tmp_1 = plus_1(plus_1(text(c.r9(name)), typeArgs), parentheses);
  var tmp0_safe_receiver = this.bg_1;
  var tmp_2;
  if (tmp0_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = plus_1(text(' '), tmp0_safe_receiver.y7(c));
  }
  var tmp1_elvis_lhs_0 = tmp_2;
  return plus_1(tmp_1, tmp1_elvis_lhs_0 == null ? text('') : tmp1_elvis_lhs_0);
};
function buildCall(name, configure, receiver, safe) {
  receiver = receiver === VOID ? null : receiver;
  safe = safe === VOID ? false : safe;
  // Inline function 'kotlin.text.isNotBlank' call
  // Inline function 'kotlin.require' call
  if (!!isBlank(name)) {
    var message = 'Call name cannot be blank';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.apply' call
  var this_0 = new CallScope();
  configure(this_0);
  var scope = this_0;
  return new Expression(90, VOID, buildCall$lambda(scope, name, receiver, safe));
}
function buildLambda(body, trailing) {
  trailing = trailing === VOID ? false : trailing;
  // Inline function 'kotlin.apply' call
  var this_0 = new LambdaBodyScope();
  body(this_0);
  var scope = this_0;
  return new Expression(VOID, VOID, buildLambda$lambda(scope, trailing));
}
function IfExpressionScope$build$lambda($condition, $yes, $no) {
  return function (c) {
    return grouped(plus_1(plus_2(plus_1(plus_1(plus_2(plus_1(text('if ('), $condition.y7(c)), ')'), nested(plus_1(get_softLine(), $yes.y7(c)))), get_softLine()), 'else'), nested(plus_1(get_softLine(), $no.y7(c)))));
  };
}
function IfExpressionScope() {
  this.bf_1 = null;
  this.cf_1 = null;
  this.df_1 = null;
}
protoOf(IfExpressionScope).ub = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.bf_1 == null)) {
    var message = 'Condition has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.bf_1 = expression(body);
};
protoOf(IfExpressionScope).eg = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.cf_1 == null)) {
    var message = 'Then branch has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.cf_1 = expression(body);
};
protoOf(IfExpressionScope).fg = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.df_1 == null)) {
    var message = 'Else branch has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.df_1 = expression(body);
};
protoOf(IfExpressionScope).ga = function () {
  var tmp0 = this.bf_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp0 == null) {
      var message = 'An if expression needs a condition';
      throw IllegalArgumentException_init_$Create$(toString(message));
    } else {
      tmp$ret$1 = tmp0;
      break $l$block;
    }
  }
  var condition = tmp$ret$1;
  var tmp1 = this.cf_1;
  var tmp$ret$3;
  $l$block_0: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp1 == null) {
      var message_0 = 'An if expression needs a then branch';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    } else {
      tmp$ret$3 = tmp1;
      break $l$block_0;
    }
  }
  var yes = tmp$ret$3;
  var tmp2 = this.df_1;
  var tmp$ret$5;
  $l$block_1: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp2 == null) {
      var message_1 = 'An if expression needs an else branch';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    } else {
      tmp$ret$5 = tmp2;
      break $l$block_1;
    }
  }
  var no = tmp$ret$5;
  return new Expression(0, VOID, IfExpressionScope$build$lambda(condition, yes, no));
};
function reference$lambda($name) {
  return function (c) {
    return text(setOf(['this', 'super']).f1($name) ? $name : c.r9($name));
  };
}
function nullValue$lambda(_unused_var__etf5q3) {
  return text('null');
}
function literal$lambda($code) {
  return function (_unused_var__etf5q3) {
    return text($code);
  };
}
function literal$lambda_0($value) {
  return function (_unused_var__etf5q3) {
    return text($value.toString());
  };
}
function floatingLiteral$lambda($code) {
  return function (_unused_var__etf5q3) {
    return text($code);
  };
}
function buildCall$lambda($scope, $name, $receiver, $safe) {
  return function (c) {
    var call = $scope.dg($name, c);
    var tmp0_safe_receiver = $receiver;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = member(tmp0_safe_receiver.xe(c, 90), plus_1(text($safe ? '?.' : '.'), call));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? call : tmp1_elvis_lhs;
  };
}
function buildLambda$lambda($scope, $trailing) {
  return function (c) {
    var tmp;
    if ($scope.xb_1.e1()) {
      tmp = text('{');
    } else {
      var tmp_0 = text('{');
      var tmp_1 = get_softLine();
      // Inline function 'kotlin.collections.map' call
      var this_0 = $scope.xb_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.g();
      while (_iterator__ex2g4s.h()) {
        var item = _iterator__ex2g4s.i();
        var tmp$ret$0 = item.u9(c);
        destination.e(tmp$ret$0);
      }
      tmp = grouped(plus_1(tmp_0, nested(plus_2(plus_1(tmp_1, joined(destination, plus_1(text(','), get_softLine()))), ' ->'))));
    }
    var header = tmp;
    return lambdaLayout(header, $scope.ya_1.c9(c), $scope.ya_1.t8(), $trailing, $scope.ya_1.u8() && $scope.xb_1.e1());
  };
}
function escapeString(text) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.forEach' call
  var inductionVariable = 0;
  while (inductionVariable < charSequenceLength(text)) {
    var element = charSequenceGet(text, inductionVariable);
    inductionVariable = inductionVariable + 1 | 0;
    if (element === _Char___init__impl__6a9atx(92))
      this_0.u4('\\\\');
    else if (element === _Char___init__impl__6a9atx(34))
      this_0.u4('\\"');
    else if (element === _Char___init__impl__6a9atx(36))
      this_0.u4('\\$');
    else if (element === _Char___init__impl__6a9atx(10))
      this_0.u4('\\n');
    else if (element === _Char___init__impl__6a9atx(13))
      this_0.u4('\\r');
    else if (element === _Char___init__impl__6a9atx(9))
      this_0.u4('\\t');
    else if (element === _Char___init__impl__6a9atx(8))
      this_0.u4('\\b');
    else {
      var tmp;
      var tmp_0;
      var tmp_1;
      // Inline function 'kotlin.code' call
      if (Char__toInt_impl_vasixd(element) < 32) {
        tmp_1 = true;
      } else {
        // Inline function 'kotlin.code' call
        tmp_1 = Char__toInt_impl_vasixd(element) === 127;
      }
      if (tmp_1) {
        tmp_0 = true;
      } else {
        tmp_0 = element === _Char___init__impl__6a9atx(8232);
      }
      if (tmp_0) {
        tmp = true;
      } else {
        tmp = element === _Char___init__impl__6a9atx(8233);
      }
      if (tmp) {
        this_0.u4('\\u');
        // Inline function 'kotlin.code' call
        var tmp$ret$2 = Char__toInt_impl_vasixd(element);
        this_0.u4(padStart(toString_2(tmp$ret$2, 16), 4, _Char___init__impl__6a9atx(48)));
      } else {
        this_0.v4(element);
      }
    }
  }
  return this_0.toString();
}
function generateKotlin(program) {
  return ktFile(generateKotlin$lambda(program));
}
function execute(scope, nodes) {
  if (nodes == null)
    return Unit_instance;
  var inductionVariable = 0;
  var tmp = nodes.length;
  var last = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  if (inductionVariable < last)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var node = nodes[index];
      try {
        applyNode(scope, node);
      } catch ($p) {
        if ($p instanceof Error) {
          var error = $p;
          var tmp0_safe_receiver = error.message;
          if ((tmp0_safe_receiver == null ? null : startsWith_0(tmp0_safe_receiver, 'Line ')) === true)
            throw error;
          var tmp_0 = node.line;
          var tmp1_elvis_lhs = error.message;
          // Inline function 'kotlin.error' call
          var message = 'Line ' + tmp_0 + ': ' + (tmp1_elvis_lhs == null ? 'Invalid builder call' : tmp1_elvis_lhs);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          throw $p;
        }
      }
    }
     while (inductionVariable < last);
}
function applyNode(scope, node) {
  var tmp = node.name;
  var name = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  var args = node.args;
  var tmp_0 = args.length;
  var count = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var block = applyNode$lambda(node);
  var tmp_1 = node.assignment;
  if ((!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE()) {
    var tmp_2;
    if (name === 'modifiers') {
      tmp_2 = scope instanceof DeclarationScope;
    } else {
      tmp_2 = false;
    }
    if (tmp_2)
      scope.ac_1 = applyNode$strings(count, args, name);
    else {
      var tmp_3;
      if (name === 'modifiers') {
        tmp_3 = scope instanceof MemberScope;
      } else {
        tmp_3 = false;
      }
      if (tmp_3)
        scope.q8_1 = applyNode$strings(count, args, name);
      else {
        var tmp_4;
        if (name === 'annotations') {
          tmp_4 = scope instanceof DeclarationScope;
        } else {
          tmp_4 = false;
        }
        if (tmp_4)
          scope.bc_1 = applyNode$strings(count, args, name);
        else {
          var tmp_5;
          if (name === 'annotations') {
            tmp_5 = scope instanceof MemberScope;
          } else {
            tmp_5 = false;
          }
          if (tmp_5)
            scope.r8_1 = applyNode$strings(count, args, name);
          else {
            var tmp_6;
            if (name === 'annotations') {
              tmp_6 = scope instanceof TypeScope;
            } else {
              tmp_6 = false;
            }
            if (tmp_6)
              scope.w9_1 = applyNode$strings(count, args, name);
            else {
              var tmp_7;
              if (name === 'visibility') {
                tmp_7 = scope instanceof DeclarationScope;
              } else {
                tmp_7 = false;
              }
              if (tmp_7)
                scope.zb_1 = applyNode$visibility(count, args, name);
              else {
                var tmp_8;
                if (name === 'visibility') {
                  tmp_8 = scope instanceof MemberScope;
                } else {
                  tmp_8 = false;
                }
                if (tmp_8)
                  scope.p8_1 = applyNode$visibility(count, args, name);
                else {
                  var tmp_9;
                  if (name === 'visibility') {
                    tmp_9 = scope instanceof ConstructorPropertyScope;
                  } else {
                    tmp_9 = false;
                  }
                  if (tmp_9)
                    scope.sc_1 = applyNode$visibility(count, args, name);
                  else {
                    var tmp_10;
                    if (name === 'nullable') {
                      tmp_10 = scope instanceof TypeScope;
                    } else {
                      tmp_10 = false;
                    }
                    if (tmp_10)
                      scope.v9_1 = applyNode$boolean(count, args, name);
                    else {
                      var tmp_11;
                      if (name === 'mutable') {
                        tmp_11 = scope instanceof ConstructorPropertyScope;
                      } else {
                        tmp_11 = false;
                      }
                      if (tmp_11)
                        scope.tc_1 = applyNode$boolean(count, args, name);
                      else {
                        var tmp_12;
                        if (name === 'name') {
                          tmp_12 = scope instanceof ArgumentScope;
                        } else {
                          tmp_12 = false;
                        }
                        if (tmp_12)
                          scope.ca_1 = applyNode$string(count, args, name);
                        else {
                          // Inline function 'kotlin.error' call
                          var message = "Unsupported property '" + name + "' in this block";
                          throw IllegalStateException_init_$Create$(toString(message));
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return Unit_instance;
  }
  var named = setOf(['packageName', 'ktImport', 'ktFileAnnotation', 'ktFunction', 'ktClass', 'ktInterface', 'ktObject', 'ktValue', 'ktVariable', 'parameter', 'reference', 'call', 'safeCall', 'property', 'safeProperty', 'modifier', 'comment', 'infixCall']);
  if (!named.f1(name) && !(name === 'literal') && !(name === 'lines')) {
    applyNode$noArgs(count, name);
  }
  if (setOf(['packageName', 'ktImport', 'modifier', 'comment', 'line', 'lines', 'nullValue', 'classLiteral', 'not', 'unaryMinus']).f1(name)) {
    // Inline function 'kotlin.require' call
    if (!(node.body == null)) {
      var message_0 = name + ' does not accept a block';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  var needsBlock = setOf(['constructor', 'returns', 'body', 'type', 'argument', 'initializer', 'delegate', 'getter', 'default', 'trailingLambda', 'chain', 'lambdaExpression', 'ifExpression', 'ifStatement', 'condition', 'then', 'elseCase', 'index', 'plus', 'minus', 'times', 'div', 'rem', 'equalTo', 'notEqualTo', 'and', 'or', 'orElse', 'infixCall', 'isType', 'assign']);
  var tmp_13;
  if (needsBlock.f1(name)) {
    tmp_13 = true;
  } else {
    var tmp_14;
    if (name === 'property') {
      tmp_14 = scope instanceof ConstructorParameterScope;
    } else {
      tmp_14 = false;
    }
    tmp_13 = tmp_14;
  }
  if (tmp_13) {
    // Inline function 'kotlin.require' call
    if (!(node.body != null)) {
      var message_1 = name + ' requires a block { ... }';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  var tmp_15;
  if (scope instanceof ChainScope) {
    tmp_15 = setOf(['property', 'safeProperty']).f1(name);
  } else {
    tmp_15 = false;
  }
  if (tmp_15) {
    // Inline function 'kotlin.require' call
    if (!(node.body == null)) {
      var message_2 = name + ' does not accept a block';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
  }
  var tmp_16;
  if (name === 'packageName') {
    tmp_16 = scope instanceof FileScope;
  } else {
    tmp_16 = false;
  }
  if (tmp_16) {
    scope.sd(applyNode$string(count, args, name));
  } else {
    var tmp_17;
    if (name === 'ktImport') {
      tmp_17 = scope instanceof FileScope;
    } else {
      tmp_17 = false;
    }
    if (tmp_17) {
      scope.qd(applyNode$string(count, args, name));
    } else {
      var tmp_18;
      if (name === 'ktFileAnnotation') {
        tmp_18 = scope instanceof FileScope;
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        scope.rd(applyNode$string(count, args, name), block);
      } else {
        var tmp_19;
        if (name === 'ktFunction') {
          tmp_19 = scope instanceof DeclarationContainerScope;
        } else {
          tmp_19 = false;
        }
        if (tmp_19) {
          scope.cb(applyNode$string(count, args, name), block);
        } else {
          var tmp_20;
          if (name === 'ktClass') {
            tmp_20 = scope instanceof DeclarationContainerScope;
          } else {
            tmp_20 = false;
          }
          if (tmp_20) {
            scope.db(applyNode$string(count, args, name), block);
          } else {
            var tmp_21;
            if (name === 'ktValue') {
              tmp_21 = scope instanceof DeclarationContainerScope;
            } else {
              tmp_21 = false;
            }
            if (tmp_21) {
              scope.ab(applyNode$string(count, args, name), block);
            } else {
              var tmp_22;
              if (name === 'ktVariable') {
                tmp_22 = scope instanceof DeclarationContainerScope;
              } else {
                tmp_22 = false;
              }
              if (tmp_22) {
                scope.bb(applyNode$string(count, args, name), block);
              } else {
                var tmp_23;
                if (name === 'ktInterface') {
                  tmp_23 = scope instanceof FileScope;
                } else {
                  tmp_23 = false;
                }
                if (tmp_23) {
                  scope.vc(applyNode$string(count, args, name), block);
                } else {
                  var tmp_24;
                  if (name === 'ktInterface') {
                    tmp_24 = scope instanceof MemberScope;
                  } else {
                    tmp_24 = false;
                  }
                  if (tmp_24) {
                    scope.vc(applyNode$string(count, args, name), block);
                  } else {
                    var tmp_25;
                    if (name === 'ktObject') {
                      tmp_25 = scope instanceof FileScope;
                    } else {
                      tmp_25 = false;
                    }
                    if (tmp_25) {
                      scope.wc(applyNode$string(count, args, name), block);
                    } else {
                      var tmp_26;
                      if (name === 'ktObject') {
                        tmp_26 = scope instanceof MemberScope;
                      } else {
                        tmp_26 = false;
                      }
                      if (tmp_26) {
                        scope.wc(applyNode$string(count, args, name), block);
                      } else {
                        var tmp_27;
                        if (name === 'companionObject') {
                          tmp_27 = scope instanceof ClassScope;
                        } else {
                          tmp_27 = false;
                        }
                        if (tmp_27) {
                          scope.dd(VOID, block);
                        } else {
                          var tmp_28;
                          if (name === 'companionObject') {
                            tmp_28 = scope instanceof InterfaceScope;
                          } else {
                            tmp_28 = false;
                          }
                          if (tmp_28) {
                            scope.id(VOID, block);
                          } else {
                            var tmp_29;
                            if (name === 'constructor') {
                              tmp_29 = scope instanceof ClassScope;
                            } else {
                              tmp_29 = false;
                            }
                            if (tmp_29) {
                              scope.configureConstructor(block);
                            } else {
                              var tmp_30;
                              if (name === 'parameter') {
                                tmp_30 = scope instanceof ConstructorScope;
                              } else {
                                tmp_30 = false;
                              }
                              if (tmp_30) {
                                scope.lc(applyNode$string(count, args, name), block);
                              } else {
                                var tmp_31;
                                if (name === 'parameter') {
                                  tmp_31 = scope instanceof FunctionScope;
                                } else {
                                  tmp_31 = false;
                                }
                                if (tmp_31) {
                                  scope.yb(applyNode$string(count, args, name), block);
                                } else {
                                  var tmp_32;
                                  if (name === 'parameter') {
                                    tmp_32 = scope instanceof LambdaBodyScope;
                                  } else {
                                    tmp_32 = false;
                                  }
                                  if (tmp_32) {
                                    scope.yb(applyNode$string(count, args, name), block);
                                  } else {
                                    var tmp_33;
                                    if (name === 'property') {
                                      tmp_33 = scope instanceof ConstructorParameterScope;
                                    } else {
                                      tmp_33 = false;
                                    }
                                    if (tmp_33) {
                                      applyNode$noArgs(count, name);
                                      scope.rc(block);
                                    } else {
                                      var tmp_34;
                                      if (name === 'modifier') {
                                        tmp_34 = scope instanceof ParameterScope;
                                      } else {
                                        tmp_34 = false;
                                      }
                                      if (tmp_34) {
                                        scope.va(applyNode$string(count, args, name));
                                      } else {
                                        var tmp_35;
                                        if (name === 'default') {
                                          tmp_35 = scope instanceof ParameterScope;
                                        } else {
                                          tmp_35 = false;
                                        }
                                        if (tmp_35) {
                                          scope.ua(block);
                                        } else {
                                          var tmp_36;
                                          if (name === 'returns') {
                                            tmp_36 = scope instanceof FunctionScope;
                                          } else {
                                            tmp_36 = false;
                                          }
                                          if (tmp_36) {
                                            scope.dc(block);
                                          } else {
                                            var tmp_37;
                                            if (name === 'body') {
                                              tmp_37 = scope instanceof FunctionScope;
                                            } else {
                                              tmp_37 = false;
                                            }
                                            if (tmp_37) {
                                              scope.ec(block);
                                            } else {
                                              var tmp_38;
                                              if (name === 'body') {
                                                tmp_38 = scope instanceof GetterScope;
                                              } else {
                                                tmp_38 = false;
                                              }
                                              if (tmp_38) {
                                                scope.jc(block);
                                              } else {
                                                var tmp_39;
                                                if (name === 'body') {
                                                  tmp_39 = scope instanceof IfStatementScope;
                                                } else {
                                                  tmp_39 = false;
                                                }
                                                if (tmp_39) {
                                                  scope.vb(block);
                                                } else {
                                                  var tmp_40;
                                                  if (name === 'type') {
                                                    tmp_40 = scope instanceof ParameterScope;
                                                  } else {
                                                    tmp_40 = false;
                                                  }
                                                  if (tmp_40) {
                                                    scope.la(block);
                                                  } else {
                                                    var tmp_41;
                                                    if (name === 'type') {
                                                      tmp_41 = scope instanceof TypeSlotScope;
                                                    } else {
                                                      tmp_41 = false;
                                                    }
                                                    if (tmp_41) {
                                                      scope.la(block);
                                                    } else {
                                                      var tmp_42;
                                                      if (name === 'type') {
                                                        tmp_42 = scope instanceof PropertyScope;
                                                      } else {
                                                        tmp_42 = false;
                                                      }
                                                      if (tmp_42) {
                                                        scope.la(block);
                                                      } else {
                                                        var tmp_43;
                                                        if (name === 'type') {
                                                          tmp_43 = scope instanceof ArgumentScope;
                                                        } else {
                                                          tmp_43 = false;
                                                        }
                                                        if (tmp_43) {
                                                          scope.la(block);
                                                        } else {
                                                          var tmp_44;
                                                          if (name === 'reference') {
                                                            tmp_44 = scope instanceof TypeScope;
                                                          } else {
                                                            tmp_44 = false;
                                                          }
                                                          if (tmp_44) {
                                                            // Inline function 'kotlin.require' call
                                                            if (!(node.body == null)) {
                                                              var message_3 = 'Type references do not accept a block';
                                                              throw IllegalArgumentException_init_$Create$(toString(message_3));
                                                            }
                                                            scope.aa(applyNode$string(count, args, name));
                                                          } else {
                                                            var tmp_45;
                                                            if (name === 'argument') {
                                                              tmp_45 = scope instanceof TypeScope;
                                                            } else {
                                                              tmp_45 = false;
                                                            }
                                                            if (tmp_45) {
                                                              scope.ba(block);
                                                            } else {
                                                              var tmp_46;
                                                              if (name === 'initializer') {
                                                                tmp_46 = scope instanceof PropertyScope;
                                                              } else {
                                                                tmp_46 = false;
                                                              }
                                                              if (tmp_46) {
                                                                scope.jd(block);
                                                              } else {
                                                                var tmp_47;
                                                                if (name === 'delegate') {
                                                                  tmp_47 = scope instanceof PropertyScope;
                                                                } else {
                                                                  tmp_47 = false;
                                                                }
                                                                if (tmp_47) {
                                                                  scope.kd(block);
                                                                } else {
                                                                  var tmp_48;
                                                                  if (name === 'getter') {
                                                                    tmp_48 = scope instanceof PropertyScope;
                                                                  } else {
                                                                    tmp_48 = false;
                                                                  }
                                                                  if (tmp_48) {
                                                                    scope.ld(block);
                                                                  } else {
                                                                    var tmp_49;
                                                                    if (name === 'argument') {
                                                                      tmp_49 = scope instanceof CallScope;
                                                                    } else {
                                                                      tmp_49 = false;
                                                                    }
                                                                    if (tmp_49) {
                                                                      scope.ba(block);
                                                                    } else {
                                                                      var tmp_50;
                                                                      if (name === 'argument') {
                                                                        tmp_50 = scope instanceof AnnotationScope;
                                                                      } else {
                                                                        tmp_50 = false;
                                                                      }
                                                                      if (tmp_50) {
                                                                        scope.ba(block);
                                                                      } else {
                                                                        var tmp_51;
                                                                        if (name === 'trailingLambda') {
                                                                          tmp_51 = scope instanceof CallScope;
                                                                        } else {
                                                                          tmp_51 = false;
                                                                        }
                                                                        if (tmp_51) {
                                                                          scope.cg(block);
                                                                        } else {
                                                                          var tmp_52;
                                                                          if (name === 'reference') {
                                                                            tmp_52 = isInterface(scope, ExpressionScope);
                                                                          } else {
                                                                            tmp_52 = false;
                                                                          }
                                                                          if (tmp_52) {
                                                                            scope.kb(applyNode$string(count, args, name), block);
                                                                          } else {
                                                                            var tmp_53;
                                                                            if (name === 'literal') {
                                                                              tmp_53 = isInterface(scope, ExpressionScope);
                                                                            } else {
                                                                              tmp_53 = false;
                                                                            }
                                                                            if (tmp_53) {
                                                                              // Inline function 'kotlin.require' call
                                                                              if (!(count === 1)) {
                                                                                var message_4 = 'literal expects one value';
                                                                                throw IllegalArgumentException_init_$Create$(toString(message_4));
                                                                              }
                                                                              var value = args[0];
                                                                              if (value != null && typeof value === 'object') {
                                                                                var text = applyNode$number(count, args, name);
                                                                                var tmp_54;
                                                                                if (contains(text, _Char___init__impl__6a9atx(46))) {
                                                                                  tmp_54 = true;
                                                                                } else {
                                                                                  // Inline function 'kotlin.text.lowercase' call
                                                                                  // Inline function 'kotlin.js.asDynamic' call
                                                                                  var tmp$ret$11 = text.toLowerCase();
                                                                                  tmp_54 = contains(tmp$ret$11, _Char___init__impl__6a9atx(101));
                                                                                }
                                                                                if (tmp_54) {
                                                                                  scope.nb(toDouble(text), block);
                                                                                } else {
                                                                                  var tmp7 = toIntOrNull(text);
                                                                                  var tmp$ret$13;
                                                                                  $l$block: {
                                                                                    // Inline function 'kotlin.requireNotNull' call
                                                                                    if (tmp7 == null) {
                                                                                      var message_5 = 'Integer is outside the supported Int range';
                                                                                      throw IllegalArgumentException_init_$Create$(toString(message_5));
                                                                                    } else {
                                                                                      tmp$ret$13 = tmp7;
                                                                                      break $l$block;
                                                                                    }
                                                                                  }
                                                                                  scope.mb(tmp$ret$13, block);
                                                                                }
                                                                              } else {
                                                                                // Inline function 'kotlin.require' call
                                                                                if (!(value == null || setOf(['string', 'boolean']).f1(typeof value))) {
                                                                                  var message_6 = 'literal expects a string, number, boolean, or null';
                                                                                  throw IllegalArgumentException_init_$Create$(toString(message_6));
                                                                                }
                                                                                scope.lb((value == null ? true : !(value == null)) ? value : THROW_CCE(), block);
                                                                              }
                                                                            } else {
                                                                              var tmp_55;
                                                                              if (name === 'nullValue') {
                                                                                tmp_55 = isInterface(scope, ExpressionScope);
                                                                              } else {
                                                                                tmp_55 = false;
                                                                              }
                                                                              if (tmp_55) {
                                                                                scope.pb();
                                                                              } else {
                                                                                var tmp_56;
                                                                                if (name === 'call') {
                                                                                  tmp_56 = isInterface(scope, ExpressionScope);
                                                                                } else {
                                                                                  tmp_56 = false;
                                                                                }
                                                                                if (tmp_56) {
                                                                                  scope.qb(applyNode$string(count, args, name), block);
                                                                                } else {
                                                                                  var tmp_57;
                                                                                  if (name === 'chain') {
                                                                                    tmp_57 = isInterface(scope, ExpressionScope);
                                                                                  } else {
                                                                                    tmp_57 = false;
                                                                                  }
                                                                                  if (tmp_57) {
                                                                                    scope.rb(block);
                                                                                  } else {
                                                                                    var tmp_58;
                                                                                    if (name === 'lambdaExpression') {
                                                                                      tmp_58 = isInterface(scope, ExpressionScope);
                                                                                    } else {
                                                                                      tmp_58 = false;
                                                                                    }
                                                                                    if (tmp_58) {
                                                                                      scope.sb(block);
                                                                                    } else {
                                                                                      var tmp_59;
                                                                                      if (name === 'ifExpression') {
                                                                                        tmp_59 = isInterface(scope, ExpressionScope);
                                                                                      } else {
                                                                                        tmp_59 = false;
                                                                                      }
                                                                                      if (tmp_59) {
                                                                                        scope.tb(block);
                                                                                      } else {
                                                                                        var tmp_60;
                                                                                        if (name === 'ifStatement') {
                                                                                          tmp_60 = scope instanceof BlockScope;
                                                                                        } else {
                                                                                          tmp_60 = false;
                                                                                        }
                                                                                        if (tmp_60) {
                                                                                          scope.hb(block);
                                                                                        } else {
                                                                                          var tmp_61;
                                                                                          if (name === 'condition') {
                                                                                            tmp_61 = scope instanceof IfStatementScope;
                                                                                          } else {
                                                                                            tmp_61 = false;
                                                                                          }
                                                                                          if (tmp_61) {
                                                                                            scope.ub(block);
                                                                                          } else {
                                                                                            var tmp_62;
                                                                                            if (name === 'condition') {
                                                                                              tmp_62 = scope instanceof IfExpressionScope;
                                                                                            } else {
                                                                                              tmp_62 = false;
                                                                                            }
                                                                                            if (tmp_62) {
                                                                                              scope.ub(block);
                                                                                            } else {
                                                                                              var tmp_63;
                                                                                              if (name === 'then') {
                                                                                                tmp_63 = scope instanceof IfExpressionScope;
                                                                                              } else {
                                                                                                tmp_63 = false;
                                                                                              }
                                                                                              if (tmp_63) {
                                                                                                scope.eg(block);
                                                                                              } else {
                                                                                                var tmp_64;
                                                                                                if (name === 'elseCase') {
                                                                                                  tmp_64 = scope instanceof IfExpressionScope;
                                                                                                } else {
                                                                                                  tmp_64 = false;
                                                                                                }
                                                                                                if (tmp_64) {
                                                                                                  scope.fg(block);
                                                                                                } else {
                                                                                                  var tmp_65;
                                                                                                  if (name === 'returnStatement') {
                                                                                                    tmp_65 = scope instanceof BlockScope;
                                                                                                  } else {
                                                                                                    tmp_65 = false;
                                                                                                  }
                                                                                                  if (tmp_65) {
                                                                                                    scope.gb(VOID, node.body == null ? null : block);
                                                                                                  } else {
                                                                                                    var tmp_66;
                                                                                                    if (name === 'line') {
                                                                                                      tmp_66 = scope instanceof CodeScope;
                                                                                                    } else {
                                                                                                      tmp_66 = false;
                                                                                                    }
                                                                                                    if (tmp_66) {
                                                                                                      scope.d9();
                                                                                                    } else {
                                                                                                      var tmp_67;
                                                                                                      if (name === 'lines') {
                                                                                                        tmp_67 = scope instanceof CodeScope;
                                                                                                      } else {
                                                                                                        tmp_67 = false;
                                                                                                      }
                                                                                                      if (tmp_67) {
                                                                                                        var number = toDouble(applyNode$number(count, args, name));
                                                                                                        // Inline function 'kotlin.require' call
                                                                                                        if (!(number % 1.0 === 0.0 && (0.0 <= number ? number <= 100.0 : false))) {
                                                                                                          var message_7 = 'lines expects an integer from 0 to 100';
                                                                                                          throw IllegalArgumentException_init_$Create$(toString(message_7));
                                                                                                        }
                                                                                                        scope.e9(numberToInt(number));
                                                                                                      } else {
                                                                                                        var tmp_68;
                                                                                                        if (name === 'comment') {
                                                                                                          tmp_68 = scope instanceof CodeScope;
                                                                                                        } else {
                                                                                                          tmp_68 = false;
                                                                                                        }
                                                                                                        if (tmp_68) {
                                                                                                          scope.f9(applyNode$string(count, args, name));
                                                                                                        } else {
                                                                                                          if (scope instanceof ChainScope) {
                                                                                                            switch (name) {
                                                                                                              case 'call':
                                                                                                                scope.qb(applyNode$string(count, args, name), block);
                                                                                                                break;
                                                                                                              case 'safeCall':
                                                                                                                scope.if(applyNode$string(count, args, name), block);
                                                                                                                break;
                                                                                                              case 'property':
                                                                                                                scope.gf(applyNode$string(count, args, name));
                                                                                                                break;
                                                                                                              case 'safeProperty':
                                                                                                                scope.hf(applyNode$string(count, args, name));
                                                                                                                break;
                                                                                                              case 'classLiteral':
                                                                                                                scope.ff();
                                                                                                                break;
                                                                                                              case 'index':
                                                                                                                scope.jf(block);
                                                                                                                break;
                                                                                                              case 'plus':
                                                                                                                scope.kf(block);
                                                                                                                break;
                                                                                                              case 'minus':
                                                                                                                scope.lf(block);
                                                                                                                break;
                                                                                                              case 'times':
                                                                                                                scope.mf(block);
                                                                                                                break;
                                                                                                              case 'div':
                                                                                                                scope.nf(block);
                                                                                                                break;
                                                                                                              case 'rem':
                                                                                                                scope.of(block);
                                                                                                                break;
                                                                                                              case 'equalTo':
                                                                                                                scope.pf(block);
                                                                                                                break;
                                                                                                              case 'notEqualTo':
                                                                                                                scope.qf(block);
                                                                                                                break;
                                                                                                              case 'and':
                                                                                                                scope.rf(block);
                                                                                                                break;
                                                                                                              case 'or':
                                                                                                                scope.sf(block);
                                                                                                                break;
                                                                                                              case 'orElse':
                                                                                                                scope.tf(block);
                                                                                                                break;
                                                                                                              case 'infixCall':
                                                                                                                scope.uf(applyNode$string(count, args, name), block);
                                                                                                                break;
                                                                                                              case 'not':
                                                                                                                scope.vf();
                                                                                                                break;
                                                                                                              case 'unaryMinus':
                                                                                                                scope.wf();
                                                                                                                break;
                                                                                                              case 'isType':
                                                                                                                scope.xf(block);
                                                                                                                break;
                                                                                                              case 'assign':
                                                                                                                scope.yf(block);
                                                                                                                break;
                                                                                                              default:
                                                                                                                // Inline function 'kotlin.error' call

                                                                                                                var message_8 = "Unsupported chain call '" + name + "'";
                                                                                                                throw IllegalStateException_init_$Create$(toString(message_8));
                                                                                                            }
                                                                                                          } else {
                                                                                                            // Inline function 'kotlin.error' call
                                                                                                            var message_9 = "Unsupported builder call '" + name + "' in this block";
                                                                                                            throw IllegalStateException_init_$Create$(toString(message_9));
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function applyNode$string(count, args, name) {
  // Inline function 'kotlin.require' call
  if (!(count === 1 && typeof args[0] === 'string')) {
    var message = name + ' expects one string argument';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var tmp = args[0];
  return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
}
function applyNode$noArgs(count, name) {
  // Inline function 'kotlin.require' call
  if (!(count === 0)) {
    var message = name + ' takes no arguments';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
}
function applyNode$strings(count, args, name) {
  var tmp;
  if (count === 1) {
    var tmp_0 = Array.isArray(args[0]);
    tmp = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
  } else {
    tmp = false;
  }
  // Inline function 'kotlin.require' call
  if (!tmp) {
    var message = name + ' expects listOf(...)';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var tmp_1 = args[0].length;
  // Inline function 'kotlin.collections.map' call
  var this_0 = until(0, (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE());
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var inductionVariable = this_0.k6_1;
  var last = this_0.l6_1;
  if (inductionVariable <= last)
    do {
      var item = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var it = item;
      // Inline function 'kotlin.require' call
      if (!(typeof args[0][it] === 'string')) {
        var message_0 = name + ' expects a list of strings';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var tmp_2 = args[0][it];
      var tmp$ret$4 = (!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : THROW_CCE();
      destination.e(tmp$ret$4);
    }
     while (!(item === last));
  return destination;
}
function applyNode$boolean(count, args, name) {
  // Inline function 'kotlin.require' call
  if (!(count === 1 && typeof args[0] === 'boolean')) {
    var message = name + ' expects true or false';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var tmp = args[0];
  return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
}
function applyNode$visibility(count, args, name) {
  return valueOf(applyNode$string(count, args, name));
}
function applyNode$number(count, args, name) {
  // Inline function 'kotlin.require' call
  if (!(count === 1 && args[0] != null && typeof args[0].number === 'string')) {
    var message = name + ' expects a number';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var tmp = args[0].number;
  return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
}
function generateKotlin$lambda($program) {
  return function ($this$ktFile) {
    execute($this$ktFile, JSON.parse($program));
    return Unit_instance;
  };
}
function applyNode$lambda($node) {
  return function (_this__u8e3s4) {
    execute(_this__u8e3s4, $node.body);
    return Unit_instance;
  };
}
//region block: post-declaration
protoOf(BlockScope).kb = reference;
protoOf(BlockScope).lb = literal;
protoOf(BlockScope).mb = literal_0;
protoOf(BlockScope).nb = literal_1;
protoOf(BlockScope).ob = nullValue;
protoOf(BlockScope).pb = nullValue$default;
protoOf(BlockScope).qb = call;
protoOf(BlockScope).rb = chain;
protoOf(BlockScope).sb = lambdaExpression;
protoOf(BlockScope).tb = ifExpression;
protoOf(Text).ud = get_containsLambda;
protoOf(Break).ud = get_containsLambda;
protoOf(SingleExpressionScope).kb = reference;
protoOf(SingleExpressionScope).lb = literal;
protoOf(SingleExpressionScope).mb = literal_0;
protoOf(SingleExpressionScope).nb = literal_1;
protoOf(SingleExpressionScope).ob = nullValue;
protoOf(SingleExpressionScope).pb = nullValue$default;
protoOf(SingleExpressionScope).qb = call;
protoOf(SingleExpressionScope).rb = chain;
protoOf(SingleExpressionScope).sb = lambdaExpression;
protoOf(SingleExpressionScope).tb = ifExpression;
protoOf(ArgumentScope).kb = reference;
protoOf(ArgumentScope).lb = literal;
protoOf(ArgumentScope).mb = literal_0;
protoOf(ArgumentScope).nb = literal_1;
protoOf(ArgumentScope).ob = nullValue;
protoOf(ArgumentScope).pb = nullValue$default;
protoOf(ArgumentScope).qb = call;
protoOf(ArgumentScope).rb = chain;
protoOf(ArgumentScope).sb = lambdaExpression;
protoOf(ArgumentScope).tb = ifExpression;
//endregion
//region block: exports
export {
  generateKotlin as generateKotlin,
};
//endregion

//# sourceMappingURL=prosakt.mjs.map
