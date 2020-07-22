import React from 'react'
import {Card, Menu, Row, Col, Dropdown, Icon, message, Button} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'


class DropdownDemo extends React.Component {
  handleMenuClick(e) {
    message.info(`Click on menu ${e.key} item.`)
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    )
    const menu2 = (
      <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <Menu.SubMenu title="sub menu">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="disabled sub menu" disabled>
          <Menu.Item>5d menu item</Menu.Item>
          <Menu.Item>6th menu item</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
    const cardContent = '当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。'
    return (
      <div>
        <CustomBreadcrumb arr={['导航','下拉菜单']}/>
        <TypingCard source={cardContent}/>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} className='card-item'>
              <Dropdown overlay={menu}><a>hover me <Icon type='down'/></a></Dropdown>&emsp;
              <Dropdown overlay={menu}><Button>Button<Icon type='down'/></Button></Dropdown>&emsp;
              <Dropdown overlay={menu} trigger={['click']}><a>click me <Icon type='down'/></a></Dropdown>&emsp;
            </Card>
            <Card bordered={false} className='card-item'>
              <Dropdown overlay={menu2} trigger={['click']}>
                <a href="">click menu <Icon type="down"/></a>
              </Dropdown>&emsp;&emsp;
              <Dropdown overlay={menu2} trigger={['click']}>
                <Button>click menu <Icon type="down"/></Button>
              </Dropdown>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} className='card-item'>
              <Dropdown overlay={menu2}><a href="">Cascading menu <Icon type="down"/></a></Dropdown>&emsp;&emsp;
              <Dropdown overlay={menu2}><Button>Cascading menu <Icon type="down"/></Button></Dropdown>
            </Card>
            <Card bordered={false} className='card-item'>
              <p>
                <Dropdown overlay={menu} placement="bottomLeft"><Button>bottomLeft</Button></Dropdown>&emsp;
                <Dropdown overlay={menu} placement="bottomCenter"><Button>bottomCenter</Button></Dropdown>&emsp;
                <Dropdown overlay={menu} placement="bottomRight"><Button>bottomRight</Button></Dropdown>
              </p>
              <div>
                <Dropdown overlay={menu} placement="topLeft"><Button>topLeft</Button></Dropdown>&emsp;
                <Dropdown overlay={menu} placement="topCenter"><Button>topCenter</Button></Dropdown>&emsp;
                <Dropdown overlay={menu} placement="topRight"><Button>topRight</Button></Dropdown>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default DropdownDemo