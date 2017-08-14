/**
 * Created by Tian on 2017/8/9.
 */
import   *  as ChangeService from "../services/change"
export default {

  namespace: 'change',

  state: {
    data:[],

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === '/change') {
          dispatch({ type: 'fetch', payload: query });

        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield call(ChangeService.query, payload)
      console.log('从后台获取的数据为',result)
      yield put({ "type": 'save' ,"payload":{data:result.data.data}});
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
