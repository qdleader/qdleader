# r008-react18 有哪些更新

## React18有哪些更新？


#### 1. 更新 render API
v18 使用 ReactDOM.createRoot() 创建一个新的根元素进行渲染，使用该 API，会自动启用并发模式。
使用旧的 API 仍然兼容，只有在使用 createRoot 了之后才会有 React 18 的新特性。

引入了新的root API，支持new concurrent renderer(并发模式的渲染)
```js
//React 17
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const root = document.getElementById("root")
ReactDOM.render(<App/>,root)

// 卸载组件
ReactDOM.unmountComponentAtNode(root)  

// React 18
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
const root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App/>)

// 卸载组件
root.unmount()  
```



## 2. setState自动批处理

在react17中，只有react事件会进行批处理，原生js事件、promise，setTimeout、setInterval不会
react18，将所有事件都进行批处理，即多次setState会被合并为1次执行，提高了性能，在数据层，将多个状态更新合并成一次处理（在视图层，将多次渲染合并成一次渲染）
```ts
// v17
const handleBatching = () => {
  // re-render 一次，这就是批处理的作用
  setCount((c) => c + 1)
  setFlag((f) => !f)
}

// re-render两次
setTimeout(() => {
   setCount((c) => c + 1)
   setFlag((f) => !f)
}, 0)


// v18
const handleBatching = () => {
  // re-render 一次
  setCount((c) => c + 1)
  setFlag((f) => !f)
}
// 自动批处理：re-render 一次
setTimeout(() => {
   setCount((c) => c + 1)
   setFlag((f) => !f)
}, 0)

```

如果在某些场景不想使用批处理，可以使用 flushSync退出批处理，强制同步执行更新。

flushSync 会以函数为作用域，函数内部的多个 setState 仍然是批量更新

```ts
import React,{useState} from "react"
import {flushSync} from "react-dom"

const App=()=>{
  const [count,setCount]=useState(0)
  const [count2,setCount2]=useState(0)

  return (
    <div className="App">
      <button onClick=(()=>{
        // 第一次更新
        flushSync(()=>{
          setCount(count=>count+1)
        })
        // 第二次更新
        flushSync(()=>{
          setCount2(count2=>count2+1)
        })
      })>点击</button>
      <span>count:{count}</span>
      <span>count2:{count2}</span>	
    </div>	
  )
}
export default App
```




### 3. Suspense 支持 SSR
SSR 一次页面渲染的流程：

服务器获取页面所需数据
将组件渲染成 HTML 形式作为响应返回  
客户端加载资源
（hydrate）执行 JS，并生成页面最终内容

上述流程是串行执行的，v18前的 SSR 有一个问题就是它不允许组件"等待数据"，必须收集好所有的数据，才能开始向客户端发送HTML。如果其中有一步比较慢，都会影响整体的渲染速度。
v18 中使用并发渲染特性扩展了Suspense的功能，使其支持流式 SSR，将 React 组件分解成更小的块，允许服务端一点一点返回页面，尽早发送 HTML和选择性的 hydrate， 从而可以使SSR更快的加载页面
```tsx
<Suspense fallback={<Spinner />}>
  <Comments />
</Suspense>
```


### 4. startTransition

startTransition API 允许将更新标记为非紧急事件处理，被startTransition包裹的会延迟更新的state，期间可能被其他紧急渲染所抢占。因为 React 会在高优先级更新渲染完成之后，才会渲染低优先级任务的更新



### 5. useDeferredValue

useDeferredValue 和 useTransition 一样，都是标记了一次非紧急更新。useTransition是处理一段逻辑，而useDeferredValue是产生一个新状态，它是延时状态，这个新的状态则叫 DeferredValue。所以使用useDeferredValue可以推迟状态的渲染



这样一看，useDeferredValue直观就是延迟显示状态，那用防抖节流有什么区别呢？
如果使用防抖节流，比如延迟300ms显示则意味着所有用户都要延时，在渲染内容较少、用户CPU性能较好的情况下也是会延迟300ms，而且你要根据实际情况来调整延迟的合适值；但是useDeferredValue是否延迟取决于计算机的性能。


```ts

import { useState, useMemo, useDeferredValue } from "react";

const numbers = [...new Array(200000).keys()];

export default function App() {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <input type="number" onChange={handleChange} value={query} />
            <List query={query} />
        </div>
    );
}

function List(props) {
    const { query } = props;
    const defQuery = useDeferredValue(query);

    const list = useMemo(() => (
        numbers.map((i, index) => (
            defQuery
                ? i.toString().startsWith(defQuery)
                && <p key={index}>{i}</p>
                : <p key={index}>{i}</p>
        ))
    ), [defQuery]);

    return (
        <div>
            {list}
        </div>
    );
}

```


useTransition直接控制更新状态的代码，而useDeferredValue控制一个受状态变化影响的值。它们做的是同样的事,帮助提高用户体验(UX)，

### 6.支持useId

在服务器和客户端生成相同的唯一一个id，避免hydrating的不兼容

## 7.react组件返回值更新


在react17中，返回空组件只能返回null，显式返回undefined会报错
在react18中，支持null和undefined返回


### 8.去掉了对IE浏览器的支持，react18引入的新特性全部基于现代浏览器，如需支持需要退回到react17版本

## 9.strict mode更新

当你使用严格模式时，React会对每个组件返回两次渲染，以便你观察一些意想不到的结果,在react17中去掉了一次渲染的控制台日志，以便让日志容易阅读。react18取消了这个限制，第二次渲染会以浅灰色出现在控制台日志

Suspense不再需要fallback捕获


## 6.useSyncExternalStore

用于解决外部数据撕裂问题

## 7.useInsertionEffect

这个hooks只建议在css in js库中使用，这个hooks执行时机在DOM生成之后，useLayoutEffect执行之前，它的工作原理大致与useLayoutEffect相同，此时无法访问DOM节点的引用，一般用于提前注入脚本

## 8.Concurrent Mode

并发模式不是一个功能，而是一个底层设计。
它可以帮助应用保持响应，根据用户的设备性能和网速进行调整，它通过渲染可中断来修复阻塞渲染机制。在concurrent模式中，React可以同时更新多个状态
区别就是使同步不可中断更新变成了异步可中断更新
useDeferredValue和startTransition用来标记一次非紧急更新

