import React, {Component} from 'react';
import './index.less'
import {Link, withRouter} from 'react-router-dom';
// import { Icon as LegacyIcon } from '@ant-design/compatible';
// import { Icon as LegacyIcon } from '@ant-design/compatible';

import { Layout, Menu, Breadcrumb } from 'antd';
import Icon,{
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';


import { Button } from 'antd';
import menuList from '../../routes/index.js'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


// import { Layout, Menu, Breadcrumb } from 'antd';
// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

// withRouter 它可以向非路由组件传递 history、location， match

class LeftNav extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };

  getMenuNodes = (menuList) => {
	  const path = this.props.location.pathname
    console.log("menuList",menuList)
	  return menuList.map(item => {
		  if(!item.children && item.open) {
			  return (
                  <Menu.Item key={item.key}
                  >
                      <Link to={item.key}>
                          {item.icon == '<DesktopOutlined/>'?<DesktopOutlined/>:null}
                          {item.icon == '<PieChartOutlined/>'?<PieChartOutlined/>:null}
                          {item.icon == '<FileOutlined/>'?<FileOutlined/>:null}
                          {item.icon == '<TeamOutlined/>'?<TeamOutlined/>:null}
                          {item.icon == '<MailOutlined/>'?<MailOutlined/>:null}
                          {item.icon == '<AppstoreOutlined/>'?<AppstoreOutlined/>:null}
                          <span>{item.title}</span>
                      </Link>
                  </Menu.Item>
              );
		  } else if(item.open) {
			  const cItem = item.children.find(cItem => cItem.key === path)
			  this.openKey = item.key
        return (
              <SubMenu
                  key={item.key}
                  title={
                      <span>
                        {item.icon == '<DesktopOutlined/>'?<DesktopOutlined/>:null}
                        {item.icon == '<PieChartOutlined/>'?<PieChartOutlined/>:null}
                        {item.icon == '<FileOutlined/>'?<FileOutlined/>:null}
                        {item.icon == '<TeamOutlined/>'?<TeamOutlined/>:null}
                        {item.icon == '<MailOutlined/>'?<MailOutlined/>:null}
                        {item.icon == '<AppstoreOutlined/>'?<AppstoreOutlined/>:null}
                          <span>{item.title}</span>
                      </span>
                  }
              >
              {this.getMenuNodes(item.children)}
            </SubMenu>
          );

		  }
	  });
  }

  UNSAFE_componentWillMount () {
	  this.menuNodes = this.getMenuNodes(menuList)
  }

	render() {
		const path = this.props.location.pathname
		// console.log(11,path)

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
