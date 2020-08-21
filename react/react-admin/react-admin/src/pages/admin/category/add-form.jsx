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
		setForm:PropTypes.func.isRequired
	}
	componentWillMount () {
		//将form 对象传给父组件
		this.props.setForm(this.props.form)
	}
	render() {
		const {categoryName} = this.props;
		const {getFieldDecorator} = this.props.form;
		return (
			<Form>
			<Item>
			{
				getFieldDecorator('parentId',{
					initialValue:categoryName
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