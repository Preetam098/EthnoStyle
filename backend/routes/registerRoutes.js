const express = require("express");
const {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOTP,
  resetPassword,
} = require("../controller/authController");
const { registerValidate, loginValidate } = require("../middleware/schemaZod");
const { validate } = require("../middleware/schemaZod");
const verifyAccessToken = require("../helpers/verifyAccessToken");

const registerRouter = express.Router();

registerRouter.post("/register", validate(registerValidate), registerUser);
registerRouter.use("/login", validate(loginValidate), loginUser);
registerRouter.post("/forgot-password", forgotPassword);
registerRouter.post("/verify-otp", verifyOTP);
registerRouter.post("/reset-password", verifyAccessToken, resetPassword);

module.exports = registerRouter;
