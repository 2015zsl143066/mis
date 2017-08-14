/**
 * Created by Tian on 2017/8/9.
 */
import   *  as SucessService from "../services/sucess"
export default {

  namespace: 'sucess',

  state: {
    news:[{
      "title":"学费通知",
      "date":"2017-9-3",
      "content":"截止"
    },
      {
        "title":"医保通知",
        "date":"2017-9-1",
        "content":"截止"
      } ],
    graduateNews:[

    ]

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === '/sucess') {
          dispatch({ type: 'fetch', payload: query });
          dispatch({ type: 'fetchGraduateNews', payload: query });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log("图示",payload);
      const result = yield call(SucessService.query, payload)
      console.log('从后台获取的数据为',result)
      yield put({ "type": 'save' ,"payload":{news:result.data.news}});
    },
    *fetchGraduateNews({ payload }, { call, put }) {  // eslint-disable-line
      console.log("图示",payload);
      const result = yield call(SucessService.query1, payload)
      console.log('从后台获取的数据为',result)
      yield put({ type: 'save' ,payload:{graduateNews:result.data.news}});
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
