const http=require('http');
const express=require('express');
const bodyParser=require('body-parser')
const app = express();
const loginRoutes=require('./routes/login')
const fs = require('fs')





app.use(bodyParser.urlencoded({extended:false}))
app.use(loginRoutes)

app.get('/',(req,res,next)=>{
    // const username=localStorage.getItem(req.body.username)
    fs.readFile('chat.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading chat.txt:", err);
            res.status(500).send("Error reading chat data");
            return;
        }

        const chatMessages = data.split('\n').filter(message => message.trim() !== '');
        let chatLog = '';

        for (const message of chatMessages) {
            const [username, content] = message.split(':');
            chatLog += `${username}: ${content}\n`;
        }
    

    res.send(`<form action="/chat" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
    <input type="hidden" id="username" name="username">
    <label>chat:</label>
    <input type="text" id="message" name="message">
    <button type="submit">send</button>
</form>   <textarea style="display: flex;  width:300px; height:400px; ">${chatLog}</textarea>`
);
 
    })
})
app.post("/chat", (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  const chatMessage = `${username}: ${message}\n`;

  fs.appendFile('chat.txt', chatMessage, (err) => {
      if (err) {
          console.error("Error writing to file:", err);
      } else {
          console.log("Message written to chat.txt:", chatMessage);
      }
  });

  res.redirect('/');
});



// app.use((req,res,next)=>{
//     res.send('<h1>Hello frm server </h1>')
// })
/*When the user hits url ==> "/login" .Show a form to the user to enter his username.*/


app.listen(3001)