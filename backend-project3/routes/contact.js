const express=require('express');
const router=express.Router();
const path= require('path')



router.get('/contactus',(req,res,next)=>{
    // res.send('<h1>This is shop page</h1>')
    res.sendFile(path.join(__dirname,'../','Views','contactus.html'))
})
router.post('/contactus',(req,res,)=>{
    res.redirect('/success')
})

module.exports=router;