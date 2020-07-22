import React from 'react'
import {Card, Col, Row, Collapse,BackTop} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

const Panel = Collapse.Panel

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const text2 = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  </p>
);

class CollapseDemo extends React.Component {
  render(){
    const cardContent = ` <ul class="card-ul">
            <li>对复杂区域进行分组和隐藏，保持页面的整洁</li>
            <li>手风琴 是一种特殊的折叠面板，只允许单个内容区域展开</li>
          </ul>`
    return (
      <div>
        <CustomBreadcrumb arr={['显示','折叠面板']}/>
        <TypingCard source={cardContent} height={178}/>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} className='card-item' title='基本用法'>
              <Collapse defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1"><p>{text}</p></Panel>
                <Panel header="This is panel header 2" key="2"><p>{text}</p></Panel>
                <Panel header="This is panel header 3" key="3"><p>{text}</p></Panel>
              </Collapse>
            </Card>
            <Card bordered={false} className='card-item' title='简洁风格-无边框'>
              <Collapse defaultActiveKey={['1']} bordered={false}>
                <Panel header="This is panel header 1" key="1">{text2}</Panel>
                <Panel header="This is panel header 2" key="2">{text2}</Panel>
                <Panel header="This is panel header 3" key="3">{text2}</Panel>
              </Collapse>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} className='card-item' title='手风琴-每次只打开一个tab'>
              <Collapse defaultActiveKey={['2']} accordion>
                <Panel header="This is panel header 1" key="1"><p>{text}</p></Panel>
                <Panel header="This is panel header 2" key="2"><p>{text}</p></Panel>
                <Panel header="This is panel header 3" key="3"><p>{text}</p></Panel>
              </Collapse>
            </Card>
            <Card bordered={false} className='card-item' title='自定义面板'>
              <Collapse defaultActiveKey={['1']} bordered={false}>
                <Panel header="This is panel header 1" key="1" style={styles.customPanelStyle}><p>{text}</p></Panel>
                <Panel header="This is panel header 2" key="2" style={styles.customPanelStyle}><p>{text}</p></Panel>
                <Panel header="This is panel header 3" key="3" style={styles.customPanelStyle}><p>{text}</p></Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

const styles = {
  colItem: {
    minHeight:500,
    borderRadius: 3,
    margin: '10px 0'
  },
  customPanelStyle:{
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden'
  }
}

export default CollapseDemo