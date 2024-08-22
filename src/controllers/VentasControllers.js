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
  const { uuid_venta } = req.params;
  try {
    const venta = await Venta.findByPk(uuid_venta);
    res.json(venta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const VentasPost = async (req, res) => {
  const { uuid_orden, preciototal, uuid_venta } = req.body;
  try {
    const newVenta = await Venta.create({
      uuid_orden,
      preciototal,
      uuid_venta,
    });
    res.status(201).json(newVenta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { VentasGet, VentasPost, VentasGetById };
