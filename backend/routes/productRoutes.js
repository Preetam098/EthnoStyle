const express = require("express");
const {
  getProducts,
  createProducts,
  updateProducts,
  deleteProduct,
} = require("../controller/productsController");
const { validate, productValidate } = require("../middleware/schemaZod");
const verifyAccessToken = require("../helpers/verifyAccessToken");
const productRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management and operations
 */

/**
 * @swagger
 * /collections/all-products:
 *   get:
 *     summary: Retrieve all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
productRoutes.get("/all-products", getProducts);

/**
 * @swagger
 * /collections/create-products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created product
 */
productRoutes.post(
  "/create-products",
  verifyAccessToken,
  validate(productValidate),
  createProducts
);

/**
 * @swagger
 * /collections/update-product:
 *   put:
 *     summary: Update an existing product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated product
 */
productRoutes.put("/update-product", verifyAccessToken, updateProducts);

/**
 * @swagger
 * /collections/delete-product:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
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
 *         description: Successfully deleted product
 */
productRoutes.delete("/delete-product", verifyAccessToken, deleteProduct);

module.exports = productRoutes;

module.exports = productRoutes;
