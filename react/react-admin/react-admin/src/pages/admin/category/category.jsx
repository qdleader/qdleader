import React, {Component} from 'react';

import { Card ,Icon ,Button,Table,message,Modal} from 'antd';

import {reqList,updateCategory} from '../../../api';
import AddForm from './add-form';
import LinkButton from '../../../components/link-button/link-button'
export default class Category extends Component {
		state= {
			categorys:[],// 分类列表
			subCategorys:[],// 子分类列表
			loading:true,//请求过程中列表加载
			parentId:'0',//要穿的id
			parentName:'',//显示的title
			visible:false,//模态框显隐
			showEdit:false,//展示编辑
		}
		showModal = () => {
			this.setState({
			  visible: true,
			  showEdit:false,
			});
		  };
		editModal = (data) => {
			this.category = data;
			this.setState({
				visible:true,
				showEdit:true
			})
		}
		  handleOk = async () => {
			// console.log(e);
			const id = this.category.id;
			const name = this.form.getFieldValue('categoryName')
			console.log(id,name)
			const res = await updateCategory({id,name})
			
			if(res.ret == 0) {
				this.getListq()
			}
			this.setState({
			  visible: false,
			});
		  };

		  handleCancel = e => {
			console.log(e);
			this.setState({
			  visible: false,
			});
		  };
		//二级分类列表
		showSub = (data) => {
			console.log("二级列表",data)
			this.setState({
				parentId:data.id,
				parentName:data.id
			},() => {
				console.log("parentId",this.state.parentId)
				this.getListq()
			})
			
		}
		//一级分类列表
		showFirst = () => {
			this.setState({
				parentId:'0',
				parentName:'',
				subCategorys:[],
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
								<LinkButton onClick={() =>this.editModal(data)}>修改分类</LinkButton>
								{this.state.parentId == '0' ? <a href="#" onClick={() => {this.showSub(data)}}>查看子分类</a>: null}
								
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
		const {categorys,subCategorys,parentName,loading,parentId,showEdit} = this.state
		
		const category = this.category || {};
		const title = parentId == '0' ? '一级分类列表' : (
			<span>
				<LinkButton onClick={() => {this.showFirst()}}>一级分类列表</LinkButton>
				<Icon type="arrow-right" style={{marginRight:5}}/>
				<span>{parentName}</span>
			</span>
		)
		const extra = (
			<Button onClick={this.showModal}>
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
				// 遮罩
				 <Modal
				  title={showEdit?'编辑':'添加'}
				  visible={this.state.visible}
				  onOk={this.handleOk}
				  onCancel={this.handleCancel}
				>
					<AddForm categoryName={category.id} setForm={(form)=> {this.form = form}} categorys={categorys} parentId={parentId}/>
				</Modal>
			</div>
		)
	}
}