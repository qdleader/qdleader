
```
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