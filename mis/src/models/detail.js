/**
 * Created by Tian on 2017/8/9.
 */
import   *  as DetailService from "../services/detail"
export default {

  namespace: 'detail',

  state: {changeTime:'',
    changeType:'',
    className1:'',
    score:'',
    grade:'',
    isClass:''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === '/change/detail') {
          dispatch({ type: 'fetch', payload: query });

        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line

      const result = yield call(DetailService.query, payload)
      //  const  { changTime, changeType, className1 } = result.data;

     // yield put({ "type": 'save' ,"payload":{ changTime, changeType, className1}});
      yield put({ "type": 'save' ,"payload":{ ...result.data }});
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
