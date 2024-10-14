import { nodemailer } from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "ProyectoAyteEider@outlook.com",
    pass: "12345678ProyectoEider",
  },
});

export default transporter;
