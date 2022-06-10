

//1. 类型 + 方括号
let arr2: number[] = [12,23,45]
let arr3: string[] = ['1', '2', '3'];
let arr4: any[] = ['1', '2', '3',1];



//2. 数组 泛型
let arr: Array<number> = [12, 23, 45]


//3. 更常用的 接口表示法
interface IArr {
    [index:number]:number
}
var arr5: IArr = [1, 2, 3]



interface Isate {
    username: string,
    age:number
}

let arr6: Isate[] = [{
    username: 'qdleader',
    age:12
}];
let arr7:Array<Isate> = [{
    username: 'qdleader',
    age:12
}];
interface IArr1 {
    [index:number]:Isate
}
let arr8: IArr1 = [{
    username: 'qdleader',
    age:12
}]


