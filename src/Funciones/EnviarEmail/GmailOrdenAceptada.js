const transporter = require("../../config/nodemailler");
const usuario = require("../../models/Usuarios");

async function GmailOrdenAceptada(body, orden) {
  const { Productos } = body;
  const { uid_usuario } = orden;
  const { dataValues: Usuario } = await usuario.findOne({
    where: { uid_usuario },
  });
  console.log("Usuario", Usuario);

  const totalPrice = Productos.reduce(
    (total, p) => total + p.price * p.cantidad,
    0
  );

  const productList = Productos.map(
    (p) => `
      <tr>
        <td style="padding: 8px; vertical-align: top;">
          <img src="${p.image}" alt="${
      p.title
    }" style="width: 80px; max-height:80px; border-radius: 8px;" />
        </td>
        <td style="padding: 8px; vertical-align: top;">
          <strong style="font-size: 16px; color: #1a202c;">${
            p.title
          }</strong><br/>
          <span style="font-size: 14px; color: #718096;">Cantidad: ${
            p.cantidad
          }</span>
        </td>
        <td style="padding: 8px; text-align: right; vertical-align: top;">
          <strong style="font-size: 16px; color: #2d3748;">$${p.price.toFixed(
            2
          )}</strong><br/>
          <span style="font-size: 14px; color: #718096;">Total: $${(
            p.price * p.cantidad
          ).toFixed(2)}</span>
        </td>
      </tr>
    `
  ).join("");

  const info = await transporter.sendMail({
    from: '"Tu Tienda" <ProyectoAyteEider@outlook.com>',
    to: Usuario.correo,
    subject: "Orden Aceptada",
    html: `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Orden Aceptada</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            color: #2d3748;
            background-color: #f7fafc;
          }
          .email-container {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          h1 {
            font-size: 26px;
            color: #38a169;
            text-align: center;
            margin-bottom: 24px;
          }
          h2 {
            font-size: 22px;
            color: #2d3748;
            margin-bottom: 16px;
          }
          p {
            font-size: 16px;
            margin-bottom: 12px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
          }
          img {
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .a {
            display: inline-block;
            font-size: 16px;
            color: #fff;
            background-color: #38a169;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            text-align: center;
            margin-top: 20px;
            font-weight: bold;
          }
          .a:hover {
            background-color: #2f855a;
          }
          .total-price-container {
            text-align: right;
            font-size: 20px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #e2e8f0;
            color: #38a169;
            font-weight: bold;
          }
          .user-info {
            border-top: 2px solid #e2e8f0;
            padding-top: 20px;
            margin-top: 20px;
          }
          .user-info p {
            margin: 6px 0;
            font-size: 16px;
          }
          .order-info {
            border-top: 2px solid #e2e8f0;
            padding-top: 20px;
            margin-top: 20px;
          }
          .order-info p {
            margin: 6px 0;
            font-size: 16px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <h1>¡Tu Orden Ha Sido Aceptada!</h1>
          <p>Nos complace informarte que tu orden ha sido aceptada. Aquí tienes el resumen de los productos:</p>
          <h2>Productos:</h2>
          <table>
            ${productList}
          </table>
          <div class="total-price-container">
            Precio Total: $${totalPrice.toFixed(2)}
          </div>
          <div class="user-info">
            <h2>Información del Usuario:</h2>
            <p><strong>ID de Usuario:</strong> ${Usuario.uid_usuario}</p>
            <p><strong>Nombre:</strong> ${Usuario.nombre}</p>
            <p><strong>Alias:</strong> ${Usuario.alias}</p>
            <p><strong>Correo:</strong> ${Usuario.correo}</p>
            <p><strong>Teléfono:</strong> ${Usuario.telefono}</p>
            <p><strong>Dirección:</strong> ${Usuario.direccion} ${
      Usuario.inf_adicional_direccion
        ? `(${Usuario.inf_adicional_direccion})`
        : ""
    }</p>
          </div>
        </div>
      </body>
      </html>
    `,
  });

  console.log("Mensaje enviado: ", info.messageId);
}

module.exports = { GmailOrdenAceptada };
