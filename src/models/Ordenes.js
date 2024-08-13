const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Orden = sequelize.define(
  "orden",
  {
    id_orden: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    estado_de_orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_de_solicitud:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    id_productos: {
      type: DataTypes.JSONB
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: "usuarios",
        key: "id_usuario",
      },
      onDelete: "CASCADE",
    },
  },
  {
    timestamps: false,
    tableName: "ordenes",
  }
);

module.exports = Orden;
