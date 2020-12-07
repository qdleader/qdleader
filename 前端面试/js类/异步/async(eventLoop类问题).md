下面输出什么？

```

async function async1 () {
  console.log('1')
  await async2();
  console.log('2')
}

saync function async2() {
  console.log("3")
}

console.log('4')
async1()
console.log('5')

```

结果:

```
4
1
3
5
2
```


重点解析：

```
最后输出2，（在await async2()之后的代码你可以理解为，放到了settimeOut里面执行了）执行到await async2()下面的代码会被放到event queue中，所以会先执行
同步代码，再执行event queue中的代码
```
