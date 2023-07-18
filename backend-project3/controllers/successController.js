

const path=require('path');

exports.getSuccessData=(req,res,next)=>{
    // res.send('<h1>This is shop page</h1>')
    res.sendFile(path.join(__dirname,'../','views','success.html'))
};