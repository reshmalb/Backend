
const path= require('path')


exports.getContactData=  (req,res,next)=>{
    // res.send('<h1>This is shop page</h1>')
    res.sendFile(path.join(__dirname,'../','Views','contactus.html'))
};

exports.postContactData = (req,res,)=>{
    res.redirect('/success')
};