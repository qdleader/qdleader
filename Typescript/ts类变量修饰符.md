
TS提供给了我们三个修饰符

public 共有属性 都可以访问到
protected 保护属性 只有这个类的内部和子类中可以访问到
private 私有属性  只有这个类中可以访问到，子类都访问不到
```
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

```

class Parent {
    private name = 'qdleader'
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
console.log(p.name) // undefined
let c = new child()
console.log(c.name)  // undefined

```



```

class Parent {
    private name = 'qdleader'
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
console.log(p.name) // undefined
let c = new child()
console.log(c.name)  // qdleader

```


