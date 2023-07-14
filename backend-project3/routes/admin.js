const express=require('express');
const { route } = require('./shop');
const router=express.Router();


router.get('/add-products',(req,res,next)=>{
    console.log("inside first middleware")
     res.send('<form action="/product" method="POST" > <input type="text" name="title"> <input type="text" name="size"><button type="submit">send</button> </form>');
});
router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})


module.exports=router;