import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(i,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="v001-vuex实用篇" tabindex="-1"><a class="header-anchor" href="#v001-vuex实用篇"><span>V001-vuex实用篇</span></a></h1><h2 id="_1-首先在main-js中引入" tabindex="-1"><a class="header-anchor" href="#_1-首先在main-js中引入"><span>1.首先在main.js中引入</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store/index.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  router<span class="token punctuation">,</span></span>
<span class="line">  store<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-然后在main-js同级建立store文件夹" tabindex="-1"><a class="header-anchor" href="#_2-然后在main-js同级建立store文件夹"><span>2.然后在main.js同级建立store文件夹</span></a></h2><p>在store文件夹里面分别建立actions.js, getters.js, index.js, mutations.js,types.js</p><p>比如现在需求在组件A控制组件B中的一个状态的显隐。</p><p>在组件A中</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>mapGetters<span class="token punctuation">,</span> mapActions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">			</span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//点击弹出</span></span>
<span class="line">        <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">&#39;buyPop&#39;</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.触发后进入store中的index文件 index文件中的内容是固定的：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> mutations <span class="token keyword">from</span> <span class="token string">&#39;./mutations&#39;</span></span>
<span class="line"><span class="token keyword">import</span> actions <span class="token keyword">from</span> <span class="token string">&#39;./actions&#39;</span></span>
<span class="line"><span class="token keyword">import</span> getters <span class="token keyword">from</span> <span class="token string">&#39;./getters&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">modules</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">		mutations</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    actions<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*2.然后进入actions里面</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> types <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//点击弹出付款弹出层</span></span>
<span class="line">    <span class="token function-variable function">buyPop</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span></span>
<span class="line">        commit</span>
<span class="line">    <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">BUYPOP</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*3.然后维护下types文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">BUYPOP</span> <span class="token operator">=</span> <span class="token string">&#39;BUYPOP&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后到了mutations文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">BUYPOP</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span></span>
<span class="line"><span class="token keyword">import</span> getters <span class="token keyword">from</span> <span class="token string">&#39;./getters&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">cpShow</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">//控制付款弹出层展示隐藏</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//底部购买组件出现弹出付钱板块</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token constant">BUYPOP</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        state<span class="token punctuation">.</span>cpShow <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">	state<span class="token punctuation">,</span></span>
<span class="line">	mutations<span class="token punctuation">,</span></span>
<span class="line">	getters</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后进入getters文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//获取弹出层状态</span></span>
<span class="line">	<span class="token function">cpShow</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> state<span class="token punctuation">.</span>cpShow</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> getters<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后store文件就处理完毕了，那么在B组件中怎么调用呢？</p><p>着啥急，这不就来了嘛。。</p><p>B组件：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">			<span class="token operator">&lt;</span>div v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;cpShow&quot;</span><span class="token operator">&gt;</span>被控制的木偶<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>mapGetters<span class="token punctuation">,</span> mapActions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">                                    </span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">cpShow</span><span class="token operator">:</span><span class="token string">&#39;cpShow&#39;</span></span>
<span class="line">	   <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//调用时候可以直接this.cpShow</span></span>
<span class="line">写法嘛很多种：</span>
<span class="line">        <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">cpShow</span><span class="token operator">:</span><span class="token string">&#39;cpShow&#39;</span></span>
<span class="line">	   <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	   </span>
<span class="line">	   或者</span>
<span class="line">	           <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">	            <span class="token string">&#39;cpShow&#39;</span></span>
<span class="line">	   <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">	   都在可以</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是一个完整的使用流程喽！</p><p>加群加群微信搜索qdleader，回复加群</p>`,24)])])}const o=n(t,[["render",l]]),r=JSON.parse('{"path":"/vue/vuex/V001-vuex%E5%AE%9E%E7%94%A8%E7%AF%87.html","title":"V001-vuex实用篇","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"vue/vuex/V001-vuex实用篇.md"}');export{o as comp,r as data};
