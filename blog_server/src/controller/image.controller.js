const fs = require('fs')
const { acquireImage, creatImage, deleteImage,acquireAllImage } = require('../service/image.service')
const { imageAlreadyDelete, imageDeleteError, imageFindError, imageUploadError } = require('../constant/err.rype')
class imageController {
    //上传图片和修改图片
    async uploadImage(ctx) {
        try {
            // 获取上传图片
            const files = ctx.request.files;
            const image_description = ctx.request.body.description || null
            // 正则 替换掉图片原始路径中不需要的部分
            const reg = new RegExp(".*/upload/", "g");

            for (const fileKey in files) {
                ctx.uploadpaths = ctx.uploadpaths ? ctx.uploadpaths : [];
                ctx.uploadpaths.push({
                    name: files[fileKey].name,
                    url: files[fileKey].path.replace(reg, ""),
                });
            }
            //注意这里面ctx.uploadpaths是数组里面加对象
            //由于上传的图片如果同名自动覆盖所以要先删除数据库里面的记录然后再重新上传
            const delnum = await deleteImage(ctx.uploadpaths[0].name)

            // const body = ctx.request.body
            // body.image_name = ctx.uploadpaths[0].name
            // body.image_url = ctx.uploadpaths[0].url

            const res = await creatImage(ctx.uploadpaths[0].name, ctx.uploadpaths[0].url,image_description)

            if (delnum.res > 0) {
                ctx.body = {
                    code: 200,
                    msg: "更新成功",
                    result: { uploadpaths: ctx.uploadpaths }
                };
            }
            else {
                ctx.body = {
                    code: 200,
                    msg: "上传成功",
                    result: { uploadpaths: ctx.uploadpaths }
                };
            }

        } catch (error) {
            return ctx.app.emit('error', imageUploadError, ctx)
        }
    }
    //获取一个图片
    async getImage(ctx, next) {

        try {
            const { kind } = ctx.query
            const res = await acquireImage(kind)
            console.log('res--->', res);
            ctx.body = {
                code: 200,
                message: '查询成功',
                result: res
            }
        } catch (error) {
            return ctx.app.emit('error', imageFindError, ctx)
        }
    }
    //删除图片
    async delImage(ctx) {
        try {
            const { kind } = ctx.query
            const { res } = await deleteImage(kind)
            if (!res) {
                return ctx.app.emit('error', imageAlreadyDelete, ctx)
            }
            const filePath = `../blog_server/src/app/static/${kind}`
            fs.unlink(filePath, (err) => {
                if (err) throw err;
            })
            ctx.body = {
                code: 200,
                message: '删除成功',
                result: res
            }

        } catch (error) {
            return ctx.app.emit('error', imageDeleteError, ctx)
            //往后面加上result里面的内容
        }

    }
    //查询所有
    async getAllImage(ctx){
        const res = await acquireAllImage()
        ctx.body = {
            code:200,
            message:'查询成功',
            result:res
        }
    }

}
module.exports = new imageController()