const express = require("express");
const { GetProductos, GetProductosById } = require("../controllers/ProductsControllers");

const router = express.Router();

router.get("/", GetProductos);
router.get("/:id", GetProductosById);

module.exports = router;
