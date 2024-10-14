import express from "express";
import {
  GetProductos,
  GetProductosById,
} from "../controllers/ProductsControllers";

const router = express.Router();

router.get("/", GetProductos);
router.get("/:id", GetProductosById);

export default router;
