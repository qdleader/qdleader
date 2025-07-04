import{_ as s,c as e,a,o as i}from"./app-B--KPTI1.js";const l={};function d(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h2 id="接口类型" tabindex="-1"><a class="header-anchor" href="#接口类型"><span>接口类型</span></a></h2><h3 id="可选属性" tabindex="-1"><a class="header-anchor" href="#可选属性"><span>可选属性</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">interface IState {</span>
<span class="line">    name: string,</span>
<span class="line">    age?:number  //可有可无</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let obj: IState</span>
<span class="line">obj = {</span>
<span class="line">    name: &#39;qdleader&#39;,</span>
<span class="line">    age:12</span>
<span class="line">} </span>
<span class="line">obj = {</span>
<span class="line">    name: &#39;qdleader&#39;,</span>
<span class="line">} </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="属性个数不确定时候" tabindex="-1"><a class="header-anchor" href="#属性个数不确定时候"><span>属性个数不确定时候</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">interface IState2 {</span>
<span class="line">    name: string,</span>
<span class="line">    age: number,</span>
<span class="line">    [propName:string]:any</span>
<span class="line">}</span>
<span class="line">let obj2: IState2 = {</span>
<span class="line">    name: &#39;qdleader&#39;,</span>
<span class="line">    age: 12,</span>
<span class="line">    sex:&#39;male&#39;,</span>
<span class="line">    isMarry:true</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性"><span>只读属性</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">interface IState3 {</span>
<span class="line">    readonly name: string,</span>
<span class="line">}</span>
<span class="line">let obj3: IState3</span>
<span class="line">obj3 = {</span>
<span class="line">     name: &#39;qdleader&#39;,</span>
<span class="line">} </span>
<span class="line">obj3.name = &#39;qdleader1&#39; // name 一旦定义赋值了就禁止修改</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口继承" tabindex="-1"><a class="header-anchor" href="#接口继承"><span>接口继承</span></a></h2><p>如果两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来，通过继承来实现复用</p><p>语法：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">interface 接口2 extends 接口1 {</span>
<span class="line">    属性1： 类型1， // 接口2中特有的类型 </span>
<span class="line"> }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">interface a { </span>
<span class="line">    x: number; </span>
<span class="line">    y: number </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 继承 a</span>
<span class="line">// 使用 extends(继承)关键字实现了接口</span>
<span class="line">interface b extends a {</span>
<span class="line">  z: number</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// 继承后，b 就有了 a 的所有属性和方法(此时，b 同时有 x、y、z 三个属性)</p><h2 id="接口和类型-的区别" tabindex="-1"><a class="header-anchor" href="#接口和类型-的区别"><span>接口和类型 的区别</span></a></h2><p>interface（接口）和 type（类型别名）的对比：</p><p>相同点：都可以给对象指定类型</p><p>不同点: 接口，只能为对象指定类型。它可以继承。 类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名</p><p>先有的 interface，后有的 type,推荐使用 type // 接口的写法------------- interface IPerson { name: string, age: number }</p><p>const user1：IPerson = { name: &#39;a&#39;, age: 20 }</p><p>// type的写法------------- type Person = { name: string, age: number } const user2：Person = { name: &#39;b&#39;, age: 20 }</p>`,20)]))}const p=s(l,[["render",d]]),t=JSON.parse('{"path":"/Typescript/ts%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%8E%A5%E5%8F%A3%E5%B1%9E%E6%80%A7.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1751593802000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3ed7ece53189e584b32f934a400de1f057911f25","time":1751593802000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(es6): 添加ES2025模式匹配文档示例"}]},"filePathRelative":"Typescript/ts的对象接口属性.md"}');export{p as comp,t as data};
