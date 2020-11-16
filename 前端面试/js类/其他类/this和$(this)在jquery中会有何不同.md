$(this) 返回一个jquery对象，你可以用$(this)调用多个方法，如text() ,val()


而this 代表当前元素，js 中的关键字，表示上下文中的当前dom元素。你不能对它调用jquery方法。

直到它被dom元素包裹，如，$(this)
