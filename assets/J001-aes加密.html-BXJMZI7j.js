import{_ as n,c as e,a,o as l}from"./app-C-PIe5GM.js";const i={};function c(d,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>##先下载crypto-js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install crypto-js --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>#新建一个单独的aes.js文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import CryptoJS from &#39;crypto-js&#39;;</span>
<span class="line"></span>
<span class="line">let AesKey = &quot;iam520hellomryk&quot;;</span>
<span class="line">    let CBCIV = &quot;16-Bytes--String&quot;;</span>
<span class="line">    // 加密选项</span>
<span class="line">    let CBCOptions = {</span>
<span class="line">        iv: CryptoJS.enc.Utf8.parse(CBCIV),</span>
<span class="line">        mode: CryptoJS.mode.CBC,</span>
<span class="line">        padding: CryptoJS.pad.Pkcs7</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    //加密</span>
<span class="line">    export const encrypt = (data) =&gt; {</span>
<span class="line">        let key = CryptoJS.enc.Utf8.parse(AesKey);</span>
<span class="line">        let secretData = CryptoJS.enc.Utf8.parse(data);</span>
<span class="line">        let encrypted = CryptoJS.AES.encrypt(</span>
<span class="line">            secretData,</span>
<span class="line">            key,</span>
<span class="line">            CBCOptions</span>
<span class="line">        );</span>
<span class="line">        return encrypted.toString();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    export const decrypt = (data) =&gt; {</span>
<span class="line">        let key = CryptoJS.enc.Utf8.parse(AesKey);</span>
<span class="line">        let decrypt = CryptoJS.AES.decrypt(</span>
<span class="line">            data,</span>
<span class="line">            key,</span>
<span class="line">            CBCOptions</span>
<span class="line">        );</span>
<span class="line">        return CryptoJS.enc.Utf8.stringify(decrypt).toString();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在引入的页面</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { encrypt, decrypt } from &quot;@/common/js/aes.js&quot;;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    // console.log(encrypt(&quot;羊羊羊呀&quot;))</span>
<span class="line">    // console.log(decrypt(&quot;Hxr4/Ulnanpb9tB38sSLJVGZQ5ccB+rkNZM4ujfNZC8=&quot;))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个加密后结果是经过base64处理的，不用再用base64多进行一次编码了。 另外由于有的编码后的结果中会有+号，导致后端解析出错，可以让后端换个解码方式就可以。。</p>`,7)]))}const t=n(i,[["render",c]]),r=JSON.parse('{"path":"/%E5%8A%A0%E5%AF%86/J001-aes%E5%8A%A0%E5%AF%86.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752024824000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"09b8c9c8ada68b61d7ad3afa473ae10bdbf30f27","time":1752024824000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(Vue): 详细说明Vue 2/3响应式原理及示例"}]},"filePathRelative":"加密/J001-aes加密.md"}');export{t as comp,r as data};
