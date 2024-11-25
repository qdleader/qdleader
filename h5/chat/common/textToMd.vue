<template>
  <div ref="domRef" class="mark-down-wrapper" :class="{ 'v-blink': blink }">
    <template v-if="props.isMark">
      <div
        :class="[
          notUseResetClass
            ? 'mark-down-style-not-reset'
            : 'mark-down-style-reset'
        ]"
      >
        <!-- <Viewer :value="currentValue" :plugins="plugins"></Viewer> -->
        <morphMarkDownView
          :value="currentValue"
          :plugins="plugins"
          :blink="blink"
        />
        <slot />
      </div>
    </template>
    <template v-else>
      <span>{{ props.value }}</span>
      <slot />
    </template>
  </div>
</template>

<script setup>
import "juejin-markdown-themes/dist/juejin.min.css";
import "highlight.js/styles/vs.css";
import "bytemd/dist/index.min.css";
import breaks from "@bytemd/plugin-breaks";
import gemoji from "@bytemd/plugin-gemoji";
import math from "@bytemd/plugin-math-ssr";
import medium from "@bytemd/plugin-medium-zoom";
import mermaid from "@bytemd/plugin-mermaid";
import frontmatter from "@bytemd/plugin-frontmatter";
import gfm from "@bytemd/plugin-gfm";
import hl from "@bytemd/plugin-highlight";
// import { Viewer } from '@bytemd/vue-next'
import morphMarkDownView from "./morphMarkDownView.vue";
import { computed, ref } from "vue";
import markHook from "./markHook.js";

const plugins = [
  breaks(),
  gemoji(),
  math(),
  medium(),
  mermaid(),
  frontmatter(),
  gfm(),
  hl()
];
let props = defineProps([
  "value",
  "blink",
  "isMark",
  "className",
  "notUseResetClass"
]);
let currentValue = computed(() => {
  return handelProStr(formatMarkContent(props.value || ""));
});
const domRef = ref();
markHook(domRef);
function handelProStr(value) {
  const languages = [
    { name: "JavaScript", value: "javascript" },
    { name: "Python", value: "python" },
    { name: "Java", value: "java" },
    { name: "C++", value: "cpp" },
    { name: "C#", value: "csharp" },
    { name: "Ruby", value: "ruby" },
    { name: "PHP", value: "php" },
    { name: "Swift", value: "swift" },
    { name: "Go", value: "go" },
    { name: "Kotlin", value: "kotlin" },
    { name: "Rust", value: "rust" },
    { name: "TypeScript", value: "ts" },
    { name: "Scala", value: "scala" },
    { name: "Haskell", value: "haskell" },
    { name: "Erlang", value: "erlang" },
    { name: "Perl", value: "perl" },
    { name: "R", value: "r" },
    { name: "Objective-C", value: "objective-c" },
    { name: "Groovy", value: "groovy" },
    { name: "Clojure", value: "clojure" },
    { name: "Dart", value: "dart" },
    { name: "Kotlin", value: "kotlin" },
    { name: "Scala", value: "scala" }
  ];
  let programNameList = languages.map(item => item.value);
  let res = value;
  programNameList.forEach(key => {
    let codeFlag = "```";
    let keyWord = codeFlag + `${key}`;
    res = res.replaceAll(keyWord, codeFlag + " " + key + "\n");
  });
  return res;
}
function formatMarkContent(value) {
  // 由于插件bytemd组件的问题，没办法匹配加粗内容内含有冒号的情况，故此兼容
  // 如：【**模具开发和设计：**】就无法识别，需要把冒号后置，替换为：【**模具开发和设计**：】
  return value.replace(/\*\*((.|\n)+?)(:|：)\*\*/g, "**$1**$3");
}
defineExpose({
  getWrapperDom() {
    return domRef.value;
  }
});
// let {value:currentValue}  = toRefs(props)
</script>
<style lang="less">
.v-blink .blink {
  @keyframes cursor {
    50% {
      background: white;
    }
  }
  &:after {
    content: " ";
    display: inline-block;
    width: 2px;
    height: 13px;
    position: relative;
    top: 2px;
    margin-left: 2px;
    background: black;
    animation:
      typing 3s steps(16) forwards,
      cursor 1s infinite;
  }
}

.mark-down-style-reset {
  word-break: break-all;
  white-space: initial;
  color: #333333;
  line-height: 24px;

  .markdown-body {
    color: #333333;
    font-size: 14px;
    line-height: 24px;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    address,
    ol,
    ul,
    dl,
    pre {
      margin-bottom: 0;
    }

    & > *:first-child {
      margin: 0;
    }
    // &>*:last-child {
    //   margin: 0;
    //   margin-top: 22px;
    // }

    pre {
      margin: 10px 0;
      overflow: hidden;
      white-space: pre-wrap;
    }
    ol li {
      margin-top: 8px;
    }
  }
  .markdown-body h3 {
    font-size: 15px;
    font-weight: bold;
    margin-top: 20px;
  }
  .markdown-body p {
    margin-top: 7px;
  }
  .markdown-body ol,
  .markdown-body ul {
    padding-left: 0px;
  }
  .markdown-body ol li,
  .markdown-body ul li {
    padding-left: 0px;
  }
}
</style>
<style lang="less" scoped></style>
