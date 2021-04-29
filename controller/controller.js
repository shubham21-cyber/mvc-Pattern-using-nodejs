const express = require('express')
const path = require('path')

//get function
exports.getHome = function(req,res){
res.sendFile(path.join(__dirname,'../view/home.html'))
}

exports.getAboutPage = function(req,res){
res.sendFile(path.join(__dirname,'../view/about.html'))
}

exports.getQueryPage = function(req,res){
res.sendFile(path.join(__dirname,'../view/query.html'))
}

exports.getUploadPage = (req,res)=>{
res.sendFile(path.join(__dirname,'../view/upload.html'))
}

exports.getSitemapPage = (req,res)=>{
res.sendFile(path.join(__dirname,'../view/sitemap.html'))
}

//post function
exports.getUploadData = (req,res)=>{
console.log(req.body.fname)
console.log(req.body.lname)
console.log(req.body.gender)
res.sendFile(path.join(__dirname,'../view/home.html'))
}

//Query String function
exports.getQueryData= (req,res)=>{
console.log(req.query.status)
console.log(req.query.state)
console.log(req.query.name)
console.log(req.query.city)
res.sendFile(path.join(__dirname,'../view/home.html'))
}
