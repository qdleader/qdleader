import React from 'react'
import { Form, Input, Button, Col, Row, message, notification } from 'antd'
import { withRouter } from 'react-router-dom'
import GVerify from '../../utils/gVerify'
import { inject, observer } from 'mobx-react/index'
import BGParticle from '../../utils/BGParticle'
import './style.css'

@withRouter @inject('appStore') @observer @Form.create()
class LoginForm extends React.Component {
  state = {
    focusItem: -1,
  }

  componentDidMount () {
    this.verifyCode = new GVerify('v_container')
  }

  componentWillUnmount () {
    this.verifyCode = null
  }

  loginSubmit = (e) => {
    e.preventDefault()
    this.setState({
      focusItem: -1
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const users = this.props.appStore.users
        // 检测用户名是否存在
        const result = users.find(item => item.username === values.username)
        if (!result) {
          this.props.form.setFields({
            username: {
              value: values.username,
              errors: [new Error('用户名不存在')]
            }
          })
          return
        } else {
          //检测密码是否错误
          if (result.password !== values.password) {
            this.props.form.setFields({
              password: {
                value: values.password,
                errors: [new Error('密码错误')]
              }
            })
            return
          }
        }

        this.props.appStore.toggleLogin(true, {username: values.username})

        const {from} = this.props.location.state || {from: {pathname: '/'}}
        this.props.history.push(from)
      }
    })
  }
  register = () => {
    this.props.setShowBox('register')
    setTimeout(() => this.props.form.resetFields(), 500)
  }

  render () {
    const {getFieldDecorator} = this.props.form
    const {focusItem} = this.state
    return (
      <div className={this.props.className}>
        <div className='owl'>
          <div className='hand-left hand' style={focusItem === 1 ? styles.focusHandLeft : {}}/>
          <div className='hand-right hand' style={focusItem === 1 ? styles.focusHandRight : {}}/>
          <div className='arms-box'>
            <div className='arms arms-left' style={focusItem === 1 ? styles.focusArmsLeft : {}}/>
            <div className='arms arms-right' style={focusItem === 1 ? styles.focusArmsRight : {}}/>
          </div>
        </div>
        <Form onSubmit={this.loginSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{required: true, message: '请输入用户名'}]
            })(
              <Input
                placeholder='用户名'
                addonBefore={<span className='iconfont icon-User'
                                   style={focusItem === 0 ? styles.focus : {}}/>}
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem: -1})}
                size='large'/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}]
            })(
              <Input
                placeholder='密码'
                addonBefore={<span className='iconfont icon-suo1'
                                   style={focusItem === 1 ? styles.focus : {}}/>}
                type='password'
                onFocus={() => this.setState({focusItem: 1})}
                onBlur={() => this.setState({focusItem: -1})}
                size='large'/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('verification', {
              validateFirst: true,
              rules: [
                {required: true, message: '请输入验证码'},
                {
                  validator: (rule, value, callback) => {
                    if (value.length >= 4 && !this.verifyCode.validate(value)) {
                      callback('验证码错误')
                    }
                    callback()
                  }
                }
              ]
            })(
              <Row gutter={8}>
                <Col span={16}>
                  <Input
                    placeholder='验证码'
                    addonBefore={<span className='iconfont icon-securityCode-b'
                                       style={focusItem === 2 ? styles.focus : {}}/>}
                    onFocus={() => this.setState({focusItem: 2})}
                    onBlur={() => this.setState({focusItem: -1})}
                    size='large'/>
                </Col>
                <Col span={8}>
                  <div id='v_container' style={{height: 40}}/>
                </Col>
              </Row>
            )}
          </Form.Item>
          <div className='bottom'>
            <span className='registerBtn' onClick={this.register}>注册</span>&emsp;
            <Button type='primary' htmlType="submit">登录</Button>
          </div>
        </Form>
      </div>
    )
  }
}

@inject('appStore') @observer @Form.create()
class RegisterForm extends React.Component {
  state = {
    focusItem: -1
  }
  registerSubmit = (e) => {
    e.preventDefault()
    this.setState({
      focusItem: -1
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const users = this.props.appStore.users
        // 检测用户名是否存在
        const result = users.find(item => item.username === values.registerUsername)
        if (result) {
          this.props.form.setFields({
            registerUsername: {
              value: values.registerUsername,
              errors: [new Error('用户名已存在')]
            }
          })
          return
        }

        const obj = [...this.props.appStore.users, {
          username: values.registerUsername,
          password: values.registerPassword
        }]
        localStorage.setItem('users', JSON.stringify(obj))
        this.props.appStore.initUsers()
        message.success('注册成功')
      }
    })
  }
  gobackLogin = () => {
    this.props.setShowBox('login')
    setTimeout(() => this.props.form.resetFields(), 500)
  }

  render () {
    const {getFieldDecorator} = this.props.form
    const {focusItem} = this.state
    return (
      <div className={this.props.className}>
        <div className='owl'>
          <div className='hand-left hand' style={(focusItem === 1 || focusItem === 2) ? styles.focusHandLeft : {}}/>
          <div className='hand-right hand' style={(focusItem === 1 || focusItem === 2) ? styles.focusHandRight : {}}/>
          <div className='arms-box'>
            <div className='arms arms-left' style={(focusItem === 1 || focusItem === 2) ? styles.focusArmsLeft : {}}/>
            <div className='arms arms-right' style={(focusItem === 1 || focusItem === 2) ? styles.focusArmsRight : {}}/>
          </div>
        </div>
        <Form onSubmit={this.registerSubmit} className='registerSubmit'>
          <Form.Item>
            {getFieldDecorator('registerUsername', {
              validateFirst: true,
              rules: [
                {required: true, message: '用户名不能为空'},
                {pattern: '^[^ ]+$', message: '不能输入空格'},
              ]
            })(
              <Input
                placeholder='用户名'
                addonBefore={<span className='iconfont icon-User'
                                   style={focusItem === 0 ? styles.focus : {}}/>}
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem: -1})}
                size='large'/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('registerPassword', {
              validateFirst: true,
              rules: [
                {required: true, message: '密码不能为空'},
                {pattern: '^[^ ]+$', message: '密码不能有空格'}
              ]
            })(
              <Input
                placeholder='密码'
                addonBefore={<span className='iconfont icon-suo1'
                                   style={focusItem === 1 ? styles.focus : {}}/>}
                type='password'
                onFocus={() => this.setState({focusItem: 1})}
                onBlur={() => this.setState({focusItem: -1})}
                size='large'/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('confirmPassword', {
              validateFirst: true,
              rules: [
                {required: true, message: '请确认密码'},
                {
                  validator: (rule, value, callback) => {
                    const {getFieldValue} = this.props.form
                    if (!getFieldValue('registerPassword')) {
                      callback('请先输入上面的密码')
                    }
                    if (value && value !== getFieldValue('registerPassword')) {
                      callback('两次输入不一致！')
                    }
                    callback()
                  }
                }
              ]
            })(
              <Input
                placeholder='确认密码'
                addonBefore={<span className='iconfont icon-suo1'
                                   style={focusItem === 2 ? styles.focus : {}}/>}
                type='password'
                onFocus={() => this.setState({focusItem: 2})}
                onBlur={() => this.setState({focusItem: -1})}
                size='large'/>
            )}
          </Form.Item>
          <div className='bottom'>
            <span className='gobackBtn' onClick={this.gobackLogin}>返回登录</span>&emsp;
            <Button type='primary' htmlType="submit">注册</Button>
          </div>
        </Form>
      </div>
    )
  }
}

@withRouter @inject('appStore') @observer
class Login extends React.Component {
  state = {
    showBox: 'login'
  }

  componentDidMount () {
    this.props.appStore.initUsers()
    this.particle = new BGParticle('backgroundBox')
    this.particle.init()
    notification.open({
      message: '初始登录',
      duration: 10,
      description: (<ul>
        <li>账号：admin</li>
        <li>密码：admin</li>
      </ul>)
    })
  }
  componentWillUnmount(){
    this.particle.destory()
  }

  toggleShowBox = (box) => {
    this.setState({
      showBox: box
    })
  }

  render () {
    const {showBox} = this.state
    return (
      <div className='login-page' id='login-page'>
        <div style={styles.backgroundBox} id='backgroundBox'/>
        <div className='container'>
          <LoginForm className={showBox === 'login' ? 'login-box-active login-box' : 'login-box-leave login-box'}
                     setShowBox={this.toggleShowBox}/>
          <RegisterForm className={showBox === 'register' ? 'login-box-active login-box' : 'login-box-leave login-box'}
                        setShowBox={this.toggleShowBox}/>
        </div>
      </div>
    )
  }
}

const styles = {
  backgroundBox:{
    position:'fixed',
    top:'0',
    left:'0',
    width:'100vw',
    height:'100vh',
    backgroundImage:`url(${require('./img/bg5.jpg')})`,
    backgroundSize:'100% 100%'
  },
  focus: {
    transform: 'scale(0.6)',
    width: 40
  },
  focusHandLeft: {
    transform: 'translateX(-42px) translateY(-15px) scale(0.7)',
  },
  focusHandRight: {
    transform: 'translateX(42px) translateY(-15px) scale(0.7)',
  },
  focusArmsLeft: {
    transform: 'translateY(-40px) translateX(-40px) scaleX(-1)'
  },
  focusArmsRight: {
    transform: 'translateY(-40px) translateX(40px)'
  }
}

export default Login