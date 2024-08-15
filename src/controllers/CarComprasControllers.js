const CarritoCompras = require("../models/CarCompras");

const CarritoComprasGet = async (req, res) => {
  try {
    const Carrito = await CarritoCompras.findAll();
    res.json(Carrito);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const CarritoComprasGetById = async (req, res) => {
  const { id_carrito } = req.params;
  try {
    const Carrito = await CarritoCompras.findByPk(id_carrito);
    res.json(Carrito);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const CarritoComprasGetUsuario = async (req, res) => {
  const { id_usuario } = req.params;
  try {
    const carrito = await CarritoCompras.findOne({
      where: { id_usuario },
    });

    if (!carrito) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }
    res.json(carrito);
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
  const { id_productos } = req.body;
  try {
    const carrito = await CarritoCompras.findByPk(id_carrito);
    if (carrito) {
      carrito.id_productos = id_productos;
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
  CarritoComprasGetById,CarritoComprasGetUsuario
};
