
# defer和async的区别

## defer （延迟脚本）
延迟脚本：defer 属性只适用于外部脚本文件。
如果给 script 标签定义了defer 属性，这个属性的作用是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，如果 script 元素中设置了 defer 属性，相当于告诉浏览器立即下载，但延迟执行。
## async（异步脚本）
异步脚本：async 属性也只适用于外部脚本文件，并告诉浏览器立即下载文件。
但与 defer 不同的是：标记为 async 的脚本并不保证按照指定它们的先后顺序执行。
所以总结起来，两者之间最大的差异就是在于脚本下载完之后何时执行，显然 defer 是最接近我们对于应用脚本加载和执行的要求的。
defer 是立即下载但延迟执行，加载后续文档元素的过程将和脚本的加载并行进行（异步），但是脚本的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。async 是立即下载并执行，加载和渲染后续文档元素的过程将和 js 脚本的加载与执行并行进行（异步）。


简单来说就是
defer 和 async 都可以 将同步加载的文件变为异步，不会阻塞浏览器渲染了，defer是等所有别的元素解析完后执行，async 是立即执行，并且async 只能引入外部文件
