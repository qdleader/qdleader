我们写一个自定义指令 v-lazy

首先 在directives文件夹下建一个lazy.js文件

然后在 main.js 中引入一下，

```
import { createApp } from 'vue'
import App from './App.vue'
import lazy from './directives/lazy';

const app = createApp(App);
app.directive('lazy',lazy);
app.mount(#app)
```


lazy.js
```
export default {
    mounted(el) {
        const imgSrc = el.src;
        el.src = ''

        const observer = new IntersectionObserver(([{isIntersecting}]) => {
            // 图片出现在可视区时候再加载
            if(isIntersecting) {
                el.src = imgSrc;
                observer.unobserve(el)
            }
        })
        observer.observe(el)
    }
}
```