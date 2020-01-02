import axios from 'axios'
import { message } from 'antd'
import qs from 'qs'

 
let cancelToken = axios.CancelToken

const cancel = []

const removePending = config => {
    for(let p in cancel){
        if (cancel[p].u === config.url) {
        cancel[p].f()
        }
    }
}

// 请求拦截器 发送一个请求之前
axios.interceptors.request.use(config => {
    //在一个ajax发送前执行一下取消操作
    removePending(config)
    config.cancelToken = new cancelToken(c => {
        cancel.push({ 
        f: c,
        u: config.url,
        })
    })
    return config
    }, error => {
    return Promise.reject(error)
    })

    //添加响应拦截器
    axios.interceptors.response.use(response => {
       // console.log(response,'11')
        switch (response.data.code) {
            case 203:
                window.location.href="http://localhost:3000/login"
                break;
           
            default:
                break;
        }

        return response
    }, error => {
        switch (error.response && error.response.status ) {
            case 504:
                message.warning('请求失败')
                break;
        
            default:
                break;
        }

    })


export const post = (url, payload) => {

    let result = ""

    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            data: payload
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })

}

export const get = (url, payload) => {
   
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: payload
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => reject(err))
    })
  }
  