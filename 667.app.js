"use strict";(self.webpackChunk_standardnotes_web=self.webpackChunk_standardnotes_web||[]).push([[667],{48667:function(e,r){var s,g;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,s=function(e){var r,s;if(!(null===(s=null===(r=globalThis.chrome)||void 0===r?void 0:r.runtime)||void 0===s?void 0:s.id))throw new Error("This script should only be loaded in a browser extension.");if(void 0===globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const r="The message port closed before a response was received.",s=e=>{const s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(s).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class g extends WeakMap{constructor(e,r=void 0){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=(r,s)=>(...g)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):s.singleCallbackArg||g.length<=1&&!1!==s.singleCallbackArg?r.resolve(g[0]):r.resolve(g)},n=e=>1==e?"argument":"arguments",m=(e,r,s)=>new Proxy(r,{apply:(r,g,a)=>s.call(g,e,...a)});let t=Function.call.bind(Object.prototype.hasOwnProperty);const A=(e,r={},s={})=>{let g=Object.create(null),i={has:(r,s)=>s in e||s in g,get(i,o,l){if(o in g)return g[o];if(!(o in e))return;let x=e[o];if("function"==typeof x)if("function"==typeof r[o])x=m(e,e[o],r[o]);else if(t(s,o)){let r=((e,r)=>function(s,...g){if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${n(r.minArgs)} for ${e}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${n(r.maxArgs)} for ${e}(), got ${g.length}`);return new Promise(((n,m)=>{if(r.fallbackToNoCallback)try{s[e](...g,a({resolve:n,reject:m},r))}catch(a){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),s[e](...g),r.fallbackToNoCallback=!1,r.noCallback=!0,n()}else r.noCallback?(s[e](...g),n()):s[e](...g,a({resolve:n,reject:m},r))}))})(o,s[o]);x=m(e,e[o],r)}else x=x.bind(e);else if("object"==typeof x&&null!==x&&(t(r,o)||t(s,o)))x=A(x,r[o],s[o]);else{if(!t(s,"*"))return Object.defineProperty(g,o,{configurable:!0,enumerable:!0,get:()=>e[o],set(r){e[o]=r}}),x;x=A(x,r[o],s["*"])}return g[o]=x,x},set:(r,s,a,n)=>(s in g?g[s]=a:e[s]=a,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(g,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(g,r)},o=Object.create(e);return new Proxy(o,i)},i=e=>({addListener(r,s,...g){r.addListener(e.get(s),...g)},hasListener:(r,s)=>r.hasListener(e.get(s)),removeListener(r,s){r.removeListener(e.get(s))}}),o=new g((e=>"function"!=typeof e?e:function(r){const s=A(r,{},{getContent:{minArgs:0,maxArgs:0}});e(s)})),l=new g((e=>"function"!=typeof e?e:function(r,s,g){let a,n,m=!1,t=new Promise((e=>{a=function(r){m=!0,e(r)}}));try{n=e(r,s,a)}catch(e){n=Promise.reject(e)}const A=!0!==n&&((i=n)&&"object"==typeof i&&"function"==typeof i.then);var i;if(!0!==n&&!A&&!m)return!1;return(A?n:t).then((e=>{g(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",g({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)})),!0})),x=({reject:s,resolve:g},a)=>{e.runtime.lastError?e.runtime.lastError.message===r?g():s(new Error(e.runtime.lastError.message)):a&&a.__mozWebExtensionPolyfillReject__?s(new Error(a.message)):g(a)},c=(e,r,s,...g)=>{if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${n(r.minArgs)} for ${e}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${n(r.maxArgs)} for ${e}(), got ${g.length}`);return new Promise(((e,r)=>{const a=x.bind(null,{resolve:e,reject:r});g.push(a),s.sendMessage(...g)}))},d={devtools:{network:{onRequestFinished:i(o)}},runtime:{onMessage:i(l),onMessageExternal:i(l),sendMessage:c.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:c.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},u={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":u},services:{"*":u},websites:{"*":u}},A(e,d,s)};e.exports=s(chrome)}else e.exports=globalThis.browser},void 0===(g=s.apply(r,[e]))||(e.exports=g)}}]);
//# sourceMappingURL=667.app.js.map