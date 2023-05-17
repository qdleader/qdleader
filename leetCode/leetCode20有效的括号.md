
## 20. 有效的括号
> 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

> 有效字符串需满足：

> 左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。





## 思路

> 1.首先判断这个字符串是否偶数，不是偶数直接为false
> 2.把左侧的括号依次放到数组里面，然后从后往前比较，如果不是一对，直接为false
> 3.当比较完成，看看左侧数组是不是没有了，
> 4.还要提防右侧括号有剩余，比如这种 ()))，用这行  if(!item) {
    return false
  }就可以



## 答案


```
var isValid = function(s) {
  if(s % 2 == 1 ) {
    return false
  }
  let arr1 = [];
  for(let i = 0;i < s.length; i ++) {
    if(s[i] == '(' || s[i] == '[' || s[i] == '{') {
      arr1.push(s[i])
    }
  }
  if(arr1.length != s.length/2) {
    return false
  }
  let arr = [];
  for(let i = 0;i < s.length; i ++) {
    if(s[i] == '(' || s[i] == '[' || s[i] == '{') {
      arr.push(s[i])
    } else {
      let item = arr[arr.length - 1]
      if(item == '(' && s[i] != ')' ) {
        return false
      } else if(item == '[' && s[i] != ']') {
        return false
      } else if(item == '{' && s[i] != '}') {
        return false
      }
      arr.pop()
    }
  }
  return arr.length == 0
};
```



## 优化

```
if(s % 2 == 1 ) {
  return false
}
let arr = [];
for(let i = 0;i < s.length; i ++) {
  if(s[i] == '(' || s[i] == '[' || s[i] == '{') {
    arr.push(s[i])
  } else {
    let item = arr[arr.length - 1]
    if(!item) {
      return false
    }
    if(item == '(' && s[i] != ')' ) {
      return false
    } else if(item == '[' && s[i] != ']') {
      return false
    } else if(item == '{' && s[i] != '}') {
      return false
    }
    arr.pop()
  }
}
return arr.length == 0
```



```js

funtion isValid(str){
  const stack = []
  map ={
    "(":")",
    "{":"}",
    "[":"]",
  };
  for(const x of str){
     if(x in map){
       stack.push(x);
       continue;
     };
     if(map[stack.pop()] !== x) return false;
  }
  return !stack.length
} 
```