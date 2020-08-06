import React, {Component} from 'react';
import './index.less'
import {Link, withRouter} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import menuList from '../../routes/index.js'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// withRouter 它可以向非路由组件传递 history、location， match

class LeftNav extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  
  getMenuNodes = (menuList) => {
	  const path = this.props.location.pathname
	  return menuList.map(item => {
		  if(!item.children) {
			  return (
				<Menu.Item key={item.key}>
					<Link to={item.key}>
						<Icon type={item.icon}/>
						<span>{item.title}</span>
					</Link>
				</Menu.Item>
			  )
		  } else {
			  const cItem = item.children.find(cItem => cItem.key === path)
			  this.openKey = item.key
			  return (
				<SubMenu
					key={item.key}
					title={
						<span>
							<Icon type={item.icon}/>
							<span>{item.title}</span>
						</span>
					}
				>
					{this.getMenuNodes(item.children)}	
				</SubMenu>
			  )
		  }
	  })
  }
  
  componentWillMount () {
	  this.menuNodes = this.getMenuNodes(menuList)
  }
  
	render() {
		const path = this.props.location.pathname
		console.log(11,path)
		
		const openKey = this.openKey;
		return (
			<div className="left-nav">
				   <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					  <div className="logo" />
					  <Menu theme="dark" selectedKeys={[path]} mode="inline">
							{this.getMenuNodes(menuList)}
					  </Menu>
					</Sider>
			</div>
		)
	}
}

export default withRouter(LeftNav)