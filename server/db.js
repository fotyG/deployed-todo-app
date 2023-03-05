const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: process.env.PGDATABASE
})

module.exports = pool