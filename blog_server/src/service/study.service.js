const Study = require('../model/study.module')
const fs = require('fs')
const path = require("path");
class studyService {
    //增和改
    async creatFile(study_name,study_url){
        const res = await Study.create({study_name,study_url})
    }
    //删
    async deleteFile(name){
        const res = await Study.destroy({
            where:{study_name:name}
        })
        return{
            res
        }
    }
    //查
    async acquireFile(name){
        const {study_name,study_url} = await Study.findOne({
            attributes:['id','study_name','study_url'],
            where:{study_name:name}
        })       
        // const res = await Study.findOne({
        //     attributes:['study_name','study_url'],
        //     where:{study_name:name}
        // })       
        return{
            name:study_name,
            url:study_url  
        }
    }
    //查所有的文件
    async acquireAllFile(){
        const data = await Study.findAll({
            attributes:['id','study_name','study_url']
        })
        return{
            data
        }
    }
    
}
module.exports = new studyService()