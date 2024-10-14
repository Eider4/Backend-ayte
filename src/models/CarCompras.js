import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { defaults } from "json-server";

const CarritoCompras = sequelize.define(
  "CarCompras",
  {
    uuid_carritocompras: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    id_productos: {
      type: DataTypes.JSONB,
    },
    uid_usuario: {
      type: DataTypes.STRING(255), // Asegúrate de que sea STRING como en la tabla `usuarios`
      allowNull: false,
      unique: true,
      references: {
        model: "usuarios", // Nombre de la tabla en la base de datos
        key: "uid_usuario",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "carritocompras",
    timestamps: false,
  }
);

export default CarritoCompras;
