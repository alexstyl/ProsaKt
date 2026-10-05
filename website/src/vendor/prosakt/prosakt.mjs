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
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
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
  LinkedHashMap_init_$Create$1p3p95clvi93w as LinkedHashMap_init_$Create$,
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
    this.nc(chain);
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
  accept(this, this_0.gg());
}
function lambdaExpression(body) {
  accept(this, buildLambda(body));
}
function ifExpression(configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new IfExpressionScope();
  configure(this_0);
  accept(this, this_0.fb());
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
function Entry(expression, blank, comment, code) {
  expression = expression === VOID ? null : expression;
  blank = blank === VOID ? false : blank;
  comment = comment === VOID ? false : comment;
  this.l8_1 = expression;
  this.m8_1 = blank;
  this.n8_1 = comment;
  this.o8_1 = code;
}
function property($this, keyword, name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new PropertyScope();
  configure(this_0);
  var property = this_0;
  // Inline function 'kotlin.collections.plusAssign' call
  $this.q8_1.e(name);
  $this.r8(CodeBuilder$property$lambda(property, keyword, name));
}
function container($this, kind, name, scope) {
  if (name == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.plusAssign' call
    $this.q8_1.e(name);
  }
  $this.r8(CodeBuilder$container$lambda(scope, kind, name));
}
function CodeBuilder$expression$lambda($expression) {
  return function (c) {
    return $expression.v8(c);
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
      tmp_1 = plus_1(text(' '), tmp2_safe_receiver.v8(c));
    }
    var tmp3_elvis_lhs = tmp_1;
    return plus_1(tmp_0, tmp3_elvis_lhs == null ? text('') : tmp3_elvis_lhs);
  };
}
function CodeBuilder$property$lambda($property, $keyword, $name) {
  return function (c) {
    return $property.d9($keyword, $name, c);
  };
}
function CodeBuilder$function$lambda($function, $name) {
  return function (c) {
    return $function.k9($name, c);
  };
}
function CodeBuilder$container$lambda($scope, $kind, $name) {
  return function (c) {
    return $scope.q9($kind, $name, c);
  };
}
function CodeBuilder() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.p8_1 = ArrayList_init_$Create$_0();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableSetOf' call
  tmp_0.q8_1 = LinkedHashSet_init_$Create$();
}
protoOf(CodeBuilder).r9 = function () {
  return this.p8_1.j() === 1 && !(single(this.p8_1).l8_1 == null);
};
protoOf(CodeBuilder).s9 = function () {
  return this.p8_1.e1();
};
protoOf(CodeBuilder).t9 = function (expression) {
  var tmp2 = this.p8_1;
  // Inline function 'kotlin.takeUnless' call
  var tmp;
  if (!expression.t8_1) {
    tmp = expression;
  } else {
    tmp = null;
  }
  var tmp_0 = tmp;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new Entry(tmp_0, VOID, VOID, CodeBuilder$expression$lambda(expression));
  tmp2.e(element);
};
protoOf(CodeBuilder).r8 = function (code) {
  var tmp0 = this.p8_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new Entry(VOID, VOID, VOID, code);
  tmp0.e(element);
};
protoOf(CodeBuilder).u9 = function (c, returns) {
  var tmp0 = c.y9_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var elements = this.q8_1;
  addAll(tmp0, elements);
  var tmp2 = this.p8_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlin.collections.indexOfLast' call
    var iterator = tmp2.g1(tmp2.j());
    while (iterator.u2()) {
      if (!iterator.w2().m8_1) {
        tmp$ret$2 = iterator.v2();
        break $l$block;
      }
    }
    tmp$ret$2 = -1;
  }
  var last = tmp$ret$2;
  // Inline function 'kotlin.collections.mapIndexed' call
  var this_0 = this.p8_1;
  // Inline function 'kotlin.collections.mapIndexedTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var index = 0;
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    var index_0 = checkIndexOverflow(_unary__edvuaz);
    var tmp$ret$3 = returns && index_0 === last && !(item.l8_1 == null) ? plus_1(text('return '), item.l8_1.v8(c)) : item.o8_1(c);
    destination.e(tmp$ret$3);
  }
  return joined(destination, get_hardLine());
};
protoOf(CodeBuilder).aa = function (c, returns, $super) {
  returns = returns === VOID ? false : returns;
  return $super === VOID ? this.u9(c, returns) : $super.u9.call(this, c, returns);
};
protoOf(CodeBuilder).ba = function () {
  var tmp0 = this.p8_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new Entry(VOID, true, VOID, CodeBuilder$line$lambda);
  tmp0.e(element);
};
protoOf(CodeBuilder).ca = function (count) {
  // Inline function 'kotlin.repeat' call
  var times = coerceAtLeast(count, 0);
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.ba();
    }
     while (inductionVariable < times);
};
protoOf(CodeBuilder).da = function (text) {
  var tmp0 = this.p8_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = new Entry(VOID, VOID, true, CodeBuilder$comment$lambda(text));
  tmp0.e(element);
};
protoOf(CodeBuilder).ea = function () {
  var tmp;
  if (this.p8_1.e1()) {
    tmp = true;
  } else {
    var tmp0 = this.p8_1;
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
        if (!element.n8_1 && !element.m8_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp = tmp$ret$0;
  }
  if (tmp)
    return null;
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.p8_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s_0 = this_0.g();
  while (_iterator__ex2g4s_0.h()) {
    var item = _iterator__ex2g4s_0.i();
    var tmp$ret$2 = item.o8_1(new RenderContext(null));
    destination.e(tmp$ret$2);
  }
  var comments = joined(destination, get_hardLine());
  this.p8_1.z2();
  return comments;
};
protoOf(CodeBuilder).fa = function (expression, label) {
  this.r8(CodeBuilder$returnStatement$lambda(label, expression));
};
protoOf(CodeBuilder).ga = function (name, configure) {
  property(this, 'val', name, configure);
};
protoOf(CodeBuilder).ha = function (name, configure) {
  property(this, 'var', name, configure);
};
protoOf(CodeBuilder).ia = function (name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new FunctionScope();
  configure(this_0);
  var function_0 = this_0;
  // Inline function 'kotlin.collections.plusAssign' call
  this.q8_1.e(name);
  this.r8(CodeBuilder$function$lambda(function_0, name));
};
protoOf(CodeBuilder).ja = function (name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ClassScope();
  configure(this_0);
  var scope = this_0;
  container(this, 'class', name, scope);
};
protoOf(CodeBuilder).ka = function (name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new InterfaceScope();
  configure(this_0);
  container(this, 'interface', name, this_0);
};
protoOf(CodeBuilder).la = function (name, configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ObjectScope();
  configure(this_0);
  container(this, 'object', name, this_0);
};
protoOf(CodeBuilder).ma = function (name, configure) {
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
  this.pa_1 = keyword;
}
function declarationModifiers(visibility, modifiers) {
  _init_properties_Declarations_kt__5banjb();
  var tmp = plus(listOfNotNull(visibility == null ? null : visibility.pa_1), modifiers);
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
      tmp_0 = !Regex_init_$Create$('[A-Za-z_][A-Za-z0-9_]*').i6(name);
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
  if ($this.y9_1.f1(short($this, name))) {
    tmp = true;
  } else {
    var tmp0 = $this.x9_1;
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
  this.v9_1 = packageName;
  this.w9_1 = explicitImports;
  var tmp = this;
  // Inline function 'kotlin.collections.linkedSetOf' call
  // Inline function 'kotlin.apply' call
  var this_0 = LinkedHashSet_init_$Create$();
  this_0.o(this.w9_1);
  tmp.x9_1 = this_0;
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableSetOf' call
  tmp_0.y9_1 = LinkedHashSet_init_$Create$();
  this.z9_1 = true;
}
protoOf(RenderContext).qa = function (name) {
  if (!contains(name, _Char___init__impl__6a9atx(46)))
    return identifier(name);
  // Inline function 'kotlin.collections.plusAssign' call
  this.x9_1.e(name);
  if (!this.z9_1 && collision(this, name))
    return qualified(this, name);
  return identifier(short(this, name));
};
protoOf(RenderContext).ra = function () {
  // Inline function 'kotlin.collections.filter' call
  var tmp0 = this.x9_1;
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList_init_$Create$_0();
  var _iterator__ex2g4s = tmp0.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    if (!(substringBeforeLast(element, _Char___init__impl__6a9atx(46)) === this.v9_1) && !collision(this, element) && !setOf(['kotlin', 'kotlin.collections']).f1(substringBeforeLast(element, _Char___init__impl__6a9atx(46)))) {
      destination.e(element);
    }
  }
  // Inline function 'kotlin.collections.map' call
  var this_0 = sorted(distinct(plus(destination, this.w9_1)));
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
  this.sa_1 = code;
}
protoOf(TypeReference).ta = function (c) {
  return this.sa_1(c);
};
function TypeScope$build$lambda$lambda($c) {
  return function (it) {
    return '@' + $c.qa(it) + ' ';
  };
}
function TypeScope$build$lambda($signature, $name, $arguments, $annotations, $nullable) {
  return function (c) {
    var tmp0_safe_receiver = $signature;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ta(c);
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
      var tmp_0 = text(c.qa(tmp$ret$2));
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
          var tmp$ret$3 = item.ta(c);
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
  this.ua_1 = false;
  this.va_1 = emptyList();
  this.wa_1 = null;
  this.xa_1 = null;
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.ya_1 = ArrayList_init_$Create$_0();
}
protoOf(TypeScope).za = function (name) {
  // Inline function 'kotlin.check' call
  if (!(this.wa_1 == null && this.xa_1 == null)) {
    var message = 'Type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.wa_1 = name;
};
protoOf(TypeScope).ab = function (body) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ArgumentScope();
  body(this_0);
  // Inline function 'kotlin.also' call
  this_0.eb();
  var argument = this_0;
  var tmp4 = this.ya_1;
  var tmp3 = argument.db_1;
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
protoOf(TypeScope).fb = function () {
  var name = this.wa_1;
  var function_0 = this.xa_1;
  // Inline function 'kotlin.check' call
  if (!(!(name == null) || !(function_0 == null))) {
    var message = 'Type must define a reference or function';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.check' call
  if (!(function_0 == null || this.ya_1.e1())) {
    var message_0 = 'Function types cannot have generic arguments';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  var arguments_0 = toList(this.ya_1);
  var nullable = this.ua_1;
  var annotations = toList(this.va_1);
  var signature = function_0 == null ? null : function_0.fb();
  return new TypeReference(TypeScope$build$lambda(signature, name, arguments_0, annotations, nullable));
};
function TypeSlotScope() {
  this.jb_1 = null;
}
protoOf(TypeSlotScope).kb = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.jb_1 == null)) {
    var message = 'Type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.jb_1 = type(body);
};
protoOf(TypeSlotScope).fb = function () {
  var tmp0 = this.jb_1;
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
  $this$type.za('Unit');
  return Unit_instance;
}
function FunctionTypeScope$build$lambda$lambda($c) {
  return function (it) {
    return '@' + $c.qa(it) + ' ';
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
      var name = item.i8();
      var type = item.j8();
      var tmp_0;
      if (name == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = identifier(name) + ': ';
      }
      var tmp1_elvis_lhs = tmp_0;
      var tmp$ret$2 = plus_1(text(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs), type.ta(c));
      destination.e(tmp$ret$2);
    }
    return plus_1(plus_2(plus_1(tmp, delimited('(', destination, ')')), ' -> '), $result.ta(c));
  };
}
function type(body) {
  _init_properties_Declarations_kt__5banjb();
  // Inline function 'kotlin.apply' call
  var this_0 = new TypeScope();
  body(this_0);
  return this_0.fb();
}
function Parameter$render$lambda(it) {
  return it + ' ';
}
function Parameter(name, type, initializer, property, modifiers) {
  this.lb_1 = name;
  this.mb_1 = type;
  this.nb_1 = initializer;
  this.ob_1 = property;
  this.pb_1 = modifiers;
}
protoOf(Parameter).ta = function (c) {
  var tmp = plus(this.pb_1, listOfNotNull(this.ob_1));
  var tmp_0 = text(joinToString(tmp, '', VOID, VOID, VOID, VOID, Parameter$render$lambda) + identifier(this.lb_1));
  var tmp0_safe_receiver = this.mb_1;
  var tmp_1;
  if (tmp0_safe_receiver == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_1 = plus_1(text(': '), tmp0_safe_receiver.ta(c));
  }
  var tmp1_elvis_lhs = tmp_1;
  var tmp_2 = plus_1(tmp_0, tmp1_elvis_lhs == null ? text('') : tmp1_elvis_lhs);
  var tmp2_safe_receiver = this.nb_1;
  var tmp_3;
  if (tmp2_safe_receiver == null) {
    tmp_3 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_3 = plus_1(text(' = '), tmp2_safe_receiver.v8(c));
  }
  var tmp3_elvis_lhs = tmp_3;
  return plus_1(tmp_2, tmp3_elvis_lhs == null ? text('') : tmp3_elvis_lhs);
};
function ParameterScope() {
  this.qb_1 = null;
  this.rb_1 = null;
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.sb_1 = ArrayList_init_$Create$_0();
}
protoOf(ParameterScope).kb = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.qb_1 == null)) {
    var message = 'Parameter type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.qb_1 = type(body);
};
protoOf(ParameterScope).tb = function (body) {
  this.rb_1 = expression(body);
};
protoOf(ParameterScope).ub = function (value) {
  // Inline function 'kotlin.collections.plusAssign' call
  this.sb_1.e(value);
};
protoOf(ParameterScope).vb = function (name, property) {
  return new Parameter(name, this.qb_1, this.rb_1, property, toList(this.sb_1));
};
protoOf(ParameterScope).wb = function (name, property, $super) {
  property = property === VOID ? null : property;
  return $super === VOID ? this.vb(name, property) : $super.vb.call(this, name, property);
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
  return this_0.wb(name);
}
function CodeScope() {
  this.xb_1 = new CodeBuilder();
}
protoOf(CodeScope).ba = function () {
  return this.xb_1.ba();
};
protoOf(CodeScope).ca = function (count) {
  return this.xb_1.ca(count);
};
protoOf(CodeScope).da = function (text) {
  return this.xb_1.da(text);
};
function DeclarationContainerScope() {
  CodeScope.call(this);
}
protoOf(DeclarationContainerScope).zb = function (name, configure) {
  return this.xb_1.ga(name, configure);
};
protoOf(DeclarationContainerScope).ac = function (name, configure) {
  return this.xb_1.ha(name, configure);
};
protoOf(DeclarationContainerScope).bc = function (name, configure) {
  return this.xb_1.ia(name, configure);
};
protoOf(DeclarationContainerScope).cc = function (name, configure) {
  return this.xb_1.ja(name, configure);
};
function BlockScope$ifStatement$lambda($condition, $body) {
  return function (c) {
    return block(plus_2(plus_1(text('if ('), $condition.v8(c)), ')'), $body.aa(c));
  };
}
function BlockScope() {
  DeclarationContainerScope.call(this);
}
protoOf(BlockScope).ec = function (label, body) {
  var tmp;
  if (body == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = expression(body);
  }
  this.xb_1.fa(tmp, label);
};
protoOf(BlockScope).fc = function (label, body, $super) {
  label = label === VOID ? null : label;
  body = body === VOID ? null : body;
  var tmp;
  if ($super === VOID) {
    this.ec(label, body);
    tmp = Unit_instance;
  } else {
    tmp = $super.ec.call(this, label, body);
  }
  return tmp;
};
protoOf(BlockScope).gc = function (configure) {
  // Inline function 'kotlin.apply' call
  var this_0 = new IfStatementScope();
  configure(this_0);
  var scope = this_0;
  var tmp1 = scope.hc_1;
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
  var tmp2 = scope.ic_1;
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
  this.xb_1.r8(BlockScope$ifStatement$lambda(condition, body));
};
function IfStatementScope() {
  this.hc_1 = null;
  this.ic_1 = null;
}
protoOf(IfStatementScope).tc = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.hc_1 == null)) {
    var message = 'Condition has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.hc_1 = expression(body);
};
protoOf(IfStatementScope).uc = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.ic_1 == null)) {
    var message = 'Body has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new BlockScope();
  body(this_0);
  tmp.ic_1 = this_0.xb_1;
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
  tmp.wc_1 = ArrayList_init_$Create$_0();
}
protoOf(LambdaBodyScope).xc = function (name, configure) {
  var tmp0 = this.wc_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = parameter(name, configure);
  tmp0.e(element);
};
function DeclarationScope() {
  this.yc_1 = null;
  this.zc_1 = emptyList();
  this.ad_1 = emptyList();
}
protoOf(DeclarationScope).bd = function (c) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.ad_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var tmp$ret$0 = plus_1(text('@' + c.qa(item)), get_hardLine());
    destination.e(tmp$ret$0);
  }
  return plus_2(joined(destination, text('')), declarationModifiers(this.yc_1, this.zc_1));
};
function FunctionScope() {
  DeclarationScope.call(this);
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.h9_1 = ArrayList_init_$Create$_0();
  this.i9_1 = null;
  this.j9_1 = null;
}
protoOf(FunctionScope).xc = function (name, configure) {
  var tmp0 = this.h9_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = parameter(name, configure);
  tmp0.e(element);
};
protoOf(FunctionScope).cd = function (configure) {
  // Inline function 'kotlin.check' call
  if (!(this.i9_1 == null)) {
    var message = 'Return type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new TypeSlotScope();
  configure(this_0);
  tmp.i9_1 = this_0.fb();
};
protoOf(FunctionScope).dd = function (block) {
  // Inline function 'kotlin.check' call
  if (!(this.j9_1 == null)) {
    var message = 'Function body has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new FunctionBodyScope();
  block(this_0);
  tmp.j9_1 = this_0.xb_1;
};
protoOf(FunctionScope).k9 = function (name, c) {
  var tmp0_safe_receiver = this.i9_1;
  var result = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ta(c);
  var tmp = plus_2(this.bd(c), 'fun ' + identifier(name));
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.h9_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var tmp$ret$0 = item.ta(c);
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
  if (this.zc_1.f1('abstract')) {
    // Inline function 'kotlin.check' call
    if (!(this.j9_1 == null)) {
      var message = 'An abstract function cannot have a body';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return signature;
  }
  var tmp3_safe_receiver = this.j9_1;
  var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.u9(c, !(result == null) && !(print(result) === 'Unit'));
  return block(signature, tmp4_elvis_lhs == null ? text('') : tmp4_elvis_lhs);
};
function GetterScope() {
  DeclarationScope.call(this);
  this.hd_1 = null;
}
protoOf(GetterScope).id = function (block) {
  // Inline function 'kotlin.check' call
  if (!(this.hd_1 == null)) {
    var message = 'Getter body has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new GetterBodyScope();
  block(this_0);
  tmp.hd_1 = this_0.xb_1;
};
protoOf(GetterScope).ta = function (c) {
  var tmp = this.bd(c);
  var tmp0_safe_receiver = this.hd_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = block(text('get()'), tmp0_safe_receiver.u9(c, true));
  }
  var tmp1_elvis_lhs = tmp_0;
  return plus_1(tmp, tmp1_elvis_lhs == null ? text('get') : tmp1_elvis_lhs);
};
function ConstructorScope() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.jd_1 = ArrayList_init_$Create$_0();
}
protoOf(ConstructorScope).kd = function (name, configure) {
  var tmp1 = this.jd_1;
  // Inline function 'kotlin.apply' call
  var this_0 = new ConstructorParameterScope();
  configure(this_0);
  // Inline function 'kotlin.collections.plusAssign' call
  var element = this_0.pd(name);
  tmp1.e(element);
};
function ConstructorParameterScope() {
  ParameterScope.call(this);
  this.od_1 = null;
}
protoOf(ConstructorParameterScope).qd = function (configure) {
  // Inline function 'kotlin.check' call
  if (!(this.od_1 == null)) {
    var message = 'Constructor property has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new ConstructorPropertyScope();
  configure(this_0);
  tmp.od_1 = this_0;
};
protoOf(ConstructorParameterScope).pd = function (name) {
  var tmp0_safe_receiver = this.od_1;
  return this.vb(name, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.td());
};
function ConstructorPropertyScope() {
  this.rd_1 = null;
  this.sd_1 = false;
}
protoOf(ConstructorPropertyScope).td = function () {
  return declarationModifiers(this.rd_1, emptyList()) + (this.sd_1 ? 'var' : 'val');
};
function MemberScope() {
  DeclarationContainerScope.call(this);
  this.m9_1 = null;
  this.n9_1 = emptyList();
  this.o9_1 = emptyList();
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.p9_1 = ArrayList_init_$Create$_0();
}
protoOf(MemberScope).ud = function (name, configure) {
  return this.xb_1.ka(name, configure);
};
protoOf(MemberScope).vd = function (name, configure) {
  return this.xb_1.la(name, configure);
};
protoOf(MemberScope).wd = function (c) {
  return text('');
};
protoOf(MemberScope).q9 = function (kind, name, c) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.o9_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var tmp$ret$0 = plus_1(text('@' + c.qa(item)), get_hardLine());
    destination.e(tmp$ret$0);
  }
  var prefix = plus_2(joined(destination, text('')), declarationModifiers(this.m9_1, this.n9_1));
  var tmp = plus_2(prefix, kind);
  var tmp_0;
  if (name == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = ' ' + identifier(name);
  }
  var tmp1_elvis_lhs = tmp_0;
  var tmp_1 = plus_1(plus_2(tmp, tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs), this.wd(c));
  var tmp_2;
  if (this.p9_1.e1()) {
    tmp_2 = text('');
  } else {
    var tmp_3 = text(' : ');
    // Inline function 'kotlin.collections.map' call
    var this_1 = this.p9_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      var tmp$ret$5 = item_0.ta(c);
      destination_0.e(tmp$ret$5);
    }
    tmp_2 = plus_1(tmp_3, joined(destination_0, text(', ')));
  }
  var header = plus_1(tmp_1, tmp_2);
  var contents = this.xb_1.aa(c);
  return this.xb_1.s9() ? header : block(header, contents);
};
function ClassScope$companionObject$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function ClassScope() {
  MemberScope.call(this);
  this.ce_1 = null;
}
protoOf(ClassScope).ma = function (name, configure) {
  return this.xb_1.ma(name, configure);
};
protoOf(ClassScope).de = function (name, configure, $super) {
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
    this.ma(name, configure);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.ma.call(this, name, configure);
  }
  return tmp_0;
};
protoOf(ClassScope).configureConstructor = function (configure) {
  // Inline function 'kotlin.check' call
  if (!(this.ce_1 == null)) {
    var message = 'Primary constructor has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new ConstructorScope();
  configure(this_0);
  tmp.ce_1 = this_0;
};
protoOf(ClassScope).wd = function (c) {
  var tmp0_safe_receiver = this.ce_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = tmp0_safe_receiver.jd_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var tmp$ret$0 = item.ta(c);
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
protoOf(InterfaceScope).ma = function (name, configure) {
  return this.xb_1.ma(name, configure);
};
protoOf(InterfaceScope).je = function (name, configure, $super) {
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
    this.ma(name, configure);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.ma.call(this, name, configure);
  }
  return tmp_0;
};
function ObjectScope() {
  MemberScope.call(this);
}
function PropertyScope() {
  DeclarationScope.call(this);
  this.z8_1 = null;
  this.a9_1 = null;
  this.b9_1 = null;
  this.c9_1 = null;
}
protoOf(PropertyScope).kb = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.z8_1 == null)) {
    var message = 'Property type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.z8_1 = type(body);
};
protoOf(PropertyScope).ke = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.a9_1 == null)) {
    var message = 'Property initializer has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.check' call
  if (!(this.c9_1 == null)) {
    var message_0 = 'A property cannot have both an initializer and a delegate';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  this.a9_1 = expression(body);
};
protoOf(PropertyScope).le = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.c9_1 == null)) {
    var message = 'Property delegate has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.check' call
  if (!(this.a9_1 == null)) {
    var message_0 = 'A property cannot have both an initializer and a delegate';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  // Inline function 'kotlin.check' call
  if (!(this.b9_1 == null)) {
    var message_1 = 'A delegated property cannot have a custom getter';
    throw IllegalStateException_init_$Create$(toString(message_1));
  }
  this.c9_1 = expression(body);
};
protoOf(PropertyScope).me = function (configure) {
  // Inline function 'kotlin.check' call
  if (!(this.c9_1 == null)) {
    var message = 'A delegated property cannot have a custom getter';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.check' call
  if (!(this.b9_1 == null)) {
    var message_0 = 'Getter has already been defined';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  var tmp = this;
  // Inline function 'kotlin.apply' call
  var this_0 = new GetterScope();
  configure(this_0);
  tmp.b9_1 = this_0;
};
protoOf(PropertyScope).d9 = function (keyword, name, c) {
  var tmp = plus_2(this.bd(c), keyword + ' ' + identifier(name));
  var tmp0_safe_receiver = this.z8_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = plus_1(text(': '), tmp0_safe_receiver.ta(c));
  }
  var tmp1_elvis_lhs = tmp_0;
  var tmp_1 = plus_1(tmp, tmp1_elvis_lhs == null ? text('') : tmp1_elvis_lhs);
  var tmp2_safe_receiver = this.a9_1;
  var tmp_2;
  if (tmp2_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = plus_1(text(' = '), tmp2_safe_receiver.v8(c));
  }
  var tmp3_elvis_lhs = tmp_2;
  var tmp_3 = plus_1(tmp_1, tmp3_elvis_lhs == null ? text('') : tmp3_elvis_lhs);
  var tmp4_safe_receiver = this.c9_1;
  var tmp_4;
  if (tmp4_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = plus_1(text(' by '), tmp4_safe_receiver.v8(c));
  }
  var tmp5_elvis_lhs = tmp_4;
  var tmp_5 = plus_1(tmp_3, tmp5_elvis_lhs == null ? text('') : tmp5_elvis_lhs);
  var tmp6_safe_receiver = this.b9_1;
  var tmp_6;
  if (tmp6_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = nested(plus_1(get_hardLine(), tmp6_safe_receiver.ta(c)));
  }
  var tmp7_elvis_lhs = tmp_6;
  return plus_1(tmp_5, tmp7_elvis_lhs == null ? text('') : tmp7_elvis_lhs);
};
function takeComments($this) {
  var comments = $this.xb_1.ea();
  if (!$this.se_1) {
    $this.se_1 = true;
    $this.oe_1 = comments;
    return null;
  }
  return comments;
}
function FileScope() {
  DeclarationContainerScope.call(this);
  this.oe_1 = null;
  this.pe_1 = null;
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.qe_1 = ArrayList_init_$Create$_0();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableMapOf' call
  tmp_0.re_1 = LinkedHashMap_init_$Create$();
  this.se_1 = false;
  var tmp_1 = this;
  // Inline function 'kotlin.collections.linkedSetOf' call
  tmp_1.te_1 = LinkedHashSet_init_$Create$();
  var tmp_2 = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp_2.ue_1 = ArrayList_init_$Create$_0();
  this.ve_1 = null;
}
protoOf(FileScope).ud = function (name, configure) {
  return this.xb_1.ka(name, configure);
};
protoOf(FileScope).vd = function (name, configure) {
  return this.xb_1.la(name, configure);
};
protoOf(FileScope).we = function (name) {
  // Inline function 'kotlin.text.isNotBlank' call
  // Inline function 'kotlin.require' call
  if (!!isBlank(name)) {
    var message = 'Import name cannot be blank';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var tmp0_safe_receiver = takeComments(this);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    var tmp2 = this.re_1;
    var tmp0_safe_receiver_0 = this.re_1.l1(name);
    var tmp;
    if (tmp0_safe_receiver_0 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = plus_1(plus_1(tmp0_safe_receiver_0, get_hardLine()), tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    // Inline function 'kotlin.collections.set' call
    var value = tmp1_elvis_lhs == null ? tmp0_safe_receiver : tmp1_elvis_lhs;
    tmp2.i3(name, value);
  }
  // Inline function 'kotlin.collections.plusAssign' call
  this.te_1.e(name);
};
protoOf(FileScope).xe = function (name, configure) {
  // Inline function 'kotlin.text.isNotBlank' call
  // Inline function 'kotlin.require' call
  if (!!isBlank(name)) {
    var message = 'Annotation name cannot be blank';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.apply' call
  var this_0 = new AnnotationScope();
  configure(this_0);
  var annotation = this_0;
  var tmp3 = this.qe_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element = takeComments(this);
  tmp3.e(element);
  var tmp5 = this.ue_1;
  // Inline function 'kotlin.collections.plusAssign' call
  var element_0 = to(name, annotation);
  tmp5.e(element_0);
};
protoOf(FileScope).ye = function (name) {
  // Inline function 'kotlin.text.isNotBlank' call
  // Inline function 'kotlin.require' call
  if (!!isBlank(name)) {
    var message = 'Package name cannot be blank';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.check' call
  if (!(this.ve_1 == null)) {
    var message_0 = 'Package name has already been declared';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  this.pe_1 = takeComments(this);
  this.ve_1 = name;
};
function ktFile(body) {
  _init_properties_Declarations_kt__5banjb();
  // Inline function 'kotlin.apply' call
  var this_0 = new FileScope();
  body(this_0);
  var scope = this_0;
  var context = new RenderContext(scope.ve_1, scope.te_1);
  scope.xb_1.aa(context);
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = scope.ue_1.g();
  while (_iterator__ex2g4s.h()) {
    var element = _iterator__ex2g4s.i();
    var name = element.i8();
    var annotation = element.j8();
    annotation.k9(name, context);
  }
  context.z9_1 = false;
  var code = scope.xb_1.aa(context);
  // Inline function 'kotlin.collections.mutableListOf' call
  var sections = ArrayList_init_$Create$_0();
  var tmp0_safe_receiver = scope.oe_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.plusAssign' call
    sections.e(tmp0_safe_receiver);
  }
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!scope.ue_1.e1()) {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_1 = scope.ue_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var index = 0;
    var _iterator__ex2g4s_0 = this_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var name_0 = item.i8();
      var annotation_0 = item.j8();
      var tmp0_safe_receiver_0 = scope.qe_1.k(index_0);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = plus_1(tmp0_safe_receiver_0, get_hardLine());
      }
      var tmp1_elvis_lhs = tmp;
      var tmp$ret$10 = plus_1(plus_1(tmp1_elvis_lhs == null ? text('') : tmp1_elvis_lhs, text('@file:')), annotation_0.k9(name_0, context));
      destination.e(tmp$ret$10);
    }
    // Inline function 'kotlin.collections.plusAssign' call
    var element_0 = joined(destination, get_hardLine());
    sections.e(element_0);
  }
  var tmp1_safe_receiver = scope.ve_1;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    var tmp0_safe_receiver_1 = scope.pe_1;
    if (tmp0_safe_receiver_1 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.plusAssign' call
      sections.e(tmp0_safe_receiver_1);
    }
    var tmp_0 = split(tmp1_safe_receiver, charArrayOf([_Char___init__impl__6a9atx(46)]));
    // Inline function 'kotlin.collections.plusAssign' call
    var element_1 = text('package ' + joinToString(tmp_0, '.', VOID, VOID, VOID, VOID, identifier$ref_0()));
    sections.e(element_1);
  }
  var imports = context.ra();
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!imports.e1()) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(imports, 10));
    var _iterator__ex2g4s_1 = imports.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_0 = _iterator__ex2g4s_1.i();
      var tmp0_safe_receiver_2 = scope.re_1.l1(item_0);
      var tmp_1;
      if (tmp0_safe_receiver_2 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_1 = plus_1(tmp0_safe_receiver_2, get_hardLine());
      }
      var tmp1_elvis_lhs_0 = tmp_1;
      var tmp$ret$23 = plus_1(tmp1_elvis_lhs_0 == null ? text('') : tmp1_elvis_lhs_0, text('import ' + item_0));
      destination_0.e(tmp$ret$23);
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
  this.bf_1 = value;
}
protoOf(Text).toString = function () {
  return 'Text(value=' + this.bf_1 + ')';
};
protoOf(Text).hashCode = function () {
  return getStringHashCode(this.bf_1);
};
protoOf(Text).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Text))
    return false;
  var tmp0_other_with_cast = other instanceof Text ? other : THROW_CCE();
  if (!(this.bf_1 === tmp0_other_with_cast.bf_1))
    return false;
  return true;
};
function Break(flat) {
  this.cf_1 = flat;
}
protoOf(Break).toString = function () {
  return 'Break(flat=' + this.cf_1 + ')';
};
protoOf(Break).hashCode = function () {
  return this.cf_1 == null ? 0 : getStringHashCode(this.cf_1);
};
protoOf(Break).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Break))
    return false;
  var tmp0_other_with_cast = other instanceof Break ? other : THROW_CCE();
  if (!(this.cf_1 == tmp0_other_with_cast.cf_1))
    return false;
  return true;
};
function Concat(parts) {
  this.df_1 = parts;
  var tmp = this;
  var tmp0 = this.df_1;
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
      if (element.af()) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
    }
    tmp$ret$0 = false;
  }
  tmp.ef_1 = tmp$ret$0;
}
protoOf(Concat).af = function () {
  return this.ef_1;
};
protoOf(Concat).toString = function () {
  return 'Concat(parts=' + toString(this.df_1) + ')';
};
protoOf(Concat).hashCode = function () {
  return hashCode(this.df_1);
};
protoOf(Concat).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Concat))
    return false;
  var tmp0_other_with_cast = other instanceof Concat ? other : THROW_CCE();
  if (!equals(this.df_1, tmp0_other_with_cast.df_1))
    return false;
  return true;
};
function Nest(body) {
  this.ff_1 = body;
  this.gf_1 = this.ff_1.af();
}
protoOf(Nest).af = function () {
  return this.gf_1;
};
protoOf(Nest).toString = function () {
  return 'Nest(body=' + toString(this.ff_1) + ')';
};
protoOf(Nest).hashCode = function () {
  return hashCode(this.ff_1);
};
protoOf(Nest).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Nest))
    return false;
  var tmp0_other_with_cast = other instanceof Nest ? other : THROW_CCE();
  if (!equals(this.ff_1, tmp0_other_with_cast.ff_1))
    return false;
  return true;
};
function Group(body) {
  this.hf_1 = body;
  this.if_1 = this.hf_1.af();
}
protoOf(Group).af = function () {
  return this.if_1;
};
protoOf(Group).toString = function () {
  return 'Group(body=' + toString(this.hf_1) + ')';
};
protoOf(Group).hashCode = function () {
  return hashCode(this.hf_1);
};
protoOf(Group).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Group))
    return false;
  var tmp0_other_with_cast = other instanceof Group ? other : THROW_CCE();
  if (!equals(this.hf_1, tmp0_other_with_cast.hf_1))
    return false;
  return true;
};
function MemberChain(receiver, members) {
  this.jf_1 = receiver;
  this.kf_1 = members;
  var tmp = this;
  var tmp_0;
  if (this.jf_1.af()) {
    tmp_0 = true;
  } else {
    var tmp0 = this.kf_1;
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
        if (element.af()) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp_0 = tmp$ret$0;
  }
  tmp.lf_1 = tmp_0;
}
protoOf(MemberChain).af = function () {
  return this.lf_1;
};
protoOf(MemberChain).mf = function (receiver, members) {
  return new MemberChain(receiver, members);
};
protoOf(MemberChain).nf = function (receiver, members, $super) {
  receiver = receiver === VOID ? this.jf_1 : receiver;
  members = members === VOID ? this.kf_1 : members;
  return $super === VOID ? this.mf(receiver, members) : $super.mf.call(this, receiver, members);
};
protoOf(MemberChain).toString = function () {
  return 'MemberChain(receiver=' + toString(this.jf_1) + ', members=' + toString(this.kf_1) + ')';
};
protoOf(MemberChain).hashCode = function () {
  var result = hashCode(this.jf_1);
  result = imul(result, 31) + hashCode(this.kf_1) | 0;
  return result;
};
protoOf(MemberChain).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof MemberChain))
    return false;
  var tmp0_other_with_cast = other instanceof MemberChain ? other : THROW_CCE();
  if (!equals(this.jf_1, tmp0_other_with_cast.jf_1))
    return false;
  if (!equals(this.kf_1, tmp0_other_with_cast.kf_1))
    return false;
  return true;
};
function ExpandTrailingLambdas(body) {
  this.of_1 = body;
  this.pf_1 = this.of_1.af();
}
protoOf(ExpandTrailingLambdas).af = function () {
  return this.pf_1;
};
protoOf(ExpandTrailingLambdas).toString = function () {
  return 'ExpandTrailingLambdas(body=' + toString(this.of_1) + ')';
};
protoOf(ExpandTrailingLambdas).hashCode = function () {
  return hashCode(this.of_1);
};
protoOf(ExpandTrailingLambdas).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ExpandTrailingLambdas))
    return false;
  var tmp0_other_with_cast = other instanceof ExpandTrailingLambdas ? other : THROW_CCE();
  if (!equals(this.of_1, tmp0_other_with_cast.of_1))
    return false;
  return true;
};
function LambdaLayout(header, body, singleExpression, trailing, empty) {
  this.qf_1 = header;
  this.rf_1 = body;
  this.sf_1 = singleExpression;
  this.tf_1 = trailing;
  this.uf_1 = empty;
  this.vf_1 = true;
}
protoOf(LambdaLayout).af = function () {
  return this.vf_1;
};
protoOf(LambdaLayout).wf = function (expandTrailing) {
  if (this.uf_1)
    return text('{}');
  var nestedLambdas = this.rf_1.af();
  var line = this.sf_1 && !nestedLambdas && !(this.tf_1 && expandTrailing) ? get_softLine() : get_hardLine();
  var contents = nestedLambdas ? new ExpandTrailingLambdas(this.rf_1) : this.rf_1;
  return grouped(plus_2(plus_1(plus_1(this.qf_1, nested(plus_1(line, contents))), line), '}'));
};
protoOf(LambdaLayout).toString = function () {
  return 'LambdaLayout(header=' + toString(this.qf_1) + ', body=' + toString(this.rf_1) + ', singleExpression=' + this.sf_1 + ', trailing=' + this.tf_1 + ', empty=' + this.uf_1 + ')';
};
protoOf(LambdaLayout).hashCode = function () {
  var result = hashCode(this.qf_1);
  result = imul(result, 31) + hashCode(this.rf_1) | 0;
  result = imul(result, 31) + getBooleanHashCode(this.sf_1) | 0;
  result = imul(result, 31) + getBooleanHashCode(this.tf_1) | 0;
  result = imul(result, 31) + getBooleanHashCode(this.uf_1) | 0;
  return result;
};
protoOf(LambdaLayout).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof LambdaLayout))
    return false;
  var tmp0_other_with_cast = other instanceof LambdaLayout ? other : THROW_CCE();
  if (!equals(this.qf_1, tmp0_other_with_cast.qf_1))
    return false;
  if (!equals(this.rf_1, tmp0_other_with_cast.rf_1))
    return false;
  if (!(this.sf_1 === tmp0_other_with_cast.sf_1))
    return false;
  if (!(this.tf_1 === tmp0_other_with_cast.tf_1))
    return false;
  if (!(this.uf_1 === tmp0_other_with_cast.uf_1))
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
    tmp = receiver.nf(VOID, plus_0(receiver.kf_1, suffix));
  } else {
    tmp = new MemberChain(receiver, listOf_0(suffix));
  }
  return tmp;
}
function layout(_this__u8e3s4) {
  _init_properties_Document_kt__u55c91();
  // Inline function 'kotlin.collections.map' call
  var this_0 = _this__u8e3s4.kf_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var tmp$ret$0 = plus_1(get_softBreak(), item);
    destination.e(tmp$ret$0);
  }
  return grouped(plus_1(_this__u8e3s4.jf_1, nested(joined(destination, text('')))));
}
function Pending(document, indent, flat, expandTrailing) {
  expandTrailing = expandTrailing === VOID ? false : expandTrailing;
  this.xf_1 = document;
  this.yf_1 = indent;
  this.zf_1 = flat;
  this.ag_1 = expandTrailing;
}
protoOf(Pending).bg = function (document, indent, flat, expandTrailing) {
  return new Pending(document, indent, flat, expandTrailing);
};
protoOf(Pending).cg = function (document, indent, flat, expandTrailing, $super) {
  document = document === VOID ? this.xf_1 : document;
  indent = indent === VOID ? this.yf_1 : indent;
  flat = flat === VOID ? this.zf_1 : flat;
  expandTrailing = expandTrailing === VOID ? this.ag_1 : expandTrailing;
  return $super === VOID ? this.bg(document, indent, flat, expandTrailing) : $super.bg.call(this, document, indent, flat, expandTrailing);
};
protoOf(Pending).toString = function () {
  return 'Pending(document=' + toString(this.xf_1) + ', indent=' + this.yf_1 + ', flat=' + this.zf_1 + ', expandTrailing=' + this.ag_1 + ')';
};
protoOf(Pending).hashCode = function () {
  var result = hashCode(this.xf_1);
  result = imul(result, 31) + this.yf_1 | 0;
  result = imul(result, 31) + getBooleanHashCode(this.zf_1) | 0;
  result = imul(result, 31) + getBooleanHashCode(this.ag_1) | 0;
  return result;
};
protoOf(Pending).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Pending))
    return false;
  var tmp0_other_with_cast = other instanceof Pending ? other : THROW_CCE();
  if (!equals(this.xf_1, tmp0_other_with_cast.xf_1))
    return false;
  if (!(this.yf_1 === tmp0_other_with_cast.yf_1))
    return false;
  if (!(this.zf_1 === tmp0_other_with_cast.zf_1))
    return false;
  if (!(this.ag_1 === tmp0_other_with_cast.ag_1))
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
    var item = pending.n2(get_lastIndex(pending));
    var doc = item.xf_1;
    if (doc instanceof Text) {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = doc.bf_1;
      if (charSequenceLength(this_0) > 0) {
        if (atLineStart) {
          output.s5(repeat(' ', lineIndent));
        }
        output.s5(doc.bf_1);
        column._v = column._v + doc.bf_1.length | 0;
        atLineStart = false;
      }
    } else {
      if (doc instanceof Break)
        if (item.zf_1 && !(doc.cf_1 == null)) {
          output.s5(doc.cf_1);
          column._v = column._v + doc.cf_1.length | 0;
        } else {
          output.t5(_Char___init__impl__6a9atx(10));
          lineIndent = item.yf_1;
          column._v = lineIndent;
          atLineStart = true;
        }
       else {
        if (doc instanceof Concat) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = asReversed(doc.df_1).g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            // Inline function 'kotlin.collections.plusAssign' call
            var element_0 = item.cg(element);
            pending.e(element_0);
          }
        } else {
          if (doc instanceof Nest) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_1 = item.cg(doc.ff_1, item.yf_1 + 4 | 0);
            pending.e(element_1);
          } else {
            if (doc instanceof Group) {
              var flattened = item.cg(doc.hf_1, VOID, true);
              // Inline function 'kotlin.collections.plusAssign' call
              var element_2 = flattened.cg(VOID, VOID, item.zf_1 || print$fits(width, column, pending, flattened));
              pending.e(element_2);
            } else {
              if (doc instanceof MemberChain) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element_3 = item.cg(layout(doc));
                pending.e(element_3);
              } else {
                if (doc instanceof LambdaLayout) {
                  // Inline function 'kotlin.collections.plusAssign' call
                  var element_4 = item.cg(doc.wf(item.ag_1));
                  pending.e(element_4);
                } else {
                  if (doc instanceof ExpandTrailingLambdas) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    var element_5 = item.cg(doc.of_1, VOID, VOID, true);
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
    var item = lookahead.n2(get_lastIndex(lookahead));
    var doc = item.xf_1;
    if (doc instanceof Text)
      remaining = remaining - doc.bf_1.length | 0;
    else {
      if (doc instanceof Break) {
        if (!item.zf_1)
          return true;
        var tmp0_elvis_lhs = doc.cf_1;
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
          var _iterator__ex2g4s = asReversed(doc.df_1).g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            // Inline function 'kotlin.collections.plusAssign' call
            var element_0 = item.cg(element);
            lookahead.e(element_0);
          }
        } else {
          if (doc instanceof Nest) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_1 = item.cg(doc.ff_1, item.yf_1 + 4 | 0);
            lookahead.e(element_1);
          } else {
            if (doc instanceof Group) {
              // Inline function 'kotlin.collections.plusAssign' call
              var element_2 = item.cg(doc.hf_1);
              lookahead.e(element_2);
            } else {
              if (doc instanceof MemberChain) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element_3 = item.cg(layout(doc));
                lookahead.e(element_3);
              } else {
                if (doc instanceof LambdaLayout) {
                  // Inline function 'kotlin.collections.plusAssign' call
                  var element_4 = item.cg(doc.wf(item.ag_1));
                  lookahead.e(element_4);
                } else {
                  if (doc instanceof ExpandTrailingLambdas) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    var element_5 = item.cg(doc.of_1, VOID, VOID, true);
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
  this.s8_1 = precedence;
  this.t8_1 = statement;
  this.u8_1 = renderCode;
}
protoOf(Expression).v8 = function (context) {
  return this.u8_1(context);
};
protoOf(Expression).dg = function (context, minimum) {
  // Inline function 'kotlin.let' call
  var it = this.v8(context);
  return this.s8_1 < minimum ? plus_2(plus_1(text('('), it), ')') : it;
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
  accept(_this__u8e3s4, this_0.gg());
}
function accept(_this__u8e3s4, expression) {
  if (_this__u8e3s4 instanceof BlockScope) {
    _this__u8e3s4.xb_1.t9(expression);
  } else {
    if (_this__u8e3s4 instanceof ArgumentScope) {
      // Inline function 'kotlin.check' call
      if (!(_this__u8e3s4.cb_1 == null)) {
        var message = 'An argument must describe exactly one expression';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      _this__u8e3s4.cb_1 = expression;
    } else {
      if (_this__u8e3s4 instanceof SingleExpressionScope) {
        // Inline function 'kotlin.check' call
        if (!(_this__u8e3s4.kg_1 == null)) {
          var message_0 = 'An expression block must describe exactly one expression';
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
        _this__u8e3s4.kg_1 = expression;
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
}
function SingleExpressionScope() {
  this.kg_1 = null;
}
function expression(body) {
  // Inline function 'kotlin.apply' call
  var this_0 = new SingleExpressionScope();
  body(this_0);
  var tmp1 = this_0.kg_1;
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
  if (!!$this.gg().t8_1) {
    var message = 'An assignment must be the last step of a statement';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  $this.fg_1 = build($this.gg());
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
    return plus_2($receiver.dg(c, 90), '::class');
  };
}
function ChainScope$property$lambda$lambda($receiver, $name) {
  return function (c) {
    return member($receiver.dg(c, 90), text('.' + c.qa($name)));
  };
}
function ChainScope$property$lambda($name) {
  return function (receiver) {
    return new Expression(90, VOID, ChainScope$property$lambda$lambda(receiver, $name));
  };
}
function ChainScope$safeProperty$lambda$lambda($receiver, $name) {
  return function (c) {
    return member($receiver.dg(c, 90), text('?.' + c.qa($name)));
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
    return plus_1($receiver.dg(c, 90), delimited('[', listOf_0($index.v8(c)), ']'));
  };
}
function ChainScope$index$lambda($index) {
  return function (receiver) {
    return new Expression(90, VOID, ChainScope$index$lambda$lambda(receiver, $index));
  };
}
function ChainScope$binary$lambda$lambda($left, $precedence, $operator, $right) {
  return function (c) {
    return grouped(plus_1(plus_2($left.dg(c, $precedence), ' ' + $operator), nested(plus_1(get_softLine(), $right.dg(c, $precedence + 1 | 0)))));
  };
}
function ChainScope$binary$lambda($precedence, $operator, $right) {
  return function (left) {
    return new Expression($precedence, VOID, ChainScope$binary$lambda$lambda(left, $precedence, $operator, $right));
  };
}
function ChainScope$infixCall$lambda$lambda($left, $name, $right) {
  return function (c) {
    return grouped(plus_1(plus_2($left.dg(c, 45), ' ' + c.qa($name)), nested(plus_1(get_softLine(), $right.dg(c, 46)))));
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
    return plus_2(plus_1(text('!('), $operand.v8(c)), ')');
  };
}
function ChainScope$unaryMinus$lambda(operand) {
  return new Expression(80, VOID, ChainScope$unaryMinus$lambda$lambda(operand));
}
function ChainScope$unaryMinus$lambda$lambda($operand) {
  return function (c) {
    return plus_2(plus_1(text('-('), $operand.v8(c)), ')');
  };
}
function ChainScope$isType$lambda$lambda($operand, $type) {
  return function (c) {
    return plus_1(plus_2($operand.dg(c, 35), ' is '), $type.ta(c));
  };
}
function ChainScope$isType$lambda($type) {
  return function (operand) {
    return new Expression(35, VOID, ChainScope$isType$lambda$lambda(operand, $type));
  };
}
function ChainScope$assign$lambda$lambda($left, $right) {
  return function (c) {
    return plus_1(plus_2($left.v8(c), ' = '), $right.v8(c));
  };
}
function ChainScope$assign$lambda($right) {
  return function (left) {
    return new Expression(0, true, ChainScope$assign$lambda$lambda(left, $right));
  };
}
function ChainScope(initial, statementsAllowed) {
  statementsAllowed = statementsAllowed === VOID ? false : statementsAllowed;
  this.eg_1 = statementsAllowed;
  this.fg_1 = initial;
}
protoOf(ChainScope).gg = function () {
  var tmp0 = this.fg_1;
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
protoOf(ChainScope).lg = function () {
  change(this, ChainScope$classLiteral$lambda);
};
protoOf(ChainScope).mg = function (name) {
  change(this, ChainScope$property$lambda(name));
};
protoOf(ChainScope).ng = function (name) {
  change(this, ChainScope$safeProperty$lambda(name));
};
protoOf(ChainScope).pc = function (name, configure) {
  if (this.fg_1 == null) {
    this.fg_1 = buildCall(name, configure);
  } else {
    memberCall(this, name, false, configure);
  }
};
protoOf(ChainScope).og = function (name, configure) {
  memberCall(this, name, true, configure);
};
protoOf(ChainScope).pg = function (body) {
  var index = expression(body);
  change(this, ChainScope$index$lambda(index));
};
protoOf(ChainScope).qg = function (body) {
  binary(this, '+', 60, body);
};
protoOf(ChainScope).rg = function (body) {
  binary(this, '-', 60, body);
};
protoOf(ChainScope).sg = function (body) {
  binary(this, '*', 70, body);
};
protoOf(ChainScope).tg = function (body) {
  binary(this, '/', 70, body);
};
protoOf(ChainScope).ug = function (body) {
  binary(this, '%', 70, body);
};
protoOf(ChainScope).vg = function (body) {
  binary(this, '==', 30, body);
};
protoOf(ChainScope).wg = function (body) {
  binary(this, '!=', 30, body);
};
protoOf(ChainScope).xg = function (body) {
  binary(this, '&&', 20, body);
};
protoOf(ChainScope).yg = function (body) {
  binary(this, '||', 10, body);
};
protoOf(ChainScope).zg = function (body) {
  binary(this, '?:', 40, body);
};
protoOf(ChainScope).ah = function (name, body) {
  // Inline function 'kotlin.text.isNotBlank' call
  // Inline function 'kotlin.require' call
  if (!!isBlank(name)) {
    var message = 'Call name cannot be blank';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var right = expression(body);
  change(this, ChainScope$infixCall$lambda(name, right));
};
protoOf(ChainScope).bh = function () {
  change(this, ChainScope$not$lambda);
};
protoOf(ChainScope).ch = function () {
  change(this, ChainScope$unaryMinus$lambda);
};
protoOf(ChainScope).dh = function (body) {
  var type_0 = type(body);
  change(this, ChainScope$isType$lambda(type_0));
};
protoOf(ChainScope).eh = function (body) {
  // Inline function 'kotlin.check' call
  if (!this.eg_1) {
    var message = 'Assignments belong in a statement body';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var right = expression(body);
  change(this, ChainScope$assign$lambda(right));
};
function ArgumentScope() {
  this.bb_1 = null;
  this.cb_1 = null;
  this.db_1 = null;
}
protoOf(ArgumentScope).kb = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.db_1 == null)) {
    var message = 'Argument type has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.db_1 = type(body);
};
protoOf(ArgumentScope).eb = function () {
  // Inline function 'kotlin.require' call
  if (!!(this.db_1 == null === (this.cb_1 == null))) {
    var message = 'An argument must configure exactly one of type or value';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(this.db_1 == null || this.bb_1 == null)) {
    var message_0 = 'Type arguments cannot have names';
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
};
function AnnotationScope$argument$lambda($body, $name) {
  return function ($this$argument) {
    $body($this$argument);
    // Inline function 'kotlin.require' call
    if (!($this$argument.bb_1 == null || $this$argument.bb_1 === $name)) {
      var message = 'Conflicting argument names';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this$argument.bb_1 = $name;
    return Unit_instance;
  };
}
function AnnotationScope() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.ze_1 = ArrayList_init_$Create$_0();
}
protoOf(AnnotationScope).fh = function (name, body) {
  this.ab(AnnotationScope$argument$lambda(body, name));
};
protoOf(AnnotationScope).ab = function (body) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ArgumentScope();
  body(this_0);
  // Inline function 'kotlin.also' call
  this_0.eb();
  var argument = this_0;
  // Inline function 'kotlin.require' call
  if (!(argument.db_1 == null)) {
    var message = 'Annotation arguments must be values';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var tmp5 = this.ze_1;
  var tmp = argument.bb_1;
  // Inline function 'kotlin.requireNotNull' call
  var tmp0 = argument.cb_1;
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
protoOf(AnnotationScope).k9 = function (name, context) {
  var tmp = text(context.qa(name));
  var tmp_0;
  if (this.ze_1.e1()) {
    tmp_0 = text('');
  } else {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.ze_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var name_0 = item.i8();
      var value = item.j8();
      var tmp_1;
      if (name_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_1 = identifier(name_0) + ' = ';
      }
      var tmp1_elvis_lhs = tmp_1;
      var tmp$ret$2 = plus_1(text(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs), value.v8(context));
      destination.e(tmp$ret$2);
    }
    tmp_0 = delimited('(', destination, ')');
  }
  return plus_1(tmp, tmp_0);
};
function CallScope$argument$lambda($body, $name) {
  return function ($this$argument) {
    $body($this$argument);
    // Inline function 'kotlin.require' call
    if (!($this$argument.bb_1 == null || $this$argument.bb_1 === $name)) {
      var message = 'Conflicting argument names';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this$argument.bb_1 = $name;
    return Unit_instance;
  };
}
function CallScope() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.gh_1 = ArrayList_init_$Create$_0();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp_0.hh_1 = ArrayList_init_$Create$_0();
  this.ih_1 = null;
}
protoOf(CallScope).fh = function (name, body) {
  this.ab(CallScope$argument$lambda(body, name));
};
protoOf(CallScope).ab = function (body) {
  // Inline function 'kotlin.apply' call
  var this_0 = new ArgumentScope();
  body(this_0);
  // Inline function 'kotlin.also' call
  this_0.eb();
  var argument = this_0;
  var type = argument.db_1;
  if (!(type == null)) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.hh_1.e(type);
  } else {
    var tmp6 = this.gh_1;
    var tmp = argument.bb_1;
    // Inline function 'kotlin.requireNotNull' call
    var tmp0 = argument.cb_1;
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
protoOf(CallScope).jh = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.ih_1 == null)) {
    var message = 'Trailing lambda has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.ih_1 = buildLambda(body, true);
};
protoOf(CallScope).kh = function (name, c) {
  var tmp;
  if (this.hh_1.e1()) {
    tmp = text('');
  } else {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.hh_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var tmp$ret$0 = item.ta(c);
      destination.e(tmp$ret$0);
    }
    tmp = delimited('<', destination, '>');
  }
  var typeArgs = tmp;
  // Inline function 'kotlin.collections.map' call
  var this_1 = this.gh_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
  var _iterator__ex2g4s_0 = this_1.g();
  while (_iterator__ex2g4s_0.h()) {
    var item_0 = _iterator__ex2g4s_0.i();
    var name_0 = item_0.i8();
    var expression = item_0.j8();
    var tmp_0;
    if (name_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = identifier(name_0) + ' = ';
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp$ret$5 = plus_1(text(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs), expression.v8(c));
    destination_0.e(tmp$ret$5);
  }
  var args = destination_0;
  var parentheses = this.gh_1.e1() && !(this.ih_1 == null) && this.hh_1.e1() ? text('') : delimited('(', args, ')');
  var tmp_1 = plus_1(plus_1(text(c.qa(name)), typeArgs), parentheses);
  var tmp0_safe_receiver = this.ih_1;
  var tmp_2;
  if (tmp0_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = plus_1(text(' '), tmp0_safe_receiver.v8(c));
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
    return grouped(plus_1(plus_2(plus_1(plus_1(plus_2(plus_1(text('if ('), $condition.v8(c)), ')'), nested(plus_1(get_softLine(), $yes.v8(c)))), get_softLine()), 'else'), nested(plus_1(get_softLine(), $no.v8(c)))));
  };
}
function IfExpressionScope() {
  this.hg_1 = null;
  this.ig_1 = null;
  this.jg_1 = null;
}
protoOf(IfExpressionScope).tc = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.hg_1 == null)) {
    var message = 'Condition has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.hg_1 = expression(body);
};
protoOf(IfExpressionScope).lh = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.ig_1 == null)) {
    var message = 'Then branch has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.ig_1 = expression(body);
};
protoOf(IfExpressionScope).mh = function (body) {
  // Inline function 'kotlin.check' call
  if (!(this.jg_1 == null)) {
    var message = 'Else branch has already been defined';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.jg_1 = expression(body);
};
protoOf(IfExpressionScope).fb = function () {
  var tmp0 = this.hg_1;
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
  var tmp1 = this.ig_1;
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
  var tmp2 = this.jg_1;
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
    return text(setOf(['this', 'super']).f1($name) ? $name : c.qa($name));
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
    var call = $scope.kh($name, c);
    var tmp0_safe_receiver = $receiver;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = member(tmp0_safe_receiver.dg(c, 90), plus_1(text($safe ? '?.' : '.'), call));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? call : tmp1_elvis_lhs;
  };
}
function buildLambda$lambda($scope, $trailing) {
  return function (c) {
    var tmp;
    if ($scope.wc_1.e1()) {
      tmp = text('{');
    } else {
      var tmp_0 = text('{');
      var tmp_1 = get_softLine();
      // Inline function 'kotlin.collections.map' call
      var this_0 = $scope.wc_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.g();
      while (_iterator__ex2g4s.h()) {
        var item = _iterator__ex2g4s.i();
        var tmp$ret$0 = item.ta(c);
        destination.e(tmp$ret$0);
      }
      tmp = grouped(plus_1(tmp_0, nested(plus_2(plus_1(tmp_1, joined(destination, plus_1(text(','), get_softLine()))), ' ->'))));
    }
    var header = tmp;
    return lambdaLayout(header, $scope.xb_1.aa(c), $scope.xb_1.r9(), $trailing, $scope.xb_1.s9() && $scope.wc_1.e1());
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
      this_0.s5('\\\\');
    else if (element === _Char___init__impl__6a9atx(34))
      this_0.s5('\\"');
    else if (element === _Char___init__impl__6a9atx(36))
      this_0.s5('\\$');
    else if (element === _Char___init__impl__6a9atx(10))
      this_0.s5('\\n');
    else if (element === _Char___init__impl__6a9atx(13))
      this_0.s5('\\r');
    else if (element === _Char___init__impl__6a9atx(9))
      this_0.s5('\\t');
    else if (element === _Char___init__impl__6a9atx(8))
      this_0.s5('\\b');
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
        this_0.s5('\\u');
        // Inline function 'kotlin.code' call
        var tmp$ret$2 = Char__toInt_impl_vasixd(element);
        this_0.s5(padStart(toString_2(tmp$ret$2, 16), 4, _Char___init__impl__6a9atx(48)));
      } else {
        this_0.t5(element);
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
      scope.zc_1 = applyNode$strings(count, args, name);
    else {
      var tmp_3;
      if (name === 'modifiers') {
        tmp_3 = scope instanceof MemberScope;
      } else {
        tmp_3 = false;
      }
      if (tmp_3)
        scope.n9_1 = applyNode$strings(count, args, name);
      else {
        var tmp_4;
        if (name === 'annotations') {
          tmp_4 = scope instanceof DeclarationScope;
        } else {
          tmp_4 = false;
        }
        if (tmp_4)
          scope.ad_1 = applyNode$strings(count, args, name);
        else {
          var tmp_5;
          if (name === 'annotations') {
            tmp_5 = scope instanceof MemberScope;
          } else {
            tmp_5 = false;
          }
          if (tmp_5)
            scope.o9_1 = applyNode$strings(count, args, name);
          else {
            var tmp_6;
            if (name === 'annotations') {
              tmp_6 = scope instanceof TypeScope;
            } else {
              tmp_6 = false;
            }
            if (tmp_6)
              scope.va_1 = applyNode$strings(count, args, name);
            else {
              var tmp_7;
              if (name === 'visibility') {
                tmp_7 = scope instanceof DeclarationScope;
              } else {
                tmp_7 = false;
              }
              if (tmp_7)
                scope.yc_1 = applyNode$visibility(count, args, name);
              else {
                var tmp_8;
                if (name === 'visibility') {
                  tmp_8 = scope instanceof MemberScope;
                } else {
                  tmp_8 = false;
                }
                if (tmp_8)
                  scope.m9_1 = applyNode$visibility(count, args, name);
                else {
                  var tmp_9;
                  if (name === 'visibility') {
                    tmp_9 = scope instanceof ConstructorPropertyScope;
                  } else {
                    tmp_9 = false;
                  }
                  if (tmp_9)
                    scope.rd_1 = applyNode$visibility(count, args, name);
                  else {
                    var tmp_10;
                    if (name === 'nullable') {
                      tmp_10 = scope instanceof TypeScope;
                    } else {
                      tmp_10 = false;
                    }
                    if (tmp_10)
                      scope.ua_1 = applyNode$boolean(count, args, name);
                    else {
                      var tmp_11;
                      if (name === 'mutable') {
                        tmp_11 = scope instanceof ConstructorPropertyScope;
                      } else {
                        tmp_11 = false;
                      }
                      if (tmp_11)
                        scope.sd_1 = applyNode$boolean(count, args, name);
                      else {
                        var tmp_12;
                        if (name === 'name') {
                          tmp_12 = scope instanceof ArgumentScope;
                        } else {
                          tmp_12 = false;
                        }
                        if (tmp_12)
                          scope.bb_1 = applyNode$string(count, args, name);
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
  if (!named.f1(name) && !(name === 'literal') && !(name === 'lines') && !(name === 'argument')) {
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
    scope.ye(applyNode$string(count, args, name));
  } else {
    var tmp_17;
    if (name === 'ktImport') {
      tmp_17 = scope instanceof FileScope;
    } else {
      tmp_17 = false;
    }
    if (tmp_17) {
      scope.we(applyNode$string(count, args, name));
    } else {
      var tmp_18;
      if (name === 'ktFileAnnotation') {
        tmp_18 = scope instanceof FileScope;
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        scope.xe(applyNode$string(count, args, name), block);
      } else {
        var tmp_19;
        if (name === 'ktFunction') {
          tmp_19 = scope instanceof DeclarationContainerScope;
        } else {
          tmp_19 = false;
        }
        if (tmp_19) {
          scope.bc(applyNode$string(count, args, name), block);
        } else {
          var tmp_20;
          if (name === 'ktClass') {
            tmp_20 = scope instanceof DeclarationContainerScope;
          } else {
            tmp_20 = false;
          }
          if (tmp_20) {
            scope.cc(applyNode$string(count, args, name), block);
          } else {
            var tmp_21;
            if (name === 'ktValue') {
              tmp_21 = scope instanceof DeclarationContainerScope;
            } else {
              tmp_21 = false;
            }
            if (tmp_21) {
              scope.zb(applyNode$string(count, args, name), block);
            } else {
              var tmp_22;
              if (name === 'ktVariable') {
                tmp_22 = scope instanceof DeclarationContainerScope;
              } else {
                tmp_22 = false;
              }
              if (tmp_22) {
                scope.ac(applyNode$string(count, args, name), block);
              } else {
                var tmp_23;
                if (name === 'ktInterface') {
                  tmp_23 = scope instanceof FileScope;
                } else {
                  tmp_23 = false;
                }
                if (tmp_23) {
                  scope.ud(applyNode$string(count, args, name), block);
                } else {
                  var tmp_24;
                  if (name === 'ktInterface') {
                    tmp_24 = scope instanceof MemberScope;
                  } else {
                    tmp_24 = false;
                  }
                  if (tmp_24) {
                    scope.ud(applyNode$string(count, args, name), block);
                  } else {
                    var tmp_25;
                    if (name === 'ktObject') {
                      tmp_25 = scope instanceof FileScope;
                    } else {
                      tmp_25 = false;
                    }
                    if (tmp_25) {
                      scope.vd(applyNode$string(count, args, name), block);
                    } else {
                      var tmp_26;
                      if (name === 'ktObject') {
                        tmp_26 = scope instanceof MemberScope;
                      } else {
                        tmp_26 = false;
                      }
                      if (tmp_26) {
                        scope.vd(applyNode$string(count, args, name), block);
                      } else {
                        var tmp_27;
                        if (name === 'companionObject') {
                          tmp_27 = scope instanceof ClassScope;
                        } else {
                          tmp_27 = false;
                        }
                        if (tmp_27) {
                          scope.de(VOID, block);
                        } else {
                          var tmp_28;
                          if (name === 'companionObject') {
                            tmp_28 = scope instanceof InterfaceScope;
                          } else {
                            tmp_28 = false;
                          }
                          if (tmp_28) {
                            scope.je(VOID, block);
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
                                scope.kd(applyNode$string(count, args, name), block);
                              } else {
                                var tmp_31;
                                if (name === 'parameter') {
                                  tmp_31 = scope instanceof FunctionScope;
                                } else {
                                  tmp_31 = false;
                                }
                                if (tmp_31) {
                                  scope.xc(applyNode$string(count, args, name), block);
                                } else {
                                  var tmp_32;
                                  if (name === 'parameter') {
                                    tmp_32 = scope instanceof LambdaBodyScope;
                                  } else {
                                    tmp_32 = false;
                                  }
                                  if (tmp_32) {
                                    scope.xc(applyNode$string(count, args, name), block);
                                  } else {
                                    var tmp_33;
                                    if (name === 'property') {
                                      tmp_33 = scope instanceof ConstructorParameterScope;
                                    } else {
                                      tmp_33 = false;
                                    }
                                    if (tmp_33) {
                                      applyNode$noArgs(count, name);
                                      scope.qd(block);
                                    } else {
                                      var tmp_34;
                                      if (name === 'modifier') {
                                        tmp_34 = scope instanceof ParameterScope;
                                      } else {
                                        tmp_34 = false;
                                      }
                                      if (tmp_34) {
                                        scope.ub(applyNode$string(count, args, name));
                                      } else {
                                        var tmp_35;
                                        if (name === 'default') {
                                          tmp_35 = scope instanceof ParameterScope;
                                        } else {
                                          tmp_35 = false;
                                        }
                                        if (tmp_35) {
                                          scope.tb(block);
                                        } else {
                                          var tmp_36;
                                          if (name === 'returns') {
                                            tmp_36 = scope instanceof FunctionScope;
                                          } else {
                                            tmp_36 = false;
                                          }
                                          if (tmp_36) {
                                            scope.cd(block);
                                          } else {
                                            var tmp_37;
                                            if (name === 'body') {
                                              tmp_37 = scope instanceof FunctionScope;
                                            } else {
                                              tmp_37 = false;
                                            }
                                            if (tmp_37) {
                                              scope.dd(block);
                                            } else {
                                              var tmp_38;
                                              if (name === 'body') {
                                                tmp_38 = scope instanceof GetterScope;
                                              } else {
                                                tmp_38 = false;
                                              }
                                              if (tmp_38) {
                                                scope.id(block);
                                              } else {
                                                var tmp_39;
                                                if (name === 'body') {
                                                  tmp_39 = scope instanceof IfStatementScope;
                                                } else {
                                                  tmp_39 = false;
                                                }
                                                if (tmp_39) {
                                                  scope.uc(block);
                                                } else {
                                                  var tmp_40;
                                                  if (name === 'type') {
                                                    tmp_40 = scope instanceof ParameterScope;
                                                  } else {
                                                    tmp_40 = false;
                                                  }
                                                  if (tmp_40) {
                                                    scope.kb(block);
                                                  } else {
                                                    var tmp_41;
                                                    if (name === 'type') {
                                                      tmp_41 = scope instanceof TypeSlotScope;
                                                    } else {
                                                      tmp_41 = false;
                                                    }
                                                    if (tmp_41) {
                                                      scope.kb(block);
                                                    } else {
                                                      var tmp_42;
                                                      if (name === 'type') {
                                                        tmp_42 = scope instanceof PropertyScope;
                                                      } else {
                                                        tmp_42 = false;
                                                      }
                                                      if (tmp_42) {
                                                        scope.kb(block);
                                                      } else {
                                                        var tmp_43;
                                                        if (name === 'type') {
                                                          tmp_43 = scope instanceof ArgumentScope;
                                                        } else {
                                                          tmp_43 = false;
                                                        }
                                                        if (tmp_43) {
                                                          scope.kb(block);
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
                                                            scope.za(applyNode$string(count, args, name));
                                                          } else {
                                                            var tmp_45;
                                                            if (name === 'argument') {
                                                              tmp_45 = scope instanceof TypeScope;
                                                            } else {
                                                              tmp_45 = false;
                                                            }
                                                            if (tmp_45) {
                                                              applyNode$noArgs(count, name);
                                                              scope.ab(block);
                                                            } else {
                                                              var tmp_46;
                                                              if (name === 'initializer') {
                                                                tmp_46 = scope instanceof PropertyScope;
                                                              } else {
                                                                tmp_46 = false;
                                                              }
                                                              if (tmp_46) {
                                                                scope.ke(block);
                                                              } else {
                                                                var tmp_47;
                                                                if (name === 'delegate') {
                                                                  tmp_47 = scope instanceof PropertyScope;
                                                                } else {
                                                                  tmp_47 = false;
                                                                }
                                                                if (tmp_47) {
                                                                  scope.le(block);
                                                                } else {
                                                                  var tmp_48;
                                                                  if (name === 'getter') {
                                                                    tmp_48 = scope instanceof PropertyScope;
                                                                  } else {
                                                                    tmp_48 = false;
                                                                  }
                                                                  if (tmp_48) {
                                                                    scope.me(block);
                                                                  } else {
                                                                    var tmp_49;
                                                                    if (name === 'argument') {
                                                                      tmp_49 = scope instanceof CallScope;
                                                                    } else {
                                                                      tmp_49 = false;
                                                                    }
                                                                    if (tmp_49)
                                                                      if (count === 0) {
                                                                        scope.ab(block);
                                                                      } else {
                                                                        scope.fh(applyNode$string(count, args, name), block);
                                                                      }
                                                                     else {
                                                                      var tmp_50;
                                                                      if (name === 'argument') {
                                                                        tmp_50 = scope instanceof AnnotationScope;
                                                                      } else {
                                                                        tmp_50 = false;
                                                                      }
                                                                      if (tmp_50)
                                                                        if (count === 0) {
                                                                          scope.ab(block);
                                                                        } else {
                                                                          scope.fh(applyNode$string(count, args, name), block);
                                                                        }
                                                                       else {
                                                                        var tmp_51;
                                                                        if (name === 'trailingLambda') {
                                                                          tmp_51 = scope instanceof CallScope;
                                                                        } else {
                                                                          tmp_51 = false;
                                                                        }
                                                                        if (tmp_51) {
                                                                          scope.jh(block);
                                                                        } else {
                                                                          var tmp_52;
                                                                          if (name === 'reference') {
                                                                            tmp_52 = isInterface(scope, ExpressionScope);
                                                                          } else {
                                                                            tmp_52 = false;
                                                                          }
                                                                          if (tmp_52) {
                                                                            scope.jc(applyNode$string(count, args, name), block);
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
                                                                                  scope.mc(toDouble(text), block);
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
                                                                                  scope.lc(tmp$ret$13, block);
                                                                                }
                                                                              } else {
                                                                                // Inline function 'kotlin.require' call
                                                                                if (!(value == null || setOf(['string', 'boolean']).f1(typeof value))) {
                                                                                  var message_6 = 'literal expects a string, number, boolean, or null';
                                                                                  throw IllegalArgumentException_init_$Create$(toString(message_6));
                                                                                }
                                                                                scope.kc((value == null ? true : !(value == null)) ? value : THROW_CCE(), block);
                                                                              }
                                                                            } else {
                                                                              var tmp_55;
                                                                              if (name === 'nullValue') {
                                                                                tmp_55 = isInterface(scope, ExpressionScope);
                                                                              } else {
                                                                                tmp_55 = false;
                                                                              }
                                                                              if (tmp_55) {
                                                                                scope.oc();
                                                                              } else {
                                                                                var tmp_56;
                                                                                if (name === 'call') {
                                                                                  tmp_56 = isInterface(scope, ExpressionScope);
                                                                                } else {
                                                                                  tmp_56 = false;
                                                                                }
                                                                                if (tmp_56) {
                                                                                  scope.pc(applyNode$string(count, args, name), block);
                                                                                } else {
                                                                                  var tmp_57;
                                                                                  if (name === 'chain') {
                                                                                    tmp_57 = isInterface(scope, ExpressionScope);
                                                                                  } else {
                                                                                    tmp_57 = false;
                                                                                  }
                                                                                  if (tmp_57) {
                                                                                    scope.qc(block);
                                                                                  } else {
                                                                                    var tmp_58;
                                                                                    if (name === 'lambdaExpression') {
                                                                                      tmp_58 = isInterface(scope, ExpressionScope);
                                                                                    } else {
                                                                                      tmp_58 = false;
                                                                                    }
                                                                                    if (tmp_58) {
                                                                                      scope.rc(block);
                                                                                    } else {
                                                                                      var tmp_59;
                                                                                      if (name === 'ifExpression') {
                                                                                        tmp_59 = isInterface(scope, ExpressionScope);
                                                                                      } else {
                                                                                        tmp_59 = false;
                                                                                      }
                                                                                      if (tmp_59) {
                                                                                        scope.sc(block);
                                                                                      } else {
                                                                                        var tmp_60;
                                                                                        if (name === 'ifStatement') {
                                                                                          tmp_60 = scope instanceof BlockScope;
                                                                                        } else {
                                                                                          tmp_60 = false;
                                                                                        }
                                                                                        if (tmp_60) {
                                                                                          scope.gc(block);
                                                                                        } else {
                                                                                          var tmp_61;
                                                                                          if (name === 'condition') {
                                                                                            tmp_61 = scope instanceof IfStatementScope;
                                                                                          } else {
                                                                                            tmp_61 = false;
                                                                                          }
                                                                                          if (tmp_61) {
                                                                                            scope.tc(block);
                                                                                          } else {
                                                                                            var tmp_62;
                                                                                            if (name === 'condition') {
                                                                                              tmp_62 = scope instanceof IfExpressionScope;
                                                                                            } else {
                                                                                              tmp_62 = false;
                                                                                            }
                                                                                            if (tmp_62) {
                                                                                              scope.tc(block);
                                                                                            } else {
                                                                                              var tmp_63;
                                                                                              if (name === 'then') {
                                                                                                tmp_63 = scope instanceof IfExpressionScope;
                                                                                              } else {
                                                                                                tmp_63 = false;
                                                                                              }
                                                                                              if (tmp_63) {
                                                                                                scope.lh(block);
                                                                                              } else {
                                                                                                var tmp_64;
                                                                                                if (name === 'elseCase') {
                                                                                                  tmp_64 = scope instanceof IfExpressionScope;
                                                                                                } else {
                                                                                                  tmp_64 = false;
                                                                                                }
                                                                                                if (tmp_64) {
                                                                                                  scope.mh(block);
                                                                                                } else {
                                                                                                  var tmp_65;
                                                                                                  if (name === 'returnStatement') {
                                                                                                    tmp_65 = scope instanceof BlockScope;
                                                                                                  } else {
                                                                                                    tmp_65 = false;
                                                                                                  }
                                                                                                  if (tmp_65) {
                                                                                                    scope.fc(VOID, node.body == null ? null : block);
                                                                                                  } else {
                                                                                                    var tmp_66;
                                                                                                    if (name === 'line') {
                                                                                                      tmp_66 = scope instanceof CodeScope;
                                                                                                    } else {
                                                                                                      tmp_66 = false;
                                                                                                    }
                                                                                                    if (tmp_66) {
                                                                                                      scope.ba();
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
                                                                                                        scope.ca(numberToInt(number));
                                                                                                      } else {
                                                                                                        var tmp_68;
                                                                                                        if (name === 'comment') {
                                                                                                          tmp_68 = scope instanceof CodeScope;
                                                                                                        } else {
                                                                                                          tmp_68 = false;
                                                                                                        }
                                                                                                        if (tmp_68) {
                                                                                                          scope.da(applyNode$string(count, args, name));
                                                                                                        } else {
                                                                                                          if (scope instanceof ChainScope) {
                                                                                                            switch (name) {
                                                                                                              case 'call':
                                                                                                                scope.pc(applyNode$string(count, args, name), block);
                                                                                                                break;
                                                                                                              case 'safeCall':
                                                                                                                scope.og(applyNode$string(count, args, name), block);
                                                                                                                break;
                                                                                                              case 'property':
                                                                                                                scope.mg(applyNode$string(count, args, name));
                                                                                                                break;
                                                                                                              case 'safeProperty':
                                                                                                                scope.ng(applyNode$string(count, args, name));
                                                                                                                break;
                                                                                                              case 'classLiteral':
                                                                                                                scope.lg();
                                                                                                                break;
                                                                                                              case 'index':
                                                                                                                scope.pg(block);
                                                                                                                break;
                                                                                                              case 'plus':
                                                                                                                scope.qg(block);
                                                                                                                break;
                                                                                                              case 'minus':
                                                                                                                scope.rg(block);
                                                                                                                break;
                                                                                                              case 'times':
                                                                                                                scope.sg(block);
                                                                                                                break;
                                                                                                              case 'div':
                                                                                                                scope.tg(block);
                                                                                                                break;
                                                                                                              case 'rem':
                                                                                                                scope.ug(block);
                                                                                                                break;
                                                                                                              case 'equalTo':
                                                                                                                scope.vg(block);
                                                                                                                break;
                                                                                                              case 'notEqualTo':
                                                                                                                scope.wg(block);
                                                                                                                break;
                                                                                                              case 'and':
                                                                                                                scope.xg(block);
                                                                                                                break;
                                                                                                              case 'or':
                                                                                                                scope.yg(block);
                                                                                                                break;
                                                                                                              case 'orElse':
                                                                                                                scope.zg(block);
                                                                                                                break;
                                                                                                              case 'infixCall':
                                                                                                                scope.ah(applyNode$string(count, args, name), block);
                                                                                                                break;
                                                                                                              case 'not':
                                                                                                                scope.bh();
                                                                                                                break;
                                                                                                              case 'unaryMinus':
                                                                                                                scope.ch();
                                                                                                                break;
                                                                                                              case 'isType':
                                                                                                                scope.dh(block);
                                                                                                                break;
                                                                                                              case 'assign':
                                                                                                                scope.eh(block);
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
  var inductionVariable = this_0.g7_1;
  var last = this_0.h7_1;
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
protoOf(BlockScope).jc = reference;
protoOf(BlockScope).kc = literal;
protoOf(BlockScope).lc = literal_0;
protoOf(BlockScope).mc = literal_1;
protoOf(BlockScope).nc = nullValue;
protoOf(BlockScope).oc = nullValue$default;
protoOf(BlockScope).pc = call;
protoOf(BlockScope).qc = chain;
protoOf(BlockScope).rc = lambdaExpression;
protoOf(BlockScope).sc = ifExpression;
protoOf(Text).af = get_containsLambda;
protoOf(Break).af = get_containsLambda;
protoOf(SingleExpressionScope).jc = reference;
protoOf(SingleExpressionScope).kc = literal;
protoOf(SingleExpressionScope).lc = literal_0;
protoOf(SingleExpressionScope).mc = literal_1;
protoOf(SingleExpressionScope).nc = nullValue;
protoOf(SingleExpressionScope).oc = nullValue$default;
protoOf(SingleExpressionScope).pc = call;
protoOf(SingleExpressionScope).qc = chain;
protoOf(SingleExpressionScope).rc = lambdaExpression;
protoOf(SingleExpressionScope).sc = ifExpression;
protoOf(ArgumentScope).jc = reference;
protoOf(ArgumentScope).kc = literal;
protoOf(ArgumentScope).lc = literal_0;
protoOf(ArgumentScope).mc = literal_1;
protoOf(ArgumentScope).nc = nullValue;
protoOf(ArgumentScope).oc = nullValue$default;
protoOf(ArgumentScope).pc = call;
protoOf(ArgumentScope).qc = chain;
protoOf(ArgumentScope).rc = lambdaExpression;
protoOf(ArgumentScope).sc = ifExpression;
//endregion
//region block: exports
export {
  generateKotlin as generateKotlin,
};
//endregion

//# sourceMappingURL=prosakt.mjs.map
