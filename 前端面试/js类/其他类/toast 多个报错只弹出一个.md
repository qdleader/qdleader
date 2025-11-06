# toast 多个报错，只弹出一个

```js

设置全局标志位：定义一个全局变量（如 isToastShown）来表示是否已经弹出过 toast。在请求失败的处理逻辑中，首先检查该标志位。如果尚未弹出 toast，则进行弹出操作，并设置标志位为 true；如果标志位已经为 true，则直接忽略后续的弹出操作。

使用防抖或节流函数：防抖（debounce）或节流（throttle）函数可以限制某个函数在一定时间内的执行次数。将弹出 toast 的操作封装在防抖或节流函数中，确保在短时间内的多个请求失败时，不会频繁弹出 toast。

集中处理错误：将所有请求的错误集中处理，而不是在每个请求的 catch 块中直接弹出 toast。例如，把所有请求的 Promise 添加到一个数组中，然后使用 Promise.all() 或其他类似方法来统一处理这些 Promise 的结果。如果所有请求都失败了，再弹出一个 toast。
```

粗糙版只谈一个
```js
// messageOnce.js

import {Message} from 'element-ui'
// 私有属性，只在当前文件可用
const showMessage = Symbol('showMessage')
export default class domMessage {
    success (options, single = true) {
        this[showMessage]('success', options, single)
    }
    warning(options, single = true) {
        this[showMessage]('warning', options, single)
    }
    info(options, single = true) {
        this[showMessage]('info', options, single)
    }
    error(options, single = true) {
        this[showMessage]('error', options, single)
    }
    [showMessage] (type, options, single) {
        if (single) {
            // 判断当前页是否有el-message标签，如果没有则执行弹窗操作
            if (document.getElementsByClassName('el-message').length === 0) {
                Message[type](options)
            }
        } else {
            Message[type](options)
        }
    }
}
```

<!-- 引入 -->
```js
import domMessage from '@/utils/messageOnce.js'
const message = new domMessage()
message.error('请求失败')
```
