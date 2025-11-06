# 函数组件中如何实现forceUpdate
## 方法1:

```js
    const [,forceUpdate] = useReducer((x) => x + 1,0)

    const handleClick = () => {
        forceUpdate()
    }
```

## 方法二

自定义hook

```js
function useForceUpdate() {
    const [state,setState] = setState(0);
    const update = useCallback(() => {
        setState((prev) => prev + 1)
    })
    return update;
}
```
