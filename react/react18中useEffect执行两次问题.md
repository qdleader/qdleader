

严格模式(Strict Mode)
什么是严格模式
strict mode就是一个工具，用来检查应用中可能存在的问题。 严格模式只会在开发环境下运行，在生产环境下它是没有影响的。


为了让开发者不要忽视useEffect的清除函数的重要性，所以React将Effect设置成执行两次，就是为了让问题提前暴露出来。React还认为Effect执行两次在大部分情况下是没有问题的

非严格模式
```js
* React mounts the component. //挂载组件
  * Layout effects are created. //layout执行
  * Effects are created. //Effects执行
```

严格模式
```js
* React mounts the component. //挂载组件
    * Layout effects are created. //layout执行
    * Effect effects are created. // Effects执行
* React simulates effects being destroyed on a mounted component. //React模拟组件销毁
    * Layout effects are destroyed. // layout销毁
    * Effects are destroyed.       // Effects销毁
* React simulates effects being re-created on a mounted component. // React模拟重新挂载
    * Layout effects are created  // layout重新创建
    * Effect setup code runs     //  Effect重新执行
```



如何在应用中处理Effect执行两次的问题
React认为执行两次在大多数情况下并没有有什么影响，我们应该考虑的是在重新挂载之后，如何让Effect正确的执行，而不是怎么才能让Effect执行一次。下面我们看些优化的场景。
## 请求数据
我们可以通过一个变量来控制请求的时候只发出去一次，也可以通过取消请求的方式来进行改善。
```js
useEffect(() => {  
    let ignore = false;  
    async function startFetching() {  
        const json = await fetchTodos(userId);  
        if (!ignore) { 
            setTodos(json);  
        }  
}  

    startFetching();  
    return () => {  
       ignore = true;  
    };  
}, [userId]);
```
## 弹窗问题
在第二次挂载之前，将弹窗close掉，就不会有两次调用showModal()的问题了
```js
useEffect(() => {  
    const dialog = dialogRef.current;  
    dialog.showModal();  
    return () => dialog.close();  
}, []);


```
## Not an Effect: Buying a product
不知道标题怎么翻译比较合适，直接拿过来用吧
```js
useEffect(() => {  
    fetch('/api/buy', { method: 'POST' });  
}, []);
```
React认为在useEffect里面发送post请求是不正确的，这种需求场景是不存在的。你应该是在点击事件中发送某个post请求，而不是直接在useEffect里面。
## setTimeout
记得在useEffect里面取消定时器
```js
  useEffect(() => {
    function onTimeout() {
      console.log('⏰ ' + text);
    }

    console.log('⏰  Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('⏰  Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  }, [text]);
```