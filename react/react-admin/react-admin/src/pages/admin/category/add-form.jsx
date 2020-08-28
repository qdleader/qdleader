import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {
	Form,
	Select,
	Input,
} from 'antd'

const Item = Form.Item;
const Option = Select.Option;

// 添加分类的form组件

class AddForm extends Component {
	static propTypes = {
		categoryName:PropTypes.string.isRequired,
		setForm:PropTypes.func.isRequired,
		categorys:PropTypes.array.isRequired,//一级分类的数组
		parentId:PropTypes.string.isRequired,//父分类的id
		
	}
	componentWillMount () {
		//将form 对象传给父组件
		this.props.setForm(this.props.form)
	}
	render() {
		const {categorys,parentId} = this.props;
		// const {categoryName} = this.props;
		const {getFieldDecorator} = this.props.form;
		return (
			<Form>
			<Item>
			{
				getFieldDecorator('parentId',{
					// initialValue:categoryName
					initialValue:parentId
				})(
					<Select>
						
							{
								categorys.map(item => <Option value={item.id}>{item.name}</Option>)
							}
					</Select>
				)
			}
			</Item>
			<Item>
				{
					getFieldDecorator('categoryName',{
						initialValue:''
					})(
						<Input placeholder="输入名称"/>
					)
				}
			</Item>
			</Form>
		)
	}
}

export default Form.create()(AddForm)