!function e(t,n,o){function i(a,c){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!c&&u)return u(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var s=n[a]={exports:{}};t[a][0].call(s.exports,(function(e){return i(t[a][1][e]||e)}),s,s.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){"use strict";document.addEventListener("DOMContentLoaded",(function(e){var t,n,o,i,r,a,c=!1,u=!0;(t=new ComponentRelay({initialPermissions:[{name:"stream-context-item"}],targetWindow:window,onReady:function(){var e,r=t.platform;r&&document.body.classList.add(r),(a=CodeMirror.fromTextArea(document.getElementById("code"),{mode:"gfm",lineWrapping:!0,extraKeys:{"Alt-F":"findPersistent"},inputStyle:"mobile"===(null!==(e=t.environment)&&void 0!==e?e:"web")?"textarea":"contenteditable"})).setSize(void 0,"100%"),a.on("change",(function(){c||function(){if(n){var e=n;t.saveItemWithPresave(e,(function(){i=a.getValue(),e.content.text=i,e.clientData=o,e.content.preview_plain=null,e.content.preview_html=null}))}}()})),a.setOption("styleSelectedText",!t.isMobile)},handleRequestForContentHeight:function(){}})).streamContextItem((function(e){!function(e){e.uuid!==r&&(i=null,u=!0,r=e.uuid),n=e,e.isMetadataUpdate||(o=e.clientData,a&&(e.content.text!==i&&(c=!0,a.getDoc().setValue(n.content.text),c=!1),u&&(u=!1,a.getDoc().clearHistory()),a.setOption("spellcheck",n.content.spellcheck)))}(e)}))}))},{}]},{},[1]);