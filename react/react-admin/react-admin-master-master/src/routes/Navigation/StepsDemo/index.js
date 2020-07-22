import React from 'react'
import {Card, Col, Row, Radio, Icon, Button, Steps, message,BackTop} from 'antd'
import CustomBreadcrumb from "../../../components/CustomBreadcrumb/index";
import TypingCard from '../../../components/TypingCard'

const Step = Steps.Step

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  }];

class StepsDemo extends React.Component {
  state = {
    size: 'default',
    current: 0
  }

  prev() {
    const current = this.state.current - 1;
    if (current === -1) {
      return
    }
    this.setState({current});
  }

  render() {
    const {size, current} = this.state
    const cardContent = '当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务，引导用户按照流程完成任务的导航条'
    return (
      <div>
        <CustomBreadcrumb arr={['导航', '步骤条']}/>
        <TypingCard source={cardContent}/>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} className='card-item' title='基本使用'>
              <Steps current={2}>
                <Step title="Finished" description="This is a description."/>
                <Step title="In Progress" description="This is a description."/>
                <Step title="Waiting" description="This is a description."/>
              </Steps>
            </Card>
            <Card bordered={false} className='card-item' title='基本使用'>
              <Steps current={1}>
                <Step title="Finished" description="This is a description."/>
                <Step title="In Progress" description="This is a description."/>
                <Step title="Waiting" description="This is a description."/>
              </Steps>
            </Card>
            <Card bordered={false} className='card-item' title='步骤运行错误'>
              <Steps current={1} status="error">
                <Step title="Finished" description="This is a description"/>
                <Step title="In Process" description="This is a description"/>
                <Step title="Waiting" description="This is a description"/>
              </Steps>
            </Card>
            <Card bordered={false} className='card-item' title='步骤切换'>
              <Steps current={current}>
                {steps.map(item => <Step title={item.title}
                                         key={item.title}
                                         description={item.content}/>)}
              </Steps>
              <div style={styles.stepsContent}>{steps[current].content}</div>
              <div>
                {
                  current < steps.length - 1 ?
                    <Button type='primary'
                            onClick={() => this.setState({current: current + 1})}>下一步</Button> :
                    <Button
                      onClick={() => message.success('Processing complete!')}>已完成</Button>
                }
                <Button
                  style={current === 0 ? {display: 'none'} : {marginLeft: 15}}
                  onClick={() => this.prev()}>上一步</Button>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} className='card-item' title='大小'>
              <Radio.Group style={{marginBottom: '1em'}}
                           onChange={(e) => this.setState({size: e.target.value})}
                           value={size}>
                <Radio.Button value='small'>Small</Radio.Button>
                <Radio.Button value='default'>Default</Radio.Button>
              </Radio.Group>
              <Steps current={1} size={size}>
                <Step title="Finished" description="This is a description."/>
                <Step title="In Progress" description="This is a description."/>
                <Step title="Waiting" description="This is a description."/>
              </Steps>
            </Card>
            <Card bordered={false} className='card-item' title='带图标'>
              <Steps>
                <Step status="finish" title="Login" icon={<Icon type="user"/>}/>
                <Step status="finish" title="Verification"
                      icon={<Icon type="solution"/>}/>
                <Step status="process" title="Pay"
                      icon={<Icon type="loading"/>}/>
                <Step status="wait" title="Done" icon={<Icon type="smile-o"/>}/>
              </Steps>
            </Card>
            <Card bordered={false} className='card-item' title='点状步骤条'>
              <Steps progressDot current={2}>
                <Step title="Finished" description="This is a description."/>
                <Step title="In Progress" description="This is a description."/>
                <Step title="Waiting" description="This is a description."/>
              </Steps>
            </Card>
          </Col>
        </Row>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

const styles = {
  stepsContent: {
    minHeight: '200px',
    margin: '16px 0',
    paddingTop: '80px',
    border: '1px dashed #e9e9e9',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
    textAlign: 'center',
  }

}


export default StepsDemo