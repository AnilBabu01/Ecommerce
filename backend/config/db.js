const mongoose = require("mongoose");

const url = "";

const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI).then((con) => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  });
};

module.exports = connectDatabase;
