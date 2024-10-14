import Products from "../../Productos.json";

export const GetProductos = async (req, res) => {
  try {
    console.log("antes");
    res.json(Products);
  } catch (error) {
    return [];
  }
};

export const GetProductosById = async (req, res) => {
  try {
    const { id } = req.params;
    const ProductFind = Products.find((product) => product.id == id);
    res.json(ProductFind);
  } catch (error) {
    return {};
  }
};

// module.exports = { GetProductos, GetProductosById };
