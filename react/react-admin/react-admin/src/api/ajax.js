import axios from 'axios'
import {message} from 'antd'
export default function fetch(url, data= {}, type="GET") {
	return new Promise((resolve, reject) => {
		let promise;
		if(type == 'GET') {
		    promise = axios.get(url, {
		        params:data
		    })
		} else if (type == 'POST') {
		    promise = axios.post(url, data)
		}
		promise.then(response => {
			//如果请求成功了，调用resolve(value)
			resolve(response.data)
		}).catch(error => {
			//请求失败
			//reject (error)
			message.error("请求出错了:" + error.message)
		})
	})
    
}