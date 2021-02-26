# 手写简易原生请求

> 简易版
```
const xhr = new XMLHttpRequest();

xhr.open('GET','/api', false);

xhr.onreadystatechange = function () {
  if(xhr.readyState == 4) {
    if(xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}

xhr.send(null)
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
