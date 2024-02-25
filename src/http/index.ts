import { AxiosRequestConfig } from 'axios';
import {requestInstance} from './request'
// 在最后使用封装过的axios导出不同的请求方式
export function get<T = any, U = any>(
  config: AxiosRequestConfig,
  url: string,
  parms?: U
): Promise<T> {
  return requestInstance({ ...config, url, method: 'GET', params: parms });
}

export function post<T = any, U = any>(
  config: AxiosRequestConfig,
  url: string,
  data: U
): Promise<T> {
  return requestInstance({ ...config, url, method: 'POST', data: data });
}