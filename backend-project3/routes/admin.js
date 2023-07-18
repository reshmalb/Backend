const express=require('express');
const { route } = require('./shop');
const router=express.Router();
const productController= require('../controllers/productController')
// const rootDir=require('../util/')

//admin/add-product get request
router.get('/add-product',productController.getProductData);

//admin/add-product post request

router.post('/add-product',productController.postProductData)


module.exports=router;