import React, {Component} from 'react';

import { Card ,Icon ,Button,Table} from 'antd';
export default class Category extends Component {
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
];

		return (
			<div>
				 <Card title={title} extra={extra}>
					<Table dataSource={dataSource} columns={columns} />
				</Card>
			</div>
		)
	}
}