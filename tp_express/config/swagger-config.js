
const options = {
  definition: {
    openapi: "3.0.0",
     info: {
      title: "API de Gestion de produits",
      version: "0.1.0",
      description:
        "On dispose des APIs pour la estion des produits d'une boutique ",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Boutique",
        url: "https://boutique.com",
        email: "nganefabrice693@gamil.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./routes/swaggerDoc/category.js","./routes/swaggerDoc/shop.js","./routes/swaggerDoc/produit.js"]
};

module.exports = options;