const image = require('../model/image.module')
const fs = require('fs')
const path = require("path");
class imageService {
    //增和改
    async creatImage(image_name,image_url,image_description ){
        const res = await image.create({image_name,image_url,image_description})
    }
    //删
    async deleteImage(name){
        const res = await image.destroy({
            where:{image_name:name}
        })
        return{
            res
        }
    }
    //查
    async acquireImage(name){
        const {id,image_name,image_url,image_description} = await image.findOne({
            attributes:['id','image_name','image_url','image_description'],
            where:{image_name:name}
        })       
        
        return{
            id:id,
            name:image_name,
            url:image_url,
            description:image_description
        }
    }
    //查所有的图片
    async acquireAllImage(){
        const data = await image.findAll({
            attributes:['id','image_name','image_url','image_description']
        })
        return{
            data
        }
    }
    
}
module.exports = new imageService()