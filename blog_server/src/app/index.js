const path = require('path')
const Koa = require('koa');
const koaBody = require('koa-body')
const router = require('../router')
const errHandler = require('./errHandler')
const cors = require('koa2-cors')

const app = new Koa();

app.use(cors())
app.use(
    koaBody({
    // 支持文件格式
      multipart: true,
      formidable: {
        uploadDir: path.join(__dirname, "/static"), // 设置文件上传目录
        keepExtensions: true, // 保持文件的后缀
        maxFieldsSize: 10 * 1024 * 1024, // 文件上传大小限制
        onFileBegin: (name, file) => {
          // 无论是多文件还是单文件上传都会重复调用此函数
          // 最终要保存到的文件夹目录
          const dir = path.join(__dirname, '/static');
          // 文件名称去掉特殊字符但保留原始文件名称
          const fileName = file.name
            .replaceAll(" ", "_")
            .replace(/[`~!@#$%^&*()|\-=?;:'",<>\{\}\\\/]/gi, "_");
          file.name = fileName;
          // 覆盖文件存放的完整路径(保留原始名称)
          file.path = `${dir}/${fileName}`;
        },
      },
        parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE','GET']
    })
)

//注册路由
app.use(router.routes())

//错误监视
app.on('error',errHandler)

module.exports = app