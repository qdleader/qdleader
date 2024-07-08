
# 前端必备技能之之debugger利器


>做前端如果说你目前还不知道有debugger这个技巧，那么可以说你根本没有真正的入门，也并没有静下心来去学习前端，这是成为一个大神必备的技巧，有了这个技巧，你调试起来会得心应手，在该断点时断点，不用费劲去单步调试到你想调试的那个代码，直接在那个调试代码的前一行，
加上一句debugger；语句，然后运行程序，程序就会自动断点到你书写debugger;语句的地方或者你直接在source文件中点击行数的，然后运行时候可直接卡到断点位置进行调试




![chrome这几个按钮](前端必备技能之之debugger利器_files/1.jpg)

从左至右依次是：

（等号）pause script execution
–>暂停脚本执行
（半弧箭头）step 快捷键：F9
–>单步执行 注意：遇到子函数会进去继续单步执行
（下箭头）step into 快捷键：F11 全称：step into next function call
–>单步执行，遇到子函数就进去继续单步执行
（上箭头）step over 快捷键：F10 全称：step over next function call
–>单步执行，遇到子函数并不进去，将子函数执行完并将其作为一个单步
（右箭头）step out 快捷键：Shift + F11 全称：step out of current function
–>直接跳出当前的函数，返回父级函数
（右粗箭头，点击一下多一个斜线，再次点击就取消了）deactivate breakpoints or activate breakpoints
–>禁用断点/启用断点
（圆形等号）pause on execution
–>暂停执行


未完待续。。