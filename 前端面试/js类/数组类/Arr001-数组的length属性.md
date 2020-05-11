`
const clothes = ['jacket','tshirt];
clothes.length = 0

clothes[0]  输出什么？
`


答案是：undefined


解析:
减少length属性值的副作用就是删除自己的数组元素，这些元素的索引位于新旧长度之间。

##由于length属性行为，当js执行clothes.length = 0时，删除所有的clothes项，所以clothes[0]的值为undefined，因为clothes数组已被清空