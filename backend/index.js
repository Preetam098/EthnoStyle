require("dotenv/config");
const express = require("express");
const connectDb = require("./config/dbconnect");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const { swaggerUi, swaggerSpec } = require('./docs/swagger');

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

connectDb();
app.use(cors());
app.use("/", require("./routes"));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
