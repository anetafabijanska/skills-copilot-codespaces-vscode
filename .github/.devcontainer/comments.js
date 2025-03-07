// Create web server and listen to port 8080
// This file is used to show comments in the webview

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  // Read the comments.html file
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
}).listen(8080);
console.log('Server running at http://localhost:8080/');

// Run this script using the following command
// node comments.js

// comments.html