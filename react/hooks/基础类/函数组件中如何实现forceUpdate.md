## 方法1:


```
    const [,forceUpdate] = useReducer((x) => x + 1,0)

    const handleClick = () => {
        forceUpdate()
    }
```




## 方法二

自定义hook

```
function useForceUpdate() {
    const [state,setState] = setState(0);
    const update = useCallback(() => {
        setState((prev) => prev + 1)
    })
    return update;
}
```




