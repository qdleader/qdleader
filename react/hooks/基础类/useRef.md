
useRef 获取dom

```
function App() {
    const testRef = React.useRef(null)
    const h1Ref = React.useRef(null)

    useEffect(() => {
        console.log(testRef.current);
        console.log(h1Ref.current);
    })

    return (
        <div>
            <TestC ref={testRef} />
            <h1 ref={h1Ref}>this is h1</h1>
        </div>
    )
}
```