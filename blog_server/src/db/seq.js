const { Sequelize } = require('sequelize')
const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB,
} = require('../config/config.default')

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql',
    timezone: '+08:00'
})

//测试数据库是否连接
// try {
//     seq.authenticate();
//     console.log('成功.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

module.exports = seq