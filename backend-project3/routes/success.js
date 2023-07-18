const express=require('express');
const router=express.Router();
const path= require('path')



router.get('/success',(req,res,next)=>{
    // res.send('<h1>This is shop page</h1>')
    res.sendFile(path.join(__dirname,'../','views','success.html'))
})


module.exports=router;