const express = require('express')
const profileRoute = express.Router();
const verifyAccessToken = require("../helpers/verifyAccessToken");
const {updateProfile} = require('../controller/profileController')

profileRoute.put("/update", verifyAccessToken, updateProfile);


module.exports = profileRoute;
