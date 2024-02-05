const jwt = require("jsonwebtoken");
const JWT = process.env.JWT_SECRET_KEY;

const validateToken = (req, res, next) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;
  if (!token) return res.status(401).json("Unauthorized user");
  jwt.verify(token, JWT, (err, decoded) => {
    if (err) {
      return res.status(400).json("Token not valid");
    }
   else{
     req.user = decoded;
     next();
   }
  });
};

module.exports = validateToken;
