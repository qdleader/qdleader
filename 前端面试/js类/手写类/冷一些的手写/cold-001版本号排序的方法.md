## 写版本号排序的方法


有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']



```
arr.sort((a,b)=>a>b?-1:1);
```

这种比较是存在问题的：如果修改题目中的arr如下:

const arr=[
    '0.5.1',
    '0.1.1',
    '2.3.3',
    '0.302.1',
    '4.2',
    '4.3.5',
    '4.3.4.5'
];
那字符串比较法会出错：期望中版本号'0.302.1'应该大于'0.5.1'，但实际比较的结果则是相反的，原因就在于逐位比较。


```
arr.sort((a,b) => {
    let i = 0;
    const arr1 = a.split('.');
    const arr2 = b.split('.');

    while(true) {
        const  s1 = arr1[i];
        const s2 = arr2[i ++];
        if(s1 === undefined || s2 === undefined) {
            return arr2.length - arr1.length;
        }
        if(s1 === s2) continue;
        return s2 - s1;
    }
})
console.log(arr);
```