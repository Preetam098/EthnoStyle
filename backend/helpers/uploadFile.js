const multer = require("multer");
const fs = require("fs");


const filefilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Unsupported file format, only jpg, png & webp file allowed.")
    );
  }
};

// file size limit validate
const limits = {
  fileSize: 5 * 1024 * 1024, // 5 MB limit
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destination = `./uploads/banner`;
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }
    cb(null, destination);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png");
  },
});

const bannerUpload = multer({
  storage: storage,
  limits: limits,
  fileFilter: filefilter,
});

module.exports = { bannerUpload };
