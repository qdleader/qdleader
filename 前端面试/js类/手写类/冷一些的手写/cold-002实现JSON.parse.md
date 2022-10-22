## cold-002实现JSON.parse

```
function parse (json) {
    return eval("(" + json + ")");
}
```