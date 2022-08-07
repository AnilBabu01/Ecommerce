const express = require('express');
const cookiesParser= require('cookie-parser')
const errorMiddleware = require('./middlewares/errors')
const bodyparser = require("body-parser");
const cloudinary = require('cloudinary')
var cors = require("cors");
const app = express();

//setupn of cloudnary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(cookiesParser());
// import all routes here
const product =require('./routes/product')
const user =require('./routes/auth')
const order=require('./routes/order')
app.use('/api/auth',user)
app.use('/api',product)
app.use('/api',order)

//middleware to handle errors
app.use(errorMiddleware)
module.exports = app