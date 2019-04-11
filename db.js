const mysql = require('mssql');

const pool = new mysql.ConnectionPool({
    user: 'root',
    password: 'pikapika',
    server: 'localhost',
    database: 'pokemon'
})

pool.connect(err => {
    if (err) throw err;
    console.log('connected !');
})

module.exports = pool;