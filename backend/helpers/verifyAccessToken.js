const jwt = require("jsonwebtoken");
const errorHandler = require("./errorHandler");

const verifyAccessToken = (req, res, next) => {
  const private_key = process.env.JWT_SECRET_KEY;
  if (req.headers.authorization) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    jwt.verify(token, private_key, (err, tokenDetails) => {
      if (err) {
        res.status(400);
        errorHandler(res, err.message);
      } else {
        req.user = tokenDetails;
        next();
      }
    });
  } else {
    res.status(400);
    errorHandler(res, "please provide token");
  }
};

module.exports = verifyAccessToken;
