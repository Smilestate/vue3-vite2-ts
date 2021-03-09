import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { get } from 'lodash';
// @ts-ignore
import qs from 'qs';

import { useRouter } from 'vue-router'
const router = useRouter()

// 创建 axios 实例
const request = axios.create({
    // API 请求的默认前缀
    baseURL: "http://dev.wallet.bandex.lvyii.com/",
    timeout: 10000, // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error: any) => {
    const status = get(error, 'response.status')
    switch (status) {
        case 400:
            error.message = '当前请求参数错误'
            break
        case 401:
            error.message = '未授权，请登录'
            router.push('/login')
            // TODO 刷新token 保存token
            break
        case 403:
            error.message = '拒绝访问'
            break
        case 404:
            error.message = `请求地址出错: ${error.response.config.url}`
            break
        case 408:
            error.message = '请求超时'
            break
        case 500:
            error.message = '服务器内部错误'
            break
        case 501:
            error.message = '服务未实现'
            break
        case 502:
            error.message = '网关错误'
            break
        case 503:
            error.message = '服务不可用'
            break
        case 504:
            error.message = '网关超时'
            break
        case 505:
            error.message = 'HTTP版本不受支持'
            break
        default:
            break
    }
    return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use((config: AxiosRequestConfig) => {
    // 如果 token 存在
    // TODO 让每个请求携带自定义 token
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config;
}, errorHandler)

// response interceptor
request.interceptors.response.use((response: AxiosResponse) => {
    console.log("=====>", response);
    // debugger
    // TODO 若返回的请求头中包含 authorization, 则存入到缓存中
    const dataAxios = response.data
    console.log("dataAxios", dataAxios.code)
    // 获取返回的状态码
    const { code } = dataAxios.code

    // 根据 code 进行判断
    if (code === undefined) {
        // 如果没有 code 代表这不是项目后端开发的接口
        return dataAxios
    } else {
        // 有 code 代表这是一个后端接口 可以进行进一步的判断
        switch (code) {
            // 正确返回
            case 100:
                return dataAxios.data
            default:
                // 不是正确的 code
                return dataAxios.message
        }
    }
}, errorHandler)

export default request
