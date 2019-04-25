const express = require("express");
const router = express.Router();

const ProductController = require("../../controller/productController");
const productController = new ProductController();

//first actionable route

router.get("/", function (req, res) { // req == request res == response
    productController.findAll(res);
});

router.get("/:id", function (req, res) { // req == request res == response
    productController.findById(req, res);
});


module.exports = router;