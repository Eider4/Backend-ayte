import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { Conexion_BD } from "./src/config/database.js";
import routerUsuarios from "./src/routes/usuarios.js";
import routerCarCompras from "./src/routes/CarCompras.js";
import routerOrden from "./src/routes/Orden.js";
import routerVentas from "./src/routes/Ventas.js";
import routerProducts from "./src/routes/Products.js";
const port = process.env.PORT || 1234;

Conexion_BD();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", (_, res) => {
  res.send(" Hello world ");
});
app.use("/usuarios", routerUsuarios);
app.use("/car-compras", routerCarCompras);
app.use("/ordenes", routerOrden);
app.use("/ventas", routerVentas);
app.use("/productos", routerProducts);

app.listen(port, () => {
  console.log(`ejecutando en http://localhost:${port}`);
});

// Access to fetch at 'http://localhost:1234/ordenes' from origin 'http://localhost:4759' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
