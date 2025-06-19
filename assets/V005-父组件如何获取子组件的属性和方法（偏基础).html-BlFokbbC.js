import{_ as n,c as a,a as e,o as l}from"./app-8qbk9tLK.js";const t={};function p(i,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="v005-父组件如何获取子组件的属性和方法" tabindex="-1"><a class="header-anchor" href="#v005-父组件如何获取子组件的属性和方法"><span>V005-父组件如何获取子组件的属性和方法</span></a></h1><p>vue中通过在子组件上定义ref属性来获取子组件的属性和方法，</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 这里是父组件</span></span>
<span class="line"><span class="token operator">&lt;</span>templete<span class="token operator">&gt;</span></span>
<span class="line">	<span class="token operator">&lt;</span>child ref<span class="token operator">=</span><span class="token string">&quot;child&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>templete<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">getChild</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>child<span class="token punctuation">.</span>属性名（方法名）</span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外详细说一下ref的三种用法：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">	ref的3种使用场景：</span>
<span class="line"></span>
<span class="line">	ref 加在普通的元素上，用this.$refs.name 获取到的是dom元素。</span>
<span class="line">	ref 加在子组件上，在父组件中用this.$refs.name 获取到的是组件实例，可以调用组件的所有属性和方法。</span>
<span class="line">	ref和v-for一起使用，用this.$refs.name获取到的将会是一个包含了对应数据源的这些子组件或者DOM元素的数组。</span>
<span class="line">	</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(t,[["render",p]]),o=JSON.parse(`{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V005-%E7%88%B6%E7%BB%84%E4%BB%B6%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95%EF%BC%88%E5%81%8F%E5%9F%BA%E7%A1%80).html","title":"V005-父组件如何获取子组件的属性和方法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1750296722000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"2308b320062a9b64e8c3dfbe2f9f1a938c998e3d","time":1750296722000,"email":"yk4545945@163.com","author":"qdleader","message":"Merge branch 'master' of https://github.com/qdleader/qdleader"}]},"filePathRelative":"前端面试/vue篇/V005-父组件如何获取子组件的属性和方法（偏基础).md"}`);export{r as comp,o as data};
