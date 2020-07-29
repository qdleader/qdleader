import React ,{Component}from 'react';

import Bus from '../../utils/bus.js'

//登录的路由组件

export default class Admin extends Component {
    render () {
		const user = Bus.user;
		if(!user || !user.admin_user_id) {
			//没登录跳转到登陆
			return <Redirect to="/login" />
		}
        return (
            <div className="login">
                你好 {user.admin_user_id}
            </div>
        )
    }
}