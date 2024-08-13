const Orden = require("../models/Ordenes");

const ordenGet = async (req, res) => {
  try {
    const orden = await Orden.findAll();
    res.json(orden);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const ordenPost = async (req, res) => {
  const { estado_de_orden, id_productos, id_usuario } = req.body;
  try {
    const newOrden = await Orden.create({
      estado_de_orden,
      id_productos,
      id_usuario,
    });
    res.status(201).json(newOrden);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const ordenPut = async (req, res) => {
  const { id_orden } = req.params;
  const { estado_de_orden, id_productos } = req.body;
  try {
    const orden = await Orden.findByPk(id_orden);
    if (orden) {
      orden.estado_de_orden = estado_de_orden;
      orden.id_productos = id_productos;
      await orden.save();
      res.json(orden);
    } else {
      res.status(400).json({ error: "Orden no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { ordenGet, ordenPost, ordenPut };
