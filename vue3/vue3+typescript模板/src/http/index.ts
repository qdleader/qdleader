import axios from 'axios'


axios.interceptors.request.use(
    config => {
      // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    //   config.data = config.data;
      config.headers = {
        'Content-Type':'application/x-www-form-urlencoded'
      }
        if(config.method == 'post') {
                if(Object.prototype.toString.call(config.data) === '[object FormData]') {
                    const postdata =  {appKey: '','from':''}
                    const formData = config.data;
                    postdata.appKey = '1585712191'
                    postdata.from = 'pc'
                    config.data = formData;
                    return config;
                } else {
                    return config;
                }
              
          } else if(config.method == 'get') {
              const getparams = config.params
              getparams.appKey = '1585712191'
              getparams.from = 'h5'

              config.params = getparams
          }  
  
      return config;
    },
    error => {
      return Promise.reject(error);
      // return Promise.reject(err);
    }
  );

  //http response 拦截器

// axios.interceptors.response.use(
//     response => {
//     //   if(response.data.errCode ==2){
//     //     router.push({
//     //       path:"/login",
//     //       querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//     //     })
//     //   }
//       return response;
//     },
//     error => {
//       return Promise.reject(error)
//     }
//   )

  axios.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response.data
      // console.log(res)
      // if the custom code is not 0, it is judged as an error.
      if (res.ret !== 0) {
        // Message({
        //   message: res.msg || 'Error',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
  
        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        if (res.ret === 50008 || res.ret === 50012 || res.ret === 50014) {
          // to re-login
        //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //     confirmButtonText: 'Re-Login',
        //     cancelButtonText: 'Cancel',
        //     type: 'warning'
        //   }).then(() => {
        //     store.dispatch('user/resetToken').then(() => {
        //       location.reload()
        //     })
        //   })
        }
        return Promise.reject(new Error(res.msg || 'Error'))
      } else {
        return res
      }
    },
    error => {
      console.log('err' + error) // for debug
    //   Message({
    //     message: error.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
      return Promise.reject(error)
    }
  )

export const fetch = (url: string,data: object) => {
    const promise = new Promise(function(resolve, reject) {
        axios({
            url: url,
            params:data,
            method:'get',
        }).then(function(res){
            resolve(res.data)
        }).catch(function(err){
            // Message.error(err);
            reject(err)
            console.log("报错处理")
        });
    })
    return promise
}

   export const post = (url: string,data: object,) => {
      const promise = new Promise(function(resolve, reject) {
          axios({
              method:"post",
              url: url,
              data:data,
          }).then(function(res){
              resolve(res.data)
          }).catch(function(err){
              // Message.error(err);
              reject(err)
              // console.log(11111111111111111111,"报错处理")
          });
      })
      return promise
  }
  
   /**
   * 封装patch请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  
  export function patch(url: string,data = {}){
    return new Promise((resolve,reject) => {
      axios.patch(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }
  
   /**
   * 封装put请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  
  export function put(url: string,data = {}){
    return new Promise((resolve,reject) => {
      axios.put(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }