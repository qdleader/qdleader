```
var name = 222

var a = {
  name: 111,
  say: function() {
    console.log(this.name)
  }
}

var fun  = a.say
fun()
a.say()

var b = {
  name: 333,
  say: function (fun) {
    fun()
  }
}

b.say(a.say)

b.say = a.say
b.say()
```

答案

```
222
111


222
333

```
