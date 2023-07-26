
const Sequelize= require('sequelize');
const sequelize =require('../utils/database')


const  Product= sequelize.define('product_table',
{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    title: {
        type:Sequelize.STRING,
        allowNull:false,

    },
    price:{
            type:Sequelize.STRING,
            allowNull:false,
    },
    imageURL:{
            type:Sequelize.STRING,
            allowNull:true,
    }
})

module.exports = Product;