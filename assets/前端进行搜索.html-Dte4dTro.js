import{_ as n,e,f as a,o as i}from"./app-Co8h00Iv.js";const l={};function r(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * @param {string} queryString 输入框输入的内容</span>
<span class="line"> * @param {Array} lists 要筛选的数组</span>
<span class="line"> * @param {string} str 要筛选的数组中要搜的对应的name</span>
<span class="line"> * @return {Array} 筛选完的数组</span>
<span class="line"> */</span>
<span class="line">// 公用的搜索数组方法</span>
<span class="line">export function querySearchPublic(queryString, lists, str) {</span>
<span class="line">  let results = lists</span>
<span class="line">  if (queryString != &quot;&quot;) {</span>
<span class="line">    results = queryString</span>
<span class="line">      ? lists.filter(createFilter(queryString, str))</span>
<span class="line">      : lists;</span>
<span class="line">  }</span>
<span class="line">  return results;</span>
<span class="line">}</span>
<span class="line">function createFilter(queryString, str) {</span>
<span class="line">  let con = [&quot;&quot;, ...queryString, &quot;&quot;].join(&quot;.*&quot;); //转化成正则格式的字符串</span>
<span class="line">  let reg = new RegExp(con); //正则</span>
<span class="line">  return (lists) =&gt; {</span>
<span class="line">    return reg.test(lists[str]);</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const d=n(l,[["render",r],["__file","前端进行搜索.html.vue"]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%89%8D%E7%AB%AF%E8%BF%9B%E8%A1%8C%E6%90%9C%E7%B4%A2.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1741399874000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3ce85b6f1a0c68b01a72154877ae80006272306c","date":1741399874000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加方法顺序执行示例及老版本写法说明","commitUrl":"qdleader/qdleader/commit/3ce85b6f1a0c68b01a72154877ae80006272306c"}]},"filePathRelative":"前端小tip/前端进行搜索.md"}');export{d as comp,p as data};
