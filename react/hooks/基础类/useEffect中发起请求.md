

```
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