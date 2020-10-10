# 获取dom的几种方法★


## 1.通过id获取
```
<div id="box"></div>


document.getElementById("box")
```


## 2.通过class获取

```
<div class="box"></div>
<div class="box"></div>



let boxList = document.getElementsByClassName('box')
let box1 = boxList[0]
let box2 = boxList[1]

```


## 3.通过标签名获取
```
<div id="box">
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
</div>


let pCollection = document.getElementsByTagName("p")
```

## 4.通过name属性获取

```
<div id="box">
    <input type="text" name="user" />
</div>



let userInput = document.getElementsByName("user")
```


## 5.通过querySelector获取

```
<div id="box"></div>


let box = document.querySelector("#box")
```


## 6.通过querySelectorAll获取
```
<div class="box">box1</div>
<div class="box">box2</div>
<div class="box">box3</div>
<div class="box">box4</div>
<div class="box">box5</div>
<script>
    let box1= document.querySelector(".box");
    querySelector 只是获取的第一个


    let boxes= document.querySelectorAll(".box");
    querySelectorAll 获取的是全部。

``` 



除了常用的还有

## 7.获取html的方法

```
document.documentElement

是专门获取html这个标签的

```






## 8.获取body的方法（document.body）

```
document.body

是专门获取body这个标签的。

```