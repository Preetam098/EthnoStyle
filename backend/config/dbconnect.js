const mongoose = require("mongoose");
const url = process.env.MONGO_URL

const connectDb = async () => {
  try {
    const connect = await mongoose
      .connect(url)
      .then(() => console.log("Connected!"));
  } catch (err) {
    console.log("Not Connected", err);
  }
};


module.exports = connectDb