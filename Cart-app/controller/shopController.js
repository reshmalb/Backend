const path=require('path');
const CartModel=require('../models/product')
const Product=require('../models/product')

exports.getShopData=(req,res,next)=>{
    const filePath = path.join(__dirname, '../views', 'shop.html');
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