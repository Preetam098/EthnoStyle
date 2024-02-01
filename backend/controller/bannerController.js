const BannerSchema = require("../models/bannerSchema");
const { IMAGE_BASEURL } = require("../helpers/common");
const successHandler = require("../helpers/successHandler");
const errorHandler = require("../helpers/errorHandler");

const listBanner = async (req, res) => {
  const result = await BannerSchema.find();
  successHandler(res, {
    message: "All Banner List",
    result,
    imageUrl: IMAGE_BASEURL(req, "banner"),
  });
};

const createBanner = async (req, res) => {
  const { name } = req.body;
  if (!name || !req.file) {
    return res.status(400).json({ error: "Please fill all fields" });
  } else {
    try {
      const newBanner = new BannerSchema({
        ...req.body,
        image: req.file.filename,
      });
      const result = await newBanner.save();
      return successHandler(res, {
        message: "New Banner Added Successfully",
        result
      });
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const updateBanner = async (req, res) => {
  const { bannerId } = req.body;
  const bannerFind = await BannerSchema.findById(bannerId);
  if (!bannerFind) {
    res.status(400);
    errorHandler(res, "please valid banner id");
  } else {
    await BannerSchema.findByIdAndDelete(bannerId, {
      $set: {
        ...req.body,
        image: req.file ? req.file.filename : bannerFind.image,
      },
    });
  }
};

const deleteBanner = async (req, res) => {
  const { bannerId } = req.body;
  console.log("bbb" , bannerId)
  const bannerFind = await BannerSchema.findByIdAndDelete(bannerId);
  if (!bannerFind) {
    res.status(400);
    errorHandler(res, "please valid banner id");
  } else {
    successHandler(res, {
        message: "Banner Deleted",
      });
  }
};

module.exports = { listBanner, createBanner, updateBanner, deleteBanner };
