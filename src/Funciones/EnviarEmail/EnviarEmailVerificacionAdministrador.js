const transporter = require("../../config/nodemailler");

async function enviarCodigoAccesoAdministrador(codigo) {
  try {
    const nombreAdministrador = "Eider";
    const info = await transporter.sendMail({
      from: '"Tu Tienda" <ProyectoAyteEider@outlook.com>',
      to: "eiderurrego4@gmail.com",
      subject: "Código de Acceso Administrativo",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4CAF50;">Código de Acceso Administrativo</h2>
          <p>Hola, ${nombreAdministrador}</p>
          <p>Se ha generado un código para otorgar acceso administrativo a otra persona en el sistema. Por favor, comparte el siguiente código con la persona a quien deseas dar acceso:</p>
          <div style="text-align: center; margin: 20px 0;">
            <span style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; font-size: 18px; border-radius: 5px;">${codigo}</span>
          </div>
          <p>Una vez que la persona ingrese este código, podrá acceder como administrador.</p>
          <p>Si no solicitaste este código, por favor ignora este correo.</p>
          <p>¡Gracias!</p>
          <p>El equipo de Tu Tienda</p>
        </div>
      `,
    });

    console.log("Mensaje enviado: ", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo: ", error);
  }
}

module.exports = { enviarCodigoAccesoAdministrador };
