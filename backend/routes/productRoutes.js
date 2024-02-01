const express = require('express')
const {getProducts , createProducts, updateProducts , deleteProduct} = require('../controller/productsController')
const { validate, productValidate } = require("../middleware/schemaZod");
const  verifyAccessToken = require('../helpers/verifyAccessToken')
const paymentRoutes = express.Router();

paymentRoutes.get('/all-products' , getProducts)
paymentRoutes.post('/create-products' ,verifyAccessToken,  validate(productValidate) , createProducts)
paymentRoutes.put('/update-product' ,verifyAccessToken, updateProducts)
paymentRoutes.delete('/delete-product' ,verifyAccessToken, deleteProduct)


module.exports = paymentRoutes;