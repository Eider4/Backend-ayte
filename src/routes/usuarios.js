const express = require("express");
const {
  UsuariosGet,
  UsuariosPost,
  UsuariosPut,
  UsuarioDelete,
} = require("../controllers/usarioControllers");

const router = express.Router();

router.get("/", UsuariosGet);
router.post("/", UsuariosPost);
router.put("/:id_usuario", UsuariosPut);
router.delete("/:id_usuario", UsuarioDelete);

module.exports = router;
