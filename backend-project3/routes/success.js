const express=require('express');
const router=express.Router();
const path= require('path')
const successController= require('../controllers/successController')



router.get('/success',successController.getSuccessData)


module.exports=router;