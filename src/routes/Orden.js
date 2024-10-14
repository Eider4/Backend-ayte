import express from "express";
import {
  ordenGet,
  ordenPut,
  ordenPost,
  ordenDelete,
  ordenGetById,
  ordenGetByEstado,
  ordenGetByIdUsuario,
  ordenGetByIdUsuarioAndEstado,
} from "../controllers/OrdenControllers";

const router = express.Router();

router.get("/", ordenGet);
router.post("/", ordenPost);
router.put("/:uuid_orden", ordenPut);
router.get("/:uuid_orden", ordenGetById);
router.delete("/:uuid_orden", ordenDelete);
router.get("/id_u/:uid_usuario", ordenGetByIdUsuario);
router.get("/estado_de_orden/:estado_de_orden", ordenGetByEstado);
router.get(
  "/estado_de_orden/:estado_de_orden/uid_usuario/:uid_usuario",
  ordenGetByIdUsuarioAndEstado
);

export default router;
