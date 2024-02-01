const express = require("express");
const {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOTP,
} = require("../controller/authController");
const { registerValidate, loginValidate } = require("../middleware/schemaZod");
const { validate } = require("../middleware/schemaZod");

const registerRouter = express.Router();

registerRouter.post("/register", validate(registerValidate), registerUser);
registerRouter.use("/login", validate(loginValidate), loginUser);
registerRouter.post("/forgot-password", forgotPassword);
registerRouter.post("/verify-otp", verifyOTP);


module.exports = registerRouter;
