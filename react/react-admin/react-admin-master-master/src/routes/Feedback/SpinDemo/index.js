import React from 'react'
import {Card, Col, Row, Spin, Icon, Alert, Switch, Button} from 'antd'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

class SpinDemo extends React.Component {
  state = {
    loading: false,
    loading2: false
  }
  componentWillMount(){
    //页面路由加载的进度条，React有没有方法可以使路由加载自动调用这个方法，避免在每个页面都设置
    //vue有方法可以实现https://segmentfault.com/q/1010000006653683/a-1020000007724198
    NProgress.start()
  }
  componentDidMount(){
    NProgress.done()
  }
  componentWillUnmount(){
    //这里是防止下面调用NProgress.start()方法后离开组件后还未关闭
    NProgress.done()
  }
  NProgressStart = () => {
    NProgress.start()
    this.setState({
      loading2: true
    })
  }
  NProgressDone = () => {
    NProgress.done()
    this.setState({
      loading2: false
    })
  }

  render() {
    const loading2 = this.state.loading2
    return (
      <div>
        <CustomBreadcrumb arr={['反馈','加载中']}/>
        <TypingCard source='页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。'/>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} className='card-item'>
              <Spin/>&emsp;
              <Spin indicator={<Icon type='loading'/>}/>
            </Card>
            <Card bordered={false} className='card-item'>
              <Spin tip="Loading...">
                <Alert
                  message="Alert message title"
                  description="Further details about the context of this alert."
                  type="info"
                />
              </Spin>
            </Card>
            <Card bordered={false} className='card-item'>
              <Button onClick={this.NProgressStart} loading={loading2}>页面顶部进度条加载</Button>&emsp;
              <Button onClick={this.NProgressDone}>顶部进度条加载完成</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} className='card-item'>
              <Spin size='small'/>&emsp;
              <Spin/>&emsp;
              <Spin size='large'/>
            </Card>
            <Card bordered={false} className='card-item'>
              <div style={{marginBottom: '1em'}}>
                <Spin tip="Loading..." spinning={this.state.loading}>
                  <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                  />
                </Spin>
              </div>
              Loading state：<Switch onChange={(checked) => this.setState({loading: checked})}/>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SpinDemo