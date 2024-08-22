const express = require("express");
const {
  UsuariosGet,
  UsuariosPost,
  UsuariosPut,
  UsuarioDelete,
  UsuariosGetById,
  UsuariosGetByUid,
} = require("../controllers/usarioControllers");

const router = express.Router();

router.get("/", UsuariosGet);
router.post("/", UsuariosPost);
router.put("/id/:uid_usuario", UsuariosPut);
router.delete("/id/:uid_usuario", UsuarioDelete);
router.get("/uid/:uid_usuario", UsuariosGetByUid);

module.exports = router;
