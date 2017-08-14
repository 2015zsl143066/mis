/**
 * Created by Tian on 2017/8/12.
 */
import   *  as SearchServie from "../services/search"
export default {

  namespace: 'search',

  state: {
    list:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log("图示",payload);
      const result = yield call(SearchServie.query, payload)
      console.log('从后台获取的数据为',result)
      //const list = result.data.list;
      const { list } =result.data;
      yield put({ type: 'save' ,payload:{ list }});
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
