
# http003-URI和URL的区别

> 统一资源定位符(uniform resource locator URL)<br/>

> 统一资源标识符(uniform resource identifier URI)

简单说就是:

> 只要能唯一标识资源的就是URI，在URI的基础上给出其资源的访问方式的就是URL

复杂点：
> 首先，URI，是uniform resource identifier，统一资源标识符，用来唯一的标识一个资源。而URL是uniform resource locator，统一资源定位器，
> 它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。而URN，uniform resource name，统一资源命名，是通过名字来标识资源，
> 比如mailto:java-net@java.sun.com。也就是说，URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。URL和URN都是一种URI。
> 在Java的URI中，一个URI实例可以代表绝对的，也可以是相对的，只要它符合URI的语法规则。而URL类则不仅符合语义，还包含了定位该资源的信息，因此它不能是相对的，schema必须被指定。


通俗点就是：
> 可以这样理解URI表示的是一个抽象的地址，URL表示的是一个详细的地址。 抽象的地址：湖南省长沙市（这是一个抽象的地址，相当于URI） 
> 详细的地址：湖南省长沙市雨花区香樟路22号（这是一个详细的地址，相当于URL） 为什么URL是URI的子集，雨花区的香樟路22号（URL）属于湖南省长沙市（URI），
 > 那么放到web上 https://www.csdn.net是一个URI（它只说明了服务器的地址，没有具体到文件是什么类型）
  > 那么https://www.csdn.net/image/logo.gif就是一个URL（他具体到了logo文件的位置并且logo文件是gif类型的） 这样一来URL和URI的区别就很清晰了



