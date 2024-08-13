const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const CarritoCompras = sequelize.define(
  "CarCompras",
  {
    id_carrito: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_productos: {
      type: DataTypes.JSONB,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios", // Nombre de la tabla en la base de datos
        key: "id_usuario",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "carritocompras",
    timestamps: false,
  }
);

module.exports = CarritoCompras;
