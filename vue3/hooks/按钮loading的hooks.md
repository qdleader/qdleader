```js
import { Ref, ref } from 'vue';

type TApiFun<TData, TParams extends Array<any>> = (...params: TParams) => Promise<TData>;

interface AutoRequestOptions {
   // 定义一下初始状态
  loading?: boolean;
  // 接口调用成功时的回调
  onSuccess?: (data: any) => void;
}

type AutoRequestResult<TData, TParams extends Array<any>> = [Ref<boolean>, TApiFun<TData, TParams>];

/* 控制loading状态的自动切换hook */
export function useAutoRequest<TData, TParams extends any[] = any[]>(fun: TApiFun<TData, TParams>, options?: AutoRequestOptions): AutoRequestResult<TData, TParams> {
  const { loading = false, onSuccess } = options || { loading: false };

  const requestLoading = ref(loading);

  const run: TApiFun<TData, TParams> = (...params) => {
    requestLoading.value = true;
    return fun(...params)
      .then((res) => {
        onSuccess && onSuccess(res);
        return res;
      })
      .finally(() => {
        requestLoading.value = false;
      });
  };

  return [requestLoading, run];
}
```
模拟接口的方法单独抽出一个文件
api/index.ts
```js
export function submitApi(text: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟接口调用有概率出错
      if (Math.random() > 0.5) {
        resolve({
          status: "ok",
          text: text,
        });
      } else {
        reject(new Error("不小心出错了！"));
      }
    }, 3000);
  });
}
```

组件中使用

```js
<script setup name="Index" lang="ts">
import { useAutoRequest } from "./hook";
import { Button } from "ant-design-vue";
import { submitApi } from "@/api";

const [loading, submit] = useAutoRequest(submitApi);

function onSubmit() {
   submit("aaa").then((res) => {
    console.log("res", res);
  });
}
</script>

<template>
  <div class="col">
    <Button :loading="loading" @click="onSubmit">提交</Button>
  </div>
</template>
```

这样封装一下，我们使用时就不再需要手动切换loading的状态了。