# VC003-vue 的模版引擎用的是哪一个

vue 的模板语法使用的是 mustache

mustache：双花括号语法

## mustache 语法

### 循环对象数组：

```html
   <div id="container">
        <ul>
            <li>
                <div class="hd">小明的基本信息</div>
                <div class="bd">
                    <p>姓名：小明</p>
                    <p>年龄：12</p>
                    <p>性别：男</p>
                </div>
            </li>
            <li>
                <div class="hd">小红的基本信息</div>
                <div class="bd">
                    <p>姓名：小红</p>
                    <p>年龄：11</p>
                    <p>性别：女</p>
                </div>
            </li>
            <li>
                <div class="hd">小强的基本信息</div>
                <div class="bd">
                    <p>姓名：小强</p>
                    <p>年龄：13</p>
                    <p>性别：男</p>
                </div>
            </li>
        </ul>
    </div>
</body>
<script src="../js/mustache.js"></script>
<script>
    var templateStr = `
        <ul>
            {{#arr}}
                <li>
                    <div class="hd">{{name}}的基本信息</div>
                    <div class="bd">
                        <p>姓名：{{name}}</p>
                        <p>性别：{{sex}}</p>
                        <p>年龄：{{age}}</p>
                    </div>
                </li>
            {{/arr}}
        </ul>
    `;

    var data = {
        arr: [{
                "name": "小明",
                "age": 12,
                "sex": "男"
            },
            {
                "name": "小红",
                "age": 11,
                "sex": "女"
            },
            {
                "name": "小强",
                "age": 13,
                "sex": "男"
            },
        ]
    };

    var domStr = Mustache.render(templateStr, data);
    var dom = document.getElementById("container");
    dom.innerHTML = domStr;
    console.log(domStr);
</script>

```

### （2）数组嵌套：

```html
<div id="container">

</div>
</body>
<script src="../js/mustache.js"></script>
<script>
    var templateStr = `
        <ul>
        {{#arr}}
            <li>{{name}}的爱好是：
                <ol>{{#hobbies}}
                        <li>{{.}}</li>
                    {{/hobbies}}
                </ol>
            </li>
        {{/arr}}
        </ul>
    `;

    var data = {
        arr:[
            {"name":"小明","age":12,"hobbies":["游泳","羽毛球"]},
            {"name":"小红","age":11,"hobbies":["编程","弹钢琴"]},
            {"name":"小强","age":13,"hobbies":["游泳","羽毛球"]}
        ]
    };

    var domStr = Mustache.render(templateStr,data);
    var dom = document.getElementById("container");
    dom.innerHTML = domStr;
    console.log(domStr);
</script>

```

### （3）不循环对象数组：

```html
<div id="container">

</div>
</body>
<script src="../js/mustache.js"></script>
<script>
    var templateStr = `
        <h1>我买了一个{{thing}},好{{mood}}啊！</h1>
    `;

    var data = {
        thing:"华为手机",
        mood:"心情"
    };

    var domStr = Mustache.render(templateStr,data);
    var dom = document.getElementById("container");
    dom.innerHTML = domStr;
    console.log(domStr);
</script>

```

### （4）循环简单数组：

```html
<div id="container">

</div>
</body>
<script src="../js/mustache.js"></script>
<script>
    var templateStr = `
        <ul>
        {{#arr}}
            <li>{{.}}</li>
        {{/arr}}
        </ul>
    `;

    var data = {
        arr:["A","B","C"]
    };

    var domStr = Mustache.render(templateStr,data);
    var dom = document.getElementById("container");
    dom.innerHTML = domStr;
    console.log(domStr);
</script>

```

### （5）布尔值：

data 里面 m 的 true、false 可以控制文本内容的显示。

```html
<div id="container">

</div>
</body>
<script src="../js/mustache.js"></script>
<script>
    var templateStr = `
        {{#m}}
            <h1>您好</h1>
        {{/m}}
    `;

    var data = {
        m:true
    };

    var domStr = Mustache.render(templateStr,data);
    var dom = document.getElementById("container");
    dom.innerHTML = domStr;
    console.log(domStr);
</script>

```
