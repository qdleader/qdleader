import{_ as n,c as e,a,o as l}from"./app-DCAi24dy.js";const i={};function c(d,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="d003-fetch封装最大并发请求★★★" tabindex="-1"><a class="header-anchor" href="#d003-fetch封装最大并发请求★★★"><span>D003-fetch封装最大并发请求★★★</span></a></h1><h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1"><span>方法1</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function sendResquest(urls, max, callback) {</span>
<span class="line">    let urlsCopy = [... urls];//防止影响外部urls变量</span>
<span class="line">    function request() {</span>
<span class="line">        function Handle () {</span>
<span class="line">            count--;</span>
<span class="line">            console.log(&#39;end 当前并发数为: &#39;+count);</span>
<span class="line">            if(urlsCopy.length) {//还有未请求的则递归</span>
<span class="line">                request();</span>
<span class="line">            } else if (count === 0) {//并发数为0则表示全部请求完成</span>
<span class="line">                callback()</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        count++;</span>
<span class="line">        console.log(&#39;start 当前并发数为: &#39;+count);</span>
<span class="line">        //请求</span>
<span class="line">        fetch(urlsCopy.shift()).then(Handle).catch(Handle);</span>
<span class="line">        //并发数不足时递归</span>
<span class="line">        count &lt; max &amp;&amp; request();</span>
<span class="line">    }</span>
<span class="line">    let count = 0;//几率并发数</span>
<span class="line">    request();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2"><span>方法2</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">function handleFetchQueue(urls, max, callback) {</span>
<span class="line">  const urlCount = urls.length;</span>
<span class="line">  const requestsQueue = [];</span>
<span class="line">  const results = [];</span>
<span class="line">  let i = 0;</span>
<span class="line">  const handleRequest = (url) =&gt; {</span>
<span class="line">    const req = fetch(url).then(res =&gt; {</span>
<span class="line">      console.log(&#39;当前并发： &#39;+requestsQueue);</span>
<span class="line">      const len = results.push(res);</span>
<span class="line">      if (len &lt; urlCount &amp;&amp; i + 1 &lt; urlCount) {</span>
<span class="line">        requestsQueue.shift();</span>
<span class="line">        handleRequest(urls[++i])</span>
<span class="line">      } else if (len === urlCount) {</span>
<span class="line">        &#39;function&#39; === typeof callback &amp;&amp; callback(results)</span>
<span class="line">      }</span>
<span class="line">    }).catch(e =&gt; {</span>
<span class="line">      results.push(e)</span>
<span class="line">    });</span>
<span class="line">    if (requestsQueue.push(req) &lt; max) {</span>
<span class="line">      handleRequest(urls[++i])</span>
<span class="line">    }</span>
<span class="line">  };</span>
<span class="line">  handleRequest(urls[i])</span>
<span class="line">}</span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line">const urls = Array.from({length: 10}, (v, k) =&gt; k);</span>
<span class="line"> </span>
<span class="line">const fetch = function (idx) {</span>
<span class="line">  return new Promise(resolve =&gt; {</span>
<span class="line">    console.log(\`start request \${idx}\`);</span>
<span class="line">    const timeout = parseInt(Math.random() * 1e4);</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      console.log(\`end request \${idx}\`);</span>
<span class="line">      resolve(idx)</span>
<span class="line">    }, timeout)</span>
<span class="line">  })</span>
<span class="line">};</span>
<span class="line"> </span>
<span class="line">const max = 4;</span>
<span class="line"> </span>
<span class="line">const callback = () =&gt; {</span>
<span class="line">  console.log(&#39;run callback&#39;);</span>
<span class="line">};</span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line">handleFetchQueue(urls, max, callback);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="拓展用-promise-的方式封装呢" tabindex="-1"><a class="header-anchor" href="#拓展用-promise-的方式封装呢"><span>拓展用 promise 的方式封装呢</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">//Promise方式</span>
<span class="line">function sendResquest(urls, max, callback) { </span>
<span class="line">    let pending_count = 0, //并发数</span>
<span class="line">    idx = 0;//当前请求的位置</span>
<span class="line"> </span>
<span class="line">    while (pending_count &lt; max) { </span>
<span class="line">        _fetch(urls[idx++])</span>
<span class="line">    } </span>
<span class="line"> </span>
<span class="line">    async function _fetch(url) { </span>
<span class="line">        if (!url) return; </span>
<span class="line">        pending_count++; </span>
<span class="line">        console.log(url + &#39;:start&#39;,&#39;并发数: &#39;+pending_count); </span>
<span class="line">        await fetch(url) </span>
<span class="line">        pending_count--; </span>
<span class="line">        console.log(url + &#39;:done&#39;,&#39;并发数: &#39;+pending_count); </span>
<span class="line">        _fetch(urls[idx++]); </span>
<span class="line">        pending_count || callback &amp;&amp; callback()</span>
<span class="line">    } </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const r=n(i,[["render",c]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E7%B2%BE%E9%80%89%E6%B1%87%E6%80%BB/D003-fetch%E5%B0%81%E8%A3%85%E6%9C%80%E5%A4%A7%E5%B9%B6%E5%8F%91%E8%AF%B7%E6%B1%82%E2%98%85%E2%98%85%E2%98%85.html","title":"D003-fetch封装最大并发请求★★★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1749778706000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"6e286535a07124482793a46188d11a3a5d47e2c7","time":1749778706000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(cursor): 添加HTML/CSS和Vue.js TypeScript最佳实践文档"}]},"filePathRelative":"前端面试/js类/常见面试题精选汇总/D003-fetch封装最大并发请求★★★.md"}');export{r as comp,u as data};
