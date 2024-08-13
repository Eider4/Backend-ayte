const CarritoCompras = require("../models/CarCompras");

const CarritoComprasGet = async (req, res) => {
  try {
    const Carrito = await CarritoCompras.findAll();
    res.json(Carrito);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const CarritoComprasPost = async (req, res) => {
  const { id_productos, id_usuario } = req.body;
  try {
    const newCarrito = await CarritoCompras.create({
      id_productos,
      id_usuario,
    });
    res.status(201).json(newCarrito);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const CarritoComprasPut = async (req, res) => {
  const { id_carrito } = req.params;
  const { id_productos, id_usuarios } = req.body;
  try {
    const carrito = await CarritoCompras.findByPk(id_carrito);
    if (carrito) {
      carrito.id_productos = id_productos;
      carrito.id_usuarios = id_usuarios;
      await carrito.save();
      res.json(carrito);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const CarritoComprasDelete = async (req, res) => {
  const { id_carrito } = req.params;
  try {
    const Carrito = await CarritoCompras.findByPk(id_carrito);
    if (Carrito) {
      await Carrito.destroy();
      res.json({ message: "Carrito Eliminado" });
    } else {
      res.status(404).json({ error: "Carrito no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  CarritoComprasGet,
  CarritoComprasPost,
  CarritoComprasPut,
  CarritoComprasDelete,
};
