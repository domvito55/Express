/** run:
 * node server.js
 * if you want to use nodemon, you will need to install it and have a package.jason file
 * You can start a package.json issuing:
 * npm init
 */

//importing functions: check the way they were exported, they different examples.
const hello = require('./hello');
const lib = require('./lib');

//Usages are diferent because the exports were different
hello();

console.log(lib.halfOf(10));
console.log(lib.multiply(10, 2));

// Node: This can be done in another way, using the connect library.
const http = require('http');
http.createServer((req, res) => {
   res.writeHead(200, {
    'Content-Type': 'text/plain'
   });
   res.end('Hello World');
}).listen(3000);

console.log('Server running at http://localhost:3000/');
