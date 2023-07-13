var http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title> My first server</title></head>');
    res.write('<body>');

    // Read messages from file and display them
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (!err) {
        const messages = data.split('\n');
        res.write('<ul>');
        messages.forEach((message) => {
          if (message) {
            res.write('<li>' + message + '</li>');
          }
        });
        res.write('</ul>');
      }

      res.write('<form action="/message" method="POST"><input type="text" name="message"> <button>send</button></form>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    });

  } else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      fs.appendFile('message.txt', message + '\n', (error) => {
        if (error) {
          console.error(error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/html');
          res.write('<html>');
          res.write('<head><title>Server Error</title></head>');
          res.write('<body><h1>Internal Server Error</h1></body>');
          res.write('</html>');
          return res.end();
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });

  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first server</title></head>');
    res.write('<body><h1> Welcome to my first server</h1></body>');
    res.write('</html>');
    res.end();
  }
});

server.listen(3001)
