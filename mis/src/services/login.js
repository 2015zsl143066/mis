/**
 * Created by Tian on 2017/8/2.
 */
import request from '../utils/request';
import axios from 'axios'
export function query(bb) {
  console.log('bb',bb)
  return axios.post("/api/login", bb);
//  return request('/api/login',{"method":"post","data":bb});
}
