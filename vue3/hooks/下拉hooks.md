```js

import { onMounted, reactive, ref } from 'vue';
// 定义下拉框接收的数据格式
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  key?: string;
}
// 定义入参格式
interface FetchSelectProps {
  apiFun: () => Promise<any[]>;
}

export function useFetchSelect(props: FetchSelectProps) {
  const { apiFun } = props;

  const options = ref<SelectOption[]>([]);

  const loading = ref(false);

  /* 调用接口请求数据 */
  const loadData = () => {
    loading.value = true;
    options.value = [];
    return apiFun().then(
      (data) => {
        loading.value = false;
        options.value = data;
        return data;
      },
      (err) => {
        // 未知错误，可能是代码抛出的错误，或是网络错误
        loading.value = false;
        options.value = [
          {
            value: '-1',
            label: err.message,
            disabled: true,
          },
        ];
        // 接着抛出错误
        return Promise.reject(err);
      }
    );
  };

  //   onMounted 中调用接口
  onMounted(() => {
    loadData();
  });

  return reactive({
    options,
    loading,
  });
}

```


在组建中 调用
```js

<script setup name="qdleader" lang="ts">
  import { useFetchSelect } from './hook';

  //   模拟调用接口
  function getRemoteData() {
    return new Promise<any[]>((resolve, reject) => {
      setTimeout(() => {
        // 模拟接口调用有概率出错
        if (Math.random() > 0.5) {
          resolve([
            {
              key: 1,
              name: 'vue',
              value: 1,
            },
            {
              key: 2,
              name: 'react',
              value: 2,
            },
            {
              key: 3,
              name: 'angular',
              value: 3,
            },
          ]);
        } else {
          reject(new Error('出错了！'));
        }
      }, 3000);
    });
  }
   
   // 将之前用的 options,loading，和调用接口的逻辑都抽离到hook中
  const selectBind = useFetchSelect({
    apiFun: getRemoteData,
  });
</script>

<template>
  <div>
    <!-- 将hook返回的接口，通过 v-bind 绑定给组件 -->
    <a-select v-bind="selectBind" />
  </div>
</template>
```