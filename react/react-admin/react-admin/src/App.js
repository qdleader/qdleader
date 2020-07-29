import React,{Component} from 'react';
// import logo from './logo.svg';
// import { Button } from 'antd';
import './App.css';

import {Switch,BrowserRouter,Route, Redirect} from 'react-router-dom';
// import Login from './pages/login/login';
// import Admin from './pages/admin/admin';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { mainRoutes, adminRoutes } from './routes';


// 应用的根组件
export default class App extends Component {
  render () {
    return (
        <div className="App">
          <h1>我是app组件</h1>
					<BrowserRouter>
							<Switch>
								{adminRoutes.map(route => {
									return (
										<Route key={route.path} path={route.path} exact={route.exact}
											render = {routeProps => {
												return <route.component {...routeProps}/>
											}}
										/>
									)
								})}
								<Redirect to="/404"/>
							</Switch>
					</BrowserRouter>
        </div>
        // <BrowserRouter>
        //   <Switch>
        //     {/* <Route path="/login" component={Login}></Route>
        //     <Route path="/admin" component={Admin}></Route> */}
        //     {mainRoutes.map(route => {
        //       return <Route key={route.path} {...route}/>
        //     })}
        //     <Redirect to="/404"/>
        //   </Switch>
        // </BrowserRouter>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
     
//          <Button type="primary">Button</Button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//         <>
//     <Button type="primary">Primary Button</Button>
//     <Button>Default Button</Button>
//     <Button type="dashed">Dashed Button</Button>
//     <br />
//     <Button type="text">Text Button</Button>
//     <Button type="link">Link Button</Button>
//   </>,
//   mountNode,
//     </div>
//   );
// }

// export default App;
