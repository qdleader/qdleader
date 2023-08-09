
```js
import type { Ref } from "vue";
import { ref } from "vue";

type AutoLoadingResult = [
  Ref<boolean>,
  <T>(requestPromise: Promise<T>) => Promise<T>
];

/* 在给run方法传入一个promise，会在promise执行前或执行后将loading状态设为true，在执行完成后设为false */
export function useAutoLoading(defaultLoading = false): AutoLoadingResult {
  const ld = ref(defaultLoading);

  function run<T>(requestPromise: Promise<T>): Promise<T> {
    ld.value = true;
    return requestPromise.finally(() => {
      ld.value = false;
    });
  }

  return [ld, run];
}

```

组件中使用

```js

<script setup name="Index" lang="ts">
// import { useAutoRequest } from "./hook";
import { useAutoLoading } from "./hook2";
import { Button } from "ant-design-vue";
import { submitApi, cancelApi } from "@/api";

// const [loading, submit] = useAutoRequest(submitApi);

const [commonLoading, fetch] = useAutoLoading();

function onSubmit() {
  fetch(submitApi("submit")).then((res) => {
    console.log("res", res);
  });
}

function onCancel() {
  fetch(cancelApi("cancel")).then((res) => {
    console.log("res", res);
  });
}
</script>

<template>
  <div class="col">
    <Button type="primary" :loading="commonLoading" @click="onSubmit">
      提交
    </Button>
    <Button :loading="commonLoading" @click="onCancel">取消</Button>
  </div>
</template>
```


这里也是用到了promise链式调用的特性，在接口调用之后马上将loading置为true，在接口调用完成后置为false。而useAutoRequest则是在接口调用之前就将loading置为true。
useAutoRequest调用时代码更简洁，useAutoLoading的使用则更灵活，可以同时服务给多个接口使用，比较适合提交、取消这种互斥的场景。