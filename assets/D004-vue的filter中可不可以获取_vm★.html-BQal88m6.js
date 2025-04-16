import{_ as t,c as s,a,o as i}from"./app-DFnxdJ0h.js";const n={};function r(l,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="vue中filter能不能写异步代码-能不能获取-vm" tabindex="-1"><a class="header-anchor" href="#vue中filter能不能写异步代码-能不能获取-vm"><span>Vue中filter能不能写异步代码，能不能获取$vm？</span></a></h1><p>#答案是： 不可以</p><p>#解析：</p><p>比如当写一个vue时间戳过滤器时候，用this调用别的方法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">execute_time(time) {</span>
<span class="line">      if (time === 0) return &#39;/&#39;</span>
<span class="line">      else return this.getTime(time)</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我发现报了个&quot;TypeError: Cannot read property ‘getTime’ of undefined&quot;，我第一时间就打印了this，果然是undefined。</p><p>官方文档中：过滤器filters的说明是： vue中的过滤器更偏向于对文本数据的转化， 而不能依赖this上下文，如果需要使用到上下文this我们应该使用computed计算属性的或者一个method方法。</p>`,7)]))}const m=t(n,[["render",r]]),c=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E7%B2%BE%E9%80%89%E6%B1%87%E6%80%BB/D004-vue%E7%9A%84filter%E4%B8%AD%E5%8F%AF%E4%B8%8D%E5%8F%AF%E4%BB%A5%E8%8E%B7%E5%8F%96_vm%E2%98%85.html","title":"Vue中filter能不能写异步代码，能不能获取$vm？","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/常见面试题精选汇总/D004-vue的filter中可不可以获取$vm★.md"}');export{m as comp,c as data};
