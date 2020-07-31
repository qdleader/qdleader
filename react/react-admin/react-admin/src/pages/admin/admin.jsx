import React ,{Component}from 'react';

import Bus from '../../utils/bus.js'
import { Redirect} from 'react-router-dom';

import { Layout } from 'antd';
import LeftNav from '../../components/left-nav/left-nav'

import {Switch,BrowserRouter,Route} from 'react-router-dom';


import Home from './home/home.jsx'
import Category from './category/category.jsx'
import Product from './product/product.jsx'


const { Header, Footer, Sider, Content } = Layout;
//登录的路由组件

export default class Admin extends Component {
    render () {
		const user = Bus.user;
		if(!user || !user.admin_user_id) {
			//没登录跳转到登陆
			return <Redirect to="/login" />
		}
        return (
     
				
				 <Layout style={{height:'100%'}}>
					  <Sider>
						<LeftNav/>
					  </Sider>
					  <Layout>
						<Header style={{backgroundColor:'#ccc'}}>Header</Header>
						<Content>Content
							<Switch>
								<Route path="/home" component={Home}/>
								<Route path="/category" component={Category}/>
								<Route path="/product" component={Product}/>
							</Switch>
						</Content>
						<Footer>Footer</Footer>
					  </Layout>
				</Layout>
        )
    }
}