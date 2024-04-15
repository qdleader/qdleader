

文字倾斜
```js

xAxis: {
    type: "category",
    data: ['小明','小红','小亮','小李','小王'],
    axisLabel: {
        interval: 0,
        rotate: -80,
    },
},
```


 当字数超出10个的时候，选取前接省略五个字然后拼号


 ```js
 axisLabel:{
    formatter: function (value, index) {
        if(value.length>10){
            return value.substr(0,5)+'...'
        }else{
            return value
        }
    }
},
 ```

```js
xAxis: {
    type: "category",
    data: ['小明','小红','小亮','小李','小王'],
    axisLabel: {
        rotate: -80,
        formatter: function (value) {
            if (value.length > 10) {
                return value.substr(0, 5) + "..."
            } else {
                return value
            }
        },
    },
},

```

