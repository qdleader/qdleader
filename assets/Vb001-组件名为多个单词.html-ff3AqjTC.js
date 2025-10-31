import{_ as s,c as a,a as e,o as l}from"./app-D8HvJIFE.js";const i={};function p(c,n){return l(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="vb001-组件名为多个单词" tabindex="-1"><a class="header-anchor" href="#vb001-组件名为多个单词"><span>Vb001-组件名为多个单词</span></a></h1><h3 id="组件的命名为多个单词" tabindex="-1"><a class="header-anchor" href="#组件的命名为多个单词"><span>组件的命名为多个单词</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">#组件名应该始终是多个单词的，根组件 App 以及 <span class="token operator">&lt;</span>transition<span class="token operator">&gt;</span>、<span class="token operator">&lt;</span>component<span class="token operator">&gt;</span> 之类的 Vue 内置组件除外。</span>
<span class="line">这样避免和html元素冲突。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">bad eg：</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;todo&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;ToDo&#39;</span></span>
<span class="line">	<span class="token comment">//..</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">good eg<span class="token operator">:</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;todo-item&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//..</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;TodoItem&#39;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">//..</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">我认为驼峰方式 效果最好，因为大多数<span class="token constant">IDE</span>自动完成功能都支持它。</span>
<span class="line"></span>
<span class="line">bad</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">mycomponent<span class="token punctuation">.</span>vue</span>
<span class="line">myComponent<span class="token punctuation">.</span>vue</span>
<span class="line">Mycomponent<span class="token punctuation">.</span>vue</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">good</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">MyComponent<span class="token punctuation">.</span>vue</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const d=s(i,[["render",p]]),o=JSON.parse('{"path":"/vue/vue%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/Vb001-%E7%BB%84%E4%BB%B6%E5%90%8D%E4%B8%BA%E5%A4%9A%E4%B8%AA%E5%8D%95%E8%AF%8D.html","title":"Vb001-组件名为多个单词","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"vue/vue最佳实践/Vb001-组件名为多个单词.md"}');export{d as comp,o as data};
