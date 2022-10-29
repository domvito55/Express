let atlasDB = "mongodb+srv://nerdman:bananaboat@nerdman55.odsto9s.mongodb.net/products?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function(){
    //connect to database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;

    mongodb.once('error', console.error.bind("connection error"));
    mongodb.once('open', ()=>{
        console.log("=== Connected to mongoDB ===");
    });

    return mongodb;
}