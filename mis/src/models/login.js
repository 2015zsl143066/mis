import   *  as LoginServie from "../services/login"

export default {

  namespace: 'login',

  state: {
    modalVisible: false,
    message: "",
    success:false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log("图示",payload);
      const result = yield call(LoginServie.query, payload)
      console.log('从后台获取的数据为',result)
      yield put({ type: 'save' ,payload:{"key":"value", modalVisible: true ,message: result.data.detail ,
      success:result.data.success}});

    },
  },

  reducers: {
    save(state, action) {

      return { ...state, ...action.payload };
    },
  },

};
