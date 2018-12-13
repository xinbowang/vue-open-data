import axios from 'axios';
import { getUrlConfig, REQUEST_METHOD_MAP } from './http.url.config';
// import qs from 'qs';
/**
 * 异步请求
 * @param action: http.url.config.js下HTTP_URL_MAP配置下的别名
 * @param data={}: 请求-->传递的参数
 * @returns {*}: 返回值 -> Promise
 */
/*
 {
   totalCount: 0,
   list: []
 }

 {
   data: {
     id: 1
   }
 }

 {
   code: ,
   message: ''
 }
*/

let axiosApi = (action, data = {}) => {
  // params: 传入数据
  if (!action) {
    return false;
  }
  // 解构出对应的值;
  let {url, method, isList, delay} = getUrlConfig(action);
  // get 请求参数
  let params = method === REQUEST_METHOD_MAP.GET ? data : {};
  // 具体的请求
  return new Promise((resolve) => {
    let callbackFn = (res) => {
      // 解构数据
      let {data: resData = undefined} = res;
      // resData是否是字符串json数据
      resData = typeof resData === 'string' ? JSON.parse(resData) : resData;

      // 对所有返回success+info的接口，转换成code+msg
      if (Object.keys(resData).indexOf('success') !== -1 ||
        Object.keys(resData).indexOf('type') !== -1) {
        resData = Object.assign({}, resData, {
          code: resData.success || resData.type === 'success' ? 1 : 0,
          msg: resData.msg || resData.info || resData.content || ''
        });
      }

      // 支付接口
      resData = resData.apiResponse ? resData.apiResponse : resData;
      if (resData.status) {
        resData.data = {...resData};
      }
      let {
        code = 1,
        data = 'undefined',
        msg: message = '',
        totalCount = 0
      } = resData;
      // 如果没有data,说明使用的是其他数据字段:看情况拓展此方法
      // if (data === 'undefined') {
      //   resolve(resData);
      //   return false;
      // }
      // 是否需要是列表
      if (isList) {
        let {count = 0, list = []} = data;
        totalCount = data.totalCount || count;
        data = list;
      } else {
        data = data || {};
      }

      // 返回的数据解构 -- 字段
      let resDatas = {
        code,
        data,
        totalCount,
        message
      };
      resolve(resDatas);
    };

    let timer = setTimeout(() => {
      clearTimeout(timer);
      axios({
        url,
        method,
        params,
        data
      }).then(callbackFn).catch((error) => {
        callbackFn({
          data: {
            error
          }
        });
      });
    }, delay);
  });
};

export default axiosApi;
