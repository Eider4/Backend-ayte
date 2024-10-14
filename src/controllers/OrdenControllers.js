import { GmailOrdenAceptada } from "../Funciones/EnviarEmail/GmailOrdenAceptada";
import { GmailOrdenPendiente } from "../Funciones/EnviarEmail/GmailOrdenPendiente";
import { GmailOrdenRechazada } from "../Funciones/EnviarEmail/GmailOrdenRechazada";

import Orden from "../models/Ordenes";

export const ordenGet = async (req, res) => {
  try {
    const orden = await Orden.findAll();
    res.json(orden);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const ordenGetById = async (req, res) => {
  const { uuid_orden } = req.params;
  try {
    const orden = await Orden.findByPk(uuid_orden);
    res.json(orden);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const ordenGetByIdUsuario = async (req, res) => {
  const { uid_usuario } = req.params;
  try {
    const orden = await Orden.findAll({
      where: { uid_usuario },
    });
    if (!orden) {
      return res.status(404).json({ message: "Orden no encontrado" });
    }
    res.json(orden);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const ordenGetByIdUsuarioAndEstado = async (req, res) => {
  const { uid_usuario, estado_de_orden } = req.params;
  try {
    const orden = await Orden.findAll({
      where: {
        uid_usuario,
        estado_de_orden,
      },
    });
    if (orden.length === 0) {
      return res.status(404).json({ message: "Orden no encontrado" });
    }
    res.json(orden);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const ordenGetByIdUsuarioAndEstad = async (req, res) => {
  const { uid_usuario, estado_de_orden } = req.params;

  try {
    const orden = await Orden.findAll({
      where: {
        uid_usuario,
        estado_de_orden,
      },
    });

    if (orden.length === 0) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }

    res.json(orden);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// http://localhost:1234/ordenes/id_u/46
export const ordenGetByEstado = async (req, res) => {
  const { estado_de_orden } = req.params;
  try {
    const orden = await Orden.findAll({
      where: { estado_de_orden },
      order: [["fecha_de_solicitud", "DESC"]],
    });
    if (!orden) {
      return res.status(404).json({ message: "Orden no encontrado" });
    }
    res.json(orden);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const ordenPost = async (req, res) => {
  const {
    uuid_orden,
    estado_de_orden,
    id_productos,
    uid_usuario,
    direccion_id_usuario,
  } = req.body;

  try {
    const newOrden = await Orden.create({
      uuid_orden,
      estado_de_orden,
      id_productos,
      uid_usuario,
      direccion_id_usuario,
    });

    await GmailOrdenPendiente(req.body, newOrden).catch(console.error);
    await GmailOrdenPendiente(req.body, newOrden, "administrador").catch(
      console.error
    );
    res
      .status(201)
      .json({ message: "Orden creada y correo enviado.", orden: newOrden });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// 0 - Pendiente: El pedido ha sido creado, pero no ha sido procesado.
// 1 - acepatado: El pedido está siendo procesado o preparado.
// 2 - Rechazado: El pedido ha sido Rechazado por el vendedor.

export const ordenPut = async (req, res) => {
  const { uuid_orden } = req.params;
  const { estado_de_orden, id_productos, direccion_id_usuario } = req.body;
  console.log(req.body);
  try {
    const orden = await Orden.findByPk(uuid_orden);
    console.log(orden.dataValues.uid_usuario);

    if (estado_de_orden == 1) {
      GmailOrdenAceptada(req.body, orden.dataValues);
      console.log("Aceptada");
    }
    if (estado_de_orden == 2) {
      GmailOrdenRechazada(req.body, orden.dataValues);
      console.log("Eliminado");
    }
    if (orden) {
      orden.estado_de_orden = estado_de_orden;
      orden.id_productos = id_productos;
      orden.direccion_id_usuario = direccion_id_usuario;
      await orden.save();
      res.json(orden);
    } else {
      res.status(400).json({ error: "Orden no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const ordenDelete = async (req, res) => {
  const { uuid_orden } = req.params;
  try {
    const orden = await Orden.findByPk(uuid_orden);
    if (orden) {
      await orden.destroy();
      console.log("orden eliminada");

      res.json({ message: "orden eliminada" });
    } else {
      res.status(404).json({ error: "orden no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// module.exports = {
//   ordenGet,
//   ordenPost,
//   ordenPut,
//   ordenGetById,
//   ordenGetByIdUsuario,
//   ordenGetByEstado,
//   ordenDelete,
//   ordenGetByIdUsuarioAndEstado,
// };
