/**
 * Created by Tian on 2017/8/9.
 */
/**
 * Created by Tian on 2017/8/2.
 */
import request from '../utils/request';
import axios from 'axios'
export function query() {

  return axios.get("/api/news/xueyuan");
//  return request('/api/login',{"method":"post","data":bb});
}
export function query1() {

  return axios.get("/api/news/graduate");
//  return request('/api/login',{"method":"post","data":bb});
}
