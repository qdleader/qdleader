# cold-002实现JSON.parse

```js
function parse (json) {
    return eval("(" + json + ")");
}
```