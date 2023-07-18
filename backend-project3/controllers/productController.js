

const path= require('path')


exports.getProductData=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
};

exports.postProductData= (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
};