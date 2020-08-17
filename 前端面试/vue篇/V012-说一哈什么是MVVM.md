# V012-说一哈什么是MVVM

> MVVM是Model-View-ViewModel缩写，也就是把MVC中的Controller演变成ViewModel。Model层代表数据模型，
> View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，
> 视图变化的时候会通知viewModel层更新数据。



# mvvm的优点：

> 低耦合，视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的”View”上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。

> 可重用性，可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。

> 独立开发，开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xml代码。

> 可测试，界面向来是比较难于测试的，而现在测试可以针对ViewModel来写。
