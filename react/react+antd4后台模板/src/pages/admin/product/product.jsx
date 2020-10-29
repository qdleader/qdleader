import React, {Component} from 'react'
import { Table ,Modal,Tag,Switch,Form,Select,Input,Button} from 'antd';

import './index.less'
import {reqList} from '../../../api';
import LinkButton from '../../../components/link-button/link-button'


const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class UserList extends Component {
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
	formRef = React.createRef();
 onGenderChange = (value) => {
	 // this.formRef.current.setFieldsValue({
		//  note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
	 // });
 };
 onFinish = (values) => {
	 console.log(values);
 };
 onReset = () => {
	 this.formRef.current.resetFields();
 };
  editModal = (data) => {
     this.currentData = data

    this.setState({
      visible:true,
      showEdit:true,
      currentData:data
    },() => {
      setTimeout(() => {
         this.child.setName()
      })
    })

  }
  // 初始化列数组
  initColums = () => {
    this.columns = [
      {
        title:'序号',
        width:100,
        render:(data,record,index) => (
          <span>
            {index + 1}
          </span>
        )
      },
      {
        title: '活动名称',
        dataIndex: 'csentence',
        sorter: true,
        width: '20%',
      },
      {
        title: '开始时间',
        dataIndex: 'start_time',
        width: '10%',
      },
			{
				title:"地点",
				dataIndex:'city',
				width:'10%',
			},
			{
				title:"预定票数",
				dataIndex:"number",
				width:"10%"
			},
			{
				title:'上线状态',
				dataIndex:"open",
				width:"10%",
				render:(data,record,index) => (
					 <Switch checked={data} onChange={() => this.onChange(data,record,index)}/>
				)
			},
			{
				title:'活动状态',
				dataIndex:"public",
				width:"10%",
				render:(tags) => (
					<Tag color="red">
						{tags == 1?'活动开始':'预定结束'}
					</Tag>
				)
			},
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title:'操作',
        width:300,
        render:(data,record,index) => (
          <span>
            <LinkButton onClick={() => this.editPage(data)}>编辑</LinkButton>
            <LinkButton onClick={() =>this.doDelete(data,record,index)}>删除</LinkButton>
          </span>
        )
      }
    ];
    const getRandomuserParams = params => {
      return {
        results: params.pagination.pageSize,
        page: params.pagination.current,
        ...params,
      };
    };
  }
  //列表中的删除
  doDelete = (data,record,index) => {
      console.log(data,record,index)
      let data1 = [...this.state.data]
      data1.splice(index,1)
      console.log(data1)
      this.setState({
        data:data1
      })
  }
	onChange = (data,record,index) => {
		console.log(data,record,index)
		let data1 = [...this.state.data]
		data1[index].open = !data1[index].open
		this.setState({
			data:data1
		})
	}
  editPage = (data) => {
    console.log(data)
    this.props.history.push({
      pathname:'/productEdit',
      query:{
        id:data.id
      },
      search:data.id
    })
  }
  handleOk = async () => {
  // console.log(e);
  // const id = this.category.id;
  // const name = this.form.getFieldValue('categoryName')
  // console.log(id,name)
  // const res = await updateCategory({id,name})
  //
  //   if(res.ret == 0) {
  //     this.getListq()
  //   }
    this.setState({
      visible: false,
    });
    this.child.submitInfo()
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });

  };
  UNSAFE_componentWillMount() {
    this.initColums();
  }
  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }
  handleTableChange = (pagination, filters, sorter) => {
    console.log(11,pagination, filters, sorter)
    this.setState({
      pagination:{
        current:pagination.current
      }
    })
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
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
//父组件调用子组件方法(把子组件的this 传过来)
  onRef = (ref) => {
    // alert(1)
         this.child = ref
         console.log("this.child",this.child)
     }
  render() {
    const { data, pagination, loading ,showEdit,currentData} = this.state;
    console.log(1234,this.currentData)
    return (
      <div>
				<div className="p_search">
				<Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
					<Form.Item
						name="note"
						label="活动名称"
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="gender"
						label="活动状态"
					>
						<Select
							placeholder="请选择活动状态"
							onChange={this.onGenderChange}
							allowClear
						>
							<Option value="1">已结束</Option>
							<Option value="2">未结束</Option>
						</Select>
					</Form.Item>
					<Form.Item
						noStyle
						shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
					>
						{({ getFieldValue }) => {
							return getFieldValue('gender') === 'other' ? (
								<Form.Item
									name="customizeGender"
									label="Customize Gender"
									rules={[
										{
											required: true,
										},
									]}
								>
									<Input />
								</Form.Item>
							) : null;
						}}
					</Form.Item>
					<Form.Item {...tailLayout} className="search_btn">
						<Button type="primary" htmlType="submit">
							查询
						</Button>
						<Button htmlType="button" onClick={this.onReset}>
							重置
						</Button>

					</Form.Item>
				</Form>
				</div>
          <Table
            columns={this.columns}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={this.handleTableChange}
          />
      </div>
    )
  }
}


export default UserList
