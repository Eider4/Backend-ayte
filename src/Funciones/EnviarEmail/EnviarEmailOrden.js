const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: "ProyectoAyteEider@outlook.com",
    pass: "12345678ProyectoEider",
  },
});
async function GmailOrden(order) {
  const { estado_de_orden, id_productos, id_usuario } = order;

  // Convertir la lista de productos en una tabla HTML
  const productRows = id_productos
    .map(
      (p) => `
      <tr>
        <td>${p.id_producto}</td>
        <td>${p.cantidad}</td>
      </tr>
    `
    )
    .join("");

  const info = await transporter.sendMail({
    from: '"Eider Foo Koch 👻" <ProyectoAyteEider@outlook.com>',
    to: "eiderurrego4@gmail.com",
    subject: "Detalles de la Orden",
    html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Detalles de la Orden</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
            }
            th {
              background-color: #f4f4f4;
            }
          </style>
        </head>
        <body>
          <h1>Detalles de la Orden</h1>
          <p><strong>Estado de la Orden:</strong> ${
            estado_de_orden === 0 ? "Pendiente" : "Completada"
          }</p>
          <p><strong>ID de Usuario:</strong> ${id_usuario}</p>
          <h2>Productos:</h2>
          <table>
            <thead>
              <tr>
                <th>ID del Producto</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              ${productRows}
            </tbody>
          </table>
            <a href="http://localhost:4759/aceptar-venta">Venta</a>
        </body>
        </html>
      `, // html body
  });

  console.log("Message sent: ", info.messageId);
}

// Ejemplo de datos de la orden
const order = {
  estado_de_orden: 0,
  id_productos: [
    { id_producto: 4, cantidad: 1 },
    { id_producto: 1, cantidad: 23 },
    { id_producto: 6, cantidad: 9 },
    { id_producto: 3, cantidad: 8 },
    { id_producto: 8, cantidad: 1 },
  ],
  id_usuario: 88,
};

//   GmailOrden(order).catch(console.error);

module.exports = { GmailOrden };
