const Router = require('koa-router')

const router = new Router({ prefix: '/studies' })

const { uploadFile,getFile,delFile,getAllFile } = require('../controller/study.controller')

//文件的路由
router
    .post('/upload', uploadFile)
    .get('/find', getFile)
    .delete('/delete',delFile)
    .get('/findAll',getAllFile)
module.exports = router