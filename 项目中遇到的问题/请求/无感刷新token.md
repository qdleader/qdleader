# 无感刷新 token

## 将这个请求先存到一个数组队列中，然后将这个请求状态置于等待中，一直等到刷新 token 接口置换到数据后再逐个重试清空请求队列。

## 为了解决这个问题，我们需要借助 Promise。将请求存进队列中后，同时返回一个 Promise，让这个 Promise 一直处于 Pending 状态（即不调用 resolve），此时这个请求就会一直处于等待中。当刷新请求的接口返回来后，我们再调用 resolve，然后逐一清空请求队列。

```js
let isRefreshing = false;
let requests = [];

/**
 * 获取刷新token接口后，再逐一请求队列中的接口，直到清空请求
 */
service.interceptors.response.use(
  async (response) => {
    let expiration = getExpiration();
    let timestamp = parseInt(new Date().getTime() / 1000);
    if (expiration && expiration - 8 * 60 <= timestamp) {
      if (!isRefreshing) {
        isRefreshing = true;
        return refreshToken()
          .then((res) => {
            const { token, expire } = res.data;
            setToken(token);
            setExpiration(expire);
            response.headers.Authorization = `${token}`;

            requests.forEach((cb) => cb(token));
            requests = []; // 重新请求完清空队列
            return service(response.config);
          })
          .catch((err) => {
            removeToken();
            router.push("/login");
            return Promise.reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      }
    }
  },
  (error) => {
    // ...
  }
);
```
