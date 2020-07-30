import React,{Component} from 'react';
// import logo from './logo.svg';
// import { Button } from 'antd';
import './App.css';

import {Switch,BrowserRouter,Route, Redirect} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin.jsx';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { mainRoutes, adminRoutes } from './routes';


// 应用的根组件
export default class App extends Component {
  render () {
    return (
		<BrowserRouter>
			  <Switch>
				 <Route path="/login" component={Login}></Route>
				<Route path="/" component={Admin}></Route> 
			  </Switch>
		</BrowserRouter>
    )
  }
}


 // export default App;
