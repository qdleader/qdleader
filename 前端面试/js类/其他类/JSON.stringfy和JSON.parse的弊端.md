# 缺点
### 1.如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式，而不是对象的形式
### 2.如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；
### 3.如果被拷贝的对象中有正则表达式，则拷贝之后的对象正则表达式会变成Object
### 4、JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；  会抛弃对象的constructor,所有的构造函数会指向Object



```
eg:
function Person(name) {
    this.name = name;
    console.log(name)
  }

  const liai = new Person('liai');

  const test = {
    name: 'a',
    date: liai,
  };
  // debugger
  const copyed = JSON.parse(JSON.stringify(test));
  test.name = 'test'
  console.error('ddd', test, copyed)

```
