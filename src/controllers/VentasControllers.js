const Venta = require("../models/Ventas");

const VentasGet = async (req, res) => {
  try {
    const venta = await Venta.findAll();
    res.json(venta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const VentasGetById = async (req, res) => {
  const { id_venta } = req.params;
  try {
    const venta = await Venta.findByPk(id_venta);
    res.json(venta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const VentasPost = async (req, res) => {
  const { id_orden, preciototal } = req.body;
  try {
    const newVenta = await Venta.create({ id_orden, preciototal });
    res.status(201).json(newVenta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { VentasGet, VentasPost, VentasGetById };
