let fs = require('fs');
let path = require('path');

module.exports = {
  getValidMenus () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/valid-menus.json')));
  },
  getCurrentUser () {
    return {
      data: {
        "id": 1,
        "name": "王小虎dfljglkjdsjdsfjf都结束了开发技术就算了副教授积分",
        "email": "ddd@126.com放松放松非公开接受了开机速度就仿佛看见跨境电商斐林试剂分手就分手浪费健康",
        "headImageUrl": "http://localhost:8081/public/img/zfb.png",
        "token": "jdslkfjdslkfsfkdsklf13221lkjlkjkjkjlkjlkdgdfdfff",
        "counter": 88,
        "fee": 15,
        "expire": "2016-05-04"
      }
    };
  },
  getApiList () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/api-list.json')));
  },
  getDynamicIndustry () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/dynamic-industry.json')));
  },
  getDynamicProducts () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/dynamic-products.json')));
  },
  getInterfaces () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/interfaces.json')));
  },
  getApiDetail () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/apiDetail.json')));
  },
  getListApiType () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/listApiType.json')));
  },
  getApiSubscibe () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/listAudit.json')));
  },
  applyData () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/applyData.json')));
  }
};
