(self.webpackChunksite=self.webpackChunksite||[]).push([[9858],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(n),f=l,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1072:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),l={container:"container_31k_",webpack:"webpack_1p3M",vite:"vite_KQcn"};var o=function(e){var t=e.list;return r.createElement("span",{className:l.container},["webpack","vite"].map((function(e){return r.createElement("img",{title:e,className:l[e],key:e,src:"/img/svg/"+(t.includes(e)?e:e+"-gray")+".svg"})})))}},8709:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(2122),l=n(9756),o=(n(7294),n(3905)),i=n(1072),a=["components"],c={title:"moment-locales",order:1},u={unversionedId:"plugin/list/moment-locales",id:"plugin/list/moment-locales",isDocsHomePage:!1,title:"moment-locales",description:"build-plugin-moment-locales \u5c06\u5bf9 moment \u4f9d\u8d56\u7684\u4f7f\u7528\u8fdb\u884c\u4f18\u5316\uff1a",source:"@site/docs/plugin/list/moment-locales.md",sourceDirName:"plugin/list",slug:"/plugin/list/moment-locales",permalink:"/docs/plugin/list/moment-locales",editUrl:"https://github.com/ice-lab/site/edit/master/docs/plugin/list/moment-locales.md",version:"current",frontMatter:{title:"moment-locales",order:1},sidebar:"plugin",next:{title:"fusion",permalink:"/docs/plugin/list/fusion"}},s=[{value:"Install",id:"install",children:[]},{value:"Options",id:"options",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{list:["webpack"],mdxType:"Support"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"build-plugin-moment-locales")," \u5c06\u5bf9 moment \u4f9d\u8d56\u7684\u4f7f\u7528\u8fdb\u884c\u4f18\u5316\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f18\u5316 moment \u8bed\u8a00\u5305\u52a0\u8f7d"),(0,o.kt)("li",{parentName:"ul"},"\u6839\u636e\u8bbe\u7f6e\u81ea\u52a8\u52a0\u8f7d\u5bf9\u5e94\u8bed\u8a00\u5305")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i --save-dev build-plugin-moment-locales\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"locales"),"\uff1a\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"li"},"String | Array"),"\uff0c\u9700\u8981\u52a0\u8f7d\u7684\u591a\u8bed\u8a00\u5305")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    [\n      "build-plugin-moment-locales",\n      {\n        "locales": ["zh-cn", "en-au"]\n      }\n    ]\n  ]\n}\n')))}m.isMDXComponent=!0}}]);