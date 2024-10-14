import express from "express";
import {
  VentasGet,
  VentasPost,
  VentasGetById,
} from "../controllers/VentasControllers";

const router = express.Router();

router.get("/", VentasGet);
router.post("/", VentasPost);
router.get("/:uuid_venta", VentasGetById);

export default router;
