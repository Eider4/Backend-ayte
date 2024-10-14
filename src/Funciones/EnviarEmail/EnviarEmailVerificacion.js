import transporter from "../../config/nodemailler";

async function EnviarEmailVerificacion(correo, codigo, nombre) {
  try {
    const info = await transporter.sendMail({
      from: '"Tu Tienda" <ProyectoAyteEider@outlook.com>',
      to: correo,
      subject: "Verificación de tu cuenta",
      html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #4CAF50;">¡Bienvenido a Tu Tienda!</h2>
            <p>Hola, ${nombre}</p>
            <p>Gracias por registrarte en nuestra tienda. Para completar tu registro, por favor verifica tu cuenta usando el siguiente código:</p>
            <div style="text-align: center; margin: 20px 0;">
              <span style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; font-size: 18px; border-radius: 5px">${codigo}</span>
            </div>
            <p>Si no solicitaste esta verificación, simplemente ignora este correo.</p>
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

export { EnviarEmailVerificacion };
