# string有关es6

##  includes()

使用场景： 判断字符串中是否包含指定子字符串，返回布尔值。
```js
const str = "Hello, World!";
console.log(str.includes("World")); // true
```

## startsWith()

使用场景： 检查字符串是否以特定的子字符串开头，返回布尔值。
```js
const url = "https://example.com/path";
console.log(url.startsWith("https")); // true
```

##  endsWith()

使用场景： 确定字符串是否以指定的子字符串结尾，返回布尔值。
```js
const filePath = "/path/to/file.txt";
console.log(filePath.endsWith(".txt")); // true
```

## trim()

使用场景： 移除字符串两端的空白字符（包括空格、制表符、换行符等）。常用于清理用户输入或处理文本数据。
```js
const userInput = "   Some text with extra spaces     ";
console.log(userInput.trim()); // "Some text with extra spaces"
```

##  trimStart() 和 trimEnd()

使用场景： 分别移除字符串开始和结束处的空白字符。在需要仅清理一侧空白时更为精确。
```js
const leadingSpaces = "   Text with leading spaces";
const trailingSpaces = "Text with trailing spaces   ";

console.log(leadingSpaces.trimStart()); // "Text with leading spaces"
console.log(trailingSpaces.trimEnd()); // "Text with trailing spaces"
```

## repeat()

使用场景： 将字符串重复指定次数，生成新的字符串。
```js
const base = "ABC";
console.log(base.repeat(3)); // "ABCABCABC"
```

## padStart() 和 padEnd()

使用场景： 通过在字符串开始或结束处填充指定字符（默认为空格），使字符串达到指定长度。
```js
const number = "123";
console.log(number.padStart(5, "0")); // "00123"
console.log(number.padEnd(7, "-")); // "123-----"
```

##  codePointAt()

使用场景： 返回指定位置的字符的 Unicode 代码点。支持扩展字符集，如 emoji。
```js
const string = "👋";
console.log(string.codePointAt(0).toString(16)); // "1f44b"
```

##  fromCodePoint()

使用场景： 从一个或多个 Unicode 代码点创建字符串。支持大于 \uFFFF 的代码点。
```js
    

const codePoints = [0x1F600, 0x1F308];
const emojiString = String.fromCodePoint(...codePoints);
console.log(emojiString); // "😀🌈"
```

##  normalize()

使用场景： 将字符串转换为Unicode标准形式（NFC、NFD、NFKC或NFKD），用于规范化字符串比较和处理。
```js
const combined = "á"; // composed form
const decomposed = "á"; // decomposed form

console.log(combined.normalize("NFC") === decomposed.normalize("NFC")); // true
```

##  matchAll()

使用场景： 返回一个迭代器，遍历字符串中所有匹配正则表达式的捕获组。适用于复杂模式匹配与分析。
```js
const text = "A1, B2, C3, D4";
const regex = /\w(\d)/g;
for (const match of text.matchAll(regex)) {
  console.log(match[1]); // 输出: "1", "2", "3", "4"
}
```

## replaceAll()

使用场景： 全局替换字符串中所有匹配正则表达式或指定子字符串的部分，返回新字符串。
```js
const sentence = "The quick brown fox jumps over the lazy dog.";
const newSentence = sentence.replaceAll("fox", "cat");
console.log(newSentence); // "The quick brown cat jumps over the lazy dog."

```
