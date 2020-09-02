# D003-fetch封装最大并发请求
# ★★★

## 方法1
```
function sendResquest(urls, max, callback) {
    let urlsCopy = [... urls];//防止影响外部urls变量
    function request() {
        function Handle () {
            count--;
            console.log('end 当前并发数为: '+count);
            if(urlsCopy.length) {//还有未请求的则递归
                request();
            } else if (count === 0) {//并发数为0则表示全部请求完成
                callback()
            }
        }
        count++;
        console.log('start 当前并发数为: '+count);
        //请求
        fetch(urlsCopy.shift()).then(Handle).catch(Handle);
        //并发数不足时递归
        count < max && request();
    }
    let count = 0;//几率并发数
    request();
}
```


## 方法2
```

function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length;
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const handleRequest = (url) => {
    const req = fetch(url).then(res => {
      console.log('当前并发： '+requestsQueue);
      const len = results.push(res);
      if (len < urlCount && i + 1 < urlCount) {
        requestsQueue.shift();
        handleRequest(urls[++i])
      } else if (len === urlCount) {
        'function' === typeof callback && callback(results)
      }
    }).catch(e => {
      results.push(e)
    });
    if (requestsQueue.push(req) < max) {
      handleRequest(urls[++i])
    }
  };
  handleRequest(urls[i])
}
 
 
const urls = Array.from({length: 10}, (v, k) => k);
 
const fetch = function (idx) {
  return new Promise(resolve => {
    console.log(`start request ${idx}`);
    const timeout = parseInt(Math.random() * 1e4);
    setTimeout(() => {
      console.log(`end request ${idx}`);
      resolve(idx)
    }, timeout)
  })
};
 
const max = 4;
 
const callback = () => {
  console.log('run callback');
};
 
 
handleFetchQueue(urls, max, callback);
```













# 拓展用 promise 的方式封装呢

```

//Promise方式
function sendResquest(urls, max, callback) { 
    let pending_count = 0, //并发数
    idx = 0;//当前请求的位置
 
    while (pending_count < max) { 
        _fetch(urls[idx++])
    } 
 
    async function _fetch(url) { 
        if (!url) return; 
        pending_count++; 
        console.log(url + ':start','并发数: '+pending_count); 
        await fetch(url) 
        pending_count--; 
        console.log(url + ':done','并发数: '+pending_count); 
        _fetch(urls[idx++]); 
        pending_count || callback && callback()
    } 

```