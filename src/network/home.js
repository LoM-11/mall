import {request} from './request'

export function getHomeData(config){
  return request({
    url: '/home/multidata'
  })
}