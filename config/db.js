const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWRD,
    database: process.env.DB_NAME
})

const poolPromise = pool.promise()

module.exports = poolPromise