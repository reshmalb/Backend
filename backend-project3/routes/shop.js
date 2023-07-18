const express=require('express');
const router=express.Router();
const path= require('path')
const productController= require('../controllers/productController')




router.get('/',productController.getShopProductData)


module.exports=router;