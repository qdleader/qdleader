import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import { Breadcrumb } from 'antd';

import menuList from '../../routes/index.js'


class TopBreadcrumb extends Component {
  state = {
    extraBreadcrumbItems: null,
    breadcrumbArr:[],
  }
  writeBreadcrumb = () => {
    // let pathname = this.props.location.pathname
    let pathname = this.props.history.location.pathname
    let arr = []
    let menu = []
    // console.log("menuList",menuList)
    // console.log("pathname",pathname)
    // console.log("this.props",this.props)
    //遍历一级导航
    menuList.forEach(item => {
      //遍历二级导航
      if (item.key === pathname) {
        arr.push({
          path: item.path,
          name: item.title,
          key: item.key
        })
      }
      if(item.children) {

        item.children.forEach(it => {
          if (it.key === pathname) {
            arr.push({
              path: item.path,
              name: item.title,
              key: item.key
            })
            arr.push({
              path: it.key,
              name: it.title
            })
          }
        });
      }
  })
  console.log("arr",arr)
//遍历完后赋值
  this.setState({
    breadcrumbArr: arr ? arr : []
  }, ev => {
  //react的setState事件的第二个参数可以直接拿到值，因为是异步，只有第一个参数，在下面使用时值不能及时改变，所以加上这个可以在确定修改完值以后操作，openKeys是数组，注意传值

  })
}
  UNSAFE_componentWillMount () {
	  // this.menuNodes = this.getMenuNodes(menuList)
      // this.getUrl()

    this.writeBreadcrumb()
  }
  //页面的地址更新后调用写面包屑的方法
  UNSAFE_componentWillReceiveProps(props) {
        this.writeBreadcrumb()
  }
	render() {
		const path = this.props.location.pathname
		// console.log(11,path)

		const openKey = this.openKey;
     const { breadcrumbArr } = this.state

		return (
			<div>

            {/* 下面可用的面包屑 */}
           <Breadcrumb>
               <Breadcrumb.Item>
                   <a href="/home">首页</a>
               </Breadcrumb.Item>
               {
                   this.state.breadcrumbArr && this.state.breadcrumbArr.map((item, key) => (
                       <Breadcrumb.Item key={key}>
                           {
                               item.path ? <Link to={item.path ? item.path : '/'} >{item.name}</Link> :
                                   <a>{item.name}</a>
                           }
                       </Breadcrumb.Item>
                   ))
               }
        </Breadcrumb>,

			</div>
		)
	}
}

export default withRouter(TopBreadcrumb)
