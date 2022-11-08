const {DataTypes} = require('sequelize')
const seq = require('../db/seq')
const Study = seq.define('blog_study',{
    study_name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        comment:'笔记的名字'
    },
    study_url:{
        type:DataTypes.STRING,
        allowNull:false,
        comment:'笔记文件的url地址'
    }
})

// 强制同步数据库(创建数据表)

// Study.sync({ force: true })

module.exports = Study