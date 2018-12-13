/**
 * 设置api接口
 * @type {boolean}
 * localhostDev = true 开发环境 : 生产环境;
 * @param url: 必填required
 * @param method: 请求方式 -- default: 'get'
 * @param isList: 是否需要列表格式[] -- default: false
 * @param delay: 请求延迟，单位毫秒 -- default: 0
 */

export const REQUEST_METHOD_MAP = {
  GET: 'get',
  POST: 'post'
};

// const HOST = localhostDev ? 'http://localhost:8081' : 'http://xxx.com';
const HTTP_URL_MAP = {
  // 'list': {
  //   url: _host + '/profile/menus',
  //   method: 'get',
  //   isList: true
  // }
};

let getUrlConfig = (action) => {
  let result = Object.assign({
    url: '',
    action: action,
    method: REQUEST_METHOD_MAP.GET,
    isList: false,
    delay: 0
  }, HTTP_URL_MAP[action]);
  result.url = process.env.NODE_ENV !== 'production'
    ? `/api${result.url}`
    : `${result.url}`;
  return result;
};

export { getUrlConfig };
