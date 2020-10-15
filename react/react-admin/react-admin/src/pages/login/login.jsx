import React, {Component} from 'react'

import { Form, Icon, Input, Button } from 'antd';
import './login.less';
import { Redirect} from 'react-router-dom';
import {adminuserLogin} from '../../api';
import Bus from '../../utils/bus.js'
class Login extends Component {

//     handleSubmit = (event) => {
//         event.preventDefault()
//         this.props.form.validateFields((err, values) => {
//             if (!err) {
//               console.log('Received values of form: ', values);
// 			  const {username,password} = values
// 			  adminuserLogin(username,password).then(res => {
// 					console.log("成功了",res.data)
// 			  }).ctatch(error => {
// 				  console.log("失败了",error)
// 			  })
// 			  this.props.history.push('/admin/dashboard')
//             }
//         });
//     }
	    handleSubmit = (event) => {
				event.preventDefault()
				// 增加async 和 await
				// 好处：简化promise对象使用，不用再使用then来制定成功失败的回调函数
				// 以同步编码(没有回调函数的)方式实现异步流程

				//async 要写在 await 最近的所在函数的左侧
				this.props.form.validateFields( async(err, values) => {
					if (!err) {
					  console.log('Received values of form: ', values);
					  const {username,password} = values
					  const res = await adminuserLogin(username, password)
					  console.log("成功了",res.data)
					  Bus.user = res.data
					  localStorage.setItem("user",JSON.stringify(res.data))
					  this.props.history.push('/admin/dashboard')
					}
				});
		}
    //对密码进行自定义验证
    validatePwd = (rule, value, callback) => {
        if(!value) {
            callback("密码必须输入")
        } else if(value.length > 12) {
            callback("密码长度不能大于12")
        } else if (value.length < 4) {
            callback("密码长度不能小于4")
        } else if(!(/^[a-zA-Z0-9_]+$/.test(value))) {
            callback("密码必须是数字，英文，或下划线")
        } else {
            callback()//验证通过
        }
    }
    render () {

		const user = Bus.user;
		if(user && user.admin_user_id) {
			//没登录跳转到登陆
			return <Redirect to="/" />
		}

        const { getFieldDecorator } = this.props.form;
        return (
			<div className="login-bg">
				     <div className="login-box">
						{/* 登录表单开始 */}
						<Form onSubmit={this.handleSubmit} className="login-form">
							<Form.Item>
							{getFieldDecorator('username', {
								//声明式验证。
								rules: [
									{ required: true, message: 'Please input your username!' },
									{min:4,message:'用户名至少4位'},
									{max:12,message:'用户名最多12位'},
									{pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是英文数字或下划线'}
								],
							})(
								<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username"
								/>,
							)}
								{/* <Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="Username"
									/>, */}
							</Form.Item>
							<Form.Item>
							{getFieldDecorator('password', {
								rules:[
									{
										validator:this.validatePwd
									}
								]
								// rules: [{ required: true, message: 'Please input your Password!' }],
							})(
								<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="Password"
								/>,
							)}
							</Form.Item>
							<Form.Item>
								<Button type="primary" htmlType="submit" className="login-form-button">
									Log in
								</Button>
							</Form.Item>
						</Form>
						{/* 登录表单结束 */}
					</div>
			</div>

        )
    }
}

const WrapLogin = Form.create()(Login)
export default WrapLogin
