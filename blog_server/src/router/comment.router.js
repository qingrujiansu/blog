const Router = require('koa-router')
const router = new Router({ prefix: '/comments' })
const { uploadComment,findALLComment } = require('../controller/comment.controller')

router
    .post('/upload',uploadComment)
    .get('/findAll',findALLComment)
module.exports = router