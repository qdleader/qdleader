

在render 执行之后，会执行componentDidMount，在里面执行setState，会再次调用render，浏览器渲染只会渲染render第二次返回的执行，避免了闪屏。

而 useEffect 是在真实dom 渲染完成之后才执行的，里面更改state 值会造成二次渲染，有可能闪屏。

componentDidMount 实际与 useLayoutEffect 类似，都是同步任务，阻塞真实dom的渲染。