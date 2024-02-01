const RegisterModel = require("../models/registerSchema");
const verifyOTPSchema = require("../models/OtpSchema");
var jwt = require("jsonwebtoken");
const JWT = process.env.JWT_SECRET_KEY;
const bcrypt = require("bcrypt");
const { sendMail } = require("../helpers/OTPGenerate");

function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}
// Register Controller
const registerUser = async (req, res) => {
  try {
    // console.log("Request Body:", req.body);
    const { username, email, password, mobileNo, dob } = req.body;
    const existingUser = await RegisterModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await RegisterModel.create({
        username,
        email,
        password: hashedPassword,
        mobileNo,
        dob,
      });
      await newUser.save();
      res.status(200).send({ message: "User Creation Successfully " });
    }
  } catch (err) {
    res.status(400).send({ message: `User Creation Failed  ${err.message}` });
  }
};

//Login Controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await RegisterModel.findOne({ email });
      if (user) {
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (passwordMatch) {
          const token = jwt.sign({ user: user._id }, JWT);
          res.status(200).json({ message: "Login Successfully", token });
          // console.log("token", token);
        } else {
          res.status(401).send({ message: "Invalid Password" });
        }
      } else {
        res.status(401).send({ message: "Email Not Found" });
      }
    } else {
      res.status(400).send("Please Fill All Required Fields");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

//Forgot Controller

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await RegisterModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "User Not Found", user });
    }
    const existingOTP = await verifyOTPSchema.findOne({ userId: user._id });

    if (existingOTP) {
      const currentTime = new Date().getTime();

      if (currentTime < existingOTP.expiresAt) {
        // Time has not expired, resend the same OTP
        sendMail({
          purpose: "Reset Password",
          userData: { email: req.body.email },
          OTP: existingOTP.otp,
        });
        return res.status(200).json({
          userId: user._id,
          message: "OTP Resent Successfully",
        });
      } else {
        console.log("Existing OTP has expired");
      }
    }

    // Generate and save new OTP
    const OTP = generateOTP();
    const expireTime = new Date(Date.now() + 60000).getTime(); // Expires in 1 minute (adjust as needed)

    const newOTP = new verifyOTPSchema({
      userId: user._id,
      otp: OTP,
      expiresAt: expireTime,
    });

    await newOTP.save();

    // Send new OTP
    sendMail({
      purpose: "Reset Password",
      userData: { email: req.body.email },
      OTP,
    });

    return res.status(200).json({
      userId: user._id,
      message: "OTP Sent Successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { otp, id, newPassword } = req.body;
    const user = await verifyOTPSchema.findOne({
      userId: id,
      otp,
      expiresAt: { $gt: new Date().getTime() },
    });
    if (user) {
      const currentTime = new Date().getTime();
      if (user.expiresAt > currentTime) {
        // Valid OTP, update password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await RegisterModel.findByIdAndUpdate(user.userId, {
          password: hashedPassword,
        });
        return res
          .status(200)
          .json({ message: "OTP Verified and Password Updated" });
      } else {
        const newOTP = generateOTP();
        const newExpiresAt = new Date().getTime() + 60000;

        await verifyOTPSchema.findOneAndUpdate(
          { userId: id, otp },
          { $set: { otp: newOTP, expiresAt: newExpiresAt } },
          { new: true }
        );

        return res
          .status(400)
          .json({ message: "OTP has expired. New OTP sent.", newOTP });
      }
    } else {
      // Invalid OTP
      return res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { registerUser, loginUser, forgotPassword, verifyOTP };
