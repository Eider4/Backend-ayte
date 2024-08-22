const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Venta = sequelize.define(
  "venta",
  {
    uuid_venta: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    uuid_orden: {
      unique: true,
      type: DataTypes.STRING(100), // Cambiado a STRING para coincidir con la tabla `ordenes`
      references: {
        model: "ordenes",
        key: "uuid_orden",
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
