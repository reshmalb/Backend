const express= require('express');
const router=express.Router();
const shopController= require('../controller/shopController')

router.get('/',shopController.getShopData)
router.post('/',shopController.postShopData)
router.get('/getdata',shopController.getAllData)
router.patch('/updatequantity/:id',shopController.updateQuantity)
// router.patch('/updatequantity/',shopController.updateQuantity)


module.exports=router;