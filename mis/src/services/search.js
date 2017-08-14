/**
 * Created by Tian on 2017/8/12.
 */
/**
 * Created by Tian on 2017/8/2.
 */
import request from '../utils/request';
import axios from 'axios'
export function query(bb) {

  return axios.post("/api/search", bb);
//  return request('/api/login',{"method":"post","data":bb});
}
