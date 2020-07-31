import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import menuList from '../../routes/index.js'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default class LeftNav extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  
  getMenuNodes = (menuList) => {
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
  
  
	render() {
		return (
			<div className="left-nav">
				   <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					  <div className="logo" />
					  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
							{this.getMenuNodes(menuList)}
					  </Menu>
					</Sider>
			</div>
		)
	}
}