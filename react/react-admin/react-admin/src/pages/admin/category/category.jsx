import React, {Component} from 'react';

import { Card ,Icon ,Button,Table,message} from 'antd';

import {reqList} from '../../../api';

// import LinkButton from '../../components/link-button/link-button'
export default class Category extends Component {
		state= {
			categorys:[],// 分类列表
		}
		// 获取列表数据
		getListq = async () => {
			const res = await reqList('0')
			console.log("返回的结果",res)
			if(res.ret== 0) {
				res.data.data.map(item => {
					item.key = item.id
				})
				const categorys = res.data.data;
				this.setState({
					categorys,
				})
			} else {
				message.error('获取列表失败')
			}
		}
		// 初始化列数组
		initColums = () => {
				this.columns = [
				  {
				    title: '姓名',
				    dataIndex: 'id',
				    key: 'id',
				  },
				  {
				    title: '时间',
				    dataIndex: 'start_time',
				    key: 'start_time',
				  },
					{
						title:'操作',
						width:300,
						render:() => (
							<span>
								<a href="#">修改分类</a>
								<a href="#">查看子分类</a>
							</span>
						)
					}
				];
		}
		componentWillMount() {
			this.initColums();
		}
		componentDidMount() {
			this.getListq();
		}
		

	
	render() {
				//读取状态数据
		const {categorys} = this.state
		const title = '一级分类列表'
		const extra = (
			<Button>
				<Icon type="plus"/>
				添加
			</Button>
		)
		
		const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];



	
		return (

			<div>
				 <Card title={title} extra={extra}>
					<Table bordered 
						dataSource={categorys} 
						columns={this.columns} 
						pagination={{defaultPageSize:5,showQuickJumper:true}}
						/>
				</Card>
			</div>
		)
	}
}