const express = require("express");
const {
  UsuariosGet,
  UsuariosPost,
  UsuariosPut,
  UsuarioDelete,
  UsuariosGetById,
  UsuariosGetByUid,
  enviarCorreoVerificacion,
  EnviarCodigoAccesoAdministrador,
} = require("../controllers/usarioControllers");

const router = express.Router();

router.get("/", UsuariosGet);
router.post("/enviarCorreoVerificacion", enviarCorreoVerificacion);
router.post("/EnviarCodigoAccesoAdministrador", EnviarCodigoAccesoAdministrador);
router.post("/", UsuariosPost);
router.put("/id/:uid_usuario", UsuariosPut);
router.delete("/id/:uid_usuario", UsuarioDelete);
router.get("/uid/:uid_usuario", UsuariosGetByUid);

module.exports = router;
