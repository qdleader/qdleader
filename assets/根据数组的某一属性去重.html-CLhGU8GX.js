import{_ as s,c as a,a as e,o as i}from"./app-JR0DiM0i.js";const l={};function r(d,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="根据数组的某一属性去重" tabindex="-1"><a class="header-anchor" href="#根据数组的某一属性去重"><span>根据数组的某一属性去重</span></a></h1><h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1"><span>方法1：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">unique(arr) {</span>
<span class="line">  const res = new Map();</span>
<span class="line">  return arr.filter((a) =&gt; !res.has(a.id) &amp;&amp; res.set(a.id, 1));</span>
<span class="line">},</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2"><span>方法2：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let data = [</span>
<span class="line">   {id:1,name:&#39;obj&#39;},</span>
<span class="line">   {id:3,name:&#39;string&#39;},</span>
<span class="line">   {id:2,name:&#39;arr&#39;},</span>
<span class="line">   {id:1,name:&#39;num&#39;}</span>
<span class="line"> ];</span>
<span class="line"></span>
<span class="line">let hash = {};</span>
<span class="line"></span>
<span class="line">data = data.reduce(function(arr, current) {</span>
<span class="line"></span>
<span class="line">    hash[current.id] ? &#39;&#39; : hash[current.id] = true &amp;&amp; arr.push(current);</span>
<span class="line"></span>
<span class="line">    return arr</span>
<span class="line"></span>
<span class="line">}, []);</span>
<span class="line"></span>
<span class="line">console.log(data)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拓展：</p><p>js sort方法根据数组中对象的某一个属性值进行排序</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var arr = [{name:&#39;zopp&#39;,age:0},{name:&#39;gpp&#39;,age:18},{name:&#39;yjj&#39;,age:8}];</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">function compare(property){</span>
<span class="line">  return function(a,b){</span>
<span class="line">    var value1 = a[property];</span>
<span class="line">    var value2 = b[property];</span>
<span class="line">    return value1 - value2;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">console.log(arr.sort(compare(&#39;age&#39;)))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何根据参数不同，来确定是升序排列，还是降序排序呢？</p><p>/* <em>数组根据数组对象中的某个属性值进行排序的方法</em> 使用例子：newArray.sort(sortBy(&#39;number&#39;,false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序</p><ul><li>@param attr 排序的属性 如number属性</li><li>@param rev true表示升序排列，false降序排序* */</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sortBy: function(attr,rev){</span>
<span class="line">  //第二个参数没有传递 默认升序排列</span>
<span class="line">  if(rev == undefined){</span>
<span class="line">    rev = 1;</span>
<span class="line">  } else {</span>
<span class="line">    rev = (rev) ? 1 : -1;</span>
<span class="line">  }</span>
<span class="line">  return function(a,b){</span>
<span class="line">    a = a[attr];</span>
<span class="line">    b = b[attr];</span>
<span class="line">    if(a &lt; b){</span>
<span class="line">      return rev * -1;</span>
<span class="line">    }if(a &gt; b){</span>
<span class="line">      return rev * 1;</span>
<span class="line">    }return 0;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const p=s(l,[["render",r]]),t=JSON.parse(`{"path":"/%E9%A1%B9%E7%9B%AE%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98/%E6%A0%B9%E6%8D%AE%E6%95%B0%E7%BB%84%E7%9A%84%E6%9F%90%E4%B8%80%E5%B1%9E%E6%80%A7%E5%8E%BB%E9%87%8D.html","title":"根据数组的某一属性去重","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1754578924000,"contributors":[{"name":"qdleader","username":"qdleader","email":"62106726+qdleader@users.noreply.github.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"8368a3d830d4d39275b582b9717392562d913e18","time":1754578924000,"email":"62106726+qdleader@users.noreply.github.com","author":"前端架构师","message":"Merge branch 'master' of github.com:qdleader/qdleader"}]},"filePathRelative":"项目中遇到的问题/根据数组的某一属性去重.md"}`);export{p as comp,t as data};
