# Object.groupBy()

```js
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" }
];

const studentsByGrade = Object.groupBy(students, student => student.grade);
console.log(studentsByGrade);
// 输出：
// {
//   A: [{ name: "Alice", grade: "A" }, { name: "Charlie", grade: "A" }],
//   B: [{ name: "Bob", grade: "B" }],
//   C: [{ name: "David", grade: "C" }]
// }
```

