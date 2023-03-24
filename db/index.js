const { Sequelize } = require('sequelize')
const env = process.env

const dbConnection = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
    host: env.DBHOST,
    dialect: 'mysql',
    port: env.DB_PORT,
    logging: false
})

module.exports = dbConnection