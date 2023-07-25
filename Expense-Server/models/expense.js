
const  Sequelize=require('sequelize')
const sequelize= require('../util/database')

const ExpenseModel=sequelize.define('expensetable',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    expense:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    amount:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    }

}

)
module.exports=ExpenseModel;