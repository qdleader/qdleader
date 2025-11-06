#des 加密

##先下载crypto-js
```bash
npm install crypto-js --save-dev
```

#新建一个单独的aes.js文件

```js
import CryptoJS from 'crypto-js';
//DES加密
export const encryptBy = (message) => {
    var key = 'l2345678';
    function encryptByDES (message, key) {
      var keyHex = CryptoJS.enc.Utf8.parse(key)
      var option = {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7}
      var encrypted = CryptoJS.DES.encrypt(message, keyHex, option)
    //   var encrypted = CryptoJS.DES.encrypt(message, key, option)
      return encrypted.ciphertext.toString()
    }
    return encryptByDES(message, key);
}
//DES解密
export const decryptBy = (message) => {
    var key = 'l2345678';
    //DES  ECB模式解密
    function decryptByDES(message,key){
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Hex.parse(message)
    }, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    });
    var result_value = decrypted.toString(CryptoJS.enc.Utf8);
    return result_value;
    }
    return decryptByDES(message, key);
}

// console.log(encryptBy('123456'));//加密
//  console.log(decryptBy('103e702e0737327c'));//解密

```

在引入的页面

```js
import { encryptBy, decryptBy } from "@/common/js/des.js";

    // console.log(encryptBy("羊羊羊呀"))
    // console.log(decryptBy("Hxr4/Ulnanpb9tB38sSLJVGZQ5ccB+rkNZM4ujfNZC8="))
```

<!-- 待完善 -->
