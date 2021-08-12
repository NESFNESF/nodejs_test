
const cat = require("../controllers/categoryController.js");

const express = require("express");

const router = express.Router();


router.get("/",cat.listCategory);

router.get("/:id",cat.oneCategory);

router.post("/", cat.createCategory);

router.put("/:id",cat.updateCategorie);

router.delete("/:id",cat.deleteCategory);

module.exports = router;
