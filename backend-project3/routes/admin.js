const express=require('express');
const { route } = require('./shop');
const router=express.Router();
const path= require('path')
// const rootDir=require('../util/')

//admin/add-product get request
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
});

//admin/add-product post request

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})


module.exports=router;