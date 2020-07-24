  import ajax from './ajax'
import Password from 'antd/lib/input/Password'

  export const reLogin = (username, password) => ajax('/login',{username,password},'POST')

  //添加用户
    export const reqAddUser = (user) => ajax('/manage/user/add',user,"POST")