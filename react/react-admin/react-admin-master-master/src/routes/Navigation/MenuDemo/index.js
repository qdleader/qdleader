import React from 'react'
import {Card, Col, Row, Menu, Icon, Switch} from 'antd'
import CustomBreadcrumb from "../../../components/CustomBreadcrumb/index";
import TypingCard from '../../../components/TypingCard'

class MenuDemo extends React.Component {
  state = {
    openKey: '',
    theme: 'light',
    mode: 'horizontal'
  }

  changeTheme = (checked) => {
    this.setState({
      theme: checked ? 'dark' : 'light'
    })
  }
  changeMode = (checked) => {
    this.setState({
      mode: checked ? 'inline' : 'horizontal'
    })
  }

  render() {
    const cardContent = ' 导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。'
    return (
      <div>
        <CustomBreadcrumb arr={['导航','导航菜单']}/>
        <TypingCard source={cardContent} height={164}/>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} className='card-item'>
              <Row type='flex' align='middle'>
                <Col span={12}>
                  <Menu mode="inline" style={{width: 200}}>
                    <Menu.SubMenu key='mail' title={<span><Icon type='mail'/><span>Navigation One</span></span>}>
                      <Menu.Item>subItem1</Menu.Item>
                      <Menu.Item>subItem2</Menu.Item>
                      <Menu.Item>subItem3</Menu.Item>
                      <Menu.Item>subItem4</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="app" disabled><Icon type="appstore"/>Navigation Two</Menu.Item>
                    <Menu.SubMenu key='set' title={<span><Icon type='setting'/><span>Navigation Three</span></span>}>
                      <Menu.Item>subItem1</Menu.Item>
                      <Menu.Item>subItem2</Menu.Item>
                      <Menu.Item>subItem3</Menu.Item>
                      <Menu.Item>subItem4</Menu.Item>
                    </Menu.SubMenu>
                  </Menu>
                </Col>
                <Col span={12}>
                  内嵌菜单<br/>
                  垂直菜单，子菜单内嵌在菜单区域。
                </Col>
              </Row>
            </Card>
            <Card bordered={false} className='card-item'>
              <Row type='flex' align='middle'>
                <Col span={12} className='card-item'>
                  <Menu
                    mode="inline"
                    style={{width: 200}}
                    openKeys={[this.state.openKey]}
                    onOpenChange={(keys) => this.setState({openKey: keys[keys.length - 1]})}>
                    <Menu.SubMenu key='sub1' title={<span><Icon type='mail'/><span>Navigation One</span></span>}>
                      <Menu.Item>subItem1</Menu.Item>
                      <Menu.Item>subItem2</Menu.Item>
                      <Menu.Item>subItem3</Menu.Item>
                      <Menu.Item>subItem4</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="app" disabled><Icon type="appstore"/>Navigation Two</Menu.Item>
                    <Menu.SubMenu key='sub2' title={<span><Icon type='setting'/><span>Navigation Three</span></span>}>
                      <Menu.Item>subItem1</Menu.Item>
                      <Menu.Item>subItem2</Menu.Item>
                      <Menu.Item>subItem3</Menu.Item>
                      <Menu.Item>subItem4</Menu.Item>
                    </Menu.SubMenu>
                  </Menu>
                </Col>
                <Col span={12}>
                  只展开当前父级菜单<br/>
                  点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.Item}>
              <Menu mode="horizontal">
                <Menu.SubMenu key='mail' title={<span><Icon type='mail'/><span>Navigation One</span></span>}>
                  <Menu.Item>subItem1</Menu.Item>
                  <Menu.Item>subItem2</Menu.Item>
                  <Menu.Item>subItem3</Menu.Item>
                  <Menu.Item>subItem4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="app" disabled><Icon type="appstore"/>Navigation Two</Menu.Item>
                <Menu.SubMenu key='set' title={<span><Icon type='setting'/><span>Navigation Three</span></span>}>
                  <Menu.Item>subItem1</Menu.Item>
                  <Menu.Item>subItem2</Menu.Item>
                  <Menu.Item>subItem3</Menu.Item>
                  <Menu.Item>subItem4</Menu.Item>
                </Menu.SubMenu>
              </Menu>
            </Card>
            <Card bordered={false} className='card-item'>
              <p style={{paddingLeft: 15}}>
                <Switch size='small' onChange={this.changeMode}/> Change Mode &emsp;
                <Switch size='small' onChange={this.changeTheme}/> Change Theme
              </p>
              <Menu mode={this.state.mode} theme={this.state.theme} ref='menu'>
                <Menu.SubMenu key='sub1' title={<span><Icon type='mail'/><span>Navigation One</span></span>}>
                  <Menu.Item>subItem1</Menu.Item>
                  <Menu.SubMenu title='subItem2'>
                    <Menu.Item>sub-subItem1</Menu.Item>
                    <Menu.Item>sub-subItem2</Menu.Item>
                    <Menu.Item>sub-subItem3</Menu.Item>
                  </Menu.SubMenu>
                  <Menu.Item>subItem3</Menu.Item>
                  <Menu.Item>subItem4</Menu.Item>

                </Menu.SubMenu>
                <Menu.Item key="app"><Icon type="appstore"/>Navigation Two</Menu.Item>
                <Menu.SubMenu key='sub2' title={<span><Icon type='setting'/><span>Navigation Three</span></span>}>
                  <Menu.Item>subItem1</Menu.Item>
                  <Menu.Item>subItem2</Menu.Item>
                  <Menu.SubMenu title='subItem3'>
                    <Menu.Item>sub-subitem1</Menu.Item>
                    <Menu.Item>sub-subitem2</Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
              </Menu>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const styles = {
  Item:{
    height:190,
    marginBottom:10,
    borderRadius: 3,
  }
}

export default MenuDemo