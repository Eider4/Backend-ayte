import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const Orden = sequelize.define(
  "orden",
  {
    uuid_orden: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    estado_de_orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_de_solicitud: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    id_productos: {
      allowNull: false,
      type: DataTypes.JSONB,
    },
    direccion_id_usuario: {
      type: DataTypes.STRING(255),
      allowNull: true, // Cambié a true ya que estaba comentado
    },
    uid_usuario: {
      allowNull: false,
      type: DataTypes.STRING(255), // Cambiado a STRING para coincidir con la tabla `usuarios`
      references: {
        model: "usuarios",
        key: "uid_usuario",
      },
      onDelete: "CASCADE",
    },
  },
  {
    timestamps: false,
    tableName: "ordenes",
  }
);

export default Orden;
