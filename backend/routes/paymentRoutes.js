const express = require('express')
const {checkoutControl, paymentVerification} = require('../controller/paymentController')

const paymentRoutes = express.Router();

paymentRoutes.get("/getkey",(req,res)=>{res.status(200).json({key:process.env.RAZORPAY_API_KEY})})
paymentRoutes.post('/checkout' , checkoutControl)
paymentRoutes.post('/paymentVerification' , paymentVerification)


module.exports = paymentRoutes;