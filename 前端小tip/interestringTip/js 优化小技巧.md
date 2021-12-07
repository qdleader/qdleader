```
1.
```
if(x == 'yk' || x == 'qdleader' || x == 'dbj') {

}
优化为
if(['yk','qdleader','dbj'].includes(x)) {

}
```

2.
```
let test;
if(x > 100) {
    test = true
} else {
    test = false
}

优化为
let test = x > 100;

```
3. Null, Undefined, 空值检查
// 冗余
if (first !== null || first !== undefined || first !== '') {
    let second = first;
}

// 简洁
let second = first || '';


4. 函数条件调用
// 冗余
function test1() {
  console.log('test1');
};
function test2() {
  console.log('test2');
};
var test3 = 1;
if (test3 == 1) {
  test1();
} else {
  test2();
}

// 简单
(test3 === 1? test1:test2)();

5.

switch (data) {
    case 1:
    test1();
    break;

    case 2:
    test2();
    break;

    case 3:
    test3();
    break;

}


// 简洁
let data = {
    1:test1,
    2:test2,
    3:test3,
}

data[anything] && data[anything]();

6. 幂乘
Math.pow(2,3)

较简单写法
2**3  // 8



9. 重复字符串多次
// 冗余
let test = '';
for(let i = 0; i < 5; i ++) {
  test += 'qdleader ';
}

// 简洁
'qdleader '.repeat(5);


```
