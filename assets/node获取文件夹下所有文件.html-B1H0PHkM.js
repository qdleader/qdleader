import{_ as n,c as a,a as e,o as i}from"./app-DGdn7lT5.js";const l={};function c(r,s){return i(),a("div",null,s[0]||(s[0]=[e(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/**</span>
<span class="line"> * fileDisplay(url, callback)</span>
<span class="line"> * @param url: 你即将读取的文件夹路径</span>
<span class="line"> * @param callback: 回调函数</span>
<span class="line"> */</span>
<span class="line"></span>
<span class="line">// node fs模块</span>
<span class="line">const fs = require(&#39;fs&#39;);</span>
<span class="line">// node path模块</span>
<span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">// 收集所有的文件路径</span>
<span class="line">const arr = [];</span>
<span class="line">let timer = null;</span>
<span class="line">const fileDisplay = (url, cb) =&gt; {</span>
<span class="line">  const filePath = path.resolve(url);</span>
<span class="line">  //根据文件路径读取文件，返回文件列表</span>
<span class="line">  fs.readdir(filePath, (err, files) =&gt; {</span>
<span class="line">    if (err) return console.error(&#39;Error:(spec)&#39;, err)</span>
<span class="line">    files.forEach((filename) =&gt; {</span>
<span class="line">      //获取当前文件的绝对路径</span>
<span class="line">      const filedir = path.join(filePath, filename);</span>
<span class="line">      // fs.stat(path)执行后，会将stats类的实例返回给其回调函数。</span>
<span class="line">      fs.stat(filedir, (eror, stats) =&gt; {</span>
<span class="line">        if (eror) return console.error(&#39;Error:(spec)&#39;, err);</span>
<span class="line">        // 是否是文件</span>
<span class="line">        const isFile = stats.isFile();</span>
<span class="line">        // 是否是文件夹</span>
<span class="line">        const isDir = stats.isDirectory();</span>
<span class="line">        if (isFile) {</span>
<span class="line">          // 这块我自己处理了多余的绝对路径，第一个 replace 是替换掉那个路径，第二个是所有满足\\\\的直接替换掉</span>
<span class="line">          arr.push(filedir.replace(__dirname, &#39;&#39;).replace(/\\\\/img, &#39;/&#39;))</span>
<span class="line">          // 最后打印的就是完整的文件路径了</span>
<span class="line">          if (timer) clearTimeout(timer)</span>
<span class="line">          timer = setTimeout(() =&gt; cb &amp;&amp; cb(arr), 200)</span>
<span class="line">        }</span>
<span class="line">        // 如果是文件夹</span>
<span class="line">        if (isDir) fileDisplay(filedir, cb);</span>
<span class="line">      })</span>
<span class="line">    });</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">// 测试代码</span>
<span class="line">fileDisplay(&#39;./src&#39;, (arr) =&gt; {</span>
<span class="line">  console.log(arr, &#39;-=&#39;)</span>
<span class="line">})</span>
<span class="line">// commonjs规范</span>
<span class="line">module.exports = fileDisplay;</span>
<span class="line">// es6 规范</span>
<span class="line">// export default fileDisplay</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const p=n(l,[["render",c]]),v=JSON.parse('{"path":"/node/node%E8%8E%B7%E5%8F%96%E6%96%87%E4%BB%B6%E5%A4%B9%E4%B8%8B%E6%89%80%E6%9C%89%E6%96%87%E4%BB%B6.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1750039880000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"256291c86c88e7d60861f133ab5f24f74eac08fe","time":1750039880000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(ai/prompt): 添加UI设计+HTML/JS提示词文档"}]},"filePathRelative":"node/node获取文件夹下所有文件.md"}');export{p as comp,v as data};
