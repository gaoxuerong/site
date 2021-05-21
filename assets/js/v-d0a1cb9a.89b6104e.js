(self.webpackChunksite=self.webpackChunksite||[]).push([[3812],{1258:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-d0a1cb9a",path:"/guide/basic/structure.html",title:"目录结构",lang:"zh-CN",frontmatter:{title:"目录结构",order:2},excerpt:"",headers:[],filePathRelative:"guide/basic/structure.md",git:{updatedTime:1621568448e3,contributors:[]}}},6145:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>E});var e=a(6252);const l=(0,e.uE)('<p>icejs 的默认应用目录架构提供了良好的代码分层结构，适用于开发或大或小的应用，约定的目录结构如下：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>├── .ice/ # 运行时生成的临时目录\n├── build/ # 构建产物目录\n├── mock/ # 本地模拟数据\n│ ├── index.js\n├── public/\n│ ├── index.html # 应用入口 HTML\n│ └── favicon.png # Favicon\n├── src/ # 源码\n│ ├── components/ # 自定义业务组件\n│ ├── layouts/ # 布局组件\n│ ├── pages/ # 页面\n│ ├── models/ # 应用级数据状态\n│ ├── global.scss # 全局样式\n│ ├── config.ts # 环境配置\n│ ├── routes.ts # 路由配置\n│ └── app.ts # 应用入口\n├── build.json\n├── package.json\n└── tsconfig.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="ice"><a class="header-anchor" href="#ice">#</a> .ice/</h4><p>运行 icejs 项目时默认生成的临时目录，该目录不需要进行 git 提交。</p><h4 id="build"><a class="header-anchor" href="#build">#</a> build/</h4><p>运行 <code>npm run build</code> 后的构建产物目录。</p><h4 id="mock"><a class="header-anchor" href="#mock">#</a> mock/</h4>',7),r=(0,e.Uk)("本地模拟数据的目录。"),c=(0,e.Uk)("详见"),i=(0,e.uE)('<h4 id="public"><a class="header-anchor" href="#public">#</a> public/</h4><p>静态资源目录，默认包含 <code>index.html</code> 和 <code>favicon.png</code>。</p><h4 id="src"><a class="header-anchor" href="#src">#</a> src/</h4><p>源码目录</p><h5 id="components"><a class="header-anchor" href="#components">#</a> components/</h5><p>项目通用的组件目录，推荐的目录形式如下：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Guide/\n├── index.tsx\n├── index.module.scss\n└── <span class="token bold"><span class="token punctuation">**</span><span class="token content">tests</span><span class="token punctuation">**</span></span> # 就近测试用例\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="layouts"><a class="header-anchor" href="#layouts">#</a> layouts/</h5><p>项目的布局文件目录，布局通常包含导航配置，布局组件，样式三部分，推荐的目录形式如下：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>BasicLayout/\n├── menuConfig.ts # 布局对应的菜单配置\n├── index.tsx\n└── index.module.scss\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="models"><a class="header-anchor" href="#models">#</a> models/</h5>',11),p=(0,e.Uk)("项目的全局数据模型目录，通常包含多个 model 文件，推荐的目录形式如下。"),d=(0,e.Uk)("详见"),o=(0,e.uE)('<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>models/\n├── foo.ts\n└── bar.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="pages"><a class="header-anchor" href="#pages">#</a> pages/</h5><p>项目的页面文件目录，页面通常包含数据模型，页面组件、样式三部分，推荐的目录形式如下。</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Home/ # Home 页面\n├── model.ts # 页面级数据状态\n├── index.tsx # 页面入口\n└── index.module.scss # 页面样式文件\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="app-ts"><a class="header-anchor" href="#app-ts">#</a> app.ts</h5>',5),u=(0,e.Uk)("项目的入口文件，用于对应用进行全局配置，包括路由、运行环境、请求、日志等。"),m=(0,e.Uk)("详见"),t=(0,e.Wm)("h5",{id:"config-ts"},[(0,e.Wm)("a",{class:"header-anchor",href:"#config-ts"},"#"),(0,e.Uk)(" config.ts")],-1),b=(0,e.Uk)("项目的环境配置，用于根据不同环境进行区分配置。"),h=(0,e.Uk)("详见"),g=(0,e.Wm)("h5",{id:"global-scss"},[(0,e.Wm)("a",{class:"header-anchor",href:"#global-scss"},"#"),(0,e.Uk)(" global.scss")],-1),k=(0,e.Uk)("全局的样式配置，框架默认会引入该文件。"),f=(0,e.Uk)("详见"),W=(0,e.Wm)("h5",{id:"routes-ts"},[(0,e.Wm)("a",{class:"header-anchor",href:"#routes-ts"},"#"),(0,e.Uk)(" routes.ts")],-1),v=(0,e.Uk)("应用的路由配置文件。"),w=(0,e.Uk)("详见"),U=(0,e.Wm)("h4",{id:"build-json"},[(0,e.Wm)("a",{class:"header-anchor",href:"#build-json"},"#"),(0,e.Uk)(" build.json")],-1),x=(0,e.Uk)("应用的工程配置文件。"),j=(0,e.Uk)("详见"),y=(0,e.Wm)("h4",{id:"package-json"},[(0,e.Wm)("a",{class:"header-anchor",href:"#package-json"},"#"),(0,e.Uk)(" package.json")],-1),_=(0,e.Wm)("p",null,"应用所需要的各种模块，以及配置信息（比如名称、版本、许可证等元数据）。",-1),C=(0,e.Wm)("h4",{id:"tsconfig-json"},[(0,e.Wm)("a",{class:"header-anchor",href:"#tsconfig-json"},"#"),(0,e.Uk)(" tsconfig.json")],-1),H=(0,e.Wm)("p",null,"TypeScript 编译所需的配置文件。",-1),E={render:function(s,n){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,(0,e.Wm)("p",null,[r,(0,e.Wm)(a,{to:"/guide/advanced/mock.html"},{default:(0,e.w5)((()=>[c])),_:1})]),i,(0,e.Wm)("p",null,[p,(0,e.Wm)(a,{to:"/guide/basic/store.html"},{default:(0,e.w5)((()=>[d])),_:1})]),o,(0,e.Wm)("p",null,[u,(0,e.Wm)(a,{to:"/guide/basic/app.html"},{default:(0,e.w5)((()=>[m])),_:1})]),t,(0,e.Wm)("p",null,[b,(0,e.Wm)(a,{to:"/guide/basic/config.html"},{default:(0,e.w5)((()=>[h])),_:1})]),g,(0,e.Wm)("p",null,[k,(0,e.Wm)(a,{to:"/guide/basic/style.html"},{default:(0,e.w5)((()=>[f])),_:1})]),W,(0,e.Wm)("p",null,[v,(0,e.Wm)(a,{to:"/guide/basic/router.html"},{default:(0,e.w5)((()=>[w])),_:1})]),U,(0,e.Wm)("p",null,[x,(0,e.Wm)(a,{to:"/guide/basic/build.html"},{default:(0,e.w5)((()=>[j])),_:1})]),y,_,C,H],64)}}}}]);