

## typeof
```js
function isString(str) {
  return typeof(str) === 'string' ? true : false
} 
```

## constructor
```js
function isString(str) {
  return str.constructor === String ? true : false
}
```

## toString
```js
function isString(str) {
  return Object.prototype.toString.call(str) == '[object String]' ? true: false
}

```

