const express= require('express')
const sequelize= require ('./util/database')
const app=express();
const expensemodel= require('./models/expense')
const expensceController= require('./controller/espensecontroller')
app.use(express.json());


app.get('/',expensceController.getExpenseData)
app.get('/getexpenses',expensceController.fetchAllExpense)
app.post('/',expensceController.postExpenseData)
app.get('/editexpense/:id',expensceController.getSingleExpenseById)
app.patch('/updateexpenses/:eid',expensceController.updateExpenseData)


app.listen(3000,'localhost',()=>{
    console.log('listening to port 3000');
});
sequelize.sync()
.then((result)=>{
    console.log(result)
    
}).catch((error)=>{
    console.log(error)
})

