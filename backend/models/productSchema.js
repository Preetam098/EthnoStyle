const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Products", productSchema);
