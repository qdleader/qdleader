import{_ as n,c as s,a,o as i}from"./app-CJxOrLyD.js";const l={};function t(d,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="v017-vue模版的编译原理" tabindex="-1"><a class="header-anchor" href="#v017-vue模版的编译原理"><span>V017-vue模版的编译原理</span></a></h1><h2 id="vue-模板编译原理" tabindex="-1"><a class="header-anchor" href="#vue-模板编译原理"><span>Vue 模板编译原理</span></a></h2><p>Vue 的编译过程就是将 template 转化为 render 函数的过程 分为以下三步</p><blockquote><p>第一步是将 模板字符串 转换成 element ASTs（解析器） 第二步是对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器） 第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）</p></blockquote><p>相关代码如下</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export function compileToFunctions(template) {</span>
<span class="line">  // 我们需要把html字符串变成render函数</span>
<span class="line">  // 1.把html代码转成ast语法树  ast用来描述代码本身形成树结构 不仅可以描述html 也能描述css以及js语法</span>
<span class="line">  // 很多库都运用到了ast 比如 webpack babel eslint等等</span>
<span class="line">  let ast = parse(template);</span>
<span class="line">  // 2.优化静态节点</span>
<span class="line">  // 这个有兴趣的可以去看源码  不影响核心功能就不实现了</span>
<span class="line">  //   if (options.optimize !== false) {</span>
<span class="line">  //     optimize(ast, options);</span>
<span class="line">  //   }</span>
<span class="line"></span>
<span class="line">  // 3.通过ast 重新生成代码</span>
<span class="line">  // 我们最后生成的代码需要和render函数一样</span>
<span class="line">  // 类似_c(&#39;div&#39;,{id:&quot;app&quot;},_c(&#39;div&#39;,undefined,_v(&quot;hello&quot;+_s(name)),_c(&#39;span&#39;,undefined,_v(&quot;world&quot;))))</span>
<span class="line">  // _c代表创建元素 _v代表创建文本 _s代表文Json.stringify--把对象解析成文本</span>
<span class="line">  let code = generate(ast);</span>
<span class="line">  //   使用with语法改变作用域为this  之后调用render函数可以使用call改变this 方便code里面的变量取值</span>
<span class="line">  let renderFn = new Function(\`with(this){return \${code}}\`);</span>
<span class="line">  return renderFn;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const r=n(l,[["render",t]]),p=JSON.parse(`{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V017-vue%E6%A8%A1%E7%89%88%E7%9A%84%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86.html","title":"V017-vue模版的编译原理","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1755237773000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"6deb5d76223f5123b8c6a909eb9b48279cf2bc9e","time":1755237773000,"email":"yk4545945@163.com","author":"qdleader","message":"Merge branch 'master' of https://github.com/qdleader/qdleader"}]},"filePathRelative":"前端面试/vue篇/V017-vue模版的编译原理.md"}`);export{r as comp,p as data};
