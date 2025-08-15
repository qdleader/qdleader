# 页面“隐身”探测

## 监控记录浏览器tab是否是活跃状态

## 方式1

```js
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("页面不可见");
  } else {
    console.log("页面可见");
  }
});
```

## 方式2

```js
document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'hidden'
    ? console.log("页面不可见1")
    :  console.log("页面可见1")
});

```