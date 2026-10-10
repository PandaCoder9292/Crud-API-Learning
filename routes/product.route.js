const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//GET data from API
router.get("/", getProducts);
router.get("/:id", getProduct);

// POST or save data in the Database through API
router.post("/", postProduct);

// PUT -> update the existing data
router.put("/:id", updateProduct);

// DELETE -> delete the record from the database
router.delete("/:id", deleteProduct);

module.exports = router;
