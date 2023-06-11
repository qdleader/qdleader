

ref与reactive 是 Vue3 新推出的主要 API 之一，它们主要用于响应式数据的创建。

template 模板中使用的数据和方法，都需要通过 setup 函数 return 出去才可以被使用。
ref 函数创建的响应式数据，在模板中可以直接被使用，在 JS 中需要通过 .value 的形式才能使用。而reactive则不需要


ref 函数可以接收原始数据类型与引用数据类型。
reactive 函数只能接收引用数据类型。
ref 底层还是使用 reactive 来做，ref 是在 reactive 上在进行了封装，增强了其能力，使它支持了对原始数据类型的处理。
在 Vue3 中 reactive 能做的，ref 也能做，reactive 不能做的，ref 也能做。

reactive 和 ref 都是用来定义响应式数据的 reactive更推荐去定义复杂的数据类型 ref 更推荐定义基本类型
