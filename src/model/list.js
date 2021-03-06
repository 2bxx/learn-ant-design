import request from '../utils/request';
const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};
export default {
  namespace : 'cards',
  state     : {
    cardsList: [ ]
  },
  effects: {
    * queryList(_, sagaEffects) {
      /*
      const listData = [{
        name : 'umi',
        desc : '极快的类 Next.js 的 React 应用框架',
        url  : 'https://umijs.org'
      },
      {
        name : 'antd',
        desc : '一个服务于企业级产品的设计体系',
        url  : 'https://ant.design/index-cn'
      },
      {
        name : 'antd-pro',
        desc : '一个服务于企业级产品的设计体系',
        url  : 'https://ant.design/index-cn'
      }
      ];
      */

      const { call, put } = sagaEffects;
      yield call(delay, 1500);
      const URI = 'http://localhost:8000/dev/list'
      const listData = yield call(request,URI)
      yield put({ type: 'initList', payload: listData });
    }
  },
  reducers: {
    initList(state, {payload:newlist}) {
      const cardsList = [...newlist];
      return {
        cardsList
      };
    }
  }
};