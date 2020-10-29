import Login from '../pages/login/login.jsx';
// import { List } from 'antd/lib/form/Form';
import List from '../pages/admin/products/list.jsx';
import Edit from '../pages/admin/products/edit.jsx';
import dashboard from '../pages/admin/dashboard/dashboard.jsx';
import pageNotFound from '../pages/admin/pageNotFound/pageNotFound.jsx';

import Icon,{
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const mainRoutes = [{
    path:'/login',
    open:true,
    component:Login
},{
    path:'/404',
    open:true,
    component:pageNotFound
},{
    path:'/edit',
    open:true,
    component:Edit
}]

export const adminRoutes = [{
    path:'/admin/dashboard',
    open:true,
    component:dashboard
},{
    path:'/admin/products',
    component:List,
    open:true,
    exact:true,
},{
    path:'/admin/products/edit/:id',
    open:true,
    component:Edit
}]


// DesktopOutlined,
// //   PieChartOutlined,
// //   FileOutlined,
// //   TeamOutlined,
// //   UserOutlined,

const menuList = [
	{
		title:'首页',
		key:'/home',
		icon:'<DesktopOutlined/>',
    path:'/home',
    open:true,
	},
	{
		title:'商品',
		key:'/products',
		icon:'<AppstoreOutlined/>',
    path:'/products',
    open:true,
		children:[
			{
				title:'品类管理',
				key:'/category',
				icon:'<PieChartOutlined/>',
        path:'/category',
        open:true,
			},
			{
				title:'商品管理',
				key:'/product',
				icon:'<PieChartOutlined/>',
        path:'/product',
        open:true,
			},
      {
        title:'商品编辑',
        key:'/productEdit',
        icon:'<UserOutlined/>',
        path:'/productEdit',
        open:false,
      },
		]
	},
  {
    title:'用户列表',
    key:'/userList',
    icon:'<TeamOutlined/>',
    path:'/userList',
    open:true,
  },
];

export default menuList;
