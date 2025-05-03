# 通过 md 展示流式接口返回

```vue
<script setup>
import { askApi } from "@/common/stream.js";

import textToMd from "./common/textToMd.vue";

const robotText = ref({
  text: "hello world",
});

const sendGPT = (content) => {
  isAnalyzing.value = true;
  stopRequest.value = askApi(
    { ...content },
    {
      change: (e) => {
        let { id, name, data, stop, type } = e;
        robotText.text += data;
      },
      end: () => {},
      error: (err, isFullText, needSpecial = false) => {
        if (!err.toString().includes("user aborted")) {
          let msg = "";
          if (isFullText) {
            msg = err;
          } else {
            msg = "网络异常，请稍后重试";
          }
          // reject(msg);
        } else {
          // reject();
        }
      },
    }
  );
};
</script>

<template>
  <textToMd :isMark="true" :value="robotText.text" />
</template>
```
