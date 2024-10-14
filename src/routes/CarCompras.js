import express from "express";
import {
  CarritoComprasGet,
  CarritoComprasPost,
  CarritoComprasPut,
  CarritoComprasDelete,
  CarritoComprasGetById,
  CarritoComprasGetUsuario,
} from "../controllers/CarComprasControllers";

const router = express.Router();

router.get("/", CarritoComprasGet);
router.post("/", CarritoComprasPost);
router.get("/:uuid_carritocompras", CarritoComprasGetById);
router.put("/:uuid_carritocompras", CarritoComprasPut);
router.delete("/:uuid_carritocompras", CarritoComprasDelete);
router.get("/id_u/:uid_usuario", CarritoComprasGetUsuario);

export default router;
