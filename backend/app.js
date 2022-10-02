const express = require("express");
const cookiesParser = require("cookie-parser");
const expresfileupload = require("express-fileupload");
const errorMiddleware = require("./middlewares/errors");
const bodyparser = require("body-parser");

var cors = require("cors");
const app = express();

app.use(expresfileupload());
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookiesParser());
// import all routes here
const product = require("./routes/product");
const user = require("./routes/auth");
const order = require("./routes/order");
app.use("/api/auth", user);
app.use("/api", product);
app.use("/api", order);

//middleware to handle errors
app.use(errorMiddleware);
module.exports = app;
