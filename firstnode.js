// var http = require("http")

const { request } = require("http")

// http.createServer(function(req,res){

//     res.writeHead(200,{'content-Type':'text/html'})
//     res.write("Hey Node")
//     res.end()
// }).listen(8080);

// var http = require('http')

// http.createServer(function(req,res){
//     res.write("Hey");
//     res.end()
// }).listen('8080')

var cals = require('./making_modlues.js')

result = cals.add(2,2)
console.log(result)