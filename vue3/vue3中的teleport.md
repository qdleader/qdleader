
什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。





```
<teleport to="body">
    <div  class="mask">
        <div class="dialog">
            <h3>我是一个弹窗</h3>
            <h4>一些内容</h4>
            <h4>一些内容</h4>
            <h4>一些内容</h4>
            <button @click="isShow = false">关闭弹窗</button>
        </div>
    </div>
</teleport>
```

一言以蔽之
<teleport to="body">
相当于  element的 append-to-body


这里的移动位置可以是body，也可以是某些css选择器
比如：
<teleport to="#app">

