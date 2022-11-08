const fs = require('fs')
const { acquireFile, creatFile, deleteFile,acquireAllFile } = require('../service/study.service')
const { studyAlreadyDelete, studyDeleteError, studyFindError, studyUploadError } = require('../constant/err.rype')
class studyController {
    //上传文件和修改文件
    async uploadFile(ctx) {
        try {
            // 获取上传文件
            const files = ctx.request.files;
            // 正则 替换掉文件原始路径中不需要的部分
            const reg = new RegExp(".*/upload/", "g");

            for (const fileKey in files) {
                ctx.uploadpaths = ctx.uploadpaths ? ctx.uploadpaths : [];
                ctx.uploadpaths.push({
                    name: files[fileKey].name,
                    url: files[fileKey].path.replace(reg, ""),
                });
            }
            //注意这里面ctx.uploadpaths是数组里面加对象
            //由于上传的文件如果同名自动覆盖所以要先删除数据库里面的记录然后再重新上传
            const delnum = await deleteFile(ctx.uploadpaths[0].name)
            const res = await creatFile(ctx.uploadpaths[0].name, ctx.uploadpaths[0].url)
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
            return ctx.app.emit('error', studyUploadError, ctx)
        }
    }
    //获取一个文件
    async getFile(ctx, next) {

        try {
            const { kind } = ctx.query
            const res = await acquireFile(kind)
            console.log('res--->', res);
            ctx.body = {
                code: 200,
                message: '查询成功',
                result: res
            }
        } catch (error) {
            return ctx.app.emit('error', studyFindError, ctx)
        }
    }
    //删除文件
    async delFile(ctx) {
        try {
            const { kind } = ctx.query
            const { res } = await deleteFile(kind)
            if (!res) {
                return ctx.app.emit('error', studyAlreadyDelete, ctx)
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
            return ctx.app.emit('error', studyDeleteError, ctx)
            //往后面加上result里面的内容
        }

    }
    //查询所有
    async getAllFile(ctx){
        const res = await acquireAllFile()
        ctx.body = {
            code:200,
            message:'查询成功',
            result:res
        }
    }

}
module.exports = new studyController()