

const path= require('path')
const Product=require('../models/product')


exports.getProductData=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
};

exports.postProductData= (req,res,next)=>{

    const product=new Product(req.body.title)
    product.save();
    res.redirect('/')
};

exports.getShopProductData=(req,res,next)=>{
    // res.send('<h1>This is shop page</h1>')
    const productslist= Product.fetchALl();
    console.log("pro",productslist)
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
    
}