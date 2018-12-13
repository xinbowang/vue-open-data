// let fs = require('fs');
// let path = require('path');

module.exports = {
  // getAuth () {
  //   return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/real-auth.json')));
  // },
  postPay () {
    return {
      code: 1,
      msg: 'success',
      data: {
        orderPrice: 'lksjflksjfljlkjlkjgdkjf',
        payWayType: 'ALIPAY',
        orderNo: '30',
        accountNo: '7893798437743984',
        orderFrom: '开放平台充值',
        productName: '开发平台',
        orderIp: '172.12.22.22',
        returnUrl: '',
        orderId: '100',
        url: 'localhost:8080'
      }
    };
  },
  postEwm () {
    return {
      code: 1,
      data: {
        orderPrice: 'lksjflksjfljlkjlkjgdkjf',
        payWayType: 'ALIPAY',
        orderNo: '30',
        accountNo: '7893798437743984',
        orderFrom: '开放平台充值',
        productName: '开发平台',
        orderIp: '172.12.22.22',
        returnUrl: '',
        orderId: '100'
      },
      msg: 'success'
    };
  },
  postPayRes () {
    return {
      orderPrice: 100,
      productName: '开放平台用户充值',
      returnUrl: '172.16.23.73?TradeNo=200201810186176&field1=扩展字段1&field2=扩展字段2&field3=扩展字段3&field4=扩展字段4&field5=扩展字段5&orderDate=20181018&orderNo=81020181018103443136&orderPrice=100&orderTime=20181018103443&payKey=82e3fb383bae4aa6ad96833de03cef75&payWayType=ALIPAY&productName=开放平台用户充值&tradeStatus=SUCCESS&sign=4BE641810BE57BCE50236020A4547A07',
      status: 'YES'
    };
  },
  postPaied () {
    return {
      code: 1,
      msg: '跳出'
    };
  },
  getEwmUrl () {
    return {
      code: 1,
      data: {
        url: 'http://localhost:8081/public/img/identify.png'
      },
      msg: 'success'
    };
  }
};
