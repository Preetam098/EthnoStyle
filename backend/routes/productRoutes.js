const express = require('express')
const {getProducts , createProducts, updateProducts , deleteProduct} = require('../controller/productsController')
const { validate, productValidate } = require("../middleware/schemaZod");
const paymentRoutes = express.Router();

paymentRoutes.get('/all-products' , getProducts)
paymentRoutes.post('/create-products' , validate(productValidate) , createProducts)
paymentRoutes.put('/update-product' , updateProducts)
paymentRoutes.delete('/delete-product' , deleteProduct)


module.exports = paymentRoutes;