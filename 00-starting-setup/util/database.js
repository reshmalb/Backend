const mysql=require('mysql2')
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-product',
    password:'Reshma1988'
});
module.exports=pool.promise();