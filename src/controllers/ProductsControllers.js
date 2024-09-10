const Products = require("../../Productos.json");

const GetProductos = async (req, res) => {
  try {
    console.log("antes");
    res.json(Products);
  } catch (error) {
    return [];
  }
};

const GetProductosById = async (req, res) => {
  try {
    const { id } = req.params;
    const ProductFind = Products.find((product) => product.id == id);
    res.json(ProductFind);
  } catch (error) {
    return {};
  }
};

module.exports = { GetProductos, GetProductosById };
