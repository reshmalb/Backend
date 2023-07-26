const Sequelize=require('sequelize');
const sequelize=new Sequelize(
    'node-product','root','Reshma1988',{
        dialect:'mysql',
        host:'localhost'
    }
);
module.exports =sequelize;