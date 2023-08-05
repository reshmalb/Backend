const express=require('express');
const app=express();
const Shop=require('./controller/shopController')
const shopRoutes= require('./routes/shop')
const sequelize= require ('./utils/database')
app.use(express.json());
app.use(shopRoutes);


app.listen(3000,'localhost',()=>{
    console.log('listening to port 3000');
});
sequelize.sync()
.then((result)=>{
    console.log(result)
    
}).catch((error)=>{
    console.log(error)
})


