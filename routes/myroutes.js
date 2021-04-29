const express = require('express')
const Router =express.Router()
const mycontroller = require('../controller/controller')

// Routes and corresponding function
Router.get('/',mycontroller.getHome)
Router.get('/about',mycontroller.getAboutPage)
Router.get('/query',mycontroller.getQueryPage)
Router.get('/upload',mycontroller.getUploadPage)
Router.get('/sitemap',mycontroller.getSitemapPage)

// post method
Router.post('/upload',mycontroller.getUploadData)

//Query String
Router.get('/querystring',mycontroller.getQueryData)

//Exports to main file(index.js)
module.exports = Router
