var http = require("http");
const express = require('express');
const app = express();


// const server = http.createServer(app);
app.use((req,res,next)=>{
    console.log("inside first middleware")
    next();
})
app.use((req,res,next)=>{
    console.log("inside second middleware")
    res.send('<h1>This is second middleware</h1>')
})

app.listen(3001);
