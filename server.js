var http = require("http");
const server=http.createServer((req,res)=>{
    console.log('port 3000 is listening')
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title> My first server</title></head>')
    res.write('<body><h1> Hello Reshma</h1></body>')

    res.write('</html>')
    res.end();

})
server.listen(3000);
