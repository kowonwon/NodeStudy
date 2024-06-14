const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>Hello Node.js</h2>");
  setTimeout(() => {
    res.end('<h3>Hello World</h3>');
  }, 3000);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
