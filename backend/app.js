const express = require('express');
const errorMiddleware = require('./middlewares/errors')
const app = express();
// import all routes here
app.use(express.json());

const product =require('./routes/product')

app.use('/api',product)
//middleware to handle errors
app.use(errorMiddleware)
module.exports = app