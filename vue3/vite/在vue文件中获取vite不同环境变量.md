<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    // ↓读取内建环境变量
    const mode = import.meta.env.MODE;
    // ↓读取自定义环境变量
    const host = import.meta.env.VITE_HOST;
    const port = import.meta.env.VITE_PORT;
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const baseDomain = import.meta.env.VITE_API_DOMAIN ;
    // ↓返回变量，使支持template获取
    return {
      mode,
      host,
      port,
      baseUrl,
      baseDomain
    };
  },
});
</script>

<template>

    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>

      <div>
        <h2 class="red">环境变量</h2>
        mode: {{ mode }} <br />
        host: {{ host }} <br />
        port: {{ port }} <br />
        baseUrl: {{ baseUrl }}
        baseDomain: {{ baseDomain }}
      </div>

</template>

<style scoped lang="scss">
@import '@/assets/style/index.scss';
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
