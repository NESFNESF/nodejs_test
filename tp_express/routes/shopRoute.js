const shop = require("../controllers/shopController.js");



const express = require("express");

const router = express.Router();

router.get("/",shop.listshop);

router.get("/:id",shop.oneshop);

router.get("/shop_by_category", shop.shop_by_category);

router.post("/", shop.createshop);

router.put("/:id",shop.updateshop);

router.delete("/:id",shop.deleteshop);

module.exports = router;
