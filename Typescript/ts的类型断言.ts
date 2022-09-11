let num: number | string = '10'

// 第一种 （在tsx 中不能用这种）
function getAs(name: string | number) {
    return (<string>name).length
}

// 第二种
function getAs1(name: string | number) {
    return (name as string).length
}
{{}}