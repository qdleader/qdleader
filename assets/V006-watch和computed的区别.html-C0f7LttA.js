import{_ as a,c as n,a as e,o as i}from"./app-D8HvJIFE.js";const l={};function c(t,s){return i(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="v006-watch和computed的区别" tabindex="-1"><a class="header-anchor" href="#v006-watch和computed的区别"><span>V006-watch和computed的区别</span></a></h1><p>#使用场景</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">computed 　　　　</span>
<span class="line">　　　　<span class="token function">当一个属性受多个属性影响的时候就需要用到computed</span><span class="token punctuation">(</span>当有一些数据需要随着另外一些数据变化时，建议使用computed<span class="token punctuation">)</span></span>
<span class="line">　　　　最典型的例子： 购物车商品结算的时候</span>
<span class="line">watch</span>
<span class="line">　　　　<span class="token function">当一条数据影响多条数据的时候就需要用watch</span><span class="token punctuation">(</span>当有一个通用的响应数据变化的时候，要执行一些业务逻辑或异步操作的时候建议使用watch<span class="token punctuation">)</span></span>
<span class="line">　　　　搜索数据</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#总结：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">watch顾名思义，用于监听数据变化，其中可以监听的数据来源有三部分：props、data、computed内的数据；</span>
<span class="line">watch提供两个参数（newValue，oldValue），第一个参数是新值，第二个参数保存旧值；</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">computed用于处理复杂的逻辑运算，主要和methods储存方法来进行区分；</span>
<span class="line">methods储存方法，，computed储存需要处理的数据值；methods每次都会调用，computed有缓存机制，只有改变时才执行，性能更佳；</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)])])}const p=a(l,[["render",c]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V006-watch%E5%92%8Ccomputed%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"V006-watch和computed的区别","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761877037000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"bd7640b59685e94edda53b9f6d34fbec27933dd4","time":1761877037000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 更新仓库链接和添加交流社区信息"}]},"filePathRelative":"前端面试/vue篇/V006-watch和computed的区别.md"}');export{p as comp,r as data};
