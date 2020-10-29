import React, {Component ,useState} from 'react'
import './index.less'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Row,
  Col,
} from 'antd';


import {reqList} from '../../../api';
import LinkButton from '../../../components/link-button/link-button'

const { Option } = Select;

class UserList extends Component {
  // console.log("useState('default')",useState('default'))
  // const [componentSize, setComponentSize] = useState('default');
  //
  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };
 formRef = React.createRef();
  state = {
    data: [],//列表中数据
    pagination: {
      current: 1,
      pageSize: 10,
    },//分页数据
    loading: false,//加载动画
    visible:false,//弹出层显隐
    showEdit:true,//弹出层标题
    columns:[],//表格的默认样式
    currentData:[],//选中当前列的数据
  };

  UNSAFE_componentWillMount() {
  }
  componentDidMount() {
    const { pagination } = this.state;
    console.log("this.props.location",this.props.location)
    console.log("this.props.location.query",this.props.location.query)
    console.log("this.props.location.search",this.props.location.search)
    this.fetch({ pagination });
  }

  fetch = async () => {
    this.setState({loading: true})
    const {parentId} = this.state
    const res = await reqList(parentId)
    console.log("返回的结果",res)
    this.setState({loading:false})
    if(res.ret=== 0) {
      res.data.data.map(item => {
        item.key = item.id
      })
      const categorys = res.data.data;
        this.setState({
          data:categorys,
          pagination:{
            // pageSize:res.data.totalCount,
            // current:res.data.currentPage,
            total:res.data.totalCount
          },
          // this.pagination.current = res.data.currentPage
        })
    } else {
      // message.error('获取列表失败')
    }
  }
  onFinish =(data) => {
    console.log(data);
  }
//父组件调用子组件方法(把子组件的this 传过来)
  onRef = (ref) => {
    // alert(1)
         this.child = ref
         console.log("this.child",this.child)
     }
     handleChange = (value) => {
      console.log(`Selected: ${value}`);
    }
    goBack = () => {
      this.props.history.push('/product')
    }
  render() {
    // console.log(1234,this.currentData)
    const children = [];
      for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
      }

    return (
      <div>
      <Form
          labelCol={{
           span: 4,
          }}
          wrapperCol={{
           span: 14,
          }}
          layout="horizontal"
          size='large'
          className="aForm"
          ref={this.formRef}
          onFinish={this.onFinish}
          >
          <Row>
            <Col span={24}>
                  <Form.Item label="活动名称" name="aName" >
                   <Input />
                  </Form.Item>
              </Col>
            </Row>
          <Row className='aTime'>
             <Col span={6}>
                   <Form.Item label="开始时间" name="startTime">
                    <DatePicker />
                   </Form.Item>
              </Col>
             <Col span={6}>
                   <Form.Item label="结束时间" name="endTime">
                    <DatePicker />
                   </Form.Item>
             </Col>
         </Row>

          <Form.Item label="场地" name="areaPart">
           <Select>
             <Select.Option value="1">北京剧院</Select.Option>
           </Select>
          </Form.Item>
            <Form.Item label="嘉宾" name="person">
            <Select
               mode="tags"
               size='large'
               placeholder="Please select"

               onChange={this.handleChange}
               style={{ width: '100%' }}
             >
               {children}
             </Select>
            </Form.Item>

            <Form.Item label="是否启用" name="switch"  valuePropName="checked">
             <Switch />
            </Form.Item>

            <Row className="aBtn">
                <Col span={2}>
                  <Button type="primary" htmlType="submit">保存</Button>
               </Col>
               <Col span={2}>
                  <Button type="primary" onClick={this.goBack}>返回</Button>
               </Col>
           </Row>

          </Form>



      </div>
    )
  }
}


export default UserList
