import{_ as n,c as a,a as e,o as i}from"./app-DCAi24dy.js";const l={};function d(c,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="h5的支付宝支付" tabindex="-1"><a class="header-anchor" href="#h5的支付宝支付"><span>h5的支付宝支付</span></a></h1><p>h5吊起支付宝app支付 （前端实现）</p><p>后端按照支付宝官网会返回一个form表单</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 支付宝H5支付</span>
<span class="line">   async malipaynewPay() {</span>
<span class="line"></span>
<span class="line">      // 这个接口是你们自己写的接口，成功后会返回一个form表单</span>
<span class="line">       const wechatPay = await http.post(\`\${orderPay}\`, {</span>
<span class="line">         order_group:&#39;order&#39;,</span>
<span class="line">         pay_type: 2,</span>
<span class="line">         user_price:this.user_price,</span>
<span class="line">         trade_type: &#39;wap&#39;,</span>
<span class="line">         order_id: this.orderInfo.order_id,</span>
<span class="line"></span>
<span class="line">     })</span>
<span class="line">     console.log(wechatPay)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      var el = document.createElement( &#39;div&#39; );</span>
<span class="line">      //wechatPay.data  就是后台返回的form表单</span>
<span class="line">      console.log(&quot;wechatPay.data&quot;,wechatPay.data)</span>
<span class="line"></span>
<span class="line">      el.innerHTML = wechatPay.data</span>
<span class="line">      document.body.appendChild(el)</span>
<span class="line">      document.forms[0].submit()</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就调起了。</p><p>前面这种是大多数情况，还有一些情况，后台返回的并不是form表单，是个链接。。不讲武德。</p><p>你直接用这个链接拼也可以调起</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">malipaynewPay() {</span>
<span class="line">  // 里面的参数根据你们自己的数据填写即可</span>
<span class="line">  // wechatPay.data 返回的链接</span>
<span class="line"></span>
<span class="line">      let pay_url =</span>
<span class="line">           wechatPay.data +</span>
<span class="line">          &quot;order_sn=&quot; +</span>
<span class="line">          this.orderInfo.order_id +</span>
<span class="line">          &quot;&amp;body=&quot; +</span>
<span class="line">           this.goods_name +</span>
<span class="line">          &quot;&amp;money=&quot; +</span>
<span class="line">          this.user_price +</span>
<span class="line">          &quot;&amp;quit_url=&quot; +</span>
<span class="line">          window.location.href;</span>
<span class="line">        console.log(pay_url);</span>
<span class="line"></span>
<span class="line">       location.href = pay_url;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const r=n(l,[["render",d]]),t=JSON.parse('{"path":"/%E6%94%AF%E4%BB%98/h5%E7%9A%84%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%AF%E4%BB%98.html","title":"h5的支付宝支付","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1749778706000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"6e286535a07124482793a46188d11a3a5d47e2c7","time":1749778706000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(cursor): 添加HTML/CSS和Vue.js TypeScript最佳实践文档"}]},"filePathRelative":"支付/h5的支付宝支付.md"}');export{r as comp,t as data};
