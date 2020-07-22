import React from 'react'
import {Card, Alert, Divider, Select, Steps, Input, Button, Form,Icon,BackTop} from 'antd'
import {inject,observer} from 'mobx-react'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import './css/formDeni2.css'
import {digitUppercase} from '../../../utils/utils'
import TypingCard from '../../../components/TypingCard'

const { Step } = Steps;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
const tailFormItemLayout = {
  wrapperCol:{
    offset:5
  }
}


@inject('stepFormStore') @Form.create() @observer
class Step1 extends React.Component{
  nextStep = () =>{
    this.props.form.validateFields((err,values)=>{
      if (!err){
        this.props.stepFormStore.setInfo(values)
        this.props.stepFormStore.setCurrent(1)
      }
    })
  }
  render(){
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Form className='stepForm' hideRequiredMark>
          <Form.Item {...formItemLayout} label="付款账户">
            {getFieldDecorator('payAccount', {
              initialValue: 'ant-design@alipay.com',
              rules: [{ required: true, message: '请选择付款账户' }],
            })(
              <Select placeholder="test@example.com">
                <Option value="ant-design@alipay.com">ant-design@alipay.com</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="收款账户">
            <Input.Group compact>
              <Select defaultValue='alipay' style={{width:100}}>
                <Option value="alipay">支付宝</Option>
                <Option value="bank">银行账户</Option>
              </Select>
              {getFieldDecorator('receiverAccount',{
                  initialValue: 'test@example.com',
                  rules: [
                    { required: true, message: '请输入收款人账户' },
                    { type: 'email', message: '账户名应为邮箱格式' },
                  ],
                })(
                  <Input style={{ width: 'calc(100% - 100px)' }}/>
                )}
            </Input.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label="收款人姓名">
            {getFieldDecorator('receiverName', {
              initialValue: 'Alex',
              rules: [{ required: true, message: '请输入收款人姓名' }],
            })(<Input placeholder="请输入收款人姓名" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="转账金额">
            {getFieldDecorator('amount', {
              initialValue: 500,
              rules: [
                { required: true, message: '请输入转账金额' },
                {
                  pattern: /^(\d+)((?:\.\d+)?)$/,
                  message: '请输入合法金额数字',
                },
              ],
            })(<Input prefix="￥" placeholder="请输入金额" />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' onClick={this.nextStep}>下一步</Button>
          </Form.Item>
        </Form>
        <Divider/>
        <div className='desc'>
          <h3>说明</h3>
          <h4>转账到支付宝账户</h4>
          <p>
            如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
          </p>
          <h4>转账到银行卡</h4>
          <p>
            如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
          </p>
        </div>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

@inject('stepFormStore') @Form.create() @observer
class Step2 extends React.Component{
  state = {
    loading:false
  }
  handleSubmit = ()=>{
    this.props.form.validateFields((err,values)=>{
      if (!err){
        this.setState({
          loading:true
        })
       setTimeout(()=>{
         this.setState({
           loading:false
         })
         this.props.stepFormStore.setCurrent(2)
       },2000)
      }
    })
  }
  render(){
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Form className='stepForm' id='step2'>
          <Alert closable showIcon message="确认转账后，资金将直接打入对方账户，无法退回。" style={{ marginBottom: 24 }}/>
          <Form.Item {...formItemLayout} className='setFormText' label="付款账户">
            {this.props.stepFormStore.info.payAccount}
          </Form.Item>
          <Form.Item {...formItemLayout} label="收款账户">
            {this.props.stepFormStore.info.receiverAccount}
          </Form.Item>
          <Form.Item {...formItemLayout} className='setFormText' label="收款人姓名">
            {this.props.stepFormStore.info.receiverName}
          </Form.Item>
          <Form.Item {...formItemLayout} className='setFormText' label="转账金额">
            <span className='money'>{this.props.stepFormStore.info.amount}</span>
            <span>（{digitUppercase(this.props.stepFormStore.info.amount)}）</span>
          </Form.Item>
          <Divider/>
          <Form.Item {...formItemLayout} label="支付密码" required={false}>
            {getFieldDecorator('password', {
              initialValue: '123456',
              rules: [
                {
                  required: true,
                  message: '需要支付密码才能进行支付',
                },
              ],
            })(<Input type="password" autoComplete="off" style={{ width: '80%' }} />)}
          </Form.Item>
          <Form.Item
            style={{ marginBottom: 8 }}
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: {
                span: formItemLayout.wrapperCol.span,
                offset: formItemLayout.labelCol.span,
              },
            }}
            label=""
          >
            <Button type="primary" onClick={this.handleSubmit} loading={this.state.loading}>提交</Button>
            <Button onClick={()=>this.props.stepFormStore.setCurrent(0)} style={{ marginLeft: 8 }}>上一步</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

@inject('stepFormStore') @observer
class Step3 extends React.Component{
  render(){
    return (
      <div id='step3'>
        <div>
          <div className='icon-box'>
            <Icon type='check-circle'/>
          </div>
          <div>
            <h3 className='success'>操作成功</h3>
            <p className='success-desc'>预计两小时内到账</p>
          </div>
          <Form className='result'>
            <Form.Item>
              <Form.Item {...formItemLayout} className='setFormText' label="付款账户">
                {this.props.stepFormStore.info.payAccount}
              </Form.Item>
              <Form.Item {...formItemLayout} style={{marginBottom:18}} label="收款账户">
                {this.props.stepFormStore.info.receiverAccount}
              </Form.Item>
              <Form.Item {...formItemLayout} className='setFormText' label="收款人姓名">
                {this.props.stepFormStore.info.receiverName}
              </Form.Item>
              <Form.Item {...formItemLayout} className='setFormText' label="转账金额">
                <span className='money'>{this.props.stepFormStore.info.amount}</span>元
              </Form.Item>
            </Form.Item>
          </Form>
          <div>
            <Button type='primary' onClick={()=>this.props.stepFormStore.setCurrent(0)}>再转一笔</Button>
            <Button style={{ marginLeft: 8 }}>查看账单</Button>
          </div>
        </div>
      </div>
    )
  }
}

@inject('stepFormStore') @observer
class FormDemo2 extends React.Component {
  showStep = ()=>{
    switch (this.props.stepFormStore.current){
      case 1 : return <Step2/>
      case 2: return <Step3/>
      default: return <Step1/>
    }
  }
  render () {
    return (
      <div>
        <CustomBreadcrumb arr={['输入', '表单','分步表单']}/>
        <TypingCard source='将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成'/>
        <Card title='分步表单' bordered={false} style={{minHeight: 600}}>
          <Steps style={styles.steps} current={this.props.stepFormStore.current}>
            <Step title="填写转账信息" />
            <Step title="确认转账信息" />
            <Step title="完成" />
          </Steps>
          <div>{this.showStep()}</div>
        </Card>
      </div>
    )
  }
}

const styles = {
  steps:{
    maxWidth:750,
    margin: '16px auto'
  },
  desc:{
    padding:'0 56px',
  }
}

export default FormDemo2