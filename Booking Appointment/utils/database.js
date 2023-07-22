const mysql = require('mysql2');
const pool= mysql.createPool({
    host:'localhost',
    user:'root',
    database:'booking',
    password:'Reshma1988'
})

module.exports=pool.promise();