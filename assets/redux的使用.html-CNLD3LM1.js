import{_ as n,c as a,a as e,o as i}from"./app-BIm5By0_.js";const l={};function c(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="redux的使用" tabindex="-1"><a class="header-anchor" href="#redux的使用"><span>redux的使用</span></a></h1><p>redux与vuex一样是一个组件的状态（数据）管理器，当我们需要在项目各组件中共享数据时可以使用。 redux是一个第三方的库，本身和react没有任何关系，react-redux也是一个第三方库，可以帮助我们在react项目中更好的使用redux。</p><h2 id="store-状态库-用于存放组件中的state。" tabindex="-1"><a class="header-anchor" href="#store-状态库-用于存放组件中的state。"><span>store（状态库）：用于存放组件中的state。</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">   action（动作）：redux将每一次更改动作定义为一个action，如</span>
<span class="line">   const action = { type:&#39;input_change&#39;, val:123 }</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reducers-执行-是一个纯函数-将根据action的不同来修改state。" tabindex="-1"><a class="header-anchor" href="#reducers-执行-是一个纯函数-将根据action的不同来修改state。"><span>reducers（执行）：是一个纯函数，将根据action的不同来修改state。</span></a></h2><h2 id="dispatch-分发-组件中通过dispatch-action-来实现动作的提交。" tabindex="-1"><a class="header-anchor" href="#dispatch-分发-组件中通过dispatch-action-来实现动作的提交。"><span>dispatch（分发）：组件中通过dispatch(action)，来实现动作的提交。</span></a></h2><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install react react-redux --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>用react-redux管理todoList数据</p></blockquote><p>action（动作）分析：</p><pre><code>&gt; 输入框输入
&gt; 按钮提交
&gt; 列表点击删除
</code></pre><h2 id="创建action" tabindex="-1"><a class="header-anchor" href="#创建action"><span>创建action</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">import actionTypes from &#39;./actionTypes&#39;</span>
<span class="line"> </span>
<span class="line">const actionCreator = {</span>
<span class="line">  getInputChangeAction: (val) =&gt; ({</span>
<span class="line">    type: actionTypes.CHANGE_INPUT_VLAUE,</span>
<span class="line">    value: val</span>
<span class="line">  }),</span>
<span class="line">  btnClickAction: (val) =&gt; ({</span>
<span class="line">    type: actionTypes.BTN_CLICK,</span>
<span class="line">    value: val</span>
<span class="line">  }),</span>
<span class="line">  listDelAction: (val) =&gt; ({</span>
<span class="line">    type: actionTypes.LIST_DEL,</span>
<span class="line">    index: val</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"> </span>
<span class="line">export default actionCreator;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>action的type定义为常量放在actionType.js中统一管理，以避免type手写出错的可能。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">actionTypes.js</span>
<span class="line"></span>
<span class="line">const types = {</span>
<span class="line">  CHANGE_INPUT_VLAUE: &#39;change_input_value&#39;,</span>
<span class="line">  BTN_CLICK: &#39;btn_click&#39;,</span>
<span class="line">  LIST_DEL: &#39;list_del&#39;</span>
<span class="line">}</span>
<span class="line"> </span>
<span class="line">export default types;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义reducer" tabindex="-1"><a class="header-anchor" href="#定义reducer"><span>定义reducer</span></a></h2><p>reducer.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import actionTypes from &#39;./actionTypes&#39;;</span>
<span class="line"> </span>
<span class="line">const defaultState = {</span>
<span class="line">  inputValue: &#39;&#39;,</span>
<span class="line">  list: [],</span>
<span class="line">};</span>
<span class="line">export default (state = defaultState, action) =&gt; {</span>
<span class="line">  // reducer 可以接受state，但是绝不能修改state</span>
<span class="line">  const newState = JSON.parse(JSON.stringify(state));</span>
<span class="line">  switch (action.type) {</span>
<span class="line">    case actionTypes.CHANGE_INPUT_VLAUE:</span>
<span class="line">      newState.inputValue = action.value;</span>
<span class="line">      break;</span>
<span class="line">    case actionTypes.BTN_CLICK:</span>
<span class="line">      newState.list.push(action.value);</span>
<span class="line">      newState.inputValue = &#39;&#39;;</span>
<span class="line">      break;</span>
<span class="line">    case actionTypes.LIST_DEL:</span>
<span class="line">      newState.list.splice(action.index, 1);</span>
<span class="line">      break;</span>
<span class="line">    default:</span>
<span class="line">      break;</span>
<span class="line">  }</span>
<span class="line">  return newState;</span>
<span class="line">};</span>
<span class="line"> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建store" tabindex="-1"><a class="header-anchor" href="#创建store"><span>创建store</span></a></h2><p>index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createStore } from &#39;redux&#39;;</span>
<span class="line">import reducer from &#39;./reducer&#39;;</span>
<span class="line"> </span>
<span class="line">const store = createStore(reducer);</span>
<span class="line"> </span>
<span class="line">export default store;</span>
<span class="line"> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="利用react-redux" tabindex="-1"><a class="header-anchor" href="#利用react-redux"><span>利用react-redux</span></a></h2><p>index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">import { Provider } from &#39;react-redux&#39;</span>
<span class="line">import store from &#39;./store&#39;</span>
<span class="line">import TodoList from &#39;./components/TodoList&#39;;</span>
<span class="line"> </span>
<span class="line">// if (process.env.NODE_ENV === &quot;development&quot;) {</span>
<span class="line">// require(&#39;./mock/index.js&#39;);</span>
<span class="line">// }</span>
<span class="line"> </span>
<span class="line">ReactDOM.render(</span>
<span class="line">  &lt;Provider store={store}&gt;</span>
<span class="line">    &lt;TodoList /&gt;</span>
<span class="line">  &lt;/Provider&gt;,</span>
<span class="line">  document.getElementById(&#39;root&#39;)</span>
<span class="line">);</span>
<span class="line"> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React-Redux 提供Provider组件，可以让容器组件拿到state。上面代码中，Provider在根组件外面包了一层，这样一来，TodoList的所有子组件就默认都可以拿到state了。</p><h3 id="组件中创建state、dispatch的映射关系" tabindex="-1"><a class="header-anchor" href="#组件中创建state、dispatch的映射关系"><span>组件中创建state、dispatch的映射关系</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const mapStateToProps = state =&gt; {</span>
<span class="line">  return {</span>
<span class="line">    value: state.inputValue,</span>
<span class="line">    list: state.list,</span>
<span class="line">  };</span>
<span class="line">};</span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">const mapDispatchToProps = dispatch =&gt; {</span>
<span class="line">  return {</span>
<span class="line">    inputChange: e =&gt; dispatch(actions.getInputChangeAction(e.target.value)),</span>
<span class="line">    btnClick: value =&gt; dispatch(actions.btnClickAction(value)),</span>
<span class="line">    listClick: index =&gt; dispatch(actions.listDelAction(index)),</span>
<span class="line">  };</span>
<span class="line">};</span>
<span class="line"> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意思就是将state与dispatch都映射到props，那么组件内就可以直接通过props来访问。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// ui组件</span>
<span class="line">const TodoList = props =&gt; {</span>
<span class="line">  const { value, list, inputChange, btnClick, listClick } = props;</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;div&gt;</span>
<span class="line">        &lt;input onChange={inputChange} value={value}&gt;&lt;/input&gt;</span>
<span class="line">        &lt;button onClick={() =&gt; btnClick(value)}&gt;提交&lt;/button&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">        {list.map((item, index) =&gt; {</span>
<span class="line">          return (</span>
<span class="line">            &lt;li key={index} onClick={() =&gt; listClick(index)}&gt;</span>
<span class="line">              {item}</span>
<span class="line">            &lt;/li&gt;</span>
<span class="line">          );</span>
<span class="line">        })}</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">// connect连接组件</span>
<span class="line"></span>
<span class="line">export default connect(mapStateToProps, mapDispatchToProps)(TodoList);</span>
<span class="line"> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码：TodoList.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { connect } from &#39;react-redux&#39;;</span>
<span class="line">import actions from &#39;../store/actionCreator&#39;;</span>
<span class="line"> </span>
<span class="line">const mapStateToProps = state =&gt; {</span>
<span class="line">  return {</span>
<span class="line">    value: state.inputValue,</span>
<span class="line">    list: state.list,</span>
<span class="line">  };</span>
<span class="line">};</span>
<span class="line"> </span>
<span class="line">const mapDispatchToProps = dispatch =&gt; {</span>
<span class="line">  return {</span>
<span class="line">    inputChange: e =&gt; dispatch(actions.getInputChangeAction(e.target.value)),</span>
<span class="line">    btnClick: value =&gt; dispatch(actions.btnClickAction(value)),</span>
<span class="line">    listClick: index =&gt; dispatch(actions.listDelAction(index)),</span>
<span class="line">  };</span>
<span class="line">};</span>
<span class="line"> </span>
<span class="line">// todolist组件目前只有dom可以写成函数组件以提升效率；</span>
<span class="line">// ui组件</span>
<span class="line">const TodoList = props =&gt; {</span>
<span class="line">  const { value, list, inputChange, btnClick, listClick } = props;</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;div&gt;</span>
<span class="line">        &lt;input onChange={inputChange} value={value}&gt;&lt;/input&gt;</span>
<span class="line">        &lt;button onClick={() =&gt; btnClick(value)}&gt;提交&lt;/button&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">        {list.map((item, index) =&gt; {</span>
<span class="line">          return (</span>
<span class="line">            &lt;li key={index} onClick={() =&gt; listClick(index)}&gt;</span>
<span class="line">              {item}</span>
<span class="line">            &lt;/li&gt;</span>
<span class="line">          );</span>
<span class="line">        })}</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"> </span>
<span class="line">// 容器组件</span>
<span class="line">export default connect(mapStateToProps, mapDispatchToProps)(TodoList);</span>
<span class="line"> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就实现了通过react-redux管理组件状态（数据）。</p>`,32)]))}const p=n(l,[["render",c]]),r=JSON.parse('{"path":"/react/redux/redux%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"redux的使用","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1753148857000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"ac1cf3212b41ab3aca8f411ac8167254f5e148f8","time":1753148857000,"email":"yk4545945@163.com","author":"qdleader","message":"feat: 增加复制文案的兼容写法"}]},"filePathRelative":"react/redux/redux的使用.md"}');export{p as comp,r as data};
