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
router.put("/id/:id_usuario", UsuariosPut);
router.delete("/id/:id_usuario", UsuarioDelete);
router.get("/uid/:uid_usuario", UsuariosGetByUid);
router.get("/id/:id_usuario", UsuariosGetById);


module.exports = router;
