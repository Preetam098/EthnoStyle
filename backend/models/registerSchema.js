const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true , unique:true},
  password: { type: String, required: true },
  mobileNo: { type: String, required: true , unique:true },
  dob: { type: String, required: true },
}, 
{ timestamps: true }
);

const RegisterModel = mongoose.model("Register", RegisterSchema);

module.exports = RegisterModel
