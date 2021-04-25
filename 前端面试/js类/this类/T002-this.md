
下面问题打印什么？

```
<div id="btn">
  按钮
</div>


    <script type="text/javascript">
        var btn = document.getElementById('btn')

        var str = 'hh';

        (function() {
          console.log(1,this)
        })()

        setTimeout(function() {
          console.log(2,this)
        },1000)

        btn.onclick = function() {
          console.log(3,this)
          setTimeout(function() {
            console.log(4,this)
          },1000)
        }

        var Cat = function() {
          this.str = 'bb'
        }

        Cat.prototype.say = function() {
          console.log(5,this.str)
          setTimeout(function() {
            console.log(6,this.str)
          },1000)
          setTimeout(() => {
            console.log(7,this.str)
          },1000)
        }

        var cat = new Cat()
        cat.say()

    </script>
```

结果
```
1, window
5, bb
2, window
6, hh
7, bb
```



如果用户点击了按钮再输出
```
3,<div id="btn">
  按钮
</div>

4,window
```
