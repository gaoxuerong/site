(self.webpackChunksite=self.webpackChunksite||[]).push([[6052],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7918:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a={badge:"badge_1IBP",error:"error_3kJW"};var i=function(e){var t=e.type,r=void 0===t?"error":t,i=e.text;return n.createElement("div",{className:a.badge+" "+a[r]},i)}},1072:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a={container:"container_31k_",webpack:"webpack_1p3M",vite:"vite_KQcn"};var i=function(e){var t=e.list;return n.createElement("span",{className:a.container},["webpack","vite"].map((function(e){return n.createElement("img",{title:e,className:a[e],key:e,src:"/img/svg/"+(t.includes(e)?e:e+"-gray")+".svg"})})))}},114:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),l=r(1072),o=r(7918),c=["components"],p={title:"Vite \u6a21\u5f0f",order:4},u={unversionedId:"guide/basic/vite",id:"guide/basic/vite",isDocsHomePage:!1,title:"Vite \u6a21\u5f0f",description:"Vite \u662f\u4e00\u79cd\u65b0\u578b\u7684\u524d\u7aef\u6784\u5efa\u5de5\u5177\uff0c\u4e0e Webpack \u76f8\u6bd4\uff0cVite \u57fa\u4e8e\u6d4f\u89c8\u5668\u539f\u751f\u7684 ES Module \u89c4\u8303\u80fd\u591f\u8ba9\u8c03\u8bd5\u670d\u52a1\u4ee5\u53ca\u70ed\u66f4\u65b0\u66f4\u5feb\uff0c\u63d0\u5347\u5f00\u53d1\u8005\u4f53\u9a8c\u3002icejs 2.0 \u7248\u672c\u5f00\u59cb\u540c\u65f6\u652f\u6301 Webpack@5 \u4ee5\u53ca Vite@2 \u4e24\u79cd\u6a21\u5f0f\uff0c\u5f00\u53d1\u8005\u6309\u9700\u9009\u62e9\uff0c\u5bf9\u4e8e\u589e\u91cf\u4e1a\u52a1\u6211\u4eec\u66f4\u63a8\u8350\u91c7\u7528 Vite \u7684\u6784\u5efa\u6a21\u5f0f\u3002",source:"@site/docs/guide/basic/vite.md",sourceDirName:"guide/basic",slug:"/guide/basic/vite",permalink:"/docs/guide/basic/vite",editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/basic/vite.md",version:"current",frontMatter:{title:"Vite \u6a21\u5f0f",order:4},sidebar:"docs",previous:{title:"\u5de5\u7a0b\u914d\u7f6e",permalink:"/docs/guide/basic/build"},next:{title:"\u8def\u7531\u914d\u7f6e",permalink:"/docs/guide/basic/router"}},s=[{value:"\u5feb\u901f\u4f53\u9a8c",id:"\u5feb\u901f\u4f53\u9a8c",children:[]},{value:"\u5f00\u542f Vite \u6a21\u5f0f",id:"\u5f00\u542f-vite-\u6a21\u5f0f",children:[]},{value:"\u529f\u80fd\u5b8c\u5907\u5ea6",id:"\u529f\u80fd\u5b8c\u5907\u5ea6",children:[]},{value:"FAQ",id:"faq",children:[]}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{text:"2.0.0",mdxType:"Badge"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," \u662f\u4e00\u79cd\u65b0\u578b\u7684\u524d\u7aef\u6784\u5efa\u5de5\u5177\uff0c\u4e0e Webpack \u76f8\u6bd4\uff0cVite \u57fa\u4e8e\u6d4f\u89c8\u5668\u539f\u751f\u7684 ES Module \u89c4\u8303\u80fd\u591f\u8ba9\u8c03\u8bd5\u670d\u52a1\u4ee5\u53ca\u70ed\u66f4\u65b0\u66f4\u5feb\uff0c\u63d0\u5347\u5f00\u53d1\u8005\u4f53\u9a8c\u3002icejs 2.0 \u7248\u672c\u5f00\u59cb\u540c\u65f6\u652f\u6301 Webpack@5 \u4ee5\u53ca Vite@2 \u4e24\u79cd\u6a21\u5f0f\uff0c\u5f00\u53d1\u8005\u6309\u9700\u9009\u62e9\uff0c\u5bf9\u4e8e\u589e\u91cf\u4e1a\u52a1\u6211\u4eec\u66f4\u63a8\u8350\u91c7\u7528 Vite \u7684\u6784\u5efa\u6a21\u5f0f\u3002"),(0,i.kt)("h2",{id:"\u5feb\u901f\u4f53\u9a8c"},"\u5feb\u901f\u4f53\u9a8c"),(0,i.kt)("p",null,"\u9664 Fusion Design Pro \u4ee5\u5916\uff0c\u5176\u4ed6\u5b98\u65b9\u811a\u624b\u67b6\u5747\u5df2\u7ecf\u9ed8\u8ba4\u5207\u6362\u5230 Vite \u6a21\u5f0f\uff0c\u6309\u7167 ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/start"},"\u5feb\u901f\u5f00\u59cb")," \u76f4\u63a5\u4f7f\u7528\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init ice <projectName>\n# or\n$ yarn create ice <projectName>\n")),(0,i.kt)("h2",{id:"\u5f00\u542f-vite-\u6a21\u5f0f"},"\u5f00\u542f Vite \u6a21\u5f0f"),(0,i.kt)("p",null,"\u5728 build.json \u4e2d\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e\u542f\u7528 Vite \u6a21\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vite": true\n}\n')),(0,i.kt)("h2",{id:"\u529f\u80fd\u5b8c\u5907\u5ea6"},"\u529f\u80fd\u5b8c\u5907\u5ea6"),(0,i.kt)("p",null,"icejs \u63d0\u4f9b\u4e86\u975e\u5e38\u5b8c\u5907\u7684\u529f\u80fd\uff0c\u76ee\u524d\u90e8\u5206\u80fd\u529b\u5c1a\u672a\u652f\u6301 Vite \u6a21\u5f0f\uff0c\u5177\u4f53\u8bf7\u53c2\u9605\u4ee5\u4e0b\u8868\u683c\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\u70b9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5ea6"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Severless \u4e00\u4f53\u5316"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.Z,{list:["webpack","vite"],mdxType:"Support"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5fae\u524d\u7aef"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.Z,{list:["webpack"],mdxType:"Support"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SSR&SSG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.Z,{list:["webpack"],mdxType:"Support"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPA"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.Z,{list:["webpack","vite"],mdxType:"Support"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MPA"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.Z,{list:["webpack","vite"],mdxType:"Support"}))))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h4",{id:"\u5982\u4f55\u89e3\u51b3-require-is-not-defined"},"\u5982\u4f55\u89e3\u51b3 require is not defined"),(0,i.kt)("p",null,"Vite \u6784\u5efa\u6a21\u5f0f\u5728\u5f00\u53d1\u9636\u6bb5\u57fa\u4e8e\u6d4f\u89c8\u5668\u52a0\u8f7d ESM \u6a21\u5757\uff0c\u4e0d\u652f\u6301 require \u8bed\u6cd5\u7684\u5bfc\u5165\u3002\u542f\u7528 Vite \u6a21\u5f0f\u9700\u8981\u786e\u4fdd\u6e90\u7801\u6216\u4e09\u65b9\u4f9d\u8d56\u7b26\u5408 ESM \u7684\u89c4\u8303\u3002"),(0,i.kt)("h4",{id:"\u5982\u4f55\u517c\u5bb9-webpack-\u6784\u5efa\u6a21\u5f0f\u4e0b-inline-loader-\u7684\u5bfc\u5165"},"\u5982\u4f55\u517c\u5bb9 Webpack \u6784\u5efa\u6a21\u5f0f\u4e0b inline loader \u7684\u5bfc\u5165"),(0,i.kt)("p",null,"\u4ee3\u7801\u4e2d\u5b58\u5728 inline loader \u7684\u8bed\u6cd5\uff0c\u5728 Vite \u6784\u5efa\u6a21\u5f0f\u4e0b\u5c06\u4f1a\u5931\u6548\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Styles from '!style-loader!css-loader?modules!./styles.css';\n")),(0,i.kt)("p",null,"\u79fb\u9664 inline loader \u5199\u6cd5\uff0c\u5927\u90e8\u5206\u9700\u6c42\u53ef\u4ee5\u88ab\u5185\u7f6e\u7684\u5de5\u7a0b\u80fd\u529b\u5904\u7406\uff0c\u5b9a\u5236 loader \u80fd\u529b\u63a8\u8350\u7ed3\u5408 Vite \u63d2\u4ef6\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/api-plugin.html#transforming-custom-file-types"},"transform")," \u8fdb\u884c\u5904\u3002"))}m.isMDXComponent=!0}}]);