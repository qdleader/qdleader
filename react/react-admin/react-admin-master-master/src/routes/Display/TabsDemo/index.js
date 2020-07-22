import React from 'react'
import {Card, Col, Row, Icon, Tabs, message, Radio,BackTop} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

const TabPane = Tabs.TabPane
const panes = [
  {title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1'},
  {title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2'},
];
let newTabIndex = 0

class TabsDemo extends React.Component {
  state = {
    mode: 'top',
    size: 'default',
    activeKey: panes[0].key,
    panes,
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${++newTabIndex}`;
    panes.push({
      title: activeKey,
      content: `New Tab Pane : ${activeKey}`,
      key: activeKey
    })
    this.setState({
      panes,
      activeKey
    })

  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    if(panes.length === 1){
      panes[0].closable = false
    }
    this.setState({panes, activeKey});

  }

  render() {
    const {mode, size, activeKey, panes} = this.state
    const cardContent = `提供平级的区域将大块内容进行收纳和展现，保持界面整洁。<br/>
          Ant Design 依次提供了三级选项卡，分别用于不同的场景。
          <ul class="card-ul">
            <li>卡片式的页签，提供可关闭的样式，常用于容器顶部</li>
            <li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs</li>
            <li>RadioButton 可作为更次级的页签来使用</li>
          </ul>`
    return (
      <div>
        <CustomBreadcrumb arr={['显示','标签页']}/>
        <TypingCard source={cardContent} height={262}/>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} className='card-item' title='基本-默认选中第一项'>
              <Tabs defaultActiveKey="1"
                    onChange={a => message.info('选中标签页' + a)}>
                <Tabs.TabPane tab='tab1' key='1'>Content of Tab Pane
                  1</Tabs.TabPane>
                <Tabs.TabPane tab='tab2' key='2'>Content of Tab Pane
                  2</Tabs.TabPane>
                <Tabs.TabPane tab='tab3' key='3'>Content of Tab Pane
                  3</Tabs.TabPane>
              </Tabs>
            </Card>
            <Card bordered={false} className='card-item' title='图标-有图标的标签'>
              <Tabs defaultActiveKey="2"
                    onChange={a => message.info('选中标签页' + a)}>
                <Tabs.TabPane tab={<span><Icon type="apple"/>Tab 1</span>}
                              key="1">Tab 1</Tabs.TabPane>
                <Tabs.TabPane tab={<span><Icon type="android"/>Tab 2</span>}
                              key="2">Tab 2</Tabs.TabPane>
              </Tabs>
            </Card>
            <Card bordered={false} className='card-item' title='大小-可设置标签页大小'>
              <div style={{marginBottom: '1em'}}>
                <Radio.Group value={size}
                             onChange={e => this.setState({size: e.target.value})}>
                  <Radio.Button value='small'>Small</Radio.Button>
                  <Radio.Button value='default'>Default</Radio.Button>
                  <Radio.Button value='large'>Large</Radio.Button>
                </Radio.Group>
              </div>
              <Tabs defaultActiveKey="1"
                    onChange={a => message.info('选中标签页' + a)} size={size}>
                <Tabs.TabPane tab='tab1' key='1'>Content of Tab Pane
                  1</Tabs.TabPane>
                <Tabs.TabPane tab='tab2' key='2'>Content of Tab Pane
                  2</Tabs.TabPane>
                <Tabs.TabPane tab='tab3' key='3'>Content of Tab Pane
                  3</Tabs.TabPane>
              </Tabs>
            </Card>
            <Card bordered={false} className='card-item' title='动态-新增和关闭标签页'>
              <Tabs activeKey={activeKey} type="editable-card"
                    onChange={k => this.setState({activeKey: k})}
                    onEdit={this.onEdit}>
                {panes.map(pane => <TabPane tab={pane.title}
                                            closable={pane.closable}
                                            key={pane.key}>{pane.content}</TabPane>)}
              </Tabs>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} className='card-item' title='禁用-禁用某一项'>
              <Tabs defaultActiveKey="1"
                    onChange={a => message.info('选中标签页' + a)}>
                <Tabs.TabPane tab='tab1' key='1'>Content of Tab Pane
                  1</Tabs.TabPane>
                <Tabs.TabPane tab='tab2' key='2' disabled>Content of Tab Pane
                  2</Tabs.TabPane>
                <Tabs.TabPane tab='tab3' key='3'>Content of Tab Pane
                  3</Tabs.TabPane>
              </Tabs>
            </Card>
            <Card bordered={false} className='card-item' title='滑动-可左右滑动'>
              <div style={{marginBottom: '1em'}}>
                <Radio.Group value={mode}
                             onChange={e => this.setState({mode: e.target.value})}>
                  <Radio.Button value='top'>水平</Radio.Button>
                  <Radio.Button value='left'>垂直</Radio.Button>
                </Radio.Group>
              </div>
              <Tabs defaultActiveKey='1' tabPosition={mode}
                    style={{height: 220}}>
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
              </Tabs>
            </Card>
            <Card bordered={false} className='card-item' title='卡片-卡片式标签页'>
              <Tabs defaultActiveKey="1" type='card'>
                <Tabs.TabPane tab='tab1' key='1'>Content of Tab Pane
                  1</Tabs.TabPane>
                <Tabs.TabPane tab='tab2' key='2'>Content of Tab Pane
                  2</Tabs.TabPane>
                <Tabs.TabPane tab='tab3' key='3'>Content of Tab Pane
                  3</Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

export default TabsDemo