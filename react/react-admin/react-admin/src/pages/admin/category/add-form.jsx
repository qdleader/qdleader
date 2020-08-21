import React,{Component} from 'react'
import {
	Form,
	Select,
	Input,
} from 'antd'

const Item = Form.Item;
const Option = Select.Option;

// 添加分类的form组件

class AddForm extends Component {
	render() {
		const {getFieldDecorator} = this.props.form;
		return (
			<Form>
			<Item>
			{
				getFieldDecorator('parentId',{
					initialValue:'0'
				})(
					<Select>
						<Option value="0">下拉1</Option>
						<Option value="1">下拉2</Option>
						<Option value="2">下拉3</Option>
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