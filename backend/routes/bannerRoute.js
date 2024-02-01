const express = require("express");
const {
  listBanner,
  createBanner,
  updateBanner,
  deleteBanner,
} = require("../controller/bannerController");
const { bannerUpload } = require("../helpers/uploadFile");
const bannerRouter = express.Router();
const verifyAccessToken = require("../helpers/verifyAccessToken");
bannerRouter.get("/list", listBanner);
bannerRouter.post(
  "/create",
  verifyAccessToken,
  bannerUpload.single("image"),
  createBanner
);
bannerRouter.put(
  "/update",
  verifyAccessToken,
  bannerUpload.single("image"),
  updateBanner
);
bannerRouter.delete("/delete", verifyAccessToken, deleteBanner);

module.exports = bannerRouter;
