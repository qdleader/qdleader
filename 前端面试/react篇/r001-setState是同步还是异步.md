

虽然我们讨论的是 setState 的同步异步，但这个不是 setTimeout、Promise 那种异步，只是指 setState 之后是否 state 马上变了，是否马上 render。
## 结论
**只要你进入了 react 的调度流程，那就是异步的。只要你没有进入 react 的调度流程，那就是同步的。什么东西不会进入 react 的调度流程？ setTimeout setInterval ，直接在 DOM 上绑定原生事件等。这些都不会走 React 的调度流程，你在这种情况下调用 setState ，那这次 setState 就是同步的。 否则就是异步的。**
**而 setState 同步执行的情况下， DOM 也会被同步更新，也就意味着如果你多次 setState ，会导致多次更新，这是毫无意义并且浪费性能的。**


## 原理
setState 被调用后最终会走到 scheduleUpdateOnFiber,当 react 进入它自己的调度步骤时，会给这个 executionContext 赋予不同的值，表示不同的操作以及当前所处的状态，而 executionContext 的初始值就是 NoContext ，所以只要你不进入 react 的调度流程，这个值就是 NoContext ，flushSyncCallbackQueue 里面就会去同步调用我们的 this.setState那你的 setState 就是同步的
可以在外面包一层 batchUpdates 函数，手动设置下 excutionContext 来切换成异步批量执行。

在 react18 里面，如果用 createRoot 的 api，就不会有这种问题了。
setState 是同步还是异步这个问题等 react18 普及以后就不会再有了，因为所有的 setState 都是异步批量执行了


在 react18 里面，如果用 createRoot 的 api，就不会有这种问题了。
setState 是同步还是异步这个问题等 react18 普及以后就不会再有了，因为所有的 setState 都是异步批量执行了


结束了






#### 拓展
我们梳理了下 React 的渲染流程，包括 render 阶段、commit 阶段，render 阶段是从 vdom 转 fiber，包含 schedule 和 reconcile，commit 阶段是把 fiber 更新到 dom。渲染流程的入口是 performSyncWorkOnRoot 函数。

setState 会创建 update 对象挂到 fiber 对象上，然后调度 performSyncWorkOnRoot 重新渲染。

在 react17 中，setState 是批量执行的，因为执行前会设置 executionContext。但如果在 setTimeout、事件监听器等函数里，就不会设置 executionContext 了，这时候 setState 会同步执行。可以在外面包一层 batchUpdates 函数，手动设置下 excutionContext 来切换成异步批量执行。
