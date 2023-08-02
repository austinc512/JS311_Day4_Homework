const express = require("express");
const router = express.Router();

const productsControllers = require("../controllers/productsControllers");

router.get("/products/", productsControllers.getProducts);

router.get("/products/:id", productsControllers.getProductById);

router.post("/products/", productsControllers.createProduct);

module.exports = router;
