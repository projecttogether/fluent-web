parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZBJB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;const e=/^[ \t]*$/;function t(t,...n){let i=t.reduce((e,t)=>e+n.shift()+t).split("\n"),r=i.shift();if(void 0===r||!e.test(r))throw new RangeError("Content must start on a new line.");let o=i.pop();if(void 0===o||!e.test(o))throw new RangeError("Closing delimiter must appear on a new line.");let l=[];for(let e=0;e<i.length;e++){let t=i[e],n=t.slice(0,o.length);if(0!==n.length){if(n!==o)throw new RangeError(`Insufficient indentation in line ${e+1}.`);l.push(t.slice(o.length))}else l.push(t)}return l.join("\n")}
},{}],"Y9sf":[function(require,module,exports) {
!function(n){"use strict";function r(n,r,e){return e.a=n,e.f=r,e}function e(n){return r(2,n,function(r){return function(e){return n(r,e)}})}function t(n){return r(3,n,function(r){return function(e){return function(t){return n(r,e,t)}}})}function u(n){return r(4,n,function(r){return function(e){return function(t){return function(u){return n(r,e,t,u)}}}})}function a(n){return r(5,n,function(r){return function(e){return function(t){return function(u){return function(a){return n(r,e,t,u,a)}}}}})}function i(n,r,e){return 2===n.a?n.f(r,e):n(r)(e)}function f(n,r,e,t){return 3===n.a?n.f(r,e,t):n(r)(e)(t)}function o(n,r,e,t,u){return 4===n.a?n.f(r,e,t,u):n(r)(e)(t)(u)}function c(n,r,e,t,u,a){return 5===n.a?n.f(r,e,t,u,a):n(r)(e)(t)(u)(a)}var v=t(function(n,r,e){for(var t=[],u=0;n>u;u++)t[u]=e(r+u);return t}),s=e(function(n,r){for(var e=[],t=0;n>t&&r.b;t++)e[t]=r.a,r=r.b;return e.length=t,b(e,r)});function l(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function d(n,r,e,t){if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&l(5),!1;if(e>100)return t.push(b(n,r)),!0;for(var u in 0>n.$&&(n=Rn(n),r=Rn(r)),n)if(!d(n[u],r[u],e+1,t))return!1;return!0}function b(n,r){return{a:n,b:r}}function h(n,r){var e={};for(var t in n)e[t]=n[t];for(var t in r)e[t]=r[t];return e}var g={$:0};function $(n,r){return{$:1,a:n,b:r}}var p=e($);function m(n){for(var r=g,e=n.length;e--;)r=$(n[e],r);return r}var y=Math.ceil,w=Math.floor,j=Math.log;function k(n){return{$:2,b:n}}k(function(n){return"number"!=typeof n?I("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?Hn(n):!isFinite(n)||n%1?I("an INT",n):Hn(n)}),k(function(n){return"boolean"==typeof n?Hn(n):I("a BOOL",n)}),k(function(n){return"number"==typeof n?Hn(n):I("a FLOAT",n)}),k(function(n){return Hn(q(n))});var A=k(function(n){return"string"==typeof n?Hn(n):n instanceof String?Hn(n+""):I("a STRING",n)}),_=e(function(n,r){return{$:6,d:n,b:r}}),N=e(function(n,r){return{$:7,e:n,b:r}});var E=e(function(n,r){return{$:10,b:r,h:n}}),T=e(function(n,r){return function(n,r){return{$:9,f:n,g:r}}(n,[r])}),F=e(function(n,r){return L(n,D(r))});function L(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Hn(n.c):I("null",r);case 3:return x(r)?z(n.b,r,m):I("a LIST",r);case 4:return x(r)?z(n.b,r,C):I("an ARRAY",r);case 6:var e=n.d;if("object"!=typeof r||null===r||!(e in r))return I("an OBJECT with a field named `"+e+"`",r);var t=L(n.b,r[e]);return br(t)?t:Jn(i(Un,e,t.a));case 7:var u=n.e;return x(r)?r.length>u?(t=L(n.b,r[u]),br(t)?t:Jn(i(Yn,u,t.a))):I("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):I("an ARRAY",r);case 8:if("object"!=typeof r||null===r||x(r))return I("an OBJECT",r);var a=g;for(var f in r)if(r.hasOwnProperty(f)){if(t=L(n.b,r[f]),!br(t))return Jn(i(Un,f,t.a));a=$(b(f,t.a),a)}return Hn(Vn(a));case 9:for(var o=n.f,c=n.g,v=0;c.length>v;v++){if(t=L(c[v],r),!br(t))return t;o=o(t.a)}return Hn(o);case 10:return t=L(n.b,r),br(t)?L(n.h(t.a),r):t;case 11:for(var s=g,l=n.g;l.b;l=l.b){if(t=L(l.a,r),br(t))return t;s=$(t.a,s)}return Jn(Wn(Vn(s)));case 1:return Jn(i(Pn,n.a,q(r)));case 0:return Hn(n.a)}}function z(n,r,e){for(var t=r.length,u=[],a=0;t>a;a++){var f=L(n,r[a]);if(!br(f))return Jn(i(Yn,a,f.a));u[a]=f.a}return Hn(e(u))}function x(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function C(n){return i(dr,n.length,function(r){return n[r]})}function I(n,r){return Jn(i(Pn,"Expecting "+n,q(r)))}function S(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return S(n.b,r.b);case 6:return n.d===r.d&&S(n.b,r.b);case 7:return n.e===r.e&&S(n.b,r.b);case 9:return n.f===r.f&&O(n.g,r.g);case 10:return n.h===r.h&&S(n.b,r.b);case 11:return O(n.g,r.g)}}function O(n,r){var e=n.length;if(e!==r.length)return!1;for(var t=0;e>t;t++)if(!S(n[t],r[t]))return!1;return!0}function q(n){return n}function D(n){return n}var B=t(function(n,r,e){return e[n]=D(r),e}),G=q(null);function M(n){return{$:0,a:n}}function R(n){return{$:2,b:n,c:null}}var J=e(function(n,r){return{$:3,b:n,d:r}}),P=0;function U(n){var r={$:0,e:P++,f:n,g:null,h:[]};return W(r),r}var Y=!1,H=[];function W(n){if(H.push(n),!Y){for(Y=!0;n=H.shift();)K(n);Y=!1}}function K(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,W(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var Q={};function V(n,r){var e={g:r,h:void 0},t=n.c,u=n.d,a=n.e,c=n.f;function v(n){return i(J,v,{$:5,b:function(r){var i=r.a;return 0===r.$?f(u,e,i,n):a&&c?o(t,e,i.i,i.j,n):f(t,e,a?i.i:i.j,n)}})}return e.h=U(i(J,v,n.b))}var X=e(function(n,r){return R(function(e){n.g(r),e(M(0))})});function Z(n){return{$:2,m:n}}var nn,rn=[],en=!1;function tn(n,r,e){if(rn.push({p:n,q:r,r:e}),!en){en=!0;for(var t;t=rn.shift();)un(t.p,t.q,t.r);en=!1}}function un(n,r,e){var t,u={};for(var a in an(!0,r,u,null),an(!1,e,u,null),n)(t=n[a]).h.push({$:"fx",a:u[a]||{i:g,j:g}}),W(t)}function an(n,r,e,t){switch(r.$){case 1:var u=r.k,a=function(n,e,t){function u(n){for(var r=t;r;r=r.t)n=r.s(n);return n}return i(n?Q[e].e:Q[e].f,u,r.l)}(n,u,t);return void(e[u]=function(n,r,e){return e=e||{i:g,j:g},n?e.i=$(r,e.i):e.j=$(r,e.j),e}(n,a,e[u]));case 2:for(var f=r.m;f.b;f=f.b)an(n,f.a,e,t);return;case 3:return void an(n,r.o,e,{s:r.n,t:t})}}var fn="undefined"!=typeof document?document:{};function on(n,r){n.appendChild(r)}function cn(n){return{$:0,a:n}}var vn=e(function(n,r){return e(function(e,t){for(var u=[],a=0;t.b;t=t.b){var i=t.a;a+=i.b||0,u.push(i)}return a+=u.length,{$:1,c:r,d:gn(e),e:u,f:n,b:a}})})(void 0);e(function(n,r){return e(function(e,t){for(var u=[],a=0;t.b;t=t.b){var i=t.a;a+=i.b.b||0,u.push(i)}return a+=u.length,{$:2,c:r,d:gn(e),e:u,f:n,b:a}})})(void 0);var sn,ln=e(function(n,r){return{$:"a0",n:n,o:r}}),dn=e(function(n,r){return{$:"a2",n:n,o:r}}),bn=e(function(n,r){return{$:"a3",n:n,o:r}});function hn(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}function gn(n){for(var r={};n.b;n=n.b){var e=n.a,t=e.$,u=e.n,a=e.o;if("a2"!==t){var i=r[t]||(r[t]={});"a3"===t&&"class"===u?$n(i,u,a):i[u]=a}else"className"===u?$n(r,u,D(a)):r[u]=D(a)}return r}function $n(n,r,e){var t=n[r];n[r]=t?t+" "+e:e}function pn(n,r){var e=n.$;if(5===e)return pn(n.k||(n.k=n.m()),r);if(0===e)return fn.createTextNode(n.a);if(4===e){for(var t=n.k,u=n.j;4===t.$;)"object"!=typeof u?u=[u,t.j]:u.push(t.j),t=t.k;var a={j:u,p:r};return(i=pn(t,a)).elm_event_node_ref=a,i}if(3===e)return mn(i=n.h(n.g),r,n.d),i;var i=n.f?fn.createElementNS(n.f,n.c):fn.createElement(n.c);nn&&"a"==n.c&&i.addEventListener("click",nn(i)),mn(i,r,n.d);for(var f=n.e,o=0;f.length>o;o++)on(i,pn(1===e?f[o]:f[o].b,r));return i}function mn(n,r,e){for(var t in e){var u=e[t];"a1"===t?yn(n,u):"a0"===t?kn(n,r,u):"a3"===t?wn(n,u):"a4"===t?jn(n,u):("value"!==t&&"checked"!==t||n[t]!==u)&&(n[t]=u)}}function yn(n,r){var e=n.style;for(var t in r)e[t]=r[t]}function wn(n,r){for(var e in r){var t=r[e];void 0!==t?n.setAttribute(e,t):n.removeAttribute(e)}}function jn(n,r){for(var e in r){var t=r[e],u=t.f,a=t.o;void 0!==a?n.setAttributeNS(u,e,a):n.removeAttributeNS(u,e)}}function kn(n,r,e){var t=n.elmFs||(n.elmFs={});for(var u in e){var a=e[u],i=t[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=An(r,a),n.addEventListener(u,i,sn&&{passive:2>$r(a)}),t[u]=i}else n.removeEventListener(u,i),t[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){sn=!0}}))}catch(n){}function An(n,r){function e(r){var t=e.q,u=L(t.a,r);if(br(u)){for(var a,i=$r(t),f=u.a,o=i?3>i?f.a:f.n:f,c=1==i?f.b:3==i&&f.M,v=(c&&r.stopPropagation(),(2==i?f.b:3==i&&f.J)&&r.preventDefault(),n);a=v.j;){if("function"==typeof a)o=a(o);else for(var s=a.length;s--;)o=a[s](o);v=v.p}v(o,c)}}return e.q=r,e}function _n(n,r){return n.$==r.$&&S(n.a,r.a)}function Nn(n,r,e,t){var u={$:r,r:e,s:t,t:void 0,u:void 0};return n.push(u),u}function En(n,r,e,t){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void Nn(e,0,t,r);r=function(n){for(var r=n.e,e=r.length,t=[],u=0;e>u;u++)t[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:t,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,f=r.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return En(n.k,r.k,v,0),void(v.length>0&&Nn(e,1,t,v));case 4:for(var s=n.j,l=r.j,d=!1,b=n.k;4===b.$;)d=!0,"object"!=typeof s?s=[s,b.j]:s.push(b.j),b=b.k;for(var h=r.k;4===h.$;)d=!0,"object"!=typeof l?l=[l,h.j]:l.push(h.j),h=h.k;return d&&s.length!==l.length?void Nn(e,0,t,r):((d?function(n,r){for(var e=0;n.length>e;e++)if(n[e]!==r[e])return!1;return!0}(s,l):s===l)||Nn(e,2,t,l),void En(b,h,e,t+1));case 0:return void(n.a!==r.a&&Nn(e,3,t,r.a));case 1:return void Tn(n,r,e,t,Ln);case 2:return void Tn(n,r,e,t,zn);case 3:if(n.h!==r.h)return void Nn(e,0,t,r);var g=Fn(n.d,r.d);g&&Nn(e,4,t,g);var $=r.i(n.g,r.g);return void($&&Nn(e,5,t,$))}}}function Tn(n,r,e,t,u){if(n.c===r.c&&n.f===r.f){var a=Fn(n.d,r.d);a&&Nn(e,4,t,a),u(n,r,e,t)}else Nn(e,0,t,r)}function Fn(n,r,e){var t;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===e&&_n(a,i)||((t=t||{})[u]=i)}else(t=t||{})[u]=e?"a1"===e?"":"a0"===e||"a3"===e?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var f=Fn(n[u],r[u]||{},u);f&&((t=t||{})[u]=f)}for(var o in r)o in n||((t=t||{})[o]=r[o]);return t}function Ln(n,r,e,t){var u=n.e,a=r.e,i=u.length,f=a.length;i>f?Nn(e,6,t,{v:f,i:i-f}):f>i&&Nn(e,7,t,{v:i,e:a});for(var o=f>i?i:f,c=0;o>c;c++){var v=u[c];En(v,a[c],e,++t),t+=v.b||0}}function zn(n,r,e,t){for(var u=[],a={},i=[],f=n.e,o=r.e,c=f.length,v=o.length,s=0,l=0,d=t;c>s&&v>l;){var b=(N=f[s]).a,h=(E=o[l]).a,g=N.b,$=E.b,p=void 0,m=void 0;if(b!==h){var y=f[s+1],w=o[l+1];if(y){var j=y.a,k=y.b;m=h===j}if(w){var A=w.a,_=w.b;p=b===A}if(p&&m)En(g,_,u,++d),Cn(a,u,b,$,l,i),d+=g.b||0,In(a,u,b,k,++d),d+=k.b||0,s+=2,l+=2;else if(p)d++,Cn(a,u,h,$,l,i),En(g,_,u,d),d+=g.b||0,s+=1,l+=2;else if(m)In(a,u,b,g,++d),d+=g.b||0,En(k,$,u,++d),d+=k.b||0,s+=2,l+=1;else{if(!y||j!==A)break;In(a,u,b,g,++d),Cn(a,u,h,$,l,i),d+=g.b||0,En(k,_,u,++d),d+=k.b||0,s+=2,l+=2}}else En(g,$,u,++d),d+=g.b||0,s++,l++}for(;c>s;){var N;In(a,u,(N=f[s]).a,g=N.b,++d),d+=g.b||0,s++}for(;v>l;){var E,T=T||[];Cn(a,u,(E=o[l]).a,E.b,void 0,T),l++}(u.length>0||i.length>0||T)&&Nn(e,8,t,{w:u,x:i,y:T})}var xn="_elmW6BL";function Cn(n,r,e,t,u,a){var i=n[e];if(!i)return a.push({r:u,A:i={c:0,z:t,r:u,s:void 0}}),void(n[e]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return En(i.z,t,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Cn(n,r,e+xn,t,u,a)}function In(n,r,e,t,u){var a=n[e];if(a){if(0===a.c){a.c=2;var i=[];return En(t,a.z,i,u),void Nn(r,9,u,{w:i,A:a})}In(n,r,e+xn,t,u)}else{var f=Nn(r,9,u,void 0);n[e]={c:1,z:t,r:u,s:f}}}function Sn(n,r,e,t){return 0===e.length?n:(function n(r,e,t,u){!function r(e,t,u,a,i,f,o){for(var c=u[a],v=c.r;v===i;){var s=c.$;if(1===s)n(e,t.k,c.s,o);else if(8===s)c.t=e,c.u=o,(l=c.s.w).length>0&&r(e,t,l,0,i,f,o);else if(9===s){c.t=e,c.u=o;var l,d=c.s;d&&(d.A.s=e,(l=d.w).length>0&&r(e,t,l,0,i,f,o))}else c.t=e,c.u=o;if(!(c=u[++a])||(v=c.r)>f)return a}var b=t.$;if(4===b){for(var h=t.k;4===h.$;)h=h.k;return r(e,h,u,a,i+1,f,e.elm_event_node_ref)}for(var g=t.e,$=e.childNodes,p=0;g.length>p;p++){var m=1===b?g[p]:g[p].b,y=++i+(m.b||0);if(!(i>v||v>y||(c=u[a=r($[p],m,u,a,i,y,o)])&&(v=c.r)<=f))return a;i=y}return a}(r,e,t,0,0,e.b,u)}(n,r,e,t),On(n,e))}function On(n,r){for(var e=0;r.length>e;e++){var t=r[e],u=t.t,a=qn(u,t);u===n&&(n=a)}return n}function qn(n,r){switch(r.$){case 0:return function(n){var e=n.parentNode,t=pn(r.s,r.u);return t.elm_event_node_ref||(t.elm_event_node_ref=n.elm_event_node_ref),e&&t!==n&&e.replaceChild(t,n),t}(n);case 4:return mn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return On(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var e=r.s,t=0;e.i>t;t++)n.removeChild(n.childNodes[e.v]);return n;case 7:for(var u=(e=r.s).e,a=n.childNodes[t=e.v];u.length>t;t++)n.insertBefore(pn(u[t],r.u),a);return n;case 9:if(!(e=r.s))return n.parentNode.removeChild(n),n;var i=e.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=On(n,e.w),n;case 8:return function(n,r){var e=r.s,t=function(n,r){if(n){for(var e=fn.createDocumentFragment(),t=0;n.length>t;t++){var u=n[t].A;on(e,2===u.c?u.s:pn(u.z,r.u))}return e}}(e.y,r);n=On(n,e.w);for(var u=e.x,a=0;u.length>a;a++){var i=u[a],f=i.A,o=2===f.c?f.s:pn(f.z,r.u);n.insertBefore(o,n.childNodes[i.r])}return t&&on(n,t),n}(n,r);case 5:return r.s(n);default:l(10)}}var Dn=u(function(n,r,e,t){return function(n,r,e,t,u,a){var f=i(F,n,q(r?r.flags:void 0));br(f)||l(2);var o={},c=e(f.a),v=c.a,s=a(b,v),d=function(n,r){var e;for(var t in Q){var u=Q[t];u.a&&((e=e||{})[t]=u.a(t,r)),n[t]=V(u,r)}return e}(o,b);function b(n,r){var e=i(t,n,v);s(v=e.a,r),tn(o,e.b,u(v))}return tn(o,c.b,u(v)),d?{ports:d}:{}}(r,t,n.ax,n.aF,n.aD,function(r,e){var u=n.aG,a=t.node,o=function n(r){if(3===r.nodeType)return cn(r.textContent);if(1!==r.nodeType)return cn("");for(var e=g,t=r.attributes,u=t.length;u--;){var a=t[u];e=$(i(bn,a.name,a.value),e)}var o=r.tagName.toLowerCase(),c=g,v=r.childNodes;for(u=v.length;u--;)c=$(n(v[u]),c);return f(vn,o,e,c)}(a);return function(n,r){r(n);var e=0;function t(){e=1===e?0:(Bn(t),r(n),1)}return function(u,a){n=u,a?(r(n),2===e&&(e=1)):(0===e&&Bn(t),e=2)}}(e,function(n){var e=u(n),t=function(n,r){var e=[];return En(n,r,e,0),e}(o,e);a=Sn(a,o,t,r),o=e})})}),Bn=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Gn=p,Mn=t(function(n,r,e){for(;;){if(-2===e.$)return r;var t=e.d,u=n,a=f(n,e.b,e.c,f(Mn,n,r,e.e));n=u,r=a,e=t}}),Rn=function(n){return f(Mn,t(function(n,r,e){return i(Gn,b(n,r),e)}),g,n)},Jn=function(n){return{$:1,a:n}},Pn=e(function(n,r){return{$:3,a:n,b:r}}),Un=e(function(n,r){return{$:0,a:n,b:r}}),Yn=e(function(n,r){return{$:1,a:n,b:r}}),Hn=function(n){return{$:0,a:n}},Wn=function(n){return{$:2,a:n}},Kn={$:1},Qn=t(function(n,r,e){for(;;){if(!e.b)return r;var t=e.b,u=n,a=i(n,e.a,r);n=u,r=a,e=t}}),Vn=function(n){return f(Qn,Gn,g,n)},Xn=u(function(n,r,e,t){return{$:0,a:n,b:r,c:e,d:t}}),Zn=[],nr=y,rr=e(function(n,r){return j(r)/j(n)}),er=nr(i(rr,2,32)),tr=o(Xn,0,er,Zn,Zn),ur=v,ar=w,ir=function(n){return n.length},fr=e(function(n,r){return function n(r,e,t){if("object"!=typeof r)return r===e?0:e>r?-1:1;if(void 0===r.$)return(t=n(r.a,e.a))?t:(t=n(r.b,e.b))?t:n(r.c,e.c);for(;r.b&&e.b&&!(t=n(r.a,e.a));r=r.b,e=e.b);return t||(r.b?1:e.b?-1:0)}(n,r)>0?n:r}),or=s,cr=e(function(n,r){for(;;){var e=i(or,32,n),t=e.b,u=i(Gn,{$:0,a:e.a},r);if(!t.b)return Vn(u);n=t,r=u}}),vr=e(function(n,r){for(;;){var e=nr(r/32);if(1===e)return i(or,32,n).a;n=i(cr,n,g),r=e}}),sr=e(function(n,r){if(r.a){var e=32*r.a,t=ar(i(rr,32,e-1)),u=n?Vn(r.d):r.d,a=i(vr,u,r.a);return o(Xn,ir(r.c)+e,i(fr,5,t*er),a,r.c)}return o(Xn,ir(r.c),er,Zn,r.c)}),lr=a(function(n,r,e,t,u){for(;;){if(0>r)return i(sr,!1,{d:t,a:e/32|0,c:u});var a={$:1,a:f(ur,32,r,n)};n=n,r-=32,e=e,t=i(Gn,a,t),u=u}}),dr=e(function(n,r){if(n>0){var e=n%32;return c(lr,r,n-e-32,n,g,f(ur,e,n-e,r))}return tr}),br=function(n){return!n.$},hr=E,gr=T,$r=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},pr=function(n){return n},mr=M,yr=mr(0),wr=u(function(n,r,e,t){if(t.b){var u=t.a,a=t.b;if(a.b){var c=a.a,v=a.b;if(v.b){var s=v.a,l=v.b;if(l.b){var d=l.b;return i(n,u,i(n,c,i(n,s,i(n,l.a,e>500?f(Qn,n,r,Vn(d)):o(wr,n,r,e+1,d)))))}return i(n,u,i(n,c,i(n,s,r)))}return i(n,u,i(n,c,r))}return i(n,u,r)}return r}),jr=t(function(n,r,e){return o(wr,n,r,0,e)}),kr=e(function(n,r){return f(jr,e(function(r,e){return i(Gn,n(r),e)}),g,r)}),Ar=J,_r=e(function(n,r){return i(Ar,function(r){return mr(n(r))},r)}),Nr=t(function(n,r,e){return i(Ar,function(r){return i(Ar,function(e){return mr(i(n,r,e))},e)},r)}),Er=X,Tr=e(function(n,r){var e=r;return function(n){return R(function(r){r(M(U(n)))})}(i(Ar,Er(n),e))});Q.Task={b:yr,c:t(function(n,r){return i(_r,function(){return 0},(e=i(kr,Tr(n),r),f(jr,Nr(Gn),mr(g),e)));var e}),d:t(function(){return mr(0)}),e:e(function(n,r){return i(_r,n,r)}),f:void 0};var Fr,Lr,zr,xr,Cr=(zr="Task",function(n){return{$:1,k:zr,l:n}}),Ir=e(function(n,r){return Cr(i(_r,n,r))}),Sr=Dn,Or=N,qr=function(n){return{$:3,a:n}},Dr=function(n){return{$:2,a:n}},Br=Z,Gr=e(function(n,r){return{$:0,a:n,b:r}}),Mr=Gr,Rr=R(function(n){n(M(i(Mr,-(new Date).getTimezoneOffset(),g)))}),Jr=function(n){switch(n){case"en-US":return Hn(0);case"pl":return Hn(1);default:return Jn("unsupported localce: "+n)}},Pr=pr,Ur=(Fr=Pr,R(function(n){n(M(Fr(Date.now())))})),Yr=i(Gr,0,g),Hr=A,Wr=Z(g),Kr=Br(g),Qr=e(function(n,r){switch(n.$){case 0:var e=Jr(n.a);return b(e.$?r:h(r,{E:e.a}),Kr);case 1:return b(h(r,{z:n.a}),Kr);case 2:return b(h(r,{N:n.a}),Kr);default:return b(h(r,{F:n.a}),Kr)}}),Vr=function(n){return{$:0,a:n}},Xr=function(n){return{$:1,a:n}},Zr=e(function(n,r){return i(bn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),hn(r))}),ne=vn("br"),re=vn("div"),ee=e(function(n,r){return q(f(Qn,function(n){return e(function(r,e){return e.push(D(n(r))),e})}(n),[],r))}),te=function(n){return n?"pl":"en-US"},ue=q,ae=function(n){var r=n.b;return i(ee,pr,m([ue(te(n.a)),ue(r)]))},ie=e(function(n,r){return f(jr,e(function(r,e){return n(r)?i(Gn,r,e):e}),g,r)}),fe=vn("input"),oe=q,ce=vn("label"),ve=function(n){return vn(function(n){return"script"==n?"p":n}(n))},se=G,le=function(n){return q(f(Qn,e(function(n,r){return f(B,n.a,n.b,r)}),{},n))},de=function(n){return b(n,!0)},be=ln,he=e(function(n,r){return i(be,n,{$:1,a:r})}),ge=_,$e=i(e(function(n,r){return f(jr,ge,r,n)}),m(["target","value"]),Hr),pe=function(n){return i(he,"input",i(gr,de,i(gr,n,$e)))},me=vn("option"),ye=e(function(n,r){return i(dn,function(n){return"innerHTML"==n||"formAction"==n?"data-"+n:n}(n),hn(r))}),we=vn("select"),je=cn,ke=e(function(n,r){return i(dn,n,ue(r))})("value");Lr={Example:{init:Sr({ax:function(n){return b({E:0,G:f(Qn,e(function(n,r){var e=n.b,t=Jr(n.a);return t.$?r:i(Gn,b(t.a,e),r)}),g,n),z:"Carl",F:Pr(0),N:Yr},Br(m([i(Ir,qr,Ur),i(Ir,Dr,Rr)])))},aD:function(){return Wr},aF:Qr,aG:function(n){var r,e,t=(e=i(ie,function(r){return function(n,r){for(var e,t=[],u=d(n,r,0,t);u&&(e=t.pop());u=d(e.a,e.b,0,t));return u}(n.E,r.a)},n.G)).b?{$:0,a:e.a}:Kn;return i(re,g,m([i(ce,g,m([je("Active Locale"),i(we,m([pe(Vr)]),m([i(me,m([ke(te(0))]),m([je("en-US")])),i(me,m([ke(te(1))]),m([je("pl")]))]))])),i(ne,g,g),i(ne,g,g),je("Basic key-value:"),i(ne,g,g),f(ve,"fluent-web",m([i(ye,"messages",t.$?se:i(ee,ae,m([t.a]))),i(Zr,"messageId","hello-no-name")]),g),i(ne,g,g),i(ne,g,g),je("Styled key-value:"),i(ne,g,g),f(ve,"fluent-web",m([i(ye,"messages",t.$?se:i(ee,ae,m([t.a]))),i(Zr,"messageId","sign-in-or-cancel")]),g),i(ne,g,g),i(ne,g,g),je("Today's Date:"),i(ne,g,g),f(ve,"fluent-web",m([i(ye,"messages",t.$?se:i(ee,ae,m([t.a]))),i(Zr,"messageId","today-date"),i(ye,"args",le(m([b("date",oe((r=n.F,r)))])))]),g),i(ne,g,g),i(ne,g,g),je("Message with argument:"),i(ne,g,g),i(fe,m([ke(n.z),pe(Xr)]),g),i(ne,g,g),f(ve,"fluent-web",m([i(ye,"messages",t.$?se:i(ee,ae,m([t.a]))),i(Zr,"messageId","hello"),i(ye,"args",le(m([b("userName",ue(n.z))])))]),g),i(ne,g,g),i(ne,g,g),je("Input localized:"),i(ne,g,g),f(ve,"fluent-web",m([i(ye,"messages",t.$?se:i(ee,ae,m([t.a]))),i(Zr,"messageId","type-name"),i(Zr,"messageTag","input")]),g)]))}})((xr=i(hr,function(n){return i(hr,function(r){return{$:0,a:b(n,r)}},i(Or,1,Hr))},i(Or,0,Hr)),{$:3,b:xr}))(0)}},n.Elm?function n(r,e){for(var t in e)t in r?"init"==t?l(6):n(r[t],e[t]):r[t]=e[t]}(n.Elm,Lr):n.Elm=Lr}(this);
},{}],"Zdfz":[function(require,module,exports) {
"use strict";var e=t(require("@fluent/dedent")),a=require("./Example.elm");function t(e){return e&&e.__esModule?e:{default:e}}const n=e.default`
  hello = Hello, { $userName }!
  hello-no-name = Hello, stranger!
  type-name =
      .placeholder = Your name

  # $date (Date) - Current date, formatted as month and day.
  today-date = Today is { DATETIME($date) }.
  # $date (Date) - Current date, formatted as weekday.
  today-weekday = It's {$date}.

  sign-in-or-cancel = <b>Sign in</b> or <em>cancel</em>.
  clicked-sign-in = You are now signed in.
  clicked-cancel = OK, nevermind.
  `,d=e.default`
  hello = Cześć { $userName }!
  hello-no-name = Witaj nieznajomy!
  type-name =
      .placeholder = Twoje imię

  # $date (Date) - Current date, formatted as month and day.
  today-date = Dziś jest {DATETIME($date)}.

  # Commented out to demonstrate fallback.
  # $date (Date) - Current date, formatted as weekday.
  # today-weekday = Jest {$date}.

  sign-in-or-cancel = <b>Zaloguj</b> albo <em>anuluj</em>.
  clicked-sign-in = Brawo!
  clicked-cancel = OK, nieważne.
  `;a.Elm.Example.init({node:document.getElementById("root"),flags:[["en-US",n],["pl",d]]});
},{"@fluent/dedent":"ZBJB","./Example.elm":"Y9sf"}]},{},["Zdfz"], null)
//# sourceMappingURL=/example.561d11b4.js.map