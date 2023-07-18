var http = require("http");
const express=require('express')
const path= require('path')
const app=express();
const bodyParser = require("body-parser");
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop')
const contactRoutes=require('./routes/contact')
const successRoutes=require('./routes/success')





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
app.use(adminRoutes);
app.use(contactRoutes);
app.use(shopRoutes);
app.use(successRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'))
})


app.listen(5173)
