# 如何解决Ts中string、number和any等类型不能当做索引用

元素隐式具有“any”类型，因为类型为“number”的表达式不能用于索引类型“[***”。在类型“[ ***”上找不到具有类型为“number"的参数的索引签名

解决方法

## 方法一：
```js
const changePhase = (item: number) => {
   const phase = (phaseObj as any)[item];
}
```

## 方法二：
```js
const changePhase = (item: number) => {
   const phase = phaseObj[item as keyof typeof phaseObj]
}
```

## 方法三：
```js
const changePhase =  function<T extends object, K extends keyof T>(obj: T, key: K) {
  return phaseObj[key];
```
