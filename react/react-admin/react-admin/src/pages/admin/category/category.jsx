import React, {Component} from 'react';

import { Card ,Icon ,Button,Table,message} from 'antd';

import {reqList} from '../../../api';

 import LinkButton from '../../../components/link-button/link-button'
export default class Category extends Component {
		state= {
			categorys:[],// 分类列表
			subCategorys:[],// 子分类列表
			loading:true,//请求过程中列表加载
			parentId:'0',//要穿的id
			parentName:'',//显示的title
		}
		showSub = (data) => {
			console.log("二级列表",data)
			this.setState({
				parentId:data.id
			},() => {
				console.log("parentId",this.state.parentId)
				this.getListq()
			})
			
		}
		// 获取列表数据
		getListq = async () => {
			this.setState({loading: true})
			const {parentId} = this.state
			const res = await reqList(parentId)
			console.log("返回的结果",res)
			this.setState({loading:false})
			if(res.ret== 0) {
				res.data.data.map(item => {
					item.key = item.id
				})
				const categorys = res.data.data;
				if(parentId == 0) {
					this.setState({
						categorys,
					})
				} else {
					this.setState({
						subCategorys:categorys
					})
				}
				
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
						render:(data) => (
							<span>
								<LinkButton>修改分类</LinkButton>
								<a href="#" onClick={() => {this.showSub(data)}}>查看子分类</a>
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
		const {categorys,subCategorys,loading,parentId} = this.state
		const title = '一级分类列表'
		const extra = (
			<Button>
				<Icon type="plus"/>
				添加
			</Button>
		)
		
	
		return (

			<div>
				 <Card title={title} extra={extra}>
					<Table bordered 
						dataSource={parentId == 0 ? categorys : subCategorys} 
						columns={this.columns} 
						loading={loading}
						pagination={{defaultPageSize:5,showQuickJumper:true}}
						/>
				</Card>
			</div>
		)
	}
}