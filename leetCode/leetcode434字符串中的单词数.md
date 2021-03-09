
统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

示例:

输入: "Hello, my name is John"
输出: 5
解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。


思路：

1.首先排除''
2.排除连续空串情况'           '
(因为 '    '这种你被split(' ')分割成数组时候,会成为['','','']所以把数组中的''数量去掉就是单词数了)



```
var countSegments = function(s) {
  if(s == '') {
    return 0
  }
  let num = 0,arr = s.split(' ')
  for(let i = 0; i < arr.length; i ++) {
    if(arr[i] == '') {
      num ++;
    }
  }
  return arr.length -num
};
```
