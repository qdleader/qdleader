import{_ as n,c as e,a,o as i}from"./app-Dgmug7RJ.js";const l={};function p(r,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>#des 加密</p><p>##先下载crypto-js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">npm install crypto-js --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>#新建一个单独的aes.js文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import CryptoJS from &#39;crypto-js&#39;;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在引入的页面</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { encryptBy, decryptBy } from &quot;@/common/js/des.js&quot;;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    // console.log(encryptBy(&quot;羊羊羊呀&quot;))</span>
<span class="line">    // console.log(decryptBy(&quot;Hxr4/Ulnanpb9tB38sSLJVGZQ5ccB+rkNZM4ujfNZC8=&quot;))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const c=n(l,[["render",p]]),t=JSON.parse('{"path":"/%E5%8A%A0%E5%AF%86/J002-des%E5%8A%A0%E5%AF%86.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1743387340000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"dc352948a1078a819107f8f0dd0301e2a24fa1a8","time":1743387340000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加数组交集并集差集操作示例"}]},"filePathRelative":"加密/J002-des加密.md"}');export{c as comp,t as data};
