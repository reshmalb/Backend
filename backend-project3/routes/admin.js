const express=require('express');
const { route } = require('./shop');
const router=express.Router();

//admin/add-product get request
router.get('/add-product',(req,res,next)=>{
    console.log("inside first middleware")
     res.send('<form action="/add-product" method="POST" > <input type="text" name="title"> <input type="text" name="size"><button type="submit">send</button> </form>');
});

//admin/add-product post request

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})


module.exports=router;