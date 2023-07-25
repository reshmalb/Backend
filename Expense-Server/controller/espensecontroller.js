
const path = require('path');
const ExpenseModel=require('../models/expense')


exports.getExpenseData=(req,res,next)=>{
    const filePath = path.join(__dirname, '../views', 'index.html');
    res.sendFile(filePath)
    // next();


}
exports.fetchAllExpense=(req,res,next)=>{
    ExpenseModel.findAll()
    .then((result)=>{
        const data=result||[];
        // console.log(data);
        res.json({
            message:"Data retrieved successfully",
            data:data
        })
    }).catch((error)=>{
        console.log(error)
    })
}

exports.postExpenseData=(req,res,next)=>{
    const expense=req.body.expense;
    const amount=req.body.amount;
    const category=req.body.category;
    ExpenseModel.create({
        expense:expense,
        amount:amount,
        category:category
    })
    .then((result)=>{
       res.json({
        message:"Data added successfully"
       })
       res.redirect('/')

    })
    .catch((error)=>{
        console.log(error)
    })

}

exports.getSingleExpenseById=(req,res,next)=>{
    let id=req.params.id;
    
    let eid = Number.parseInt(id.replace(":",""), 10);

    // console.log(typeof(eid),eid)

    ExpenseModel.findAll({
        where:{id: eid}
    })
    .then((result)=>{
        // if (result && result.length > 0) 
        //     // console.log(result[0])
    
        let data=result[0];
        res.json({
            message:"Data retrieved successfully",
            data:data
           })
        

    }).catch((error)=>{
        console.log(error)
    })


}
exports.updateExpenseData=(req,res,next)=>{
    let id=req.params.eid;    
    let eid = Number.parseInt(id.replace(":",""), 10);
    console.log("updated id:",eid);
    const expense=req.body.expense;
    console.log("expense",expense);
    const amount=parseFloat(req.body.amount);
    console.log("amount:",amount);

    const category=req.body.category;
    console.log("cat:",category);

    ExpenseModel.update({
        expense:expense,
        amount:amount,
        category:category
    },{
        where:{id:eid}

    }
    ).then((result)=>{
        console.log('update:.....',result[0])
        res.json({
            message:"Data updated successfully"
        })
        res.redirect("/")
    })
    .catch((error)=>{
        console.log(error)
    })
}