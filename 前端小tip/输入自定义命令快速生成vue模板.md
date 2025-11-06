# 输入自定义命令快速生成vue模板

我们在.vue文件中输入自定义指令，快速生成vue3模板

1.
首先在vscode编辑器中

文件-->首选项-->用户代码片段-->点击新建代码片段--取名vue.json 确定

2.把代码放进去。。。
```js
{
    "Print to console": {
      "prefix": "vue3",
      "body": [
        "<!-- $0 -->",
        "<template>",
        "  <div></div>",
        "</template>",
        "",
        "<script lang='ts'>",
        "import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'",
        "interface DataProps {}",

        "export default {",
        "    name: '',",
        "      setup() {",
        "          console.log('1-开始创建组件-setup')",
        "          const data: DataProps = reactive({",
        ""            ,
        "          })",
        "          onBeforeMount(() => {",
        "              console.log('2.组件挂载页面之前执行----onBeforeMount')",
        "          })",
        "          onMounted(() => {",
        "              console.log('3.-组件挂载到页面之后执行-------onMounted')",
        "          })",
        "          const refData = toRefs(data);",
        "          return {",
        "              ...refData,",
        "          }",
        ""  ,
        "      }",
        "  };",
        "</script>",
        "<style scoped>",
        "</style>",
    ],
      "description": "Log output to console"
    }
  }

```

3.成功啦。新建.vue结尾的文件试试.

输入vue3 按键盘的tab就行
