
##先下载crypto-js
```bash
npm install crypto-js --save-dev
```

#新建一个单独的aes.js文件

```js
import CryptoJS from 'crypto-js';

let AesKey = "iam520hellomryk";
    let CBCIV = "16-Bytes--String";
    // 加密选项
    let CBCOptions = {
        iv: CryptoJS.enc.Utf8.parse(CBCIV),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }

    //加密
    export const encrypt = (data) => {
        let key = CryptoJS.enc.Utf8.parse(AesKey);
        let secretData = CryptoJS.enc.Utf8.parse(data);
        let encrypted = CryptoJS.AES.encrypt(
            secretData,
            key,
            CBCOptions
        );
        return encrypted.toString();
    }

    export const decrypt = (data) => {
        let key = CryptoJS.enc.Utf8.parse(AesKey);
        let decrypt = CryptoJS.AES.decrypt(
            data,
            key,
            CBCOptions
        );
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }

```

在引入的页面

```js
import { encrypt, decrypt } from "@/common/js/aes.js";

    // console.log(encrypt("羊羊羊呀"))
    // console.log(decrypt("Hxr4/Ulnanpb9tB38sSLJVGZQ5ccB+rkNZM4ujfNZC8="))
```

这个加密后结果是经过base64处理的，不用再用base64多进行一次编码了。
另外由于有的编码后的结果中会有+号，导致后端解析出错，可以让后端换个解码方式就可以。。
