# S050-链式调用实现 query 方法

提供了一个数组结构的 data，要求实现一个 query 方法，返回一个新的数组，query 方法内部有 过滤、排序、分组 等操作，并且支持链式调用，调用最终的 execute 方法返回结果

```js
const data = [
  { name: "张三", age: 18, gender: "男", score: 98 },
  { name: "李四", age: 20, gender: "男", score: 88 },
  { name: "王五", age: 19, gender: "女", score: 90 },
  { name: "赵六", age: 20, gender: "女", score: 95 },
  { name: "钱七", age: 22, gender: "男", score: 80 },
];

const query = function (data) {
  return new Query(data);
};

class Query {
  constructor(data) {
    this.data = data;
  }
  filter(fn) {
    this.data = this.data.filter(fn);
    return this;
  }
  sort(fn) {
    this.data = this.data.sort(fn);
    return this;
  }
  group(key) {
    const groups = {};
    this.data.forEach((item) => {
      const groupKey = item[key];
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
    });
    this.data = groups;
    // this.data = Object.values(groups);
    return this;
  }

  execute() {
    return this.data;
  }
}

const result = query(data)
  .filter((item) => item.gender === "男")
  .sort((a, b) => b.score - a.score)
  .group("age")
  .execute();

console.log(result);
```
