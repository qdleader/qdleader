import { ref } from 'vue'

const nowTime = ref("00:00:00")
const getNowTime = () => {
    const now = new Date();
    const h = now.getHours() < 10? '0' + now.getHours():now.getHours()
    const m = now.getMinutes() < 10? '0' + now.getMinutes():now.getMinutes()
    const s = now.getSeconds() < 10? '0' + now.getSeconds():now.getSeconds()
    nowTime.value = h +":"+m+":"+s

    setTimeout(getNowTime,1000)
}

export {
    nowTime,
    getNowTime
}
