
### 下载
```
npm install jssha -D
```

### 使用

```
 import jsSHA from "jssha"      //module



 // 大写的sha1 加密串
 function getsignUpper (sign: any) {
     let shaObj = new jsSHA("SHA-1","TEXT",{encoding:"UTF8"})
     shaObj.update(sign);
     return shaObj.getHash("HEX").toUpperCase() ;
 }

 // 小写的sha1 加密串
 function getsign (sign: any) {
     let shaObj = new jsSHA("SHA-1","TEXT",{encoding:"UTF8"})
     shaObj.update(sign);
     return shaObj.getHash("HEX") ;
 }


 console.log("加密好的内容":getsign("qdleader"))
```
