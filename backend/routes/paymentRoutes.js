const express = require("express");
const {
  checkoutControl,
  paymentVerification,
} = require("../controller/paymentController");

const paymentRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name:Payment
 *   description: Payment processing and verification
 */


/**
 * @swagger
 * /api/getkey:
 *   get:
 *     summary: Retrieve the API key
 *     tags: [Payment]
 *     responses:
 *       200:
 *         description: Successfully retrieved the API key
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 key:
 *                   type: string
 */
paymentRoutes.get("/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

/**
 * @swagger
 * /api/checkout:
 *   post:
 *     summary: Initiate a checkout process
 *     tags: [Payment]
 *     responses:
 *       200:
 *         description: Successfully initiated checkout
 */
paymentRoutes.post("/checkout", checkoutControl);

/**
 * @swagger
 * /api/paymentVerification:
 *   post:
 *     summary: Verify payment
 *     tags: [Payment]
 *     responses:
 *       200:
 *         description: Successfully verified payment
 */
paymentRoutes.post("/paymentVerification", paymentVerification);

module.exports = paymentRoutes;
