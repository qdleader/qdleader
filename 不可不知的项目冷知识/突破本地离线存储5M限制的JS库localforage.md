# 突破本地离线存储5M限制的JS库localforage简介

localStorage 能够让你实现基本的数据存储，但它是同步的，速度慢，而且仅支持字符串。IndexedDB 和 WebSQL 是异步的，速度快，支持大数据集，但他们的API 使用起来有点复杂

　
localForage 是一个使用非常简单的 JavaScript 库的，提供了 get，set，remove，clear 和 length 等等 API（跟 localStorage 一样），还具有以下特点：

支持回调的异步 API；
> 支持 IndexedDB，WebSQL 和 localStorage 三种存储模式（自动为你加载最佳的驱动程序）；
> 支持 BLOB 和任意类型的数据，让您可以存储图片，文件等等。
> 支持 ES6 Promises；

localForage：一个简单的 Polyfill，提供了简单的客户端数据存储的值语法。它在后台使用 IndexedDB，并在不支持 IndexedDB 的浏览器中回退到 WebSQL 或 localStorage。

## 三、使用 localforage
```shell
npm install localforage

```

```js
import localforage from 'localforage';
 
localforage.setItem('name', 'jim').then(() => {
  console.log('名字设置成功');
 
  localforage.getItem('name').then(value => {
    console.log('name', value)
  })

```
