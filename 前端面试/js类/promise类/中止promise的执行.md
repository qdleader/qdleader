
# 中止promise的执行

```js
function wait(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
wait(5000).then(() => {
 console.log('5 seconds passed');
});
```

可中止版本
```js
function wait(time: number, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      resolve();
    }, time);
    signal?.addEventListener('abort', () => {
      clearTimeout(timeoutId);
      reject();
    });
  });
}

const abortController = new AbortController();
 
setTimeout(() => {
  abortController.abort();
}, 1000);
 
wait(5000, abortController.signal)
  .then(() => {
    console.log('5 seconds passed');
  })
  .catch(() => {
    console.log('Waiting was interrupted');
  });

```
