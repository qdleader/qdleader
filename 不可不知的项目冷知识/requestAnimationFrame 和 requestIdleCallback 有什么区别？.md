# requestAnimationFrame 和 requestIdleCallback 有什么区别？

## requestAnimationFrame:

requestAnimationFrame 是一个用于在下一次浏览器重绘之前执行指定的回调函数的方法。它通常用于执行与动画相关的任务，以确保动画的流畅性和性能。

调用时机：requestAnimationFrame 的回调函数会在浏览器下一次绘制之前执行，通常在每秒约 60 次的频率下执行，这与浏览器的刷新率相匹配（通常为每秒 60 次）。
用途：requestAnimationFrame 适用于需要在动画中更新界面状态的场景，如实现平滑的动画效果、制作游戏等。

## requestIdleCallback：: requestIdleCallback 是一个用于在浏览器空闲时执行指定的回调函数的方法。它通常用于执行一些低优先级的任务，以确保不会影响到页面的交互和动画性能。

调用时机：requestIdleCallback 的回调函数会在浏览器空闲时执行，即在浏览器没有其他任务需要执行时，会尽快执行注册的回调函数。

用途：requestIdleCallback 适用于执行一些低优先级的任务，如执行分析、预加载资源、后台数据同步等。
