let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let app = express()
let router = express.Router()
let config = require('../config/index')
let ControllerMap = require('./controllers')
const port = config.dev.mockServerPort
//let multiparty = require('multiparty');
//let fs = require('fs');
/*
 * 访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。
 * 第一个 参数 指定访问静态文件名称【支持正则方式】  第二个参数文件所在目录
 */
app.use('/public', express.static(path.join(__dirname, '/public')))

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}))

const URL_PREFIXERS = '/api'

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  next()
})

router.get(URL_PREFIXERS + '/test', (req, res) => {
  res.status(200).send('ok, come on!')
})
//router.post(URL_PREFIXERS + '/file!uploadFiles.do', (req, res) => {
//  var form = new multiparty.Form({ uploadDir: './public/img/' });
//
//  // 上传完成后处理
//  form.parse(req, function (err, fields, files) {
//    var filesTmp = JSON.stringify(files, null, 2);
//
//    if (err) {
//      console.log('parse error: ' + err);
//    } else {
//      console.log('parse files: ' + filesTmp);
//      var inputFile = files.inputFile[0];
//      var uploadedPath = inputFile.path;
//      var dstPath = './public/files/' + inputFile.originalFilename;
//
//      // 重命名为真实文件名
//      fs.rename(uploadedPath, dstPath, function (err) {
//        if (err) {
//          console.log('rename error: ' + err);
//        } else {
//          console.log('rename ok');
//        }
//      });
//    }
//
//    res.status(200).send(ControllerMap.info.postImg());
//  });
// });
router.post(URL_PREFIXERS + '/api/front/verification/checkOldEmailCode.json',
  (req, res) => {
    res.status(200).send(ControllerMap.info.postOldCode());
  });
app.use(router);
app.listen(port, () => {
  console.info(
    `mock server start success! please visit: http://localhost:${port}/***`);
});
module.exports = app;
