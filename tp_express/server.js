var express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const category = require("./models/categoryModel.js");
const produit = require("./models/productModel.js");
const shop = require("./models/shopModel.js");
const app = express();

const options = require("./config/swagger-config.js");

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use((req , res , next )=>{
  req.context = {
    category,
    produit,
    shop
  };
  next();
});

app.use("/category", require("./routes/categoryRoute.js"));

app.use("/produit", require("./routes/productRoute.js"));

app.use("/shop", require("./routes/shopRoute.js"));
//app.use("/books", require("./routes/books"));

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT);



