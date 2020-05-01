!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-base64-downloader",["React"],t):"object"==typeof exports?exports["react-base64-downloader"]=t(require("react")):e["react-base64-downloader"]=t(e.React)}(window,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,t,n){(function(n){var o,r,a;r=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){i(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(e,n,i){var c=a.URL||a.webkitURL,s=document.createElement("a");n=n||e.name||"download",s.download=n,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?r(s):o(s.href)?t(e,n,i):r(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){r(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,a),n);else if(o(e))t(e,n,a);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(e,n,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var i="application/octet-stream"===e.type,c=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&c)&&"object"==typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},u.readAsDataURL(e)}else{var l=a.URL||a.webkitURL,f=l.createObjectURL(e);r?r.location=f:location.href=f,r=null,setTimeout((function(){l.revokeObjectURL(f)}),4e4)}});a.saveAs=i.saveAs=i,e.exports=i})?o.apply(t,r):o)||(e.exports=a)}).call(this,n(7))},function(e,t,n){var o,r,a;r=[],void 0===(a="function"==typeof(o=function(){"use strict";return function(e,t,n){t=t||"",n=n||512;for(var o=atob(e),r=[],a=0;a<o.length;a+=n){for(var i=o.slice(a,a+n),c=new Array(i.length),s=0;s<i.length;s++)c[s]=i.charCodeAt(s);var u=new Uint8Array(c);r.push(u)}return new Blob(r,{type:t})}})?o.apply(t,r):o)||(e.exports=a)},function(e,t,n){"use strict";n.r(t),n.d(t,"defaultDownloadName",(function(){return p})),n.d(t,"triggerBase64Download",(function(){return y})),n.d(t,"getExtFromBase64",(function(){return b}));var o=n(1),r=n.n(o),a=n(0),i=n.n(a),c=n(2),s=n(3);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg"},f={png:"data:".concat(l.png,";base64"),jpeg:"data:".concat(l.jpeg,";base64"),jpg:"data:".concat(l.jpg,";base64")},p="download",d=function(e){var t=e.base64,n=e.children,o=e.downloadName,a=e.onDownloadSuccess,i=e.onDownloadError,c=e.Tag,s=e.className,l=e.style,f=e.extraAttributes;return r.a.createElement(c,u({},f,{onClick:function(){try{y(t,o),a&&a({base64:t})}catch(e){console.error(e),i&&i(e)}},className:s,style:l}),n)};function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,n=b(e),o=f[n],r=l[n],a=e.replace("".concat(o,","),""),i=s(a,r),u=new File([i],"".concat(t,".").concat(n),{type:o});c.saveAs(u)}function b(e){var t;if("string"==typeof e&&(t=Object.keys(f).find((function(t){return 0===e.indexOf(f[t])}))),t)return t;throw new Error("props.base64 on <Base64Downloader/> has invalid or undefined extension. expected ".concat(Object.keys(l).join(", ")))}d.defaultProps={className:"",style:{},downloadName:p,Tag:"button",extraAttributes:{}},d.propTypes={base64:i.a.string.isRequired,children:i.a.oneOfType([i.a.node,i.a.string]).isRequired,downloadName:i.a.string,onDownloadSuccess:i.a.func,onDownloadError:i.a.func,Tag:i.a.string,className:i.a.string,style:i.a.object,extraAttributes:i.a.object},t.default=d},function(e,t,n){"use strict";var o=n(6);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])}));