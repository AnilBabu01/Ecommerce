const app= require('./app')
const connectDatabase=require('./config/db')

//setting up config file
const path = require('path');
require('dotenv').config({
    path:path.join(__dirname,'.env')
})
//cennectting to mongodb
connectDatabase();
app.listen(process.env.PORT, () => {
     console.log(`backend listening at http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})

