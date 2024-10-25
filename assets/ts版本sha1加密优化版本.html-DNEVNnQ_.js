import{_ as n,c as a,a as e,o as i}from"./app-D7F1f-PT.js";const l={};function t(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="ts版本sha1加密优化版本" tabindex="-1"><a class="header-anchor" href="#ts版本sha1加密优化版本"><span>ts版本sha1加密优化版本</span></a></h1><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm install jssha -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> import jsSHA from &quot;jssha&quot;      //module</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"> // 大写的sha1 加密串</span>
<span class="line"> function getsignUpper (sign: any) {</span>
<span class="line">     let shaObj = new jsSHA(&quot;SHA-1&quot;,&quot;TEXT&quot;,{encoding:&quot;UTF8&quot;})</span>
<span class="line">     shaObj.update(sign);</span>
<span class="line">     return shaObj.getHash(&quot;HEX&quot;).toUpperCase() ;</span>
<span class="line"> }</span>
<span class="line"></span>
<span class="line"> // 小写的sha1 加密串</span>
<span class="line"> function getsign (sign: any) {</span>
<span class="line">     let shaObj = new jsSHA(&quot;SHA-1&quot;,&quot;TEXT&quot;,{encoding:&quot;UTF8&quot;})</span>
<span class="line">     shaObj.update(sign);</span>
<span class="line">     return shaObj.getHash(&quot;HEX&quot;) ;</span>
<span class="line"> }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"> console.log(&quot;加密好的内容&quot;:getsign(&quot;qdleader&quot;))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(l,[["render",t],["__file","ts版本sha1加密优化版本.html.vue"]]),p=JSON.parse('{"path":"/vue3/ts%E7%89%88%E6%9C%ACsha1%E5%8A%A0%E5%AF%86%E4%BC%98%E5%8C%96%E7%89%88%E6%9C%AC.html","title":"ts版本sha1加密优化版本","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"updatedTime":1729824328000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1}]},"filePathRelative":"vue3/ts版本sha1加密优化版本.md"}');export{r as comp,p as data};
