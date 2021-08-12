const prod = require("../controllers/productController.js");

const express = require("express");

const router = express.Router();

router.get("/",prod.listProduit);

router.get("/:id",prod.oneProduit);
router.get("/shop/:id",prod.liste_produit_boutique);

router.post("/", prod.createProduit);

router.put("/:id",prod.updateProduit);

router.delete("/:id",prod.deleteProduit);

module.exports = router;
