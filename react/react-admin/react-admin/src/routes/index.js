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