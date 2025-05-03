# 手写 jsonp

```js
const jsonp = (opts = {}) => {
  // 通过一个callback参数所对应的函数名来把数据进行写入
  opts.url = `${opts.url}?callback=${opts.callback}`;
  // 在你需要传递其他参数时，需要遍历后拼接到url上
  for (let key in opts.data) {
    if (opts.data.hasOwnProperty(key)) {
      opts.url += `&${key}=${opts.data[key]}`;
    }
  }
  // 主要是依靠script的src属性加载内容没有跨域情况
  const script = document.createElement("script");
  script.src = opts.url;
  // 在script脚本执行完毕后，再删除此脚本
  script.onload = () => {
    document.body.removeChild(script);
  };
  // 把创建好的script脚本添加到body中
  document.body.appendChild(script);
};

// 测试用例
jsonp({
  url: "http://localhost:8888/cors",
  data: {
    wd: "qs",
    from: "home",
  },
  // 接收数据的函数
  callback: "getData",
});

function getData(data) {
  // 通过jsonp拿到的真实数据
  console.log(data);
}
```
