const RegisterModel = require("../models/registerSchema");

const errorHandler = require("../helpers/errorHandler");
const successHandler = require("../helpers/successHandler");

const updateProfile = async (req, res) => {
  // console.log("ussss", req.user);
  const { username, mobileNo, dob } = req.body;

  // Validate mobile number format
  if (mobileNo && !/^\d{10}$/.test(mobileNo)) {
    return res
      .status(400)
      .json({
        message:
          "Invalid mobile number format. Mobile number must be 10 digits long.",
      });
  }
  if (!username && !mobileNo && !dob) {
    return res
      .status(400)
      .json({ message: "No valid fields provided for update." });
  }

  try {
    const updatedProfile = await RegisterModel.findByIdAndUpdate(
      req.user.user,
      { $set: { username, mobileNo, dob } },
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: "User not found" });
    }

    const updateProfile = {
      _id: updatedProfile._id.toString(),
      username: updatedProfile.username,
      mobileNo: updatedProfile.mobileNo,
      dob: updatedProfile.dob,
    };

    res.json({ message: "Profile updated successfully", updateProfile });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  updateProfile,
};
