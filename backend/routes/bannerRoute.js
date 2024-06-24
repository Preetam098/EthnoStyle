const express = require("express");
const {
  listBanner,
  createBanner,
  updateBanner,
  deleteBanner,
} = require("../controller/bannerController");
const { bannerUpload } = require("../helpers/uploadFile");
const verifyAccessToken = require('../helpers/verifyAccessToken');

const bannerRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Banners
 *   description: Banner management and operations
 */

/**
 * @swagger
 * /banner/list:
 *   get:
 *     summary: Retrieve a list of all banners
 *     tags: [Banners]
 *     responses:
 *       200:
 *         description: A list of banners
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
bannerRouter.get("/list", listBanner);

/**
 * @swagger
 * /banner/create:
 *   post:
 *     summary: Create a new banner
 *     tags: [Banners]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created banner
 */
bannerRouter.post("/create", verifyAccessToken, bannerUpload.single("image"), createBanner);

/**
 * @swagger
 * /banner/update:
 *   put:
 *     summary: Update an existing banner
 *     tags: [Banners]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated banner
 */
bannerRouter.put("/update", verifyAccessToken, bannerUpload.single("image"), updateBanner);

/**
 * @swagger
 * /banner/delete:
 *   delete:
 *     summary: Delete a banner
 *     tags: [Banners]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully deleted banner
 */
bannerRouter.delete("/delete", verifyAccessToken, deleteBanner);

module.exports = bannerRouter;
