(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{368:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/gameboy-css",function(){return t(4493)}])},4493:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var n=t(5893),i=t(9660),a=t(9521),o=t(867);function s(){let e=(0,a.Z)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{info:e,children:(0,n.jsxs)("section",{children:[(0,n.jsxs)("p",{children:["I thought that would be great to have a Gameboy frame for the ",(0,n.jsx)(i.Z,{href:"https://mateus.digital/el_jamon_volador",children:"El Jamon Volador"})," page, and I saw it as opportunity to start to get into making art with CSS."]}),(0,n.jsx)("p",{children:"This is my very-first project and I'm very happy with it :)"})]})})})}},867:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(5893),i=t(816),a=t(7642),o=t(9660),s=t(2142);function c(e){let{info:r,children:t}=e,c=r.name,l=r.tech.join(", "),h=r.year,u="https://github.com/mateusdigital/".concat(c);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Z,{page_id:"projects",children:(0,n.jsxs)("section",{className:"projectDetailPageContainer",children:[(0,n.jsx)(a.Z,{info:r}),(0,n.jsx)(s.Z,{info:r}),t,(0,n.jsxs)("ul",{children:[(0,n.jsx)("b",{children:"General Info:"}),(0,n.jsx)("br",{}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"Tech:"})," ",l]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"Year:"})," ",h]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"License:"})," ","GPLv3"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"Source Code:"})," ",(0,n.jsx)(o.Z,{href:u,children:u})]})]})]})})})}},9521:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(1163),i=t(1221),a=t.n(i);function o(){let e=(0,n.useRouter)(),{pathname:r}=e,t=r.substring(r.lastIndexOf("/")+1),i=a()(t);return i}},7642:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(5893);function i(e){let{info:r}=e,t=r.type,i=null,a=r.name;if("professional"==t){let e=r.youtube_video_id;i=function(e){let{video_id:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(r,"?controls=0&autoplay=1&mute=1"),title:"YouTube video player",frameBorder:"0",allowFullScreen:!0})})}({video_id:e})}else"demo"==t?(console.log(r.tech),i=-1!=r.tech.indexOf("demolib")?function(e){let{name:r}=e;return r=r.trim(),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"proj-canvas-container",children:[(0,n.jsx)("canvas",{id:"projCanvas","data-project-name":r}),(0,n.jsx)("script",{src:"/modules/demolib_loader/source/loader.js"}),(0,n.jsx)("script",{src:"/src/main.js",defer:!0})]})})}({name:a}):function(e){let{name:r}=e;r=r.trim();let t="https://mateus.digital/".concat(r);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"proj-canvas-container",children:(0,n.jsx)("iframe",{src:t})})})}({name:a})):("personal"==t||"old"==t)&&(i=function(e){let{info:r}=e,t=r.name,i=r.type;if(r.is_playable_on_canvas)return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"proj-canvas-container",children:[(0,n.jsx)("iframe",{id:"gameIFrame","data-project-name":t}),(0,n.jsx)("script",{src:"/src/load-game-iframe.js",defer:!0})]})});let a="/img/".concat(i,"/").concat(t,".png");return(0,n.jsx)("img",{className:"project-detail-personal-game-img",src:a})}({info:r}));return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"projectDetailPageCanvasContainer",children:i})})}t(1864)},2142:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(5893);function i(e){let{info:r}=e,t=r.title;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("header",{className:"project-detail-header",children:(0,n.jsx)("h1",{children:t})})})}},1864:function(e){!function(){"use strict";var r={114:function(e){function r(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function t(e,r){for(var t,n="",i=0,a=-1,o=0,s=0;s<=e.length;++s){if(s<e.length)t=e.charCodeAt(s);else if(47===t)break;else t=47;if(47===t){if(a===s-1||1===o);else if(a!==s-1&&2===o){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",i=0):i=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),a=s,o=0;continue}}else if(2===n.length||1===n.length){n="",i=0,a=s,o=0;continue}}r&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(a+1,s):n=e.slice(a+1,s),i=s-a-1;a=s,o=0}else 46===t&&-1!==o?++o:o=-1}return n}var n={resolve:function(){for(var e,n,i="",a=!1,o=arguments.length-1;o>=-1&&!a;o--)o>=0?n=arguments[o]:(void 0===e&&(e=""),n=e),r(n),0!==n.length&&(i=n+"/"+i,a=47===n.charCodeAt(0));return(i=t(i,!a),a)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(r(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=t(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n)?"/"+e:e},isAbsolute:function(e){return r(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var i=arguments[t];r(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,t){if(r(e),r(t),e===t||(e=n.resolve(e))===(t=n.resolve(t)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var a=e.length,o=a-i,s=1;s<t.length&&47===t.charCodeAt(s);++s);for(var c=t.length-s,l=o<c?o:c,h=-1,u=0;u<=l;++u){if(u===l){if(c>l){if(47===t.charCodeAt(s+u))return t.slice(s+u+1);if(0===u)return t.slice(s+u)}else o>l&&(47===e.charCodeAt(i+u)?h=u:0===u&&(h=0));break}var f=e.charCodeAt(i+u);if(f!==t.charCodeAt(s+u))break;47===f&&(h=u)}var d="";for(u=i+h+1;u<=a;++u)(u===a||47===e.charCodeAt(u))&&(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(s+h):(s+=h,47===t.charCodeAt(s)&&++s,t.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(r(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,a=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!a){i=o;break}}else a=!1;return -1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw TypeError('"ext" argument must be a string');r(e);var n,i=0,a=-1,o=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var s=t.length-1,c=-1;for(n=e.length-1;n>=0;--n){var l=e.charCodeAt(n);if(47===l){if(!o){i=n+1;break}}else -1===c&&(o=!1,c=n+1),s>=0&&(l===t.charCodeAt(s)?-1==--s&&(a=n):(s=-1,a=c))}return i===a?a=c:-1===a&&(a=e.length),e.slice(i,a)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!o){i=n+1;break}}else -1===a&&(o=!1,a=n+1);return -1===a?"":e.slice(i,a)},extname:function(e){r(e);for(var t=-1,n=0,i=-1,a=!0,o=0,s=e.length-1;s>=0;--s){var c=e.charCodeAt(s);if(47===c){if(!a){n=s+1;break}continue}-1===i&&(a=!1,i=s+1),46===c?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1)}return -1===t||-1===i||0===o||1===o&&t===i-1&&t===n+1?"":e.slice(t,i)},format:function(e){var r,t;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return r=e.dir||e.root,t=e.base||(e.name||"")+(e.ext||""),r?r===e.root?r+t:r+"/"+t:t},parse:function(e){r(e);var t,n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var i=e.charCodeAt(0),a=47===i;a?(n.root="/",t=1):t=0;for(var o=-1,s=0,c=-1,l=!0,h=e.length-1,u=0;h>=t;--h){if(47===(i=e.charCodeAt(h))){if(!l){s=h+1;break}continue}-1===c&&(l=!1,c=h+1),46===i?-1===o?o=h:1!==u&&(u=1):-1!==o&&(u=-1)}return -1===o||-1===c||0===u||1===u&&o===c-1&&o===s+1?-1!==c&&(0===s&&a?n.base=n.name=e.slice(1,c):n.base=n.name=e.slice(s,c)):(0===s&&a?(n.name=e.slice(1,o),n.base=e.slice(1,c)):(n.name=e.slice(s,o),n.base=e.slice(s,c)),n.ext=e.slice(o,c)),s>0?n.dir=e.slice(0,s-1):a&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var a=t[e]={exports:{}},o=!0;try{r[e](a,a.exports,n),o=!1}finally{o&&delete t[e]}return a.exports}n.ab="//";var i=n(114);e.exports=i}()},1163:function(e,r,t){e.exports=t(880)}},function(e){e.O(0,[774,996,568,888,179],function(){return e(e.s=368)}),_N_E=e.O()}]);