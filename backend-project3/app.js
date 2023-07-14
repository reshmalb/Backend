var http = require("http");
const express = require('express');
const app = express();
const bobyParser= require('body-parser');
const bodyParser = require("body-parser");



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

app.use('/',(req,res,next)=>{
    console.log("works always");
    next();
})
app.use('/add-products',(req,res,next)=>{
    console.log("inside first middleware")
     res.send('<form action="/product" method="POST" > <input type="text" name="title"> <input type="text" name="size"><button type="submit">send</button> </form>');
});
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    console.log("inside second middleware")
    res.send('<h1>This is second middleware</h1>')
})

app.listen(4000 );
