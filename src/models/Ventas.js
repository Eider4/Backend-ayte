const { DataTypes, DECIMAL } = require("sequelize");
const { sequelize } = require("../config/database");

const Venta = sequelize.define(
  "venta",
  {
    id_venta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_orden: {
      type: DataTypes.INTEGER,
      references: {
        model: "ordenes",
        key: "id_orden",
      },
      onDelete: "CASCADE",
    },
    fecha_venta: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    preciototal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
  },
  {
    timestamps: false,
    tableName: "ventas",
  }
);

module.exports = Venta;
