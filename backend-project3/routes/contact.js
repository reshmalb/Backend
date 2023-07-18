const express=require('express');
const router=express.Router();
const path= require('path')
const contactController= require('../controllers/contactController')



router.get('/contactus',contactController.getContactData)
router.post('/contactus',contactController.postContactData)

module.exports=router;