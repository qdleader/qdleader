# 无感刷新token

对于需要前端实现无痛刷新Token，无非就两种：

> 请求前判断Token是否过期，过期则刷新
> 请求后根据返回状态判断是否过期，过期则刷新

## 判断Token是否过期

没过期则正常处理
过期则发起刷新Token的请求
拿到新的Token保存
重新发送Token过期这段时间内发起的请求

#### 重点：

保持Token过期这段时间发起请求状态（不能进入失败回调）
把刷新Token后重新发送请求的响应数据返回到对应的调用者

#### 实现

创建一个flag isRefreshing 来判断是否刷新中
创建一个数组队列retryRequests来保存需要重新发起的请求
判断到Token过期
isRefreshing = false 的情况下 发起刷新Token的请求
刷新Token后遍历执行队列retryRequests
isRefreshing = true 表示正在刷新Token，返回一个Pending状态的Promise,并把请求信息保存到队列retryRequests中

```js
import axios from "axios";
import Store from "@/store";
import Router from "@/router";
import { Message } from "element-ui";
import UserUtil from "@/utils/user";

// 创建实例
const Instance = axios.create();
Instance.defaults.baseURL = "/api";
Instance.defaults.headers.post["Content-Type"] = "application/json";
Instance.defaults.headers.post["Accept"] = "application/json";

// 定义一个flag 判断是否刷新Token中
let isRefreshing = false;
// 保存需要重新发起请求的队列
let retryRequests = [];

// 请求拦截
Instance.interceptors.request.use(async function(config) {
  Store.commit("startLoading");
  const userInfo = UserUtil.getLocalInfo();
  if (userInfo) {
    //业务需要把Token信息放在 params 里面，一般来说都是放在 headers里面
    config.params = Object.assign(config.params ? config.params : {}, {
      token: userInfo.Token
    });
  }
  return config;
});

// 响应拦截
Instance.interceptors.response.use(
  async function(response) {
    Store.commit("finishLoading");
    const res = response.data;
    if (res.code == 0) {
      return Promise.resolve(res);
    } else if (
      res.code == 401
    ) {
    // 需要刷新Token 的状态 401
    // 拿到本次请求的配置
      let config = response.config;
    //   进入登录页面的不做刷新Token 处理
      if (Router.currentRoute.path !== "/login") {
        if (!isRefreshing) {
            // 改变flag状态，表示正在刷新Token中
          isRefreshing = true;
        //   刷新Token
          return Store.dispatch("user/refreshToken")
            .then(res => {
            // 设置刷新后的Token
              config.params.token = res.Token;
            //   遍历执行需要重新发起请求的队列
              retryRequests.forEach(cb => cb(res));
            //   清空队列
              retryRequests = [];
              return Instance.request(config);
            })
            .catch(() => {
              retryRequests = [];
              Message.error("自动登录失败，请重新登录");
                const code = Store.state.user.info.CustomerCode || "";
                // 刷新Token 失败 清空缓存的用户信息 并调整到登录页面
                Store.dispatch("user/logout");
                Router.replace({
                  path: "/login",
                  query: { redirect: Router.currentRoute.fullPath, code: code }
                });
            })
            .finally(() => {
                // 请求完成后重置flag
              isRefreshing = false;
            });
        } else {
          // 正在刷新token，返回一个未执行resolve的promise
          // 把promise 的resolve 保存到队列的回调里面，等待刷新Token后调用
          // 原调用者会处于等待状态直到 队列重新发起请求，再把响应返回，以达到用户无感知的目的（无痛刷新）
          return new Promise(resolve => {
            // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
            retryRequests.push(info => {
                // 将新的Token重新赋值
              config.params.token = info.Token;
              resolve(Instance.request(config));
            });
          });
        }
      }
      return new Promise(() => {});
    } else {
      return Promise.reject(res);
    }
  },
  function(error) {
    let err = {};
    if (error.response) {
      err.code = error.response.status;
      err.msg = error.response.statusText;
    } else {
      err.code = -1;
      err.msg = error.message;
    }
    Store.commit("finishLoading");
    return Promise.reject(err);
  }
);

export default Instance;
```
