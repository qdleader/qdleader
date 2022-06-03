
// 声明式函数
function funcT(name: string = 'qdleader', age: number = 18,sex?:string): number {
    return age
}


// 表达式类型的函数
var funcT5 = function (name: string, age: number): number {
    return age
}


// 接口类型
interface func6 {
    (name:string,age:number):number
}
let funcT6: func6 = function (name: string, age: number): number {
    return age
}




