import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
// import { Switch } from 'antd';
import { mainRoutes } from './routes';

import Bus from './utils/bus.js'
const user = JSON.parse(localStorage.getItem('user') || '{}')
Bus.user = user

ReactDOM.render(
//     <Router>
//       <Switch>
// //         <Route path="/admin" render={routeProps => <App {...routeProps}/>}/>
// //         {mainRoutes.map(route => {
// //           return <Route key={route.path} {...route} />
// //         })} 
// //         <Redirect to="/404"/>
// //       </Switch>
// 	
//     </Router>,
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
