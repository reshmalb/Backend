const path=require('path');
const Shop=require('../model/shop')

exports.getShopData=(req,res,next)=>{
    const filePath = path.join(__dirname, '../view', 'index.html');
    res.sendFile(filePath)
}
exports.postShopData=(req,res,next)=>{
    const candyName=req.body.candyname;
    const desc=req.body.description;
    const price=req.body.price;
    const quantity=req.body.quantity;
    Shop.create({
        candyName:candyName,
        description:desc,
        price:price,
        quantity:quantity
    })
    .then(result=>{
        res.json({
            message:'Data Stored successfully',
            result:result[0]
        })
    })
    .catch(error=>{
        console.log(error)
    })
}

exports.getAllData=(req,res,next)=>{

    Shop.findAll()
    .then((result)=>{
      
            res.json({
                message:"Data fetched successfully",
                data:result || []
       
    })
})
    .catch(error=>{
       
    })

}

exports.updateQuantity=(req,res,next)=>{
    const newquantity=req.body.newquantity;
    // const cid=req.body.id;
    const id=req.params.id;
    Shop.update({
        quantity:newquantity
    },{
        where:{id:id}
    }).then(result=>{
           res.json({
   message:"data updated successfully"
        })
    }).catch(error=>{
        console.log(error)
    })
}
