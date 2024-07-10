# select中获取其他参数

在日常工作中,有时候需要获取下拉选择框除了value其他的值,在antd 官网中 可以使用api labelInValue; 每个选项的 label 包装到 value 中,会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式

```js
import { Select } from 'antd';
 
const { Option } = Select;
 
const opts = [
    {label:'1',value:1,data:{label:'这里用你的数据',value:[1,2,3,4]}},
    {label:'2',value:2,data:{label:'博客名:',value:'qdleader'}},
]
 
// evt 就是在opt中中绑定的data
  function handleChange(value, evt) {
    console.log('这里能拿到你在opts中定义的数据data:', evt);
  }
 
ReactDOM.render(
  <>
     <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        {opts.map((item, index) => (
          <Option value={item?.value} key={index} data={item?.data}>
            {item?.label}
          </Option>
        ))}
      </Select>
  </>,
  mountNode,
);

```