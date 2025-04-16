import{_ as r,c as a,a as t,o as i}from"./app-DFnxdJ0h.js";const c={};function f(d,e){return i(),a("div",null,e[0]||(e[0]=[t('<h1 id="r003-react的fiber架构" tabindex="-1"><a class="header-anchor" href="#r003-react的fiber架构"><span>r003-react的fiber架构</span></a></h1><h2 id="在-fiber-出现之前-react-存在什么问题" tabindex="-1"><a class="header-anchor" href="#在-fiber-出现之前-react-存在什么问题"><span>在 Fiber 出现之前 React 存在什么问题</span></a></h2><p>在 React 16 之前的版本对比更新 VirtualDOM 的过程是采用 Stack 架构实现的，也就是循环加递归。这种对比方式有一个问题，就是一旦任务开始进行就无法中断，如果应用中的组件数量庞大，Virtual DOM 的层级比较深，主线程被长期占用，直到整棵 VirtualDOM 树比对更新完成之后主线程才能被释放，主线程才能执行其他任务。这就会导致一些用户交互，动画等任务无法立即得到执行，页面就会产生卡顿, 非常的影响用户体验。 核心问题：递归无法中断，执行任务耗时长，JavaScript 是单线程的，和 Native GUI 互斥，比较 VirtualDOM 的过程中无法执行其他任务，导致任务延迟页面卡顿，用户体验差。</p><p>fiber架构是为了支持react进行可中断渲染，降低卡顿，提升流畅度。 react16之前的版本，diff虚拟dom时候是一口气完成的。这可能造成卡顿，因为人眼可识别的帧率是1s 60帧，即16ms一帧，如果diff时间超过16ms，阻塞渲染，就会感觉卡顿。 为了避免这种情况，需要让diff操作不超过16ms，如果超过16ms，就先暂停，让给浏览器进行渲染操作，后续渲染间隙再继续diff。 fiber架构就是为了支持这种“可中断渲染”而设计的。fiber tree是一种数据结构，它把虚拟dom tree连接成一个链表，从而可以让遍历操作可以支持断点重启。</p><h2 id="那么-fiber-到底是什么呢" tabindex="-1"><a class="header-anchor" href="#那么-fiber-到底是什么呢"><span>那么 Fiber 到底是什么呢？</span></a></h2><p>Fiber 是 React 的一个执行单元，在 React 16 之后，React 将整个渲染任务拆分成了一个个的小任务进行处理，每一个小任务指的就是 Fiber 节点的构建。 拆分的小任务会在浏览器的空闲时间被执行，每个任务单元执行完成后，React 都会检查是否还有空余时间，如果有就交换主线程的控制权。</p><p>可以总结一下了：React Fiber是React 16提出的一种更新机制，使用链表取代了树，将虚拟dom连接，使得组件更新的流程可以被中断恢复；它把组件渲染的工作分片，到时会主动让出渲染主线程。</p><h2 id="fiber-tree" tabindex="-1"><a class="header-anchor" href="#fiber-tree"><span>fiber tree</span></a></h2><p>diff的工作就是遍历虚拟dom树，因此让diff工作能够支持断点重启，就是让遍历操作能够支持断点重启。 为此，React设计了fiber tree数据结构，每个fiber tree的node都有3个属性：return（指向父节点）、sibling（指向右兄弟节点）、child（指向第一个子节点）。 如何通过这几个属性遍历呢？</p><p>通过上面的分析可以看出，fiber tree并非通过严格的链表来进行遍历，它也是一个树的结构，它的遍历过程和深度优先遍历一个树没有区别，区别在于加了几个属性指向相关节点，让遍历可以暂停和重启，很方便地找到一个节点的DFS下一个节点。 fiber可以理解是一种数据结构，是一个树的结构，fiber节点记录的是操作，包括将要进行的操作和已经完成的操作。而fiber架构是包含数据结构和调度机制的一个整体。 diff过程 使用fiber架构进行diff工作和之前有所不同。 在render函数中创建的React Element树在第一次渲染的时候会创建一棵结构一模一样的Fiber节点树。不同的React Element类型对应不同的Fiber节点类型。一个React Element的工作就由它对应的Fiber节点来负责。 一个React Element可以对应不止一个Fiber，因为Fiber在update的时候，会从原来的Fiber（我们称为current）clone出一个新的Fiber（我们称为alternate）。两个Fiber diff出的变化（side effect）记录在alternate上。所以一个组件在更新时最多会有两个Fiber与其对应，在更新结束后alternate会取代之前的current的成为新的current节点。 上面提到时间分片的计算方法，React会记录diff操作时间，如果大于一帧的渲染时间则暂停，然后等待下个渲染间隙再继续执行diff操作，直到diff完成。这个机制由调度器来完成。 基于requestIdleCallback实现的。实际上React为了照顾绝大多数的浏览器，自己实现了requestIdleCallback。）具体来说，react fiber是通过requestIdleCallback这个api去控制的组件渲染的“进度条”。 requesetIdleCallback是一个属于宏任务的回调，就像setTimeout一样。不同的是，setTimeout的执行时机由我们传入的回调时间去控制，requesetIdleCallback是受屏幕的刷新率去控制。本文不对这部分做深入探讨，只需要知道它每隔16ms会被调用一次，它的回调函数可以获取本次可以执行的时间，每一个16ms除了requesetIdleCallback的回调之外，还有其他工作，所以能使用的时间是不确定的，但只要时间到了，就会停下节点的遍历。</p><p>Fiber的基本规则：更新任务分成两个阶段，Reconciliation Phase和Commit Phase。Reconciliation Phase的任务干的事情是，找出要做的更新工作（Diff Fiber Tree），就是一个计算阶段，计算结果可以被缓存，也就可以被打断；Commmit Phase 需要提交所有更新并渲染，为了防止页面抖动，被设置为不能被打断。</p><p>注意，这种改动带来的问题是，有些生命周期钩子可能被执行多次，因此使用时候需要保证这些生命周期钩子中执行的方法多次调用不会影响逻辑。 React团队提供了替换的生命周期方法。建议如果使用以上方法，尽量用纯函数。 简单地说，diff过程是</p><p>首次渲染时候构建一个和虚拟dom树一样结构的fiber树 组件更新时候，遍历新旧fiber树，diff区别，diff操作是分片进行，16ms内如果没完成，就先暂停等待下个渲染空闲时间再继续。 diff完成之后进行commit，将变化提交，进行对应的dom操作，为防止界面抖动，commit是一次性完成的。</p><h2 id="react不如vue" tabindex="-1"><a class="header-anchor" href="#react不如vue"><span>react不如vue？</span></a></h2><p>我们现在已经知道了react fiber是在弥补更新时“无脑”刷新，不够精确带来的缺陷。这是不是能说明react性能更差呢？ 并不是。孰优孰劣是一个很有争议的话题，在此不做评价。因为vue实现精准更新也是有代价的，一方面是需要给每一个组件配置一个“监视器”，管理着视图的依赖收集和数据更新时的发布通知，这对性能同样是有消耗的；另一方面vue能实现依赖收集得益于它的模版语法，实现静态编译，这是使用更灵活的JSX语法的react做不到的</p><p>react因为先天的不足——无法精确更新，所以需要react fiber把组件渲染工作切片；而vue基于数据劫持，更新粒度很小，没有这个压力； react fiber这种数据结构使得节点可以回溯到其父节点，只要保留下中断的节点索引，就可以恢复之前的工作进度。</p>',16)]))}const b=r(c,[["render",f]]),l=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/react%E7%AF%87/r003-react%E7%9A%84fiber%E6%9E%B6%E6%9E%84.html","title":"r003-react的fiber架构","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/react篇/r003-react的fiber架构.md"}');export{b as comp,l as data};
