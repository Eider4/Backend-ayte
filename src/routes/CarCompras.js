const express = require("express");
const {
  CarritoComprasGet,
  CarritoComprasPost,
  CarritoComprasPut,
  CarritoComprasDelete,
} = require("../controllers/CarComprasControllers");

const router = express.Router();

router.get("/", CarritoComprasGet);
router.post("/", CarritoComprasPost);
router.put("/:id_carrito", CarritoComprasPut);
router.delete("/:id_carrito", CarritoComprasDelete);

module.exports = router;
