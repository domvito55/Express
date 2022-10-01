/**You need to install connect package:
 * npm install connect --save //the save flag adds connect as a dependency at package.json 
 * run:
 * node server.js
 * if you want to use nodemon, you will need to install it and have a package.json file:
 * You can start a package.json issuing:
 * npm init
 */

// Connect 1
const connect = require('connect'); //third part module, need to be installed
const app = connect();
app.listen(3000);

function logger(req, res, next){
    console.log(req.method, req.url)
    next();
}

function helloWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World');
};

function goodbye(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Good bye!');
 };

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbye);

console.log('Server running at http://localhost:3000/');