const {DataTypes} = require('sequelize')
const seq = require('../db/seq')
const moment = require('moment');
const Comment = seq.define('blog_comment',{ 
    user_id:{
        type:DataTypes.STRING,
        allowNull:false,
        // unique:true,
        comment:'用户的唯一标识'
    },
    txtContent:{
        type:DataTypes.TEXT,
        allowNull:false,
        comment:'用户的留言内容'
    },
    authorContent:{
        type:DataTypes.TEXT,
        comment:'作者对于留言的回复'
    },
    createdAt: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
        }
    },
   
})

// 强制同步数据库(创建数据表)
// Comment.sync({ force: true })
module.exports = Comment