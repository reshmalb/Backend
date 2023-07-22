

const express= require('express')

const app= express();
app.use(express.json());
const userRouter=express.Router();

const db= require('./utils/database');
const { result } = require('lodash');


app.get('/',(req,res)=>{

   
        res.sendFile('./views/index.html',{
            root:__dirname       
    })
   
   
})
app.get('/get-user',(req,res)=>{
    db.execute('select * from booking_table')
    .then((result)=>{
        let alluserdata= result[0] ||[] ;
        console.log(alluserdata)
        res.json({alluserdata})
    })

})
app.post('/',(req,res)=>{
    let details=req.body;
    console.log(req.body.username);
    console.log('backend',details);
    db.execute('INSERT INTO booking_table (username, email, phone) VALUES (?, ?, ?)',
    [req.body.username, req.body.email, req.body.phone])
    .then((result)=>{
        console.log(result[0]);
        res.json({
            message:"created new appointment",
            data:details
        })

    }).catch(error=>console.log(error))
  
})
app.delete('/remove-user/:username',(req,res)=>{
    console.log("delete",req.params.username);
    db.execute('DELETE FROM booking_table where username =?',[req.params.username])

    .then((result)=>{
        res.json({
            message:'Data removed successfully'
        })
    }).catch((error)=>console.log(error));
})

app.listen(3000,'localhost',()=>{
    console.log('Listening to port 3000');
})