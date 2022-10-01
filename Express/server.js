var express = require('express');
var app = express();

app.use('/', function(req, res) {
    const filesystem = require('fs');
    filesystem.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    });
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;