import axios from 'axios'
import qs from 'qs'

let cancelToken = axios.CancelToken


const cancel = []

const removePending = config => {
    for (let p in cancel) {
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
    return response
}, error => {
    return Promise.reject(error)
})


export function post(endpoint, payload = {}) {
    return new Promise((resolve, reject) => {
        let result = ''

        if (localStorage.getItem('token')) {
            result = { ...payload, token: localStorage.getItem('token') }
        } else {
            result = payload
        }
        // store.getState() 拿所有的state
        axios({
            method: 'post',
            url: endpoint,
            data: qs.stringify(result)
        })
            .then(res => {
                console.log(res)
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function get(endpoint, payload = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: endpoint,
            params: { ...payload, token: '1ec949a15fb709370f' }
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}