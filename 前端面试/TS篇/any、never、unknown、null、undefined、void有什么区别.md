


any: 动态的变量类型（丢失了类型检查的作用）
never: 永不存在的值的类型，例如：never类型是那些总是抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
unknown：任何类型的值都可以赋值给unknown类型，但是unknown只能赋值给unknown本身和any类型。若需要复制给其他类型前，必须被断言。
null和undefined：默认情况是所有类型的子类型。可以把这两个类型赋值给number类型。但是当我们指定strictNullChecks: true标记是，他们只能赋值给自身类型。
void：没有任何类型。例如：一个函数没有返回值，那么返回值可以定义为void。






## never
never不像前面那几个类型一样常用，甚至有些同学可能一开始压根就不知道这个类型存在的意义是什么。我们知道TypeScript在解析我们的代码时会对代码进行类型推断，并且在代码流不断深入的时候，类型会从较为宽泛的类型(例如any)一直推断到较为具体的类型，而这么推断下去是会有个终点，这个终点就是不存在的，不可能发生的类型，也就是类型系统的底部类型(bottom type)，而never就是TypeScript的底部类型。

用法
never类型只接受never类型的对象，甚至万金油any类型都不可以赋值给never类型。

let vAny: any = 1
let vNever: never =  vAny // error! never除了自己谁不都接受！
一般当我们想表示某个函数永远不会返回时，可以使用never类型，例如下面的例子:

// 因为这个是无限循环，我们可以使用never作为返回值表示它永远不会返回
function foreverLoop(): never {
  while(true) {}
}

// 因为这个函数会抛出异常，所以也是不会返回的
function crashFunc(): never {
  throw new Error('this function will crash')
}
使用场景
never类型的一个最大的作用就是帮我们对类型进行exclusive check，例如下面这个例子:

interface QA {
    kind: 'qa'
    bug: number
}

interface Developer {
    kind: 'developer'
    hair: number
}

type TechDude = QA | Developer

function printTechDude(h: TechDude) {
    if (h.kind === 'qa') {
        console.log(h.bug)
    } else if (h.kind === 'developer') {
        console.log(h.hair)
    } else {
        let exclusiveCheck: never = h // 由于这个代码永远也到达不了，所以h的类型被自动推断为never
    }
}
上面的代码现在是没有问题的，不过假如某一天我们新增了一个新的PM类型，而忘记在printTechDude函数里面处理这个新类型的话，上面的代码会报错:

interface QA {
    kind: 'qa'
    bug: number
}

interface Developer {
    kind: 'developer'
    hair: number
}

interface PM {
    kind: 'pm'
    features: number
}

// TechDude多了一个PM类型
type TechDude = QA | Developer | PM

function printTechDude(h: TechDude) {
    if (h.kind === 'qa') {
        console.log(h.bug)
    } else if (h.kind === 'developer') {
        console.log(h.hair)
    } else {
        let exclusiveCheck: never = h // error! 因为PM类型不可以赋值给never类型
    }
}
上面代码报错的原因是TechDude这个类型在else这个代码体里面已经被TypeScript收拢为PM类型，所以不再是never类型了。要去掉这个错误，我们需要在printTechDude函数里面额外加多一个else if(h.kind === 'pm')的判断:

function printHuman(h: TechDude) {
    if (h.kind === 'qa') {
        console.log(h.bug)
    } else if (h.kind === 'developer') {
        console.log(h.hair)
    } else if (h.kind === 'pm') {
        console.log(h.features)
    }else {
        let exclusiveCheck: never = h
    }
}
也正是因为exclusive check的存在我们才可以在类型变化的时候及时发现，避免问题留到了线上环境。



## unknown

上面我们说到了any会跳过所有的类型问题，而这其实会为日后的代码维护和开发埋下巨大的安全隐患。为了解决any的问题，TypeScript在3.0版本引入了unknown类型，它可以理解为类型安全的(type-safe)any。

用法
和any一样，任何类型都可以赋值给unknown类型的对象:

let vAny: any = 'Hello World!' // ok! any对象接受任何类型
let vUnknown: unknown = 'Hello World!' // ok! unknown对象接受任何类型的对象
和any不一样，unknown类型的对象不可以直接赋值给其它非unknown或any类型的对象，并且不可以访问上面的任何属性:

let vAny: any = 'Hello World!'
let vUnknown: unknown = 'Hello World!'

let vNumberForAny: number = vAny // ok! any可以直接赋值给其它任意类型
let vNumberForUnknown: number = vUnknown // error! unknown不可以直接赋值给其它非any和unknown类型的对象

vAny.toLocaleLowerCase() // ok! any可以访问所有的属性
vUnknown.toLocaleLowerCase() // error! unknown对象不可以直接访问上面的属性
那么应该怎样才能使用unknown类型的变量呢？答案很简单，那就是你需要先推断出对象的类型，才能使用，推断的方式有很多种，包括typeof和as assertion等其他type guard方法:

let vUnknown: unknown = 'abc'

// 使用typeof推断出vUnknown的类型是string
if (typeof vUnknown === 'string') {
    vUnknown.toLocaleUpperCase() // ok! 因为能进入这个if条件体就证明了vUnknown是字符串类型！
}

let vNumberForUnknown: number = vUnknown as number // unknown类型一定要使用as关键字转换为number才可以赋值给number类型
使用场景
由于unknown基本可以替代any，所以在任何any适用的场景，都应该优先使用unknown。使用了unknown后，我们既允许某个对象储存任意类型的变量，同时也要求别人在使用这个对象的时候一定要先进行类型推断。
