# taro中dev和线上打包不同的小程序
新建一个 setProjectConfig.js


```js
// import * as fs from 'fs';
// eslint-disable-next-line import/no-commonjs
var fs = require('fs')

const config = {}
const testAppId = 'wx1aab7b704999fc09'
const prodAppId = 'wx614f86ea71308014'
switch (process.env.TARO_APP_API) {
  case 'dev':
    config.appid = testAppId
    break
  case 'prod':
    config.appid = prodAppId
    break
  default:
    config.appid = testAppId
}



function writeJson () {
  fs.readFile('./project.config.json', function (err, data) {
    if (err) {
      return console.error(err)
    }
    var person = { ...JSON.parse(data.toString()), ...config }
    var str = JSON.stringify(person)
    fs.writeFile('./project.config.json', str, (writeFileErr) => {
      if (writeFileErr) {
        console.error(writeFileErr);
      } else {
        console.log('----------修改成功-------------');
      }
    })
  })
}

writeJson()

```

在package.json中 新增命令



```js
"build:weapp": "cross-env TARO_APP_API=prod node ./setProjectConfig.js && taro build --type weapp ",
"builddev:weapp": "taro build --type weapp ",
"dev:weapp": "cross-env TARO_APP_API=dev node ./setProjectConfig.js && npm run builddev:weapp -- --watch",
```