const Router = require('koa-router')

const router = new Router({ prefix: '/images' })

const { uploadImage,getImage,delImage,getAllImage } = require('../controller/image.controller')

//文件的路由
router
    .post('/upload', uploadImage)
    .get('/find', getImage)
    .delete('/delete',delImage)
    .get('/findAll',getAllImage)
module.exports = router