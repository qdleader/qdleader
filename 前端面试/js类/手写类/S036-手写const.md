```
function __const(data, value) {
    window[data] = value // 把要定义的data挂载到window下，并赋值value
	let c=1
    Object.defineProperty(window, data, { 
        enumerable: true, // 可枚举
        configurable: false, // 可配置
        get: function () {
			return value
        },
        set: function (newVal) {
			if(c>=1) throw new TypeError('Assignment to constant variable')
           c++
		   value = newVal
        }
    })
}
__const('a', 10)
a = 10 // 报错
console.log(a)

```