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
router.get("/:uuid_carritocompras", CarritoComprasGetById);
router.put("/:uuid_carritocompras", CarritoComprasPut);
router.delete("/:uuid_carritocompras", CarritoComprasDelete);
router.get("/id_u/:uid_usuario", CarritoComprasGetUsuario);

module.exports = router;
