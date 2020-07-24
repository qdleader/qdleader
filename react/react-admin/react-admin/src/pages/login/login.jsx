import React, {Component} from 'react'

import { Form, Icon, Input, Button } from 'antd';

class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event)
        // const form = this.props.form;

        // const values = form.getFieldsValue();
        // console.log("提交表单",values)
        this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
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
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
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
        )
    }
}

const WrapLogin = Form.create()(Login)
export default WrapLogin