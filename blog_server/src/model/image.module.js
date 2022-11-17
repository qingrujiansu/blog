const {DataTypes} = require('sequelize')
const seq = require('../db/seq')
const Image = seq.define('blog_image',{
    image_name:{
        type:DataTypes.STRING,
        allowNull:false,
        comment:'图片的名字'
    },
    image_url:{
        type:DataTypes.STRING,
        allowNull:false,
        comment:'图片文件的url地址'
    },
    image_description:{
        type:DataTypes.TEXT,
        comment:'图片的文案'
    }

})

// 强制同步数据库(创建数据表)
// Image.sync({ force: true })
module.exports = Image