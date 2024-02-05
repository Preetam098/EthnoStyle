const { Router } = require("express");
const router = Router();

const bannerRouter = require("./bannerRoute");
const paymentRoutes = require("./paymentRoutes");
const registerRouter = require("./registerRoutes");
const productRouter = require("./productRoutes");

router.use("/api", paymentRoutes);
router.use("/auth", registerRouter);
router.use("/banner", bannerRouter);
router.use("/collections", productRouter);
module.exports = router;
