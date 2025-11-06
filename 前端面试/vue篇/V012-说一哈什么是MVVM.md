# V012-说一哈什么是 MVVM

> MVVM 是 Model-View-ViewModel 缩写，也就是把 MVC 中的 Controller 演变成 ViewModel。Model 层代表数据模型，
> View 代表 UI 组件，ViewModel 是 View 和 Model 层的桥梁，数据会绑定到 viewModel 层并自动将数据渲染到页面中，
> 视图变化的时候会通知 viewModel 层更新数据。

## mvvm 的优点：

> 低耦合，视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的”View”上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。

> 可重用性，可以把一些视图逻辑放在一个 ViewModel 里面，让很多 view 重用这段视图逻辑。

> 独立开发，开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用 Expression Blend 可以很容易设计界面并生成 xml 代码。

> 可测试，界面向来是比较难于测试的，而现在测试可以针对 ViewModel 来写。

## mvvm 的核心：

MVVM 的核心是数据劫持、数据代理、数据编译和"发布订阅模式"。数据劫持就是给对象属性添加 get,set 钩子函数，数据代理是将 data , methods , compted 上的数据挂载到 vm 实例上，数据编译是把{{}} , v-model , v-html , v-on ,里面的对应的变量用 data 里面的数据进行替换，发布订阅主要靠的是数组关系，订阅就是放入函数（就是将订阅者添加到订阅队列中），发布就是让数组里的函数执行（在数据发生改变的时候，通知订阅者执行相应的操作）
