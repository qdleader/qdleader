import{_ as n,e,f as a,o as l}from"./app-Co8h00Iv.js";const i={};function c(d,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>嵌套方式写css，跟写html时候比较类似，减少了冲突的机会。eg：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">ul{</span>
<span class="line">    background-color: #03A9F4;</span>
<span class="line">    padding: 10px;</span>
<span class="line">    list-style: none;</span>
<span class="line"></span>
<span class="line">    li{</span>
<span class="line">        background-color: #fff;</span>
<span class="line">        border-radius: 3px;</span>
<span class="line">        margin: 10px 0;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就像其他的高级语言，less的变量根据范围接受她们的值。如果在指定范围内没有关于变量值的声明，less会一直往上查找，直到找到离它最近的声明。</p><p>eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@text-color:#000;</span>
<span class="line"></span>
<span class="line">ul {</span>
<span class="line">	@text-color:#fff;</span>
<span class="line">	li {</span>
<span class="line">		color:@text-color;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">编译后的li的color为#fff</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const t=n(i,[["render",c],["__file","L004-嵌套.html.vue"]]),p=JSON.parse('{"path":"/less_scss/L004-%E5%B5%8C%E5%A5%97.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1741399874000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3ce85b6f1a0c68b01a72154877ae80006272306c","date":1741399874000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加方法顺序执行示例及老版本写法说明","commitUrl":"qdleader/qdleader/commit/3ce85b6f1a0c68b01a72154877ae80006272306c"}]},"filePathRelative":"less&scss/L004-嵌套.md"}');export{t as comp,p as data};
