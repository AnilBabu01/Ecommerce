const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/db");

//setupn of cloudnary
cloudinary.config({
  cloud_name: "ab-ecommerce",
  api_key: "441619151451343",
  api_secret: "U_hWsazTOwFgvjhipPB6kr8Hloo",
});
//setting up config file
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});
//cennectting to mongodb
connectDatabase();
app.listen(process.env.PORT, () => {
  console.log(
    `backend listening at http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
