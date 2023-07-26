
const path=require('path');
const Product=require('../models/product')

exports.getProductData=(req,res,next)=>{
    const filePath = path.join(__dirname, '../views', 'index.html');
    res.sendFile(filePath)
    // next();


}
exports.postProductData=(req,res,next)=>{
        const title = req.body.title;
     const price = req.body.price;
     const imageURL = req.body.fileInput;
     console.log("USER<<<<<<<<<<:::::",req.user)
 req.user.createProduct({
    // Product.create({
        title:title,
        price:price,
        imageURL:imageURL
        // userId:req.user.id
    })
    .then((result)=>{
       console.log('add-product-backend result',result);

       res.json({
        message:"Data added successfully"
       })
       res.redirect('/')

    })
    .catch((error)=>{
        console.log(error)
    })

}
