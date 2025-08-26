# subString 和 slice 的区别

# substring 和 slice 的区别

`substring` 和 `slice` 都是 JavaScript 中用于提取字符串子串的方法，但它们有一些重要的区别：

## 基本语法
```javascript
string.substring(startIndex, endIndex)
string.slice(startIndex, endIndex)
```

## 主要区别

### 1. 参数处理方式
- **substring()**:
  - 如果参数是负数，会被当作0处理
  - 如果 `start` 大于 `end`，会自动交换这两个参数的位置
  - 示例：`"hello".substring(3, 1)` 等同于 `"hello".substring(1, 3)`

- **slice()**:
  - 支持负数索引，负数表示从字符串末尾开始计算
  - 如果 `start` 大于 `end`，返回空字符串
  - 示例：`"hello".slice(3, 1)` 返回 `""`

### 2. 负值处理
```javascript
let str = "hello world";

// substring 处理负值
str.substring(-3, 5);  // 相当于 str.substring(0, 5) -> "hello"

// slice 处理负值
str.slice(-3, 5);     // 从后往前3个字符是"rld"，但结束位置是5，所以返回空字符串 ""
str.slice(-6, -1);    // 从后往前6个字符是"w"，到倒数第1个字符是"d" -> "worl"
```

### 3. 使用场景
- **substring()**:
  - 适用于简单提取子串的场景
  - 当你确定索引都是正数且顺序正确时使用

- **slice()**:
  - 更灵活，支持从字符串末尾开始计算
  - 适用于需要处理负索引或从字符串末尾提取子串的场景

## 示例对比
```javascript
let str = "hello world";

// 示例1: start > end
console.log(str.substring(3, 1)); // 输出: el (自动交换参数)
console.log(str.slice(3, 1));    // 输出: "" (空字符串)

// 示例2: 负值处理
console.log(str.substring(-3, 5)); // 输出: hello (负值被视为0)
console.log(str.slice(-6, -1));    // 输出: worl (从后往前计算)

// 示例3: 提取最后几个字符
console.log(str.substring(str.length - 3)); // 输出: rld
console.log(str.slice(-3));               // 输出: rld (更简洁)
```

## 最佳实践建议
- 如果你需要从字符串末尾提取子串，使用 `slice()` 更简洁
- 如果你确定所有参数都是正数且顺序正确，两者都可以使用
- 避免在 `substring()` 中使用负参数，因为它会被当作0处理，可能导致意外结果
- 在不确定参数顺序或可能包含负值的情况下，优先使用 `slice()`

## 性能考虑
在大多数现代JavaScript引擎中，这两个方法的性能差异可以忽略不计，选择哪个主要取决于你的具体需求和使用场景。