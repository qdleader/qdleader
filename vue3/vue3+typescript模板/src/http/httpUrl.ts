const baseUrl = 'http://bfapi.360looker.cn/V2/'

/**   
 * api接口统一管理
 */
import { fetch, post } from './index'

export const userList = (p: object) => fetch(baseUrl + '/userlist', p);


export const userFeedback = (p: object) => post(baseUrl +'user/feedback',p)