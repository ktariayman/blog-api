const mongoose = require("mongoose");
const PORT = process.env.PORT || process.env.API_PORT;
const colors = require("colors");

const connectDB = async () => {
  //   try {
  //     const conn = await mongoose.connect(process.env.MONGO_URL);

  //     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  //   } catch (error) {
  //     console.log(error);
  //     process.exit(1);
  //   }
  mongoose.connect(process.env.MONGODB_URL).then((conn) => {
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  });
  // .catch((err)=> {
  //   console.log(`Error:${err}`);
  //   process.exit(1);

  // })
};
module.exports = connectDB;
