import{_ as n,c as e,a,o as l}from"./app-KfnfuIf0.js";const i={};function t(m,s){return l(),e("div",null,[...s[0]||(s[0]=[a(`<h1 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo"><span>useMemo</span></a></h1><h2 id="usememo-1" tabindex="-1"><a class="header-anchor" href="#usememo-1"><span>useMemo</span></a></h2><blockquote><p>讲这篇文章之前，大家需要对虚拟 dom 这块的知识有所了解才行，react 类组件里的 render 每次被触发的时候都做了哪些事情？</p></blockquote><p>更新虚拟 dom 如果更新后的虚拟 dom 和老的虚拟 dom 有差异，则更新真实 dom，否则不更新真实 dom Partial 是做什么的，一言以蔽之，做性能优化用的，如果说类组件的性能优化的方法是 shouldComponentUpdate 和 PureComponent，那么给函数组件做性能优化的就是这个 useMemo。</p><p>useMemo 怎么使用？它的输入参数有两个值，一个是某一个在渲染过程中被调用了的函数，另一个是一个变量，意思就是，只有当这个变量被调用的时候，这个函数才被执行，那么根据我们铺垫的知识，相应的，不会对虚拟 dom 进行更改，自然不会更改真实 dom。</p><p>如果你不理解没有关系，我们看下面这个例子。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// Father.js</span>
<span class="line"></span>
<span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">import Son from &#39;./Son&#39;</span>
<span class="line">export default (props)=&gt;{</span>
<span class="line">    const [number,setNumber]=useState(0)</span>
<span class="line">    const [name, setName]=useState(&#39;Yui&#39;)</span>
<span class="line">    return(</span>
<span class="line">        &lt;&gt;</span>
<span class="line">        &lt;button onClick={()=&gt;{setNumber(number+1)}}&gt;{&#39;number is:&#39;+number}&lt;/button&gt;</span>
<span class="line">        &lt;button onClick={()=&gt;{setName(&#39;rena&#39;)}}&gt;{&#39;change name&#39;}&lt;/button&gt;</span>
<span class="line">        &lt;Son name={name}/&gt;</span>
<span class="line">        &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个组件里面只有两个 state，一个 name，一个 number，把 number 作为 props 传入了子组件。有两个按钮，分别改变 number 和 name 的值。</p><p>子组件 Son.js 为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { Component, useMemo } from &quot;react&quot;;</span>
<span class="line"></span>
<span class="line">export default (props) =&gt; {</span>
<span class="line">  const showName = (name) =&gt; {</span>
<span class="line">    console.log(&quot;Son render&quot;);</span>
<span class="line">    return &quot;my name is &quot; + name;</span>
<span class="line">  };</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;div&gt;</span>
<span class="line">        {useMemo(() =&gt; {</span>
<span class="line">          console.log(&quot;memo&quot;);</span>
<span class="line">          showName(props.name);</span>
<span class="line">        }, [props.name])}</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">      &lt;div&gt;{showName(props.name)}&lt;/div&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>showName 这个函数出现在了渲染函数中，那么它是 useMemo 的一个合适的输入，注意，父组件往子组件里只传了 name，并没有传 number，但是当我们点击改变 number 的按钮时，第二个 showName 仍然会被执行，但是 name 的值并没有实质性的改变，jsx 却被替换了，这意味着，这次更改虚拟 dom 是完全没有意义的，浪费的。</p><p>第一个 showName 由于放在 useMemo 里面所以并没有被调用，请注意第二个参数 props.name，它的意思是，只有当 props.name 这个值产生变化的时候，useMemo 传入的回调函数才会被调用。这避免了重复渲染，也就是，避免了更改虚拟 dom，继而操作真实 dom。</p><p>也就是说，假如我们单击 change name 按钮，两个 showName 函数都会被执行。</p>`,13)])])}const p=n(i,[["render",t]]),r=JSON.parse('{"path":"/react/hooks/%E5%9F%BA%E7%A1%80%E7%B1%BB/useMemo.html","title":"useMemo","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"react/hooks/基础类/useMemo.md"}');export{p as comp,r as data};
