# react中添加debounce无效
useEffect中防抖为什么不起作用？react hooks中如何写防抖？

一、发现问题，useEffect 中防抖无效：
若直接在useEffect()中调用防抖函数，会发现防抖不起作用：
```js
export default function MyComponent(){
  function handleAdd() {
    setValue(value + 1);
  }
  // 防抖函数内部逻辑，这里简单实现，根据实际需求写
  const handleDebounce = debounce((value) => {
    console.log(value);
  },500);

  useEffect(() => {
    handleDebounce(value)
  }, [value]);
  
 return (
  <>
     <p>{value}</p>
     <Button onClick={handleAdd}>点击加1</Button>
  </>
  )
}
```
效果如图所示，点击5次，打印5次（是无效的防抖）：

点击5次 效果

原因：useEffect 会在每轮渲染结束后执行，在state发生改变时，也会重新执行。因而，这里的value每变化一次，debounce 函数就会重新生成一次，其内部逻辑就会执行一次。

二、解决问题，保存防抖函数，避免重新生成。
思想：用 ref 保存一下防抖函数，后面再触发useEffect时，就不会生成新的防抖函数了。 同时，了解一下如何自定义hooks。

第一步：使用第三方库 loadash 的debounce方法，自定义一个防抖hooks，文件名叫 debounce.js 。代码如下：
```js
  import { debounce } from 'lodash';
  const useMyDebounce = (fun, wait, options) => {
    const myRef = useRef();
    if (!myRef.current) {
      myRef.current = debounce(fun, wait, options);
    }
    return myRef.current;
  };
  export default useMyDebounce;

```
第二步：在函数组件中使用：
```js
import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';
// 自定义hooks文件的路径，根据自己的目录结构
import useMyDebounce from $hooks/debounce.js;

export default function MyComponent(){
  const [value, setValue] = useState(0);
  // 更改状态
  function handleAdd() {
    setValue(value + 1);
  }
  // 防抖函数内部逻辑，这里简单实现，根据实际需求写
  const handleDebounce =useMyDebounce((value) => {
    console.log(value);
  },500);

  useEffect(() => {
  	// 要执行防抖的逻辑
    handleDebounce(value);
    // 组件销毁时，取消防抖，查看文末“注释1”
    return ()=>{
      handleDebounce.cancel()
    }
  }, [value]);
  
  return (
  <>
     <p>{value}</p>
     <Button onClick={handleAdd}>点击加1</Button>
  </>
  )
}

```
不停的点击按钮，效果图：

点击 控制台打印

注释1：为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染（通常如此），则在执行下一个 effect 之前，上一个 effect 就已被清除。清除函数即为effect函数的return函数。