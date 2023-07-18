const express=require('express');
const router= express.Router();



//login page
router.get('/login-page',(req,res)=>{
  
    res.send('<form  onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST" ><label>Username:</label> <input id="username" type="text" name="username"> <button type="submit">login</button> </form>');
   

});
router.post("/",(req,res)=>{
    res.redirect("/");
})



module.exports=router;