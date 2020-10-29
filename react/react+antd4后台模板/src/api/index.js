  import fetch from './ajax'

const base = 'http://localhost:7300/mock/5f17bec376ee9233ae26f085/kx'
 // http://localhost:7300/mock/5f17bec376ee9233ae26f085/kx
  export const reLogin = (username, password) => fetch('/login',{username,password},'POST')

	//登录接口
  export const adminuserLogin = (username, password) => fetch(base + '/adminuser/login',{username,password},'POST')



//列表接口
export const reqList = (userId) => fetch(base + '/exchangeCode/list',{userId},'GET')


//更新分类接口
export const updateCategory = (id,name) => fetch(base + '/exchangeCode/list',{id,name},'POST')
