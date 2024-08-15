const express = require("express");
const { ordenGet, ordenPost, ordenPut, ordenGetById } = require("../controllers/OrdenControllers");

const router = express.Router();

router.get("/", ordenGet);
router.post("/", ordenPost);
router.put("/:id_orden", ordenPut);
router.get("/:id_orden", ordenGetById);

module.exports = router;
