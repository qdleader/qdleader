
```

    // const aFunc = () => {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve('a')
    //     }, 1000)
    //   })
    // }
    // const bFunc = () => {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve('b')
    //     }, 1000)
    //   })
    // }

function* generator() {
    let result = yield aFunc();
    console.log(result);
    let other = yield bFunc();
    console.log(other);
}
myAwait(generator);

function myAwait(genner, ...args) {
    let iter = genner(...args); //得到生成器的迭代器
    return new Promise((resolve, reject) => {
        let result; //iter每次暂停时的结果
        //! inner就是在手动迭代iter
        let inner = function (yield) {
            result = iter.next(yield); //开始迭代 将这里的yield当作yield传入生成器
            if (result.done) {
                //迭代结束：
                resolve(result.value); //Promise结束
            } else {
                //如果没有结束 等到promise的结束继续递归
                return Promise.resolve(result.value).then((fulfilled) => {
                    inner(fulfilled);
                });
            }
        };
        inner(); //迭代器第一次不应该传入参数
    });
}
```
-----------------------------------
手写一个async/await的实现
