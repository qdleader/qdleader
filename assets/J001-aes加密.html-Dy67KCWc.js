import{_ as n,c as e,a,o as l}from"./app-JR0DiM0i.js";const i={};function d(p,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>##先下载crypto-js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install crypto-js --save-dev</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个加密后结果是经过base64处理的，不用再用base64多进行一次编码了。 另外由于有的编码后的结果中会有+号，导致后端解析出错，可以让后端换个解码方式就可以。。</p>`,7)]))}const c=n(i,[["render",d]]),r=JSON.parse(`{"path":"/%E5%8A%A0%E5%AF%86/J001-aes%E5%8A%A0%E5%AF%86.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1754578924000,"contributors":[{"name":"qdleader","username":"qdleader","email":"62106726+qdleader@users.noreply.github.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"8368a3d830d4d39275b582b9717392562d913e18","time":1754578924000,"email":"62106726+qdleader@users.noreply.github.com","author":"前端架构师","message":"Merge branch 'master' of github.com:qdleader/qdleader"}]},"filePathRelative":"加密/J001-aes加密.md"}`);export{c as comp,r as data};
