import{_ as a,c as n,a as e,o as t}from"./app-z95KQ9dg.js";const l={};function i(p,s){return t(),n("div",null,s[0]||(s[0]=[e(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">   let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;</span>
<span class="line">	if (!myreg.test(this.phone)) {</span>
<span class="line">		this.$toast(&quot;请输入正确手机号码&quot;);</span>
<span class="line">	} else {</span>
<span class="line">		</span>
<span class="line">	}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"></span>
<span class="line"><span class="token comment">// 输入时候只输入手机号</span></span>
<span class="line"> <span class="token operator">&lt;</span>a<span class="token operator">-</span>input</span>
<span class="line">	v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;searchParams.alpCell&quot;</span></span>
<span class="line">	placeholder<span class="token operator">=</span><span class="token string">&quot;手机号&quot;</span></span>
<span class="line">	oninput<span class="token operator">=</span><span class="token string">&quot;value=value.match(/^\\d+(?:\\\\d{0,2})?/)&quot;</span></span>
<span class="line">	<span class="token operator">:</span>maxLength<span class="token operator">=</span><span class="token string">&quot;20&quot;</span></span>
<span class="line"><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>input<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=a(l,[["render",i],["__file","手机号验证.html.vue"]]),c=JSON.parse('{"path":"/%E5%B8%B8%E7%94%A8%E6%AD%A3%E5%88%99/%E6%89%8B%E6%9C%BA%E5%8F%B7%E9%AA%8C%E8%AF%81.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1728353169000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1}]},"filePathRelative":"常用正则/手机号验证.md"}');export{o as comp,c as data};
