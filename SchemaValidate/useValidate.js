const userScheme = {
    email: "required|email",
    contrasena: "required|minLength:8",
    nombre: "required",
  };
  
  const messageUser = {
    "email.required": "El correo es requerido",
    "email.email": "Introduzca un correo valido",
    email: "",
    "contrasena.required": "La contraseña es requerida",
    "contrasena.minLength": "La constraseña debe tener mas de 8 digitos",
    contrasena: "",
    "nombre.required": "El campo confirmar passsword es requerido",
    nombre: "",
  };
  
  module.exports = {
    messageUser,
    userScheme,
  };