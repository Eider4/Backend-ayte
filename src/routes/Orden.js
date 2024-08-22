const express = require("express");
const {
  ordenGet,
  ordenPut,
  ordenPost,
  ordenDelete,
  ordenGetById,
  ordenGetByEstado,
  ordenGetByIdUsuario,
  ordenGetByIdUsuarioAndEstado,
} = require("../controllers/OrdenControllers");

const router = express.Router();

router.get("/", ordenGet);
router.post("/", ordenPost);
router.put("/:uuid_orden", ordenPut);
router.get("/:uuid_orden", ordenGetById);
router.delete("/:uuid_orden", ordenDelete);
router.get("/id_u/:uid_usuario", ordenGetByIdUsuario);
router.get("/estado_de_orden/:estado_de_orden", ordenGetByEstado);
router.get("/estado_de_orden/:estado_de_orden/uid_usuario/:uid_usuario", ordenGetByIdUsuarioAndEstado);

module.exports = router;
