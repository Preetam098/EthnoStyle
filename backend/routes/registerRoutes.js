const express = require("express");
const {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOTP,
  resetPassword,
  updateProfile
} = require("../controller/authController");
const { registerValidate, loginValidate } = require("../middleware/schemaZod");
const { validate } = require("../middleware/schemaZod");
const verifyAccessToken = require("../helpers/verifyAccessToken");
const validateToken = require('../helpers/validateToken')
const registerRouter = express.Router();

registerRouter.post("/register", validate(registerValidate), registerUser);
registerRouter.use("/login", validate(loginValidate), loginUser);
registerRouter.post("/forgot-password", forgotPassword);
registerRouter.post("/verify-otp", verifyOTP);
registerRouter.post("/reset-password", verifyAccessToken, resetPassword);
registerRouter.put("/update-profile", verifyAccessToken, updateProfile);

module.exports = registerRouter;
