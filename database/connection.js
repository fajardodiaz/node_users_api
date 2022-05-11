require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host:process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:5432
});

module.exports = pool;