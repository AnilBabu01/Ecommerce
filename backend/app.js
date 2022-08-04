const express = require('express');
const cookiesParser= require('cookie-parser')
const errorMiddleware = require('./middlewares/errors')
const app = express();
// import all routes here
app.use(express.json());
app.use(cookiesParser());
const product =require('./routes/product')
const user =require('./routes/auth')
const order=require('./routes/order')
app.use('/api/auth',user)
app.use('/api',product)
app.use('/api',order)

//middleware to handle errors
app.use(errorMiddleware)
module.exports = app