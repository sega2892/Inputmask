/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.2.16
*/
(function(e){void 0==e.fn.inputmask&&(e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:e.noop,onKeyDown:e.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,radixPoint:"",rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",
cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,
TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(e,D,P){var M=e.length;!D&&1<P&&(M+=e.length*(P-1));return M}},val:e.fn.val,escapeRegex:function(e){return e.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},e.fn.inputmask=function(z,D){var P,M;function I(a,c){var f=b.aliases[a];return f?(f.alias&&I(f.alias),e.extend(!0,b,f),e.extend(!0,b,c),!0):!1}function N(a){var c=
!1,f=0,k=b.greedy,l=b.repeat;1==a.length&&!1==k&&(b.placeholder="");for(var a=e.map(a.split(""),function(a){var l=[];if(a==b.escapeChar)c=true;else if(a!=b.optionalmarker.start&&a!=b.optionalmarker.end||c){var e=b.definitions[a];if(e&&!c)for(a=0;a<e.cardinality;a++)l.push(E(f+a));else{l.push(a);c=false}f=f+l.length;return l}}),W=a.slice(),g=1;g<l&&k;g++)W=W.concat(a.slice());return{mask:W,repeat:l,greedy:k}}function R(a){var c=!1,f=!1,k=!1;return e.map(a.split(""),function(a){var e=[];if(a==b.escapeChar)f=
!0;else if(a==b.optionalmarker.start&&!f)k=c=!0;else if(a==b.optionalmarker.end&&!f)c=!1,k=!0;else{var g=b.definitions[a];if(g&&!f){for(var n=g.prevalidator,h=n?n.length:0,j=1;j<g.cardinality;j++){var d=h>=j?n[j-1]:[],m=d.validator,d=d.cardinality;e.push({fn:m?"string"==typeof m?RegExp(m):new function(){this.test=m}:/./,cardinality:d?d:1,optionality:c,newBlockMarker:!0==c?k:!1,offset:0,casing:g.casing,def:g.definitionSymbol|a});!0==c&&(k=!1)}e.push({fn:g.validator?"string"==typeof g.validator?RegExp(g.validator):
new function(){this.test=g.validator}:/./,cardinality:g.cardinality,optionality:c,newBlockMarker:k,offset:0,casing:g.casing,def:g.definitionSymbol|a})}else e.push({fn:null,cardinality:0,optionality:c,newBlockMarker:k,offset:0,casing:null,def:a}),f=!1;k=!1;return e}})}function X(){function a(a){var c=a.length;for(i=0;i<c&&a.charAt(i)!=b.optionalmarker.start;i++);var f=[a.substring(0,i)];i<c&&f.push(a.substring(i+1,c));return f}function c(l,m){var g=0,n=0,h=m.length;for(i=0;i<h&&!(m.charAt(i)==b.optionalmarker.start&&
g++,m.charAt(i)==b.optionalmarker.end&&n++,0<g&&g==n);i++);g=[m.substring(0,i)];i<h&&g.push(m.substring(i+1,h));var j=a(g[0]);if(1<j.length){if(h=l+j[0]+(b.optionalmarker.start+j[1]+b.optionalmarker.end)+(1<g.length?g[1]:""),-1==e.inArray(h,k)&&(k.push(h),n=N(h),f.push({mask:h,_buffer:n.mask,tests:R(h),lastValidPosition:void 0,greedy:n.greedy,repeat:n.repeat})),h=l+j[0]+(1<g.length?g[1]:""),-1==e.inArray(h,k)&&(k.push(h),n=N(h),f.push({mask:h,_buffer:n.mask,tests:R(h),lastValidPosition:void 0,greedy:n.greedy,
repeat:n.repeat})),1<a(j[1]).length&&c(l+j[0],j[1]+g[1]),1<g.length&&1<a(g[1]).length)c(l+j[0]+(b.optionalmarker.start+j[1]+b.optionalmarker.end),g[1]),c(l+j[0],g[1])}else h=l+g,-1==e.inArray(h,k)&&(k.push(h),n=N(h),f.push({mask:h,_buffer:n.mask,tests:R(h),lastValidPosition:void 0,greedy:n.greedy,repeat:n.repeat}))}var f=[],k=[];e.isArray(b.mask)?e.each(b.mask,function(a,b){c("",b.toString())}):c("",b.mask.toString());return f}function t(){return x[q]}function F(){return t().tests}function m(){return t()._buffer}
function G(a,c,f,k,l){function m(a,d){for(var e=B(a),l=c?1:0,h="",g=d.tests[e].cardinality;g>l;g--)h+=A(f,e-(g-1));c&&(h+=c);return null!=d.tests[e].fn?d.tests[e].fn.test(h,f,a,k,b):!1}if(k){var g=m(a,t());if(!1!==g){!0===g&&(g={pos:a});var n=t(),h=g.pos||a;if(void 0==n.lastValidPosition||n.lastValidPosition<h)n.lastValidPosition=h}return g}var j=[],d=!1,p=q;e.each(x,function(d){q=d;var e=a;if(p!=q&&!y(a)){if(c==this._buffer[e]||c==b.skipOptionalPartCharacter)return j[d]={refresh:!0},this.lastValidPosition=
e,!1;e=l?H(f,a):v(f,a)}if((void 0==this.lastValidPosition&&e==(l?H(f,s(f)):v(f,-1))||l||b.numericInput?this.lastValidPosition<=b.numericInput?s(f):v(f,e):this.lastValidPosition>=H(f,e))&&0<=e&&e<s(f))if(j[d]=m(e,this),!1!==j[d]){if(!0===j[d]&&(j[d]={pos:e}),d=j[d].pos||e,void 0==this.lastValidPosition||this.lastValidPosition<d)this.lastValidPosition=d}else this.lastValidPosition=l?a==s(f)?void 0:v(f,a):0==a?void 0:H(f,a)});q=p;S(f,a,p,l);d=j[q]||d;setTimeout(function(){b.onKeyValidation.call(this,
d,b)},0);return d}function S(a,c,f,k){e.each(x,function(f){if(this.lastValidPosition&&(k||b.numericInput)?this.lastValidPosition<=c:this.lastValidPosition>=c)return q=f,w(void 0,a,!1,!1,a.join(""),k),!1})}function y(a){a=B(a);a=F()[a];return void 0!=a?a.fn:!1}function B(a){return a%F().length}function E(a){return b.placeholder.charAt(a%b.placeholder.length)}function s(a){return b.getMaskLength(m(),t().greedy,t().repeat,a,b)}function v(a,c){var b=s(a);if(c>=b)return b;for(var e=c;++e<b&&!y(e););return e}
function H(a,c){var b=c;if(0>=b)return 0;for(;0<--b&&!y(b););return b}function L(a,c,b,e,l){e&&(c=Y(a,c,l));e=F()[B(c)];l=b;if(void 0!=l)switch(e.casing){case "upper":l=b.toUpperCase();break;case "lower":l=b.toLowerCase()}a[c]=l}function A(a,c,b){b&&(c=Y(a,c));return a[c]}function Y(a,c,b){if(b)for(;0>c&&a.length<s(a);){b=m().length-1;for(c=m().length;void 0!==m()[b];)a.unshift(m()[b--])}else for(;void 0==a[c]&&a.length<s(a);)for(b=0;void 0!==m()[b];)a.push(m()[b++]);return c}function C(a,b,e){a._valueSet(b.join(""));
void 0!=e&&p(a,e)}function T(a,b,e){for(var k=s(a);b<e&&b<k;b++)L(a,b,A(m().slice(),b))}function O(a,b){var e=B(b);L(a,b,A(m(),e))}function w(a,c,f,k,l,p){var p=void 0!=p?p:e(a).data("inputmask").isRTL,g=U(void 0!=l?l:a._valueGet(),p).split(""),l=s(c);if(p){var n=g.reverse();n.length=l;for(var h=0;h<l;h++){var j=B(l-(h+1));null==F()[j].fn&&n[h]!=A(m(),j)?(n.splice(h,0,A(m(),j)),n.length=l):n[h]=n[h]||A(m(),j)}g=n.reverse()}T(c,0,c.length);c.length=m().length;for(var d=n=-1,q,x=g.length,j=0==x?l:-1,
h=0;h<x;h++)for(var u=d+1;u<l;u++)if(y(u)){var w=g[h];!1!==(q=G(u,w,c,!f,p))?(!0!==q&&(u=void 0!=q.pos?q.pos:u,w=void 0!=q.c?q.c:w),L(c,u,w,!0,p),n=d=u):(O(c,u),w==E(u)&&(j=d=u));break}else if(O(c,u),n==d&&(n=u),d=u,g[h]==A(c,u))break;if(!1==t().greedy&&c.length>m().length){h=U(c.join(""),p).split("");g=h.length;for(d=0;d<g;d++)c[d]=h[d];c.length=h.length}f&&C(a,c);return p?b.numericInput?""!=b.radixPoint&&-1!=e.inArray(b.radixPoint,c)&&!0!==k?e.inArray(b.radixPoint,c):v(c,l):v(c,j):v(c,n)}function aa(a){return e.inputmask.escapeRegex.call(this,
a)}function U(a,b){return b?a.replace(RegExp("^("+aa(m().join(""))+")*"),""):a.replace(RegExp("("+aa(m().join(""))+")*$"),"")}function Z(a,b){w(a,b,!1);var f=b.slice(),k,l;if(e(a).data("inputmask").isRTL)for(l=0;l<=f.length-1;l++)if(k=B(l),F()[k].optionality)if(!y(l)||!G(l,b[l],b,!0))f.splice(0,1);else break;else break;else for(l=f.length-1;0<=l;l--)if(k=B(l),F()[k].optionality)if(!y(l)||!G(l,b[l],b,!0))f.pop();else break;else break;C(a,f)}function ba(a,b){var f=a[0];if(F()&&(!0===b||!a.hasClass("hasDatepicker"))){var k=
m().slice();w(f,k);return e.map(k,function(a,b){return y(b)&&G(b,a,k,!0)?a:null}).join("")}return f._valueGet()}function p(a,c,f){var k=a.jquery&&0<a.length?a[0]:a;if("number"==typeof c)e(a).is(":visible")&&(f="number"==typeof f?f:c,!1==b.insertMode&&c==f&&f++,k.setSelectionRange?V?(setTimeout(function(){k.selectionStart=c;k.selectionEnd=V?c:f},10),P=c,M=f):(k.selectionStart=c,k.selectionEnd=f):k.createTextRange&&(a=k.createTextRange(),a.collapse(!0),a.moveEnd("character",f),a.moveStart("character",
c),a.select()));else{if(!e(a).is(":visible"))return{begin:0,end:0};k.setSelectionRange?(c=k.selectionStart,f=k.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),c=0-a.duplicate().moveStart("character",-1E5),f=c+a.text.length);return{begin:c,end:f}}}function Q(a){var b=!1,f=0,k=q;e.each(x,function(e,k){q=e;var g=H(a,s(a));if(k.lastValidPosition&&k.lastValidPosition>=f&&k.lastValidPosition==g){for(var n=!0,h=0;h<=g;h++){var j=y(h),d=B(h);if(j&&(void 0==
a[h]||a[h]==E(h))||!j&&a[h]!=m()[d]){n=!1;break}}if(b=b||n)return!1}f=k.lastValidPosition});q=k;return b}function $(a){function c(a){a=e._data(a).events;e.each(a,function(a,b){e.each(b,function(a,b){if("inputmask"==b.namespace){var d=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return d.apply(this,arguments)}}})})}function f(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get)a._valueGet||(a._valueGet=b.get,
a._valueSet=b.set,Object.defineProperty(a,"value",{get:function(){var a=e(this),b=e(this).data("inputmask"),d=b.masksets,c=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d[c]._buffer.join("")?this._valueGet():""},set:function(a){this._valueSet(a);e(this).triggerHandler("setvalue.inputmask")}}));else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),a._valueSet=a.__lookupSetter__("value"),
a.__defineGetter__("value",function(){var a=e(this),b=e(this).data("inputmask"),d=b.masksets,c=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d[c]._buffer.join("")?this._valueGet():""}),a.__defineSetter__("value",function(a){this._valueSet(a);e(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=e.fn.val.inputmaskpatch)e.fn.val=function(){if(arguments.length==
0){var a=e(this);if(a.data("inputmask")){if(a.data("inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");var a=e.inputmask.val.apply(a),b=e(this).data("inputmask");return a!=b.masksets[b.activeMasksetIndex]._buffer.join("")?a:""}return e.inputmask.val.apply(a)}var d=arguments;return this.each(function(){var a=e(this),b=e.inputmask.val.apply(a,d);a.data("inputmask")&&a.triggerHandler("setvalue.inputmask");return b})},e.extend(e.fn.val,{inputmaskpatch:!0})}function k(a,d){if(b.numericInput&&
""!=b.radixPoint){var e=a._valueGet().indexOf(b.radixPoint);r=d.begin<=e||d.end<=e||-1==e}}function l(a,b,e){for(;!y(a)&&0<=a-1;)a--;for(var c=a;c<b&&c<s(d);c++)if(y(c)){O(d,c);var f=v(d,c),l=A(d,f);if(l!=E(f))if(f<s(d)&&!1!==G(c,l,d,!0,r)&&F()[B(c)].def==F()[B(f)].def)L(d,c,A(d,f),!0,r),O(d,f);else{if(y(c))break}else if(void 0==e)break}else O(d,c);void 0!=e&&L(d,r?b:H(d,b),e);d=U(d.join(""),r).split("");0==d.length&&(d=m().slice());return a}function z(a,b,c,e){for(;a<=b&&a<s(d);a++)if(y(a)){var f=
A(d,a);L(d,a,c,!0,r);if(f!=E(a))if(c=v(d,a),c<s(d))if(!1!==G(c,f,d,!0,r)&&F()[B(a)].def==F()[B(c)].def)c=f;else if(y(c))break;else c=f;else break;else if(!0!==e)break}else O(d,a);e=d.length;d=U(d.join(""),r).split("");0==d.length&&(d=m().slice());return b-(e-d.length)}function g(a){u=!1;var c=this,f=a.keyCode,h=p(c);k(c,h);if(f==b.keyCode.BACKSPACE||f==b.keyCode.DELETE||da&&127==f){var g=s(d),n=v(d,-1);if(0==h.begin&&h.end==g)q=0,d=m().slice(),C(c,d),p(c,w(c,d,!1));else if(1<h.end-h.begin||1==h.end-
h.begin&&b.insertMode)T(d,h.begin,h.end),S(d,h.begin,q,r),C(c,d),g=r?w(c,d,!1):h.begin,t().lastValidPosition=g,p(c,g);else{var o=ca?h.end:h.begin;f==b.keyCode.DELETE?(o<n&&(o=n),o<g&&(b.numericInput&&""!=b.radixPoint&&d[o]==b.radixPoint?(o=d.length-1==o?o:v(d,o),o=l(o,g)):r?(o=z(n,o,E(o),!0),o=v(d,o)):o=l(o,g),S(d,o,q,r),t().lastValidPosition=o,C(c,d,o))):f==b.keyCode.BACKSPACE&&(o>n?(o-=1,b.numericInput&&""!=b.radixPoint&&d[o]==b.radixPoint?(o=z(n,d.length-1==o?o:o-1,E(o),!0),o++):r?(o=z(n,o,E(o),
!0),o=d[o+1]==b.radixPoint?o+1:v(d,o)):o=l(o,g),S(d,o,q,r),t().lastValidPosition=o,C(c,d,o)):0<q&&(q=0,T(d,0,n),n=v(d,-1),C(c,m(),r?g:n)))}c._valueGet()==m().join("")&&e(c).trigger("cleared");b.showTooltip&&j.prop("title",t().mask);a.preventDefault()}else f==b.keyCode.END||f==b.keyCode.PAGE_DOWN?setTimeout(function(){var e=w(c,d,!1,!0);!b.insertMode&&(e==s(d)&&!a.shiftKey)&&e--;p(c,a.shiftKey?h.begin:e,e)},0):f==b.keyCode.HOME&&!a.shiftKey||f==b.keyCode.PAGE_UP?p(c,0,a.shiftKey?h.begin:0):f==b.keyCode.ESCAPE?
(c._valueSet(D),p(c,0,w(c,d))):f==b.keyCode.INSERT?(b.insertMode=!b.insertMode,p(c,!b.insertMode&&h.begin==s(d)?h.begin-1:h.begin)):a.ctrlKey&&88==f?setTimeout(function(){p(c,w(c,d,!0))},0):b.insertMode||(f==b.keyCode.RIGHT?(g=h.begin==h.end?h.end+1:h.end,g=g<s(d)?g:h.end,p(c,a.shiftKey?h.begin:g,a.shiftKey?g+1:g)):f==b.keyCode.LEFT&&(g=h.begin-1,g=0<g?g:0,p(c,g,a.shiftKey?h.end:g)));b.onKeyDown.call(this,a,d,b);I=-1!=e.inArray(f,b.ignorables)}function n(a){if(u)return!1;u=!0;var c=e(this),a=a||window.event,
f=a.which||a.charCode||a.keyCode,h=String.fromCharCode(f);if(b.numericInput&&h==b.radixPoint){var g=this._valueGet().indexOf(b.radixPoint);p(this,v(d,-1!=g?g:s(d)))}if(a.metaKey||I)return!0;if(f){var k=p(this),n=s(d),f=!0;T(d,k.begin,k.end);if(r){var g=H(d,k.end),j;if(!1!==(j=G(g==n||A(d,g)==b.radixPoint?H(d,g):g,h,d,!1,r))){var m=!1;!0!==j&&(m=j.refresh,g=void 0!=j.pos?j.pos:g,h=void 0!=j.c?j.c:h);if(!0!==m){var n=s(d),q=v(d,-1);j=q;if(!0==b.insertMode){if(!0==t().greedy)for(m=d.slice();A(m,j,!0)!=
E(j)&&j<=g;)j=j==n?n+1:v(d,j);j<=g&&(t().greedy||d.length<n)?(d[q]!=E(q)&&d.length<n&&(m=Y(d,-1,r),0!=k.end&&(g+=m),n=d.length),l(j,g,h)):f=!1}else L(d,g,h,!0,r)}f&&(C(this,d,b.numericInput?g+1:g),setTimeout(function(){Q(d)&&c.trigger("complete")},0))}}else if(g=v(d,k.begin-1),!1!==(j=G(g,h,d,!1,r))){m=!1;!0!==j&&(m=j.refresh,g=void 0!=j.pos?j.pos:g,h=void 0!=j.c?j.c:h);if(!0!==m)if(!0==b.insertMode){k=s(d);for(m=d.slice();A(m,k,!0)!=E(k)&&k>=g;)k=0==k?-1:H(d,k);k>=g?z(g,d.length,h):f=!1}else L(d,
g,h,!0,r);f&&(h=v(d,g),C(this,d,h),setTimeout(function(){Q(d)&&c.trigger("complete")},0))}V&&p(this,P,M);b.showTooltip&&c.prop("title",t().mask);a.preventDefault()}}function h(a){var c=e(this),f=a.keyCode;b.onKeyUp.call(this,a,d,b);f==b.keyCode.TAB&&(c.hasClass("focus.inputmask")&&0==this._valueGet().length&&b.showMaskOnFocus)&&(d=m().slice(),C(this,d),r||p(this,0),D=this._valueGet())}var j=e(a);if(j.is(":input")){b.showTooltip&&j.prop("title",t().mask);var d=m().slice();t().greedy=t().greedy?t().greedy:
0==t().repeat;var J=j.prop("maxLength");s(d)>J&&-1<J&&(J<m().length&&(m().length=J),!1==t().greedy&&(t().repeat=Math.round(J/m().length)),j.prop("maxLength",2*s(d)));j.data("inputmask",{masksets:x,activeMasksetIndex:q,opts:b,isRTL:!1});f(a);var D=a._valueGet(),u=!1,I=!1,K=-1,r=!1;if("rtl"==a.dir||b.numericInput)("rtl"==a.dir||b.numericInput&&b.rightAlignNumerics)&&j.css("text-align","right"),a.dir="ltr",j.removeAttr("dir"),J=j.data("inputmask"),J.isRTL=!0,j.data("inputmask",J),r=!0;j.unbind(".inputmask");
j.removeClass("focus.inputmask");j.bind("mouseenter.inputmask",function(){if(!e(this).hasClass("focus.inputmask")&&b.showMaskOnHover){var a=this._valueGet().length;if(a<d.length){a==0&&(d=m().slice());C(this,d)}}}).bind("blur.inputmask",function(){var a=e(this),c=this._valueGet();a.removeClass("focus.inputmask");c!=D&&a.change();b.clearMaskOnLostFocus&&c!=""&&(c==m().join("")?this._valueSet(""):Z(this,d));if(!Q(d)){a.trigger("incomplete");if(b.clearIncomplete)if(b.clearMaskOnLostFocus)this._valueSet("");
else{d=m().slice();C(this,d)}}}).bind("focus.inputmask",function(){var a=e(this),c=this._valueGet();if(b.showMaskOnFocus&&!a.hasClass("focus.inputmask")&&(!b.showMaskOnHover||b.showMaskOnHover&&c=="")){c=c.length;if(c<d.length){c==0&&(d=m().slice());p(this,w(this,d,true))}}a.addClass("focus.inputmask");D=this._valueGet()}).bind("mouseleave.inputmask",function(){var a=e(this);b.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||(this._valueGet()==m().join("")||this._valueGet()==""?this._valueSet(""):
Z(this,d)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var b=p(a);if(b.begin==b.end){var c=b.begin;K=w(a,d,false);k(a,b);r?p(a,c>K&&(G(c,d[c],d,true,r)!==false||!y(c))?c:K):p(a,c<K&&(G(c,d[c],d,true,r)!==false||!y(c))?c:K)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){p(a,0,K)},0)}).bind("keydown.inputmask",g).bind("keypress.inputmask",n).bind("keyup.inputmask",h).bind(ea+".inputmask dragdrop.inputmask drop.inputmask",function(){var a=this;
setTimeout(function(){p(a,w(a,d,true));Q(d)&&j.trigger("complete")},0)}).bind("setvalue.inputmask",function(){D=this._valueGet();w(this,d,true);this._valueGet()==m().join("")&&this._valueSet("")}).bind("complete.inputmask",b.oncomplete).bind("incomplete.inputmask",b.onincomplete).bind("cleared.inputmask",b.oncleared);var K=w(a,d,!0),N;try{N=document.activeElement}catch(R){}N===a?(j.addClass("focus.inputmask"),p(a,K)):b.clearMaskOnLostFocus&&(a._valueGet()==m().join("")?a._valueSet(""):Z(a,d));c(a)}}
var b=e.extend(!0,{},e.inputmask.defaults,D),ea=function(a){var b=document.createElement("input"),a="on"+a,e=a in b;e||(b.setAttribute(a,"return;"),e="function"==typeof b[a]);return e}("paste")?"paste":"input",da=null!=navigator.userAgent.match(/iphone/i),V=null!=navigator.userAgent.match(/android.*safari.*/i),ca;if(V){var fa=navigator.userAgent.match(/safari.*/i);ca=533>=parseInt(RegExp(/[0-9]+/).exec(fa))}var x,q=0;if("string"==typeof z)switch(z){case "mask":return I(b.alias,D),x=X(),this.each(function(){$(this)});
case "unmaskedvalue":return x=this.data("inputmask").masksets,q=this.data("inputmask").activeMasksetIndex,b=this.data("inputmask").opts,ba(this);case "remove":return this.each(function(){var a=e(this),c=this;setTimeout(function(){if(a.data("inputmask")){x=a.data("inputmask").masksets;q=a.data("inputmask").activeMasksetIndex;b=a.data("inputmask").opts;c._valueSet(ba(a,!0));a.removeData("inputmask");a.unbind(".inputmask");a.removeClass("focus.inputmask");var e;Object.getOwnPropertyDescriptor&&(e=Object.getOwnPropertyDescriptor(c,
"value"));e&&e.get?c._valueGet&&Object.defineProperty(c,"value",{get:c._valueGet,set:c._valueSet}):document.__lookupGetter__&&c.__lookupGetter__("value")&&c._valueGet&&(c.__defineGetter__("value",c._valueGet),c.__defineSetter__("value",c._valueSet));delete c._valueGet;delete c._valueSet}},0)});case "getemptymask":return this.data("inputmask")?(x=this.data("inputmask").masksets,q=this.data("inputmask").activeMasksetIndex,x[q]._buffer.join("")):"";case "hasMaskedValue":return this.data("inputmask")?
!this.data("inputmask").opts.autoUnmask:!1;case "isComplete":return x=this.data("inputmask").masksets,q=this.data("inputmask").activeMasksetIndex,b=this.data("inputmask").opts,Q(this[0]._valueGet().split(""));default:return I(z,D)||(b.mask=z),x=X(),this.each(function(){$(this)})}else{if("object"==typeof z)return b=e.extend(!0,{},e.inputmask.defaults,z),I(b.alias,z),x=X(),this.each(function(){$(this)});if(void 0==z)return this.each(function(){var a=e(this).attr("data-inputmask");if(a&&""!=a)try{var a=
a.replace(RegExp("'","g"),'"'),c=e.parseJSON("{"+a+"}");b=e.extend(!0,{},e.inputmask.defaults,c);I(b.alias,c);b.alias=void 0;e(this).inputmask(b)}catch(f){}})}return this})})(jQuery);
