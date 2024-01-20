// var http = require("http")


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

// var http = require("http")

// var cals = require('./making_modlues.js')

// result = cals.add(2,2)
// console.log(result)


// http.createServer(function (req,res){
//     res.write("Hey My output is ",result)
//     console.log(result)
//     res.end()
// }).listen("8080")

// var file_system = require("fs")

// file_system.unlink('writing_file.js', function(err){
//     console.log("Its deleted")
// })

// const express = require("express");


// const firstnode = express();

// firstnode.get('/',function(req,res){
//     res.send("Hello world")
// })

// firstnode.get("/username", function(req,res){
//     res.send("Welcome back Sudheer")

// })

// firstnode.listen(9000, function(req,res){
//     console.log("Running...")
// });


const express = require('express')

const firstnode = express()

firstnode.listen(9000, function(req,res){
    console.log("Running")
})

firstnode.get("/",function(req,res){
    res.send("My Server is running")
})

firstnode.get("/user/:id", function(req,res){
    const id = req.params.id
    res.send("hey user no " + id);
})

firstnode.get('/user', function(req,res){
    const id = req.query.id
    res.send("welcome user and no" + id)
})