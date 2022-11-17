const {createComment,acquireAllComment} = require('../service/comment.service')
const {commentUploadError,commentFindError} = require('../constant/err.rype')
class commentController {
    //上传留言
    async uploadComment(ctx){
        try {
            const data = ctx.request.body
            const res = await createComment(data.user_id,data.txtContent)
            //刪除res里面的时间
            delete res.updatedAt
            delete res.createdAt
            ctx.body = {
                code:200,
                message:'留言成功',
                result:res
            }
        } catch (error) {
            ctx.app.emit('error',commentUploadError,ctx)
        }
    }
    //查询所有留言
    async findALLComment(ctx){
        try {
            const res = await acquireAllComment()
            ctx.body = {
                code:200,
                message:'查询留言成功',
                result:res
            }
        } catch (error) {
            ctx.app.emit('error',commentFindError,ctx)
        }
    }
}
module.exports = new commentController()