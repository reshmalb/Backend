const Sequelize= require('sequelize');
const sequelize= require('../utils/database')

const Shop=sequelize.define(
    'shop',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        candyName:Sequelize.STRING,
        description:Sequelize.STRING,
        price:Sequelize.INTEGER,
        quantity:Sequelize.INTEGER
        
    }
)

module.exports= Shop;