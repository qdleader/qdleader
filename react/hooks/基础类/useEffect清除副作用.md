

## useEffect 清除副作用

副效应是随着组件加载而发生的，那么组件卸载时，可能需要清理这些副效应。

useEffect()允许返回一个函数，在组件卸载时，执行该函数，清理副效应。如果不需要清理副效应，useEffect()就不用返回任何值。
```js

useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    subscription.unsubscribe();
  };
}, [props.source]);
```

上面例子中，useEffect()在组件加载时订阅了一个事件，并且返回一个清理函数，在组件卸载时取消订阅。

实际使用中，由于副效应函数默认是每次渲染都会执行，所以清理函数不仅会在组件卸载时执行一次，每次副效应函数重新执行之前，也会执行一次，用来清理上一次渲染的副效应。

```js
function Test () {
    useEffect(() => {
        let timer = setInterval(() => {
            console.log('定时器');
        },1000)
        return () => {
            clearInterval(timer)
        }
    },[])
    return (
        <div>this is Children</div>
    )
}
```


## useEffect 发请求
```js

function App() {
    useEffect(() => {
        function loadData() {
            fetch('http://qdleader.com').then(
                response => response.json()
            ).then(data => {
                console.log(data);
            })
        }
        loadData()
    },[]),
    return (
        <div></div>
    )
}
```
## useEffect() 的注意点
使用useEffect()时，有一点需要注意。如果有多个副效应，应该调用多个useEffect()，而不应该合并写在一起。

```js
function App() {
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);
  useEffect(() => {
    const timeoutA = setTimeout(() => setVarA(varA + 1), 1000);
    const timeoutB = setTimeout(() => setVarB(varB + 2), 2000);

    return () => {
      clearTimeout(timeoutA);
      clearTimeout(timeoutB);
    };
  }, [varA, varB]);

  return <span>{varA}, {varB}</span>;
}

```
上面的例子是错误的写法，副效应函数里面有两个定时器，它们之间并没有关系，其实是两个不相关的副效应，不应该写在一起。正确的写法是将它们分开写成两个useEffect()。

```js

function App() {
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVarA(varA + 1), 1000);
    return () => clearTimeout(timeout);
  }, [varA]);

  useEffect(() => {
    const timeout = setTimeout(() => setVarB(varB + 2), 2000);

    return () => clearTimeout(timeout);
  }, [varB]);

  return <span>{varA}, {varB}</span>;
}

```
