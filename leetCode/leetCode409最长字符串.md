
# leetCode409最长字符串



## 题目

>给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

> 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

>注意:
假设字符串的长度不会超过 1010。

> 示例 1:

>输入:
"abccccdd"

>输出:
7

> 解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。




## 解析

> 偶数的最长 把每个字母都对应的放到数组里面，对象里面放对应的个数

> 个数为偶数，一定会组成会问的，个数为奇数的减一即可

> 最总生成的num一定是偶数，如果num小于s的长度，那么num + 1即可




```
var longestPalindrome = function(s) {
    if(s.length > 1010) {
        return
    }
    let num = 0;
    let nowObj = {},arr =[];
    for(let i = 0; i < s.length; i ++) {
         if(arr.indexOf(s.charAt(i)) == -1) {
            nowObj[s.charAt(i)] = 1
            arr.push(s.charAt(i))
         } else {
            nowObj[s.charAt(i)] += 1
         }
    }
    console.log("nowObj",nowObj)
    console.log("nowObj",arr)
    for(let i = 0; i < arr.length; i ++) {
        if((nowObj[arr[i]]) % 2 == 0) {
            num += nowObj[arr[i]]
        } else {
            num += nowObj[arr[i]] - 1
        }
    }
    if(num < s.length) {
        return num + 1;
    } else {
        return num;
    }
};

console.log(longestPalindrome("cccdd"))

```





#拓展

js实现找出字符串中的最长回文串

```
var longestPalindrome = function(s) {
        if(s.length > 1010) {
            return
        }
        let num = 0;
        let str = ''
        for(let i = 0; i < s.length; i ++) {
             str = ''
            for(let j = i; j < s.length ; j ++) {
                str += s.charAt(j)
                if(str.split('').reverse().join('') == str) {
                    if(str.length > num) {
                        num = str.length;
                    }

                }
            }
        }
        return num;
    };

    console.log(longestPalindrome("abccccdd"))
```
