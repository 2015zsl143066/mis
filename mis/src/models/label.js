/**
 * Created by Tian on 2017/8/13.
 */
import   *  as LabelService from "../services/label"
export default {

  namespace: 'label',

  state: {
    name:'',
    className:'',
    graduate:'',
    major:'',
    shuangMang1:'',
    shuangMang2:'',
    result:''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === '/label') {
          dispatch({ type: 'fetch', payload: query });

        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield call(LabelService.query, payload)
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
