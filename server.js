var http = require("http");
const server=http.createServer((req,res)=>{

    const url=req.url
    if(url==='/home')
    {
        // res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title> Welcome to Home page</title></head>')
        res.write('<body><h1> Hello Reshma</h1></body>')
    
        res.write('</html>')
       return  res.end();
    
    }
    else if(url==='/about')
    {
        // res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title> My first server</title></head>')
        res.write('<body><h1> Welcome to About us page</h1></body>')
    
        res.write('</html>')
       return  res.end();
    
    }
    else if(url==='/node')
    {
        // res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title> My first server</title></head>')
        res.write('<body><h1> Welcome to Nodejs page</h1></body>')
    
        res.write('</html>')
       return  res.end();
    
    }
    console.log('listening to port 5173');
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title> My first server</title></head>')
    res.write('<body><h1> Welcome to my first server</h1></body>')

    res.write('</html>')
  res.end();
})
server.listen(5173);
