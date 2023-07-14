const express=require('express');
const router=express.Router();



router.get('/',(req,res,next)=>{
    console.log("inside second middleware")
    res.send('<h1>This is second middleware</h1>')
})


module.exports=router;