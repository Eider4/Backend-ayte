const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Usuario = sequelize.define(
  "usuario",
  {
    uid_usuario: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    direccion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    inf_adicional_direccion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    estado_de_cuenta: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    tipo_de_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    alias: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    fecha_de_inicio: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = Usuario;
