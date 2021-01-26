import axios from 'axios'

// 导出请求方法
export function request(config){

  // 一、创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000,
  });
  // 二、axios拦截器
  // 1.请求拦截
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    //console.log(err)
  });

  // 2.响应拦截
  instance.interceptors.response.use(res => {
    return res;
  }, err => {
    console.log(err);
  });

  // 三、发送真正的网络请求
  return instance(config);
}

