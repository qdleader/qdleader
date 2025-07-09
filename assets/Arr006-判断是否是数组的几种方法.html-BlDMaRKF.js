import{_ as a,c as e,a as s,o as i}from"./app-C-PIe5GM.js";const l={};function r(t,n){return i(),e("div",null,n[0]||(n[0]=[s(`<h1 id="arr006-判断是否是数组的几种方法" tabindex="-1"><a class="header-anchor" href="#arr006-判断是否是数组的几种方法"><span>Arr006-判断是否是数组的几种方法</span></a></h1><h2 id="_1-object-prototype-tostring-call" tabindex="-1"><a class="header-anchor" href="#_1-object-prototype-tostring-call"><span>1.Object.prototype.toString.call()</span></a></h2><blockquote><p>Object.prototype.toString.call(任意类型的值)，返回一个字符串 &#39;[object 类型]&#39;，这种方法对所有数据类型都能判断，即使是null或者undefined;</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Object.prototype.toString.call(&#39;An&#39;) // &quot;[object String]&quot;</span>
<span class="line">Object.prototype.toString.call(1) // &quot;[object Number]&quot;</span>
<span class="line">Object.prototype.toString.call(Symbol(1)) // &quot;[object Symbol]&quot;</span>
<span class="line">Object.prototype.toString.call(null) // &quot;[object Null]&quot;</span>
<span class="line">Object.prototype.toString.call(undefined) // &quot;[object Undefined]&quot;</span>
<span class="line">Object.prototype.toString.call(function(){}) // &quot;[object Function]&quot;</span>
<span class="line">Object.prototype.toString.call({name: &#39;An&#39;}) // &quot;[object Object]&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-instanceof" tabindex="-1"><a class="header-anchor" href="#_2-instanceof"><span>2. instanceof</span></a></h2><p>instanceof的内部机制是判断目标对象的原型链是不是能找到prototype. 使用instanceof判断一个对象是不是数组，instanceof会判断这个对象的原型链上有没有数组的原型，找到就返回true,否则返回false</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[] instanceof Array //true</span>
<span class="line">var x={}</span>
<span class="line">x instanceof Array //false</span>
<span class="line">x.__proto__=Array.prototype</span>
<span class="line">x instanceof Array //true</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof-算法机制" tabindex="-1"><a class="header-anchor" href="#instanceof-算法机制"><span>instanceof 算法机制</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">    function instance_of(L,R){</span>
<span class="line">        var O=R.prototype;</span>
<span class="line">        L=L.__proto__;</span>
<span class="line">        while(true){</span>
<span class="line">            if(L===null){</span>
<span class="line">                return false;</span>
<span class="line">            }</span>
<span class="line">            if(O===L){</span>
<span class="line">                return true;</span>
<span class="line">            }</span>
<span class="line">            L=L.__proto__;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-array-isarray" tabindex="-1"><a class="header-anchor" href="#_3-array-isarray"><span>3.Array.isArray()</span></a></h2><p>Array.isArray()优于 instanceof 的地方在于：Array.isArray()可以检测 iframes</p><p>Array.isArray()与Object.prototype.toString.call() Array.isArray()是es6新增的语法，当不存在Array.isArray()方法时，可以用Object.prototype.toString.call()实现，Array.isArray()的polyfill 通常如下</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">if(!Array.isArray){</span>
<span class="line">  Array.isArray=function(arr){</span>
<span class="line">  return Object.prototype.toString.call(arr)===&#39;[object Array]&#39;;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const o=a(l,[["render",r]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E6%95%B0%E7%BB%84%E7%B1%BB/Arr006-%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%98%AF%E6%95%B0%E7%BB%84%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E6%B3%95.html","title":"Arr006-判断是否是数组的几种方法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752024824000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"09b8c9c8ada68b61d7ad3afa473ae10bdbf30f27","time":1752024824000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(Vue): 详细说明Vue 2/3响应式原理及示例"}]},"filePathRelative":"前端面试/js类/数组类/Arr006-判断是否是数组的几种方法.md"}');export{o as comp,d as data};
