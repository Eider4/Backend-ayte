const Usuario = require("../models/Usuarios");

const UsuariosGet = async (req, res) => {
  try {
    const users = await Usuario.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};// http://localhost:1234/usuarios

const UsuariosPost = async (req, res) => {
  const {
    uid_usuario,
    nombre,
    correo,
    telefono,
    direccion,
    inf_adicional_direccion,
    estado_de_cuenta,
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
      alias,
    });
    res.status(201).json(NewUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};// http://localhost:1234/usuarios

const UsuariosPut = async (req, res) => {
  const { id_usuario } = req.params;
  const {
    uid_usuario,
    nombre,
    correo,
    telefono,
    direccion,
    inf_adicional_direccion,
    estado_de_cuenta,
    alias,
  } = req.body;
  try {
    const usuario = await Usuario.findByPk(id_usuario); // Cambiado de findAll() a findByPk()
    if (usuario) {
      usuario.uid_usuario = uid_usuario;
      usuario.nombre = nombre;
      usuario.correo = correo;
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
};// http://localhost:1234/usuarios/1

const UsuarioDelete = async (req, res) => {
  const { id_usuario } = req.params;
  try {
    const usuario = await Usuario.findByPk(id_usuario);
    if (usuario) {
      await usuario.destroy();
      res.json({ message: "usuario eliminado" });
    } else {
      res.status(404).json({ error: "usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};// http://localhost:1234/usuarios/4

module.exports = { UsuariosGet, UsuariosPost, UsuariosPut, UsuarioDelete };
