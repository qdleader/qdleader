
TS提供给了我们三个修饰符

public 共有属性 都可以访问到
protected 保护属性 只有这个类的内部和子类中可以访问到
private 私有属性  只有这个类中可以访问到，子类都访问不到

```js
class Parent {
    public name = 'qdleader'
    age = 18
    say() {
        console.log(this.name)
    }
}

class child extends Parent {
    callParent() {
        super.say()
    }
}

let p = new Person()
p.say()  // qdleader
console.log(p.name) // qdleader
let c = new child()
console.log(c.name)  // qdleader

```

## private

```js

class Parent {
    private name = 'qdleader'
    age = 18
    say() {
        console.log(this.name)
    }
}

class child extends Parent {
    callParent() {
        super.name // 获取不到
        super.say()
    }
}

let p = new Person()
p.say()  // qdleader
console.log(p.name) // 报错 获取不到
let c = new child()
console.log(c.name)  // 报错 获取不到

```

## protected
```js

class Parent {
    protected name = 'qdleader'
    age = 18
    say() {
        console.log(this.name)
    }
}

class child extends Parent {
    callParent() {
        super.name // 可以获取到
        super.say()
    }
}

let p = new Person()
p.say()  // qdleader
console.log(p.name) // 报错 获取不到
let c = new child()
console.log(c.name)  // 报错 获取不到

```

## static

class Person {
  name: string;
  static age: number = 20; //定义静态属性
  //构造函数
  constructor(name: string) {
    this.name = name;
  }
  //静态方法 无返回值
  static run(): void {
    console.log(`${Person.age}静态属性`); //获取静态属性，结果是20静态属性
    //不能直接获取内部的属性 比如this.name
  }
  work(): string {
    return `我是${this.name}`;
  }
}
let p = new Person("张三"); //实例化
Person.run(); //结果是20静态属性 调用静态方法
console.log(p.work());
console.log(Person.age); //调用静态属性
