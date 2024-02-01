const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const verifyOTPSchema = new Schema({
    userId:{type:Schema.Types.ObjectId ,ref:"register" , required:true},
    otp:String,
    expiresAt:String,
})

const verifyOTP =mongoose.model("verifyOTP" , verifyOTPSchema)

module.exports = verifyOTP;