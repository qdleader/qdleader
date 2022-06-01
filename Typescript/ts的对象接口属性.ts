// <!-- 联合类型 -->

let str: number | string
str = 10
str = '10'



// 接口
// 可选属性
interface IState {
    name: string,
    age?:number  //可有可无
}

let obj: IState
obj = {
    name: 'qdleader',
    age:12
} 
obj = {
    name: 'qdleader',
} 

// 属性个数不确定时候 
interface IState2 {
    name: string,
    age: number,
    [propName:string]:any
}
let obj2: IState2 = {
    name: 'qdleader',
    age: 12,
    sex:'male',
    isMarry:true
}


// 只读属性
interface IState3 {
    readonly name: string,
}
let obj3: IState3
obj3 = {
     name: 'qdleader',
} 
obj3.name = 'qdleader1' // name 一旦定义赋值了就禁止修改


