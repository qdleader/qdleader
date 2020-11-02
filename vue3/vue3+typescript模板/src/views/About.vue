<template>
  <div class="about">
    <div>
        {{nowTime}}
    </div>
      <div @click="getNowTime">
            显示时间
        </div>

        <div v-if="loading">
            loading..............
        </div>
        <div v-if="loaded">
            <img :src="result.imgUrl" alt="">
        </div>
  </div>

</template>

<script lang="ts">
import { ref } from 'vue'
import {nowTime,getNowTime} from '../hocks/useNowTime'

import useUrlAxios from '../hocks/http'

import {userFeedback} from '../http/httpUrl'
export default {
    name:'about',
    setup() {
        const {result,loading,loaded} = useUrlAxios('https://apiblog.jspang.com/default/getGirl')
        userFeedback({}).then(res => {
            console.log("请求接口",res)
        })
        return {
            nowTime,
            getNowTime,
            result,loading,loaded
        }
    }
}
</script>
