# 子应用中用不了jsonp
## 简而言之 ，父应用中 引入 fetch-jsonp，传到子应用中

父应用

在父应用中：
安装：
```js
npm i fetch-jsonp
```

在registerApps.js（注册qiankun）文件中：

```js
// 引入fetch-jsonp
import  fetchJsonp  from  fetch-jsonp;
// 注册qiankun
import { registerMicroApps } from 'qiankun';
registerMicroApps([
  {
    name: 'fetchJsonp',
    entry: `path/`,
    container: '#subContainer',
    activeRule: '/microFetchJsonp',
    loader,
    props: {
      // 重点1：把fetchJsonp传递给子应用
      fetchJsonp
    }
  },
]);

```

子应用

main.js 中挂在到window
```js
export async function mount(props: any) {
  console.log("[vue] props from main framework", props)
  window.fetchJsonp = props.fetchJsonp
  render(props)

  // 子应用登录
  interface State {
    // loginData: {
    //   ssss: string
    //   token: string
    // }
    userInfo: {
      userName: string
      userId: string
      phone: string
    }
  }
  qiankunActions.onGlobalStateChange((state: State) => {
    if (state.userInfo) {
      // 用户信息
      store.dispatch("syncSetUserInfo", state.userInfo)
      // 水印信息
      const content = state.userInfo.userName + state.userInfo.phone.slice(-4)
      store.dispatch("asyncSetWatermarkInfo", {
        content
      })
    }
  })
}
```

## 使用

```js
window
  .fetchJsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=php", {
    jsonpCallback: "cb"
  })
  .then(function (resoonse) {
    console.log(12345, resoonse.json())
    return resoonse.json()
  })
  .then((data) => {
    console.log(111, data)
  })
  .catch((error) => {
    console.log(222, error)
  })
</script>

```

结束

再放一个可访问的地址的jq版 -.-
```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>
    <script>
      window.onload = function () {
        jQuery.ajax({
          url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=php", //单点登录的管理平台报表服务器
          timeout: 5000, //超时时间（单位：毫秒）
          dataType: "jsonp", //跨域采用jsonp方式
          jsonp: "cb",
          success: function (res) {
            console.log(res);
            if (res.errorCode) {
              window.alert(res.errorMsg);
            } else {
              // 保存token并跳转到对应链接
              //   window.location.href =
              //     "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=php";
            }
          },
          error: function () {
            alert("超时或服务器其他错误"); // 登录失败（超时或服务器其他错误）
          },
        });
      };
    </script>
  </body>
</html>

```
