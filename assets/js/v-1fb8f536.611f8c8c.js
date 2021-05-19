(self.webpackChunksite=self.webpackChunksite||[]).push([[2630],{4026:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-1fb8f536",path:"/plugin/develop/runtime.html",title:"通过插件定制运行时能力",lang:"zh-CN",frontmatter:{title:"通过插件定制运行时能力",order:3},excerpt:"",headers:[{level:2,title:"API",slug:"api",children:[{level:3,title:"appConfig",slug:"appconfig",children:[]},{level:3,title:"context",slug:"context",children:[]},{level:3,title:"setRenderRouter",slug:"setrenderrouter",children:[]},{level:3,title:"addProvider",slug:"addprovider",children:[]},{level:3,title:"addDOMRender",slug:"adddomrender",children:[]},{level:3,title:"wrapperRouteComponent",slug:"wrapperroutecomponent",children:[]},{level:3,title:"modifyRoutes",slug:"modifyroutes",children:[]}]}],filePathRelative:"plugin/develop/runtime.md",git:{updatedTime:162142938e4,contributors:[]}}},341:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var p=a(6252);const e=(0,p.uE)('<p>插件运行时能力通过 <code>src/runtime.ts</code> 定义，结构如下</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> appConfig<span class="token punctuation">,</span> addDOMRender<span class="token punctuation">,</span> setRenderRouter<span class="token punctuation">,</span> modifyRoutes<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> loglevel <span class="token punctuation">}</span> <span class="token operator">=</span> appConfig<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="api"><a class="header-anchor" href="#api">#</a> API</h2><h3 id="appconfig"><a class="header-anchor" href="#appconfig">#</a> appConfig</h3><p>对应 <code>src/app.ts</code> 用户自定义的 appConfig。详细字段见 <a href="/docs/guide/basic/app">应用入口</a>。</p><h3 id="context"><a class="header-anchor" href="#context">#</a> context</h3><p>应用运行上下文。包含<code>initialData</code> 和<code>pageInitialProps</code>，分别对应<a href="/docs/guide/advance/ssr#%E5%BA%94%E7%94%A8%E7%BA%A7%E6%95%B0%E6%8D%AE">应用级数据</a>和<a href="/docs/guide/advance/ssr#%E9%A1%B5%E9%9D%A2%E7%BA%A7%E6%95%B0%E6%8D%AE">页面级数据</a> 。</p><h3 id="setrenderrouter"><a class="header-anchor" href="#setrenderrouter">#</a> setRenderRouter</h3><p>设置 renderRouter。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> setRenderRouter <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// renderRouter 入参为路由数组</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">renderRouter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">routes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>route<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">setRenderRouter</span><span class="token punctuation">(</span>renderRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="addprovider"><a class="header-anchor" href="#addprovider">#</a> addProvider</h3><p>为应用包裹 Provider：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> addProvider <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">StoreProvider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">addProvider</span><span class="token punctuation">(</span>StoreProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="adddomrender"><a class="header-anchor" href="#adddomrender">#</a> addDOMRender</h3>',14),t=(0,p.Uk)("自定义渲染。默认使用"),o={href:"https://reactjs.org/docs/react-dom.html",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("react-dom"),l=(0,p.Uk)("。"),r=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> addDOMRender <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// App: React 组件</span>\n  <span class="token comment">// appMountNode: App 挂载点</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">DOMRender</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> App<span class="token punctuation">,</span> appMountNode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> appMountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">addDOMRender</span><span class="token punctuation">(</span>DOMRender<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="wrapperroutecomponent"><a class="header-anchor" href="#wrapperroutecomponent">#</a> wrapperRouteComponent</h3><p>为所有页面级组件做一层包裹：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 默认能力：在页面组件上挂载 pageConfig.title 的属性，即可自动设置页面 title</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> wrapperRouteComponent <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">wrapperRouteComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">PageComponent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> PageComponent<span class="token punctuation">.</span>pageConfig <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>title<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> PageComponent<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">TitleWrapperedComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        document<span class="token punctuation">.</span>title <span class="token operator">=</span> title<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">return</span> <span class="token operator">&lt;</span>PageComponent <span class="token operator">/</span><span class="token operator">&gt;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> TitleWrapperedComponent<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="modifyroutes"><a class="header-anchor" href="#modifyroutes">#</a> modifyRoutes</h3><p>动态修改路由。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">modify</span> <span class="token punctuation">(</span><span class="token parameter">routes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> routes<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> modifyRoutes <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">modifyRoutes</span><span class="token punctuation">(</span><span class="token parameter">routes</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> modifiedRoutes <span class="token operator">=</span> <span class="token function">modify</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 修改路由</span>\n    <span class="token keyword">return</span> modifiedRoutes<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',7),u={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("p",null,[t,(0,p.Wm)("a",o,[c,(0,p.Wm)(a)]),l]),r],64)}}}}]);