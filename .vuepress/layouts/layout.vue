<template>
  <ParentLayout>
    <template #page-content-bottom>
      <div>
        <!-- <div class="money">打赏</div> -->
        <!-- <div>评论</div> -->
      </div>
    </template>
    <template #page-bottom>
      <div class="footer">
        <a href="https://github.com/qdleader/qdleader">qdleader</a>

        <div class="busuanzi">
          <span id="busuanzi_container_site_pv">
            本站总访问量
            <span id="busuanzi_value_site_pv">129823</span>次
            <span class="post-meta-divider">|</span>
          </span>
          <span id="busuanzi_container_site_uv">
            本站访客数
            <span id="busuanzi_value_site_uv">12</span>人
          </span>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>
<!-- <script>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
export default {
  components: {
    ParentLayout,
  },
};
</script> -->

<script>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import busuanzi from "busuanzi.pure.js";
let script;
export default {
  components: {
    ParentLayout,
  },
  mounted() {
    // script = fetch("busuanzi.pure.js");
    // import busuanzi from "busuanzi.pure.js";
    // console.log(111, script);
    busuanzi.fetch();
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        // console.log(112, to, from);
        // script.fetch();
        busuanzi.fetch();
      }
      // console.log(to.path);
    },
  },
};
</script>
<style>
.footer {
  width: 100%;
  text-align: center;
}
</style>
