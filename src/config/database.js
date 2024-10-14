// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("Proyecto_ayte2", "eider", "12345678", {
//   host: "localhost",
//   dialect: "postgres",
//   logging: false,
// });
// const Conexion_BD = () => {
//   sequelize
//     .sync()
//     .then(() => console.log("conectando a la base de datos y sincronizando"))
//     .catch((err) => console.log("error al conectar a la base de datos: ", err));
// };

// module.exports= {Conexion_BD, sequelize}
// const { Sequelize } = require("sequelize");
import { Sequelize } from "sequelize";

const proyectoAyte_URL =
  "postgres://default:0HLr6pkGyCge@ep-quiet-hat-a4lxut3m-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require";

export const sequelize = new Sequelize(proyectoAyte_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export const Conexion_BD = () => {
  sequelize
    .sync()
    .then(() => console.log("Conectando a la base de datos y sincronizando"))
    .catch((err) => console.log("Error al conectar a la base de datos: ", err));
};

// export { Conexion_BD, sequelize };
