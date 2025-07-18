import{_ as n,c as e,a,o as l}from"./app-DmMObJTC.js";const i={};function c(d,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="cold-003判断一个对象有环引用" tabindex="-1"><a class="header-anchor" href="#cold-003判断一个对象有环引用"><span>cold-003判断一个对象有环引用</span></a></h1><h2 id="判断一个对象有环引用" tabindex="-1"><a class="header-anchor" href="#判断一个对象有环引用"><span>判断一个对象有环引用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var obj = {</span>
<span class="line">    a: {</span>
<span class="line">        c: [</span>
<span class="line">            1, 2</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    b: 1</span>
<span class="line">}</span>
<span class="line">obj.a.c.d = obj</span>
<span class="line">console.log(cycleDetector(obj)) // true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function cycleDetector(obj) {</span>
<span class="line">    const arr = [obj]</span>
<span class="line">    let flag = false</span>
<span class="line"></span>
<span class="line">    function cycle(o) {</span>
<span class="line">        const keys = Object.keys(o)</span>
<span class="line">        for (const key of keys) {</span>
<span class="line">            const temp = o[key]</span>
<span class="line">            if (typeof temp === &#39;object&#39; &amp;&amp; temp !== null) {</span>
<span class="line">                if (arr.indexOf(temp) &gt;= 0) {</span>
<span class="line">                    flag = true</span>
<span class="line">                    return</span>
<span class="line">                }</span>
<span class="line">                arr.push(temp)</span>
<span class="line">                cycle(temp)</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    cycle(obj)</span>
<span class="line"></span>
<span class="line">    return flag</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const p=n(i,[["render",c]]),t=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E6%89%8B%E5%86%99%E7%B1%BB/%E5%86%B7%E4%B8%80%E4%BA%9B%E7%9A%84%E6%89%8B%E5%86%99/cold-003%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%9C%89%E7%8E%AF%E5%BC%95%E7%94%A8.html","title":"cold-003判断一个对象有环引用","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752802900000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"15a0e6fbddba1ec2afae740c1109c28cb201a473","time":1752802900000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(css): 添加clamp()函数流体布局的文档"}]},"filePathRelative":"前端面试/js类/手写类/冷一些的手写/cold-003判断一个对象有环引用.md"}');export{p as comp,t as data};
