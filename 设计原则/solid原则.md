
# S.O.L.I.D.




本文就通过面向对象编程中，最基本的五种设计模式S.O.L.I.D.，如何在React当中应用，来告诉大家，其实他们是很简单的。




## S - SRP 单一职责原则
基本含义：一个类只应该负责一件事
在React当中，可以简单理解为一个组件、Hook只应该做一件事


下面的代码中，是一个正常React组件：
你不必看完这个低码，粗略看一下即可

```js
export function Bad() {
  const [products, setProducts] = useState([]);
  const [filterRate, setFilterRate] = useState(1);

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');

    if (response && response.data) setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleRating = (rate: number) => {
    setFilterRate(rate);
  };

  const filteredProducts = useMemo(
    () => products.filter((product: any) => product.rating.rate > filterRate),
    [products, filterRate],
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col justify-center items-center">
        <span className="font-semibold">Minimum Rating </span>
        <Rating
          initialValue={filterRate}
          SVGclassName="inline-block"
          onClick={handleRating}
        />
      </div>
      <div className="h-full flex flex-wrap justify-center">
        {filteredProducts.map((product: any) => (
            ...
        ))}
      </div>
    </div>
  );
}
```


看起来也还不错，但实际上，他其实做了很多事情

获取数据
进行筛选 和 渲染产品列表

严格上来说，这不符合SRP，来让我们稍微改造一下

// 可以看到，我封装了
// Product商品组件，这是个纯UI组件
// useProducts custom hook
// useRateFilter custom hook

```js
export function Good() {
  const { products } = useProducts();

  const { filterRate, handleRating } = useRateFilter();

  return (
    <div className="flex flex-col h-full">
      <Filter
        filterRate={filterRate as number}
        handleRating={handleRating}
      />
      <div className="h-full flex flex-wrap justify-center">
        {filterProducts(products, filterRate).map((product: any) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
```
首先说明一个点，当在写React 代码的时候

如果遇到 useState 和 useEffect 来获取数据的时候，应该首先去考虑封装成一个custom hook
如果遇到map去遍历一个比较长的组件时，应该首先考虑封装成一个纯UI组件

在上面的代码中，数据获取在一个custom hook中，筛选数据也被单独放到了hook中，渲染产品列表也被单独封装为一个dummy component ， 即纯UI组件。
怎么样是不是代码干净可读多了？


## O - OCP 开闭原则

基本含义：类允许被扩展，但不允许被修改
听起来有些矛盾，但理解了他的意思之后，就会变的很简单。
考虑以下代码
```js
interface IMyButtonProps = {
	role: 'back' | 'forward' | 'home';
}
export const MyFuncyButton = (props: IMyButtonProps) => {
	return <>
	....
	</>
}
```

在上面的例子当中，按钮分为了三种类型，包括前进、后退、返回主页。一切良好，但如果有一天我想添加一个比如支付的按钮，那该怎么办么？
**恐怕得有去改代码内部，这显然是与OCP原则不符的。**

所以我们看主流的UI框架，他们的按钮主题都是按照颜色维度去区分的，而不是业务类型，而内部的文案由props传入。这样足够满足各种需求。
```js
<!-- 可以看到element-ui是如何抽象按钮类型的 -->

<el-button type="primary">主要按钮</el-button>
 <el-button type="success">成功按钮</el-button>
 <el-button type="info">信息按钮</el-button>
 <el-button type="warning">警告按钮</el-button>
 <el-button type="danger">危险按钮</el-button>
```

这里还要说明一点，开闭原则有一个超级经典的使用场景，就是装饰器
@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;
}
复制代码
以上是Nest.js的一个实体类，对于这个Blog类，如果我不添加@Entity()注解，那么这就是一个普通的类，但如果我添加了这个注解，他就是一个map到数据库的实体类。即为该类添加了功能，但并没有改变类本身的源代码
我还可添加更多的注解，比如打印日志等等，可以实现同样的目的。


## L - LSP 里氏替换原则
基本含义： 基类设定一系列的规范和契约，子类需要遵守
这个原则比较抽象，但个人感觉，这无疑是强类型语言的基石。
我举一个最简单的例子。
试想，在Javascript当中，对于任何一个对象，我们是不是都可以调用toString()方法。这是为什么？
可能大家会说，原型链的顶端定义了toString()，其实这已经回答了里氏替换原则。
因为我们可以认为，原型链顶端，也就是Object.prototype这个原型对象，他就是JS当中所有对象的父类，或说超类。他身上的属性方法就像是一个契约，所有的子类都满足这个契约。
这一点非常重要，比如
```js
class 猿人 {
	吃饭() {
		console.log('我会吃饭')
	}
	睡觉() {
	}
}
class 你 extends 猿人 {
}

interface xxx {
	listYourBehaviors(person: 猿人);
} 
```
上述代码中listYourBehaviors方法接受一个猿人类型，但因为你继承自猿人，所以如果我入参传入你，那么也不会报错。
显然这是一种契约，需要开发者去遵守。
说的有点多。在React当中，我们经常会封装组件，比如
```js
export const MyFuncyInput = () => {
	return <input type="text" />
}
```
假设你封装了一下input组件。可能你的组件很牛~，很多技术小伙伴都在用，但有一天，一个人和你说，我使用组件的时候，传入了一个placeholder，发现并没有生效，这是怎么回事？
额，当然不会生效，因为你没有把placeholder添加到iinput上...
在这里，你可以认为input就是父类，而你封装的MyFuncyInput就是子类，那么父类具备的属性placeholder，子类也应该去实现，当然，如果挨个写会很麻烦，所以可以这样写

```js
interface IMyFuncyInputProps extends React.HTMLInputAttributes<HTMLInputElement> {
	isLargeInput: boolean
}
export const MyFuncyInput = (props: IMyFuncyInputProps) => {
	const {isLargeInput, ...restProps} 
	return {isLargeInput ? <input type="text" style={...} {...restProps} /> : <input type="text" {...restProps} />
}
```

每当我们封装一个组件的时候，都应该想到，对于父组件本身原有的属性，我们应该怎样处理，去符合里氏替换原则。
## I - ISP 接口分离原则
基本含义：客户端不应依赖于他不使用的接口
这个是非常简单的，在React当中，他的意思一个不应向组件传入其不使用的Props
有人可能觉得为什么要这样干？
考虑一下代码

<Thumbnail product={product} />

thumbnail就是产品缩略图的意思，当上面的组件如果被其他任何人使用，是否会觉得会不清楚，为什么我需要传入一个完整的product对象进行。缩略图不应该是需要一个图片地址么？
所以可以调整如下


<Thumbnail imageUrl={product.imgUrl} />

这是不是就清楚多了，其实很多时候，代码的干净整洁都是一点点积累出来的。关注每一个小点，可以最终让你的应用更容易维护。比如上边的情况，如果用户获取不到product对象，他只能获取到订单对象，订单上也包含缩略图，那么他就不能使用你的组件了么？


## D - DIP 依赖倒转原则

基本含义：接口依赖于抽象，而不是具体实现
我记得这里有个经典的例子，就是计算机各部件的组成，比如，USB接口，无论你是摄像机，鼠标，键盘，无论实现了什么样的功能，这些具体功能对于电脑而言是隐藏的。对外暴露的只是通过USB这个接口去进行数据传递。
试想如果一个鼠标需要对各种类型的电脑适配不同的接口，那绝对是个灾难。
在React当中，我们其实已经会不知觉的大量使用了，因为react的是一门函数式的库，他的UI函数是通过Props去传递的，Props就是所谓的接口。比如
export const SubmitForm = () => {
	const onSubmit = () {
		api.sendRequest('https://xxx.com/api/product');
	}
	return <Form onSubmit={onSubmit}></From>
}

对于上边的表单提交组件，如果有一天，我希望能够将其复用到其他地方，但提交的URL不一样，那么显然，对不不同使用这个表单的地方，都应该只关注该表单的接口。即，他可以改成下面这样

```js
interface ISubmitFrom {
	onSubmit: () => void
}
export const SubmitForm = (props: ISubmitFrom) => {
	const onSubmit = () {
		props.onSubmit();
	}
	return <Form onSubmit={onSubmit}></From>
}

```
如上，即定义了一个接口，他会指定一个回调函数，就是onSubmit，任何使用这个组件的人，是需要是实现回调的逻辑就可以了。也就是所谓的面向接口编程
其实，我们想象一下，在前后端开发联调的过程中，大家都是按照接口文档是实现。比如前端开发，你会去注意后端逻辑是怎么实现的么，你会关注，比如产品列表，后台是直接读MySQL数据库，还是走Redis缓存?




### good Demo
https://github.com/ipenywis/react-solid/tree/main/src/principles