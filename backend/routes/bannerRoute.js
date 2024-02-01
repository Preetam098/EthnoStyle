const express = require('express')
const { listBanner , createBanner , updateBanner, deleteBanner } = require('../controller/bannerController')
const { bannerUpload } = require ('../helpers/uploadFile')
const bannerRouter = express.Router()


bannerRouter.get("/list",listBanner)
bannerRouter.post("/create" , bannerUpload.single("image"), createBanner)
bannerRouter.put("/update" , bannerUpload.single("image"), updateBanner)
bannerRouter.delete("/delete" , deleteBanner)




module.exports = bannerRouter;