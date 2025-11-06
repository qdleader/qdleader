## 3. 无重复字符的最长子串

中等
9.8K
相关企业
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成

```js
用left和right两个指针, right指针前移的时候, 去检测max值, left指针前移的时候，直接进去下一个循环

var lengthOfLongestSubstring = function(str) {
    if (str.length <= 1) {return str.length}
      let left = 0
      let right = 1
      let max = 0
      let temp
      while(right<str.length){
        temp = str.slice(left, right)
        if (temp.indexOf(str.charAt(right)) > -1) {
          left++
          continue
        } else {
          right++
        }
        if (right - left > max) { max = right - left }
      }
      return max
};

```

```js

const lengthOfLongestSubstring = s => {
    // 滑动窗口初始化为一个空数组
    let arr = [];
    // 要返回的字符串的长度
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        // 使用 indexOf 判断是否在数组中出现过
        let index = arr.indexOf(s[i]);
        // 如果出现过
        if (index !== -1) {
            // 从数组开头到当前字符串全部截取掉
            arr.splice(0, index + 1);
        }
        // 在窗口右边放进新的字符
        arr.push(s[i]);
        // 更新下最大值
        max = Math.max(arr.length, max);
    }
    // 返回
    return max;
};

```

```js
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), max = 0
    for(let i = 0, j = 0; j < s.length; j++) {
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i)
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max
};

```
