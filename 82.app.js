(()=>{var e,r,t,n,o={12465:(e,r,t)=>{"use strict";var n=t(52322),o=t(13019),i=t(90758);const c=["children"];function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const u=e=>{let{node:r}=e;var t;if(!r)return null;const i="string"==typeof r.children?r.children:null===(t=r.children)||void 0===t?void 0:t.map(((e,r)=>(0,n.jsx)(u,{node:e},r)));switch(r.type){case"View":return(0,n.jsx)(o.G7,l(l({},r),{},{children:i}));case"Text":return(0,n.jsx)(o.xv,l(l({},r),{},{children:i}));case"Link":return(0,n.jsx)(o.rU,l(l({},r),{},{children:i}));case"Image":return(0,n.jsx)(o.Ee,l({},r));case"Svg":return(0,n.jsx)(o.ny,l(l({},r),{},{children:i}));case"Path":{const{children:e}=r,t=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(r,c);return(0,n.jsx)(o.y$,l({},t))}}},p=e=>{let{nodes:r,pageSize:t}=e;return(0,n.jsx)(o.BB,{children:(0,n.jsx)(o.T3,{size:t,style:{paddingVertical:35,paddingHorizontal:35,lineHeight:1.5,fontSize:12,gap:14},children:r.map(((e,r)=>(0,n.jsx)(u,{node:e},r)))})})};(0,i.Jj)({renderPDF:(e,r)=>(0,o.eA)((0,n.jsx)(p,{pageSize:r,nodes:e})).toBlob()})},52111:()=>{},5315:()=>{}},i={};function c(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={exports:{}};return o[e].call(t.exports,t,t.exports,c),t.exports}c.m=o,c.x=()=>{var e=c.O(void 0,[283,291],(()=>c(12465)));return c.O(e)},e=[],c.O=(r,t,n,o)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,n,o]=e[u],a=!0,l=0;l<t.length;l++)(!1&o||i>=o)&&Object.keys(c.O).every((e=>c.O[e](t[l])))?t.splice(l--,1):(a=!1,o<i&&(i=o));if(a){e.splice(u--,1);var s=n();void 0!==s&&(r=s)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,n,o]},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var i={};r=r||[null,t({}),t([]),t(t)];for(var a=2&n&&e;"object"==typeof a&&!~r.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((r=>i[r]=()=>e[r]));return i.default=()=>e,c.d(o,i),o},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>"./"+e+".app.js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var r=c.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{var e={82:1};c.f.i=(r,t)=>{e[r]||importScripts(c.p+c.u(r))};var r=self.webpackChunk_standardnotes_web=self.webpackChunk_standardnotes_web||[],t=r.push.bind(r);r.push=r=>{var[n,o,i]=r;for(var a in o)c.o(o,a)&&(c.m[a]=o[a]);for(i&&i(c);n.length;)e[n.pop()]=1;t(r)}})(),n=c.x,c.x=()=>Promise.all([c.e(283),c.e(291)]).then(n),c.x()})();
//# sourceMappingURL=82.app.js.map