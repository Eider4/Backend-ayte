const express = require("express");
const {
  CarritoComprasGet,
  CarritoComprasPost,
  CarritoComprasPut,
  CarritoComprasDelete,
  CarritoComprasGetById,
  CarritoComprasGetUsuario,
} = require("../controllers/CarComprasControllers");

const router = express.Router();

router.get("/", CarritoComprasGet);
router.post("/", CarritoComprasPost);
router.put("/:id_carrito", CarritoComprasPut);
router.delete("/:id_carrito", CarritoComprasDelete);
router.get("/:id_carrito", CarritoComprasGetById);
router.get("/id_u/:id_usuario", CarritoComprasGetUsuario);

module.exports = router;
