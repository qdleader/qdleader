import{_ as e,c as n,a,o as l}from"./app-JR0DiM0i.js";const i={};function r(d,s){return l(),n("div",null,s[0]||(s[0]=[a(`<p>#des 加密</p><p>##先下载crypto-js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install crypto-js --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>#新建一个单独的aes.js文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import CryptoJS from &#39;crypto-js&#39;;</span>
<span class="line">//DES加密</span>
<span class="line">export const encryptBy = (message) =&gt; {</span>
<span class="line">    var key = &#39;l2345678&#39;;</span>
<span class="line">    function encryptByDES (message, key) {</span>
<span class="line">      var keyHex = CryptoJS.enc.Utf8.parse(key)</span>
<span class="line">      var option = {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7}</span>
<span class="line">      var encrypted = CryptoJS.DES.encrypt(message, keyHex, option)</span>
<span class="line">    //   var encrypted = CryptoJS.DES.encrypt(message, key, option)</span>
<span class="line">      return encrypted.ciphertext.toString()</span>
<span class="line">    }</span>
<span class="line">    return encryptByDES(message, key);</span>
<span class="line">}</span>
<span class="line">//DES解密</span>
<span class="line">export const decryptBy = (message) =&gt; {</span>
<span class="line">    var key = &#39;l2345678&#39;;</span>
<span class="line">    //DES  ECB模式解密</span>
<span class="line">    function decryptByDES(message,key){</span>
<span class="line">    var keyHex = CryptoJS.enc.Utf8.parse(key);</span>
<span class="line">    var decrypted = CryptoJS.DES.decrypt({</span>
<span class="line">    ciphertext: CryptoJS.enc.Hex.parse(message)</span>
<span class="line">    }, keyHex, {</span>
<span class="line">    mode: CryptoJS.mode.ECB,</span>
<span class="line">    padding: CryptoJS.pad.Pkcs7</span>
<span class="line">    });</span>
<span class="line">    var result_value = decrypted.toString(CryptoJS.enc.Utf8);</span>
<span class="line">    return result_value;</span>
<span class="line">    }</span>
<span class="line">    return decryptByDES(message, key);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// console.log(encryptBy(&#39;123456&#39;));//加密</span>
<span class="line">//  console.log(decryptBy(&#39;103e702e0737327c&#39;));//解密</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在引入的页面</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { encryptBy, decryptBy } from &quot;@/common/js/des.js&quot;;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    // console.log(encryptBy(&quot;羊羊羊呀&quot;))</span>
<span class="line">    // console.log(decryptBy(&quot;Hxr4/Ulnanpb9tB38sSLJVGZQ5ccB+rkNZM4ujfNZC8=&quot;))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const c=e(i,[["render",r]]),t=JSON.parse(`{"path":"/%E5%8A%A0%E5%AF%86/J002-des%E5%8A%A0%E5%AF%86.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1754578924000,"contributors":[{"name":"qdleader","username":"qdleader","email":"62106726+qdleader@users.noreply.github.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"8368a3d830d4d39275b582b9717392562d913e18","time":1754578924000,"email":"62106726+qdleader@users.noreply.github.com","author":"前端架构师","message":"Merge branch 'master' of github.com:qdleader/qdleader"}]},"filePathRelative":"加密/J002-des加密.md"}`);export{c as comp,t as data};
