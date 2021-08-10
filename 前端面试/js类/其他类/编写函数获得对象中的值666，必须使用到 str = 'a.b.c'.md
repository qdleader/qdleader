```
const obj = {
    a:{
        b:{
            c:666
        }
    }
}

var str = 'a.b.c';
```

##

```
let getData = (obj,str) => {
  let arr = str.split('.');
  arr.map(item => {
      obj = obj.item
  })
  return obj
}


```
