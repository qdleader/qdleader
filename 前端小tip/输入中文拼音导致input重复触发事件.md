## 输入中文拼音导致input 重复处罚事件？

#### web前端之中文输入法导致的高频事件、addEventListener、compositionstart、compositionend
```js
<input type="text" />



var inp = document.querySelector('input');
let isComposing = false;

function search() {
    if (isComposing) return false;

    console.log('搜索: ', inp.value);
}

inp.addEventListener('input', function () {
    search();
});

inp.addEventListener('compositionstart', function () {
    isComposing = true;
});

inp.addEventListener('compositionend', function () {
    isComposing = false;
    
    search();
});


```

当文本段落的组成完成或取消时，compositionend事件将被触发(具有特殊字符的触发，需要一系列键和其他输入，如语音识别或移动中的字词建议)。