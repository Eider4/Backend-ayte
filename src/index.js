const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const routerUsuarios = require("./routes/usuarios");
const { Conexion_BD } = require("./config/database");
const routerCarCompras = require("./routes/CarCompras");
const routerOrden = require("./routes/Orden");
const routerVentas = require("./routes/Ventas");
const { loggerMidelware } = require("./middelwares/loggerMiddelware");
const port = 1234;

Conexion_BD();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use(loggerMidelware);

app.use("/usuarios", routerUsuarios);
app.use("/car-compras", routerCarCompras);
app.use("/ordenes", routerOrden);
app.use("/ventas", routerVentas);

app.listen(port, () => {
  console.log(`ejecutando en http://localhost:${port}`);
});



// Access to fetch at 'http://localhost:1234/ordenes' from origin 'http://localhost:4759' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.