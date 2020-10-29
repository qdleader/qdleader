import React, {Component} from 'react'
import { Table ,Modal} from 'antd';

import {reqList} from '../../../api';
import LinkButton from '../../../components/link-button/link-button'

import UserAdd from './user-add';

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
        width:30,
        render:(data,record,index) => (
          <span>
            {index + 1}
          </span>
        )
      },
      {
        title: 'Name',
        dataIndex: 'cname',
        sorter: true,
        width: '20%',
      },
      {
        title: 'Gender',
        dataIndex: 'start_time',
        filters: [
          { text: 'Male', value: 'male' },
          { text: 'Female', value: 'female' },
        ],
        width: '20%',
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
            <LinkButton onClick={() =>this.editModal(data)}>修改分类</LinkButton>
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
    // console.log(11,pagination, filters, sorter)
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
    // console.log(1234,this.currentData)
    return (
      <div>
          <Table
            columns={this.columns}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={this.handleTableChange}
          />
           <Modal
              title={showEdit?'编辑':'添加'}
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
            <UserAdd currentData={currentData} onRef={this.onRef}  currentName= {currentData.cname} />
          </Modal>
      </div>
    )
  }
}


export default UserList
