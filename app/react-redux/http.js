import axios from 'axios'
import qs from 'qs'

//创建自定义实例
const http = axios.create({
    // timeout: 10000,
    // responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        'Accept':"application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        'Access-Control-Allow-Origin':'http://apis.juhe.cn/qrcode/api',
        'Access-Control-Allow-Credentials':'true',
    }
});
//根据所处环境设置baseURL（mock下不能加baseURL）
    http.defaults.baseURL = 'http://apis.juhe.cn/qrcode/api';
    // http.defaults.baseURL = 'http://171.168.1.43:9999/ddlz/';

//POST传参序列化(添加请求拦截器)
http.interceptors.request.use(
    config => {
        // 在发送请求之前做某件事
        if (
            config.method === "post" ||
            config.method === "put" ||
            config.method === "delete"
        ) {
            // 序列化
            config.data = qs.stringify(config.data);
        }

        return config;
    },
    error => {
        return Promise.reject(error.data.error.message);
    }
);
// 添加响应拦截器
// http.interceptors.response.use(function (response) {
//     // 对响应数据做点什么(可以处理响应状态码)
//         if(response.data.isLogin===false){
//             window.location.hash='/user/login'
//         }
//         if(response.data.success){
//             try{
//                 response.data.data=JSON.parse(response.data.data);
//             }catch(e){
//                 // alert(e); //error in the above string(in this case,yes)!
//                 //donothing
//             }
//         }
//         return response.data;
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });

export default http