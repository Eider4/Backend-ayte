import transporter from "../../config/nodemailler";

export async function GmailOrdenPendiente(orden, newOrden) {
  const { estado_de_orden, ProductosCompletos, Usuario: usuario } = orden;

  const totalPrice = ProductosCompletos.reduce(
    (total, p) => total + p.price * p.cantidad,
    0
  );

  const { fecha_de_solicitud, uuid_orden } = newOrden.dataValues;

  const productList = ProductosCompletos.map(
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
    to: usuario.correo,
    subject: "Orden pendiente",
    html: `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalles de la Orden</title>
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
            color: #2d3748;
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
            background-color: #3182ce;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            text-align: center;
            margin-top: 20px;
            font-weight: bold;
          }
          .a:hover {
            background-color: #2b6cb0;
          }
          .total-price-container {
            text-align: right;
            font-size: 20px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #e2e8f0;
            color: #e53e3e;
            font-weight: bold;
          }
          .order-status {
            color: ${estado_de_orden === 0 ? "#dd6b20" : "#38a169"};
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
          <h1>Detalles de la Orden</h1>
          <p><strong>Estado de la Orden:</strong> <span class="order-status">${
            estado_de_orden === 0 ? "Pendiente" : "Completada"
          }</span></p>
          <h2>Productos:</h2>
          <table>
            ${productList}
          </table>
          <div class="total-price-container">
            Precio Total: $${totalPrice.toFixed(2)}
          </div>
          <div class="user-info">
            <h2>Información del Usuario:</h2>
            <p><strong>ID de Usuario:</strong> ${usuario.uid_usuario}</p>
            <p><strong>Nombre:</strong> ${usuario.nombre}</p>
            <p><strong>Alias:</strong> ${usuario.alias}</p>
            <p><strong>Correo:</strong> ${usuario.correo}</p>
            <p><strong>Teléfono:</strong> ${usuario.telefono}</p>
            <p><strong>Dirección:</strong> ${usuario.direccion} ${
      usuario.inf_adicional_direccion
        ? `(${usuario.inf_adicional_direccion})`
        : ""
    }</p>
          </div>
          <div class="order-info">
            <h2>Información de la Orden:</h2>
            <p><strong>ID de Orden:</strong> ${uuid_orden}</p>
            <p><strong>Fecha de Solicitud:</strong> ${new Date(
              fecha_de_solicitud
            ).toLocaleDateString()}</p>
          </div>
          </div>
          </body>
          </html>
          `,
  });

  console.log("Mensaje enviado: ", info.messageId);
}

// export { GmailOrdenPendiente };
