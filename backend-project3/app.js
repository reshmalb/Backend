var http = require("http");
const express=require('express')
const app=express();
const bodyParser = require("body-parser");
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop')



// const server = http.createServer(app);
// app.use((req,res,next)=>{
//     console.log("inside first middleware")
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("inside second middleware")
//     res.send('<h1>This is second middleware</h1>')
// })

app.use(bodyParser.urlencoded({extended:false}))
// app.use(adminRoutes);
app.use('/admin',adminRoutes);


app.use('/shop',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})



app.listen(5090);
