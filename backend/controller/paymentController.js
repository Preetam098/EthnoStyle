const { instance } = require("../razor");
const crypto = require('crypto')


// Payment Checkout
const checkoutControl = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options)
  res.status(200).json({ success: true, order, Message: "Payment Successfull" });
};

//Payment Verify
const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  // console.log("req.body" , razorpay_order_id, razorpay_payment_id, razorpay_signature)
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
    .update(body.toString())
    .digest("hex");
  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {

    res.redirect(
      `http://localhost:3000/pay-done?reference=${razorpay_payment_id}`
    );
   
  } else {
    res.status(400).json({ success: false,});
  }
};

module.exports = { checkoutControl, paymentVerification };
