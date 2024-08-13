const express = require("express");
const { ordenGet, ordenPost, ordenPut } = require("../controllers/OrdenControllers");

const router = express.Router();

router.get("/", ordenGet);
router.post("/", ordenPost);
router.put("/:id_orden", ordenPut);

module.exports = router;
