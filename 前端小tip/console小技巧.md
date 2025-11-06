# console 小技巧

console 的妙用

```js
// 1. console.group 和 console.groupEnd
// console.group 方法用于创建一个分组，以便您可以将相关的日志消息分组在一起，以便更好地组织输出。
console.group('分组1');
console.log('日志消息1');
console.log('日志消息2');
console.groupEnd();

console.group('分组2');
console.log('日志消息3');
console.log('日志消息4');
console.groupEnd();

// 2. console.table 
// console.table 方法以表格形式输出数据，以便更易读和理解。
const data = [
  { name: '张三', age: 25 },
  { name: '李四', age: 30 },
  { name: '王五', age: 35 }
];

console.table(data);

// 3. console.assert
// console.assert 方法用于检查某个条件是否为真。如果条件为假，则输出一条错误消息。
console.assert(1 === 2, '条件不满足');

// 4. console.clear
// console.clear 方法用于清除控制台屏幕上的所有输出。
console.clear();

// 5. console.time 和 console.timeEnd
// console.time 方法用于开始计时器，console.timeEnd 方法用于停止计时器并输出所经过的时间。
console.time('计时器');

// 想要计时的代码
for (let i = 0; i < 100000; i++) {
  // ...code
}

console.timeEnd('计时器');

// 6. console.count
// console.count 方法用于计数，可以用来跟踪特定代码路径的执行次数。
console.count('执行次数');
console.count('执行次数');
console.count('执行次数');

// 7. console.trace
// console.trace 方法用于输出堆栈跟踪，可以用来跟踪代码的执行流程。
console.trace();

// 8. console.profile 和 console.profileEnd
// console.profile 方法用于开始性能分析器，console.profileEnd 方法用于停止性能分析器并输出分析结果。
console.profile('性能分析器');

// 想要分析性能的代码
for (let i = 0; i < 100000; i++) {
  // ...code
}

console.profileEnd('性能分析器');

// 9. console.timeStamp
// console.timeStamp 方法用于在控制台中添加一个时间戳，以便更好地组织输出。
console.timeStamp('时间戳');
console.log('这是一条日志消息');

// 10. console.error
// console.error 方法用于输出错误信息。
console.error('这是一个错误信息');

// 11. console.warn
// console.warn 方法用于输出警告信息。
console.warn('这是一个警告信息');

// 12. console.info
// console.info 方法用于输出一般信息。
console.info('这是一条一般信息');

// 13. console.log
// console.log 方法用于输出普通信息。
console.log('这是一条普通信息');

// 14. console.debug
// console.debug 方法用于输出调试信息。
console.debug('这是一条调试信息');

// 15. console.dir
// console.dir 方法用于以分层格式输出对象的属性。
const obj = { name: '张三', age: 25 };
console.dir(obj);

```
