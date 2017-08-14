/**
 * Created by Tian on 2017/8/13.
 */
import request from '../utils/request';
import axios from 'axios'
export function query(bb) {

  return axios.get("/api/label",{
    params:bb
  });
//  return request('/api/login',{"method":"post","data":bb});
}
