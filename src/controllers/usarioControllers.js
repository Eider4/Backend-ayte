const {EnviarEmailVerificacion} = require("../Funciones/EnviarEmail/EnviarEmailVerificacion");
const {enviarCodigoAccesoAdministrador} = require("../Funciones/EnviarEmail/EnviarEmailVerificacionAdministrador");
const Usuario = require("../models/Usuarios");

const enviarCorreoVerificacion = (req, res) => {
  try {
    const { correo, codigo, nombre } = req.body;
    console.log(req.body);
    EnviarEmailVerificacion(correo, codigo, nombre);

  } catch (error) {
    console.log("error al enviar correo de verificacion");
    res.status(500).json({ error: error.message });
  }
};
const EnviarCodigoAccesoAdministrador = (req, res) => {
  try {
    const { codigo } = req.body;
    console.log(req.body);
    enviarCodigoAccesoAdministrador(codigo);

  } catch (error) {
    console.log("error al enviar correo de verificacion de administracion");
    res.status(500).json({ error: error.message });
  }
};

const UsuariosGet = async (req, res) => {
  try {
    const users = await Usuario.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//http://localhost:1234/usuarios/16
const UsuariosGetByUid = async (req, res) => {
  const { uid_usuario } = req.params;
  try {
    const usuario = await Usuario.findOne({
      where: { uid_usuario },
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; //http://localhost:1234/usuarios/16

const UsuariosPost = async (req, res) => {
  const {
    uid_usuario,
    nombre,
    correo,
    telefono,
    direccion,
    inf_adicional_direccion,
    estado_de_cuenta,
    tipo_de_cuenta,
    alias,
  } = req.body;
  try {
    const NewUsuario = await Usuario.create({
      uid_usuario,
      nombre,
      correo,
      telefono,
      direccion,
      inf_adicional_direccion,
      estado_de_cuenta,
      tipo_de_cuenta,
      alias,
    });
    res.status(201).json(NewUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; // http://localhost:1234/usuarios
const UsuariosPut = async (req, res) => {
  const { uid_usuario } = req.params;
  const {
    nombre,
    telefono,
    direccion,
    inf_adicional_direccion,
    estado_de_cuenta,
    alias,
  } = req.body;
  try {
    const usuario = await Usuario.findByPk(uid_usuario);
    if (usuario) {
      usuario.nombre = nombre;
      usuario.telefono = telefono;
      usuario.direccion = direccion;
      usuario.inf_adicional_direccion = inf_adicional_direccion;
      usuario.estado_de_cuenta = estado_de_cuenta;
      usuario.alias = alias;
      await usuario.save();
      res.json(usuario);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; // http://localhost:1234/usuarios/1
const UsuarioDelete = async (req, res) => {
  const { uid_usuario } = req.params;
  try {
    const usuario = await Usuario.findByPk(uid_usuario);
    if (usuario) {
      await usuario.destroy();
      res.json({ message: "usuario eliminado" });
    } else {
      res.status(404).json({ error: "usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; // http://localhost:1234/usuarios/4

module.exports = {
  UsuariosGet,
  UsuariosPost,
  UsuariosPut,
  UsuarioDelete,
  UsuariosGetByUid,
  enviarCorreoVerificacion,
  EnviarCodigoAccesoAdministrador,
};
