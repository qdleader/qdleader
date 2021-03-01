

```
const xhr = new XMLHttpRequest();
xhr.open("POST",'/login', true);  //true代表异步，false代表同步
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
}

const data = {
  userName:'qdleader'
}

xhr.send(JSON.stringify(data))
```

> 稍微完善版
```

var xhr=null;
if(window.XMLHttpRequest){
    xhr=new xmlHttpRequest();
}
else if(window.ActiveXObject){
    xhr=new ActiveXObject("Micosoft.XMLHTTP");
}
else{
    xhr=null:
}
if(xhr){
    xhr.open("GET",url);
    xhr.onreadyStatechange=function(){
    if(xhr.readystate==4&&xhr.status==200){
        console.log(xhr.data):
        }
        xhr=null;
    };
    xhr.send();
}
```


# 延伸

xhr.status 的一些典型的错误

```
2xx -- 请求成功
3xx -- 需要重定向，浏览器跳转301， 302 ， 304
4xx -- 客户端错误 404 403
5xx -- 服务端错误
```


xhr.readyState （了解即可）

```
0 -- (未初始化) 还没有调用send()方法

1 -- (载入) 已调用send()方法，正在发送请求

2 -- （载入完成） send方法执行完成，已接收到全部响应内容

3 -- （交互）正在解析响应内容。

4 -- （完成）响应内容解析完成，可以在客户端调用

```
