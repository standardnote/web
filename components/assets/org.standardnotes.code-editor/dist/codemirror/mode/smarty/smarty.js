!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){"use strict";e.defineMode("smarty",(function(t,r){var i,n=r.rightDelimiter||"}",a=r.leftDelimiter||"{",o=r.version||2,f=e.getMode(t,r.baseMode||"null"),l=["debug","extends","function","include","literal"],u={operatorChars:/[+\-*&%=<>!?]/,validIdentifier:/[a-zA-Z0-9_]/,stringChar:/['"]/};function s(e,t){return i=t,e}function d(e,t){return null==t&&(t=e.pos),3===o&&"{"==a&&(t==e.string.length||/\s/.test(e.string.charAt(t)))}function p(e,t){for(var r,o=e.string,l=e.pos;;){var u=o.indexOf(a,l);if(l=u+a.length,-1==u||!d(e,u+a.length))break}if(u==e.pos)return e.match(a),e.eat("*")?function(e,t,r){return t.tokenize=r,r(e,t)}(e,t,(r="*"+n,function(e,t){for(;!e.eol();){if(e.match(r)){t.tokenize=p;break}e.next()}return"comment"})):(t.depth++,t.tokenize=c,i="startTag","tag");u>-1&&(e.string=o.slice(0,u));var s=f.token(e,t.base);return u>-1&&(e.string=o),s}function c(e,t){if(e.match(n,!0))return 3===o?(t.depth--,t.depth<=0&&(t.tokenize=p)):t.tokenize=p,s("tag",null);if(e.match(a,!0))return t.depth++,s("tag","startTag");var r=e.next();if("$"==r)return e.eatWhile(u.validIdentifier),s("variable-2","variable");if("|"==r)return s("operator","pipe");if("."==r)return s("operator","property");if(u.stringChar.test(r))return t.tokenize=(f=r,function(e,t){for(var r=null,i=null;!e.eol();){if(i=e.peek(),e.next()==f&&"\\"!==r){t.tokenize=c;break}r=i}return"string"}),s("string","string");if(u.operatorChars.test(r))return e.eatWhile(u.operatorChars),s("operator","operator");if("["==r||"]"==r)return s("bracket","bracket");if("("==r||")"==r)return s("bracket","operator");if(/\d/.test(r))return e.eatWhile(/\d/),s("number","number");if("variable"==t.last){if("@"==r)return e.eatWhile(u.validIdentifier),s("property","property");if("|"==r)return e.eatWhile(u.validIdentifier),s("qualifier","modifier")}else{if("pipe"==t.last)return e.eatWhile(u.validIdentifier),s("qualifier","modifier");if("whitespace"==t.last)return e.eatWhile(u.validIdentifier),s("attribute","modifier")}if("property"==t.last)return e.eatWhile(u.validIdentifier),s("property",null);if(/\s/.test(r))return i="whitespace",null;var f,d="";"/"!=r&&(d+=r);for(var h=null;h=e.eat(u.validIdentifier);)d+=h;for(var b=0,k=l.length;b<k;b++)if(l[b]==d)return s("keyword","keyword");return/\s/.test(r)?null:s("tag","tag")}return{startState:function(){return{base:e.startState(f),tokenize:p,last:null,depth:0}},copyState:function(t){return{base:e.copyState(f,t.base),tokenize:t.tokenize,last:t.last,depth:t.depth}},innerMode:function(e){if(e.tokenize==p)return{mode:f,state:e.base}},token:function(e,t){var r=t.tokenize(e,t);return t.last=i,r},indent:function(t,r,i){return t.tokenize==p&&f.indent?f.indent(t.base,r,i):e.Pass},blockCommentStart:a+"*",blockCommentEnd:"*"+n}})),e.defineMIME("text/x-smarty","smarty")}));