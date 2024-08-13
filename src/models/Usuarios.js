const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");
const Usuario = sequelize.define(
  "usuario",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uid_usuario: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
      defaultValue: "Activo", // Valor por defecto
    },
    alias: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    fecha_de_inicio: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Valor por defecto
    },
  },
  {
    tableName: "usuarios", // Nombre de la tabla en la base de datos
    timestamps: false, // Si no quieres que Sequelize maneje los campos de timestamps automáticamente (createdAt y updatedAt)
  }
);

module.exports = Usuario;
