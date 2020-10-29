import React, {Component} from 'react'

import '@ant-design/compatible/assets/index.css';

import { Input, Button,Form} from 'antd';
import './login.less';
import { Redirect} from 'react-router-dom';
import {adminuserLogin} from '../../api';
import Bus from '../../utils/bus.js'
class Login extends Component {
	    handleSubmit = async (event) => {
				console.log(event)
					  const {username,password} = event
					  const res = await adminuserLogin(username, password)
					  console.log("成功了",res.data)
					  Bus.user = res.data
					  localStorage.setItem("user",JSON.stringify(res.data))
						this.props.history.push('/home')
		}
    //对密码进行自定义验证
    validatePwd = (rule, value, callback) => {
        if(!value) {
            return Promise.reject("密码必须输入")
        } else if(value.length > 12) {
            return Promise.reject("密码长度不能大于12")
        } else if (value.length < 4) {
            return Promise.reject("密码长度不能小于4")
        } else if(!(/^[a-zA-Z0-9_]+$/.test(value))) {
            return Promise.reject("密码必须是数字，英文，或下划线")
        } else {
            return Promise.resolve()//验证通过
        }
    }
    render () {
				const user = Bus.user;
				if(user && user.admin_user_id) {
					//没登录跳转到登陆
					return <Redirect to="/" />
				}
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-bg">
				     <div className="login-box">
						{/* 登录表单开始 */}
						<Form
							onFinish={this.handleSubmit}
						 className="login-form">
							<Form.Item name="username" 	rules={[
									{ required: true, message: 'Please input your username!' },
									{min:4,message:'用户名至少4位'},
									{max:12,message:'用户名最多12位'},
									{pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是英文数字或下划线'}
								]}	>
								<Input placeholder="Username" />
							</Form.Item>
							<Form.Item name="password" rules={[{
									validator:this.validatePwd
								}]}>
								<Input type="password" placeholder="Password"/>
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
        );
    }
}

// const WrapLogin = Form.create()(Login)
export default Login
