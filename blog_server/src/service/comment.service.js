const comment = require('../model/comment.module')
class commentService{
    //增加一条留言
    async createComment(user_id,txtContent){
        const res = await comment.create({user_id,txtContent})
        return res.dataValues
    }
    //查询所有留言
    async acquireAllComment(){
        const data = await comment.findAll({
            attributes:['id','user_id','txtContent','authorContent','createdAt']
        })
        return{
            data
        }
    }
}
module.exports = new commentService()