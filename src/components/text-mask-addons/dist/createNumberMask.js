!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([m]).concat(h.split(l));var o=e.lastIndexOf(w),c=o!==-1,u=e[0]===d&&B,a=void 0,b=void 0,g=void 0;if(c&&(N||_)?(a=e.slice(e.slice(0,P)===y?P:0,o),b=e.slice(o+1,t),b=n(b.replace(s,l))):a=e.slice(0,P)===y?e.slice(P):e,I&&("undefined"==typeof I?"undefined":r(I))===p){var S=(a.match(new RegExp(""+j,"g"))||[]).length;a=a.slice(0,I+S*R)}return a=a.replace(s,l),a=x?i(a,j):a,g=n(a),(c&&N||_===!0)&&(e[o-1]!==w&&g.push(v),g.push(w,v),b&&(("undefined"==typeof O?"undefined":r(O))===p&&(b=b.slice(0,O)),g=g.concat(b)),_===!0&&e[o-1]===w&&g.push(m)),P>0&&(g=y.split(l).concat(g)),u&&(g.length===P&&g.push(m),g=[f].concat(g)),h.length>0&&(g=g.concat(h.split(l))),g}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,h=void 0===b?l:b,g=t.includeThousandsSeparator,x=void 0===g||g,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,M=t.allowDecimal,N=void 0!==M&&M,k=t.decimalSymbol,w=void 0===k?a:k,D=t.decimalLimit,O=void 0===D?2:D,L=t.requireDecimal,_=void 0!==L&&L,q=t.allowNegative,B=void 0!==q&&q,E=t.integerLimit,I=void 0===E?null:E,P=y&&y.length||0,R=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return m.test(e)?m:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",d="-",f=/-/,s=/\D+/g,p="number",m=/\d/,v="[]"}])});