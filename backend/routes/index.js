const { Router } = require("express");
const router = Router();

const profileRoute = require('./profileRoutes')
const bannerRouter = require("./bannerRoute");
const paymentRoutes = require("./paymentRoutes");
const registerRouter = require("./registerRoutes");
const productRouter = require("./productRoutes");

router.use("/api", paymentRoutes);
router.use("/auth", registerRouter);
router.use("/banner", bannerRouter);
router.use("/profile" , profileRoute);
router.use("/collections", productRouter);
module.exports = router;
