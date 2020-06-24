###prop定义尽量详细，


>细致的 prop 定义有两个好处：

>它们写明了组件的 API，所以很容易看懂组件的用法；
>在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。



#bad

props:['status'],


#good:

```
props:{
	status:String
}


```

#better:
```
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

###注意 props 会在组件实例创建之前进行校验，所以在 default 或 validator 函数里，诸如 data、computed 或 methods 等实例属性还无法使用。
