import Login from '../pages/login/login.jsx';
// import { List } from 'antd/lib/form/Form';
import List from '../pages/admin/products/list.jsx';
import Edit from '../pages/admin/products/edit.jsx';
import dashboard from '../pages/admin/dashboard/dashboard.jsx';
import pageNotFound from '../pages/admin/pageNotFound/pageNotFound.jsx';

export const mainRoutes = [{
    path:'/login',
    component:Login
},{
    path:'/404',
    component:pageNotFound
},{
    path:'/edit',
    component:Edit
}]

export const adminRoutes = [{
    path:'/admin/dashboard',
    component:dashboard
},{
    path:'/admin/products',
    component:List,
    exact:true,
},{
    path:'/admin/products/edit/:id',
    component:Edit
}]


const menuList = [
	{
		title:'首页',
		key:'/home',
		icon:'home'
	},
	{
		title:'商品',
		key:'/products',
		icon:'appstore',
		children:[
			{
				title:'品类管理',
				key:'/category',
				icon:'bars'	
			},
			{
				title:'商品管理',
				key:'/product',
				icon:'tool'	
			}
		]
	}
];

export default menuList;