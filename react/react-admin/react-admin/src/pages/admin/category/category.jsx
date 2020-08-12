import React, {Component} from 'react';

import { Card ,Icon ,Button,Table} from 'antd';

import {reqList} from '../../../api';

// import LinkButton from '../../components/link-button/link-button'
export default class Category extends Component {
		getListq = async () => {
			const res = await reqList('0')
			console.log("返回的结果",res)
		}
		componentWillMount() {
			this.getListq()
		}
	
	render() {
		
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

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
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

	
		return (
			<div>
				 <Card title={title} extra={extra}>
					<Table bordered dataSource={dataSource} columns={columns} />
				</Card>
			</div>
		)
	}
}