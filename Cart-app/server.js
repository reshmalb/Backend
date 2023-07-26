const express= require('express')
const app=express();
const sequelize=require('./utils/database')
const port=3000;
const productController=require('./controller/productController')
const cartController=require('./controller/cartController');
const shopControlller=require('./controller/shopController')

const Product=require('./models/product')
const User= require('./models/user')
app.use(express.json());


app.use((req,res,next)=>{
    User.findAll({
        where:{id:1}
    }).then(user=>{
        console.log('USER>>>>>>>>>>>>>>>>>>>>>>>>>>',user[0])
        req.user=user[0];
        next();
    })
    .catch(error=>{
        console.log(error);
    })
})

app.get('/',productController.getProductData);

app.post('/',productController.postProductData);
app.get('/cart');
app.post('/cart')
app.get('/shop',shopControlller.getShopData)
app.get('/shopdata',shopControlller.getAllData)




Product.belongsTo(User,{constraints:true, onDelete:'CASCADE'});
User.hasMany(Product);


sequelize
.sync()
.then(result=>{
   return User.findByPk(1);
})
.then(user=>{
    if(!user){
        return User.create({name:"user1",email:"user@test.com"})
    }
    return user;
})
.then(user=>{
    console.log("user:",user);
    // app.listen(port,'localhost',()=>{
    //     console.log('Listening to port:',port);
    //     })
        
})
.catch(error=>{
    console.log("seq-sync-error:",error);
})
app.listen(port,'localhost',()=>{
            console.log('Listening to port:',port);
            })