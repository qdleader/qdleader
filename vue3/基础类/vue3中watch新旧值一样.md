# vue3 中 watch 新旧值一样

vue 在 watch 监听时：在变异 (不是替换) 对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变异之前值的副本。

## 方式一

```js
watch(
  () => JSON.parse(JSON.stringify(arr.value)),
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    deep: true,
  }
);
```

## 方式 2

```js
state = reactive({ item: 1 });
let newState = computed(() => {
  return JSON.stringify(state);
});
watch(newState, (newVal, oldVal) => {
  console.log(JSON.parse(oldVal), "oldVal");
  console.log(JSON.parse(newVal), "newVal");
});
state.item = 5;
```
