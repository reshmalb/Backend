const path=require('path');
const Cart=require('../models/product')
const Product=require('../models/product')

exports.getCartData=(req,res,next)=>{
    const filePath = path.join(__dirname, '../views', 'cart.html');
    res.sendFile(filePath)
    // next();


}


exports.getAllData=(req,res,next)=>{

    Product.findAll()
    .then((result)=>{
        console.log("shop data",result);
        res.json({
            message:"data retrieved successfullty",
            data:result||[]
        })
    })
}