  import ajax from './ajax'
import Password from 'antd/lib/input/Password'

const base = 'http://localhost:7300/mock/5f17bec376ee9233ae26f085/kx'
 // http://localhost:7300/mock/5f17bec376ee9233ae26f085/kx
  export const reLogin = (username, password) => ajax('/login',{username,password},'POST')
	
	//登录接口
  export const adminuserLogin = (username, password) => ajax(base + '/adminuser/login',{username,password},'POST')

  //添加用户
    export const reqAddUser = (user) => ajax('/manage/user/add',user,"POST")