const express = require('express');
const app = express();
// import all routes here
app.use(express.json());

const product =require('./routes/product')

app.use('/api',product)

module.exports = app