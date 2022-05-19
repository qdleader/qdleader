<template>
  <!-- ↓总路由视图 -->
   <ElConfigProvider :locale="locale">
    <router-view></router-view>
  </ElConfigProvider>
</template>

<script lang="ts">
import '@/assets/style/index.scss'
import {
    useRouter
} from 'vue-router';
import { defineComponent, onMounted ,ref} from "vue";
import { ElConfigProvider } from 'element-plus';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';
import axios from 'axios'
import Util from '@/utils/utils'
export default defineComponent({
  name: "App",
  components: {
    [ElConfigProvider.name]: ElConfigProvider, //添加组件
  },
     setup() {
        const baseDomain = import.meta.env.VITE_API_DOMAIN;
        const locale = ref(zhLocale);
        return{
            locale
        }
    }
});
</script>
