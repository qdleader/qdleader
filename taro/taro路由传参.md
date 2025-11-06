# taro路由传参
```js
import Taro, {useRouter， getCurrentInstance} from '@tarojs/taro';
 
// 使用navigateTo(跳转后可以返回上一级页面)或者redirectTo(跳转后无法返回上一级页面)
// navigateTo和redirectTo用法都是一样的
Taro.navigateTo({
    url: `/pages/index/index?id=1&type=index`
})
 
// 跳转到目标页面内获取参数的方法
// 类组件内获取
export default class Index extends Component {
  $instance = getCurrentInstance()
 
  componentDidMount () { 
    console.log(this.$instance.router.params) // 页面参数获取
  }
 
  render () {
    return (
      <View className='index'>
        <Text>首页</Text>
      </View>
    )
  }
}
 
// 函数式组件获取（hooks）
// 1. 第一种获取形式
function Index(){
  const [pageIndex,setPageIndex] = useState('首页')
 
  const { router } = getCurrentInstance();
  console.log(router.params) // 参数接收
 
  return ( 
    <View>
        <Text>{pageIndex}</Text>
    </View>
  )
}
 
// 2. 第二种获取形式
function Index(){
  const [pageIndex,setPageIndex] = useState('首页')
 
  const router = useRouter();
  console.log(router.params.id) // 参数接收
 
  return ( 
    <View>
        <Text>{pageIndex}</Text>
    </View>
  )
}
```
