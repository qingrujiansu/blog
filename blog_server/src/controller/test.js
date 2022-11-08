const fs = require('fs')
kind = 'JavaScript自己理解.md'

filePath = `../app/static/${kind}`
fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log("在static中删除文件成功");
})