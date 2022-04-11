
1.

```
setTimeout(fn,wait)
```



```
const sleep = {
    sleepInPromise: function (time) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        })
    }
}

const targetFn = function() {
    console.log('一秒后执行)
}

sleep.sleepInPromise(1000).then(targetFn)
```



3.

```
  const sleep = {
        sleepInGenerator: function*(time) {
            yield new Promise((resolve, reject) => {
                setTimeout(resolve, time)
            })
        }
    }
    const targetFn = function () {
        console.log('一秒后执行')
    }
    sleep.sleepInGenerator(1000).next().value.then(targetFn)
```

4.

```
const sleep = {
    sleepInPromise: function (time) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        })
    }
}

const targetFn = function() {
    console.log('一秒后执行)
}

async function testAsync(time) {
    await sleep.sleepInPromise(time);
    targetFn()
}
testAsync(1000)
```
