enum Days {
    Sun,
    Mon,
    Tue,
}

console.log(Days.Sun);  // 0
console.log(Days.Mon);  // 1
console.log(Days.Tue);  // 2



// 数字枚举成员还具有 反向映射 的特性，从枚举值到枚举名字，要注意的是 不会为字符串枚举成员生成反向映射。
console.log(Days[0] === 'Sun');
console.log(Days[Days.Sun]); // Sun


// 数字枚举具有 自增行为
enum Days1 {
    Sun = 3,
    Mon,
    Tue,
}
console.log(Days.Sun);  // 3
console.log(Days.Mon);  // 4
console.log(Days.Tue);  // 5



// 字符串枚举
//在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。


enum Person {
  name = 'QDLEADER',
  age = 'AGE',
}
console.log(Person.name); // QDLEADER
console.log(Person.age); // AGE



// 异构枚举
//枚举可以混合字符串和数字成员，但一般没必要这么做。


enum Person1 {
  name = 1,
  age = 2,
  love = 'LOVE',
  hobby = 'HOBBY'
}
console.log(Person1.name); // 1
console.log(Person1.hobby); // HOBBY
{{}}

//常量枚举
// 常量枚举通过在枚举上使用 const 修饰符来定义，常量枚举不同于常规的枚举，他们会在编译阶段被删除。


const enum Size {
  WIDTH = 10,
  HEIGHT = 20
}
const area = Size.WIDTH * Size.HEIGHT; // 200





