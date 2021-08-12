const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const options = require("./config/swagger-config.js");

const specs = swaggerJsdoc(options);
const swaggerUI = swaggerUi.serve;
const spec = swaggerUi.setup(specs)

const bodyP= bodyParser.urlencoded({
    extended: true
  })
const bodyJ = bodyParser.json();

module.exports = {
  swaggerUI,
  spec,
  bodyP,
  bodyJ
}

