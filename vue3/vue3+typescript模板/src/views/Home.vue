<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
        欢迎进入  qdleader
        <ul>
            <li v-for="(item,index) in girls" :key="index" @click="selectFun(index)">{{item}}</li>
        </ul>
        <div>
            {{selectGirl}}
        </div>
        <div @click="overAction">
            订餐完成
        </div>
        <div>
            {{overText}}
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent ,ref, watch, reactive,toRefs,onBeforeMount,onMounted,onBeforeUpdate,onRenderTracked, onRenderTriggered,onUpdated,onUnmounted,onActivated, onBeforeUnmount, onDeactivated, onErrorCaptured} from 'vue';
// @ is an alias to /src

interface DataProps {
    girls: string[];
    selectGirl: string;
    selectFun: (index: number) => void;
}


export default defineComponent({
  name: 'Home',
    setup() {
        console.log("1-开始创建组件-setup")
        const data: DataProps = reactive({
            girls:["xiaohong","liuzilan","zhansan"],
            selectGirl: "",
            selectFun:(index: number) => {
                data.selectGirl = data.girls[index]
            }
        })

        onBeforeMount(() => {
            console.log("2.组件挂载页面之前执行----onBeforeMount")
        })

        onMounted(() => {
            console.log("3.-组件挂载到页面之后执行-------onMounted")
        })


        onBeforeUpdate(() => {
            console.log("4.组件更新之前-------onbeforeUpdate")
        })

        onUpdated(() => {
            console.log("5.组件更新之后----onUpdated")
        })

        onBeforeUnmount(() => {
            console.log("组件卸载之前执行，同之前的beforedestory-------onBeforeUnmount")
        })
        onUnmounted(() => {
            console.log("组件卸载之后，同destoryed -------------onUnmounted")
        })

        onActivated(() => {
            console.log("活跃组件onActivated在keep-alive中使用")
        })
        onDeactivated(() => {
            console.log("活跃组件onDeactivated在keep-alive中使用")
        })
        onErrorCaptured(() => {
            console.log("当捕获一个来自子孙组件异常时候激活的钩子函数")
        })

        onRenderTracked((event) => {
            // console.log("状态跟踪",event)
        })
        onRenderTriggered((event) => {
            console.log("状态跟踪钩子函数",event)
        })
        // beforeCreate -> use setup()
        // created -> use setup()
        // beforeMount -> onBeforeMount
        // mounted -> onMounted
        // beforeUpdate -> onBeforeUpdate
        // updated -> onUpdated
        // beforeDestroy -> onBeforeUnmount
        // destroyed -> onUnmounted
        // errorCaptured -> onErrorCaptured
        
        const refData = toRefs(data);

        const overText = ref("红烂漫")
        const overAction = () => {
            overText.value = overText.value + '点餐完成'
        };
        watch([overText,() => data.selectGirl], (newValue, oldValue) => {
            console.log("new----->",newValue)
            console.log("old----->",oldValue)
            document.title = newValue[0]
        })
        return {
            ...refData,
            overText,
            overAction
        }

    }
});
</script>
