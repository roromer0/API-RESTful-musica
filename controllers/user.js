//accion de prueba
const prueba = (req, res) => {
  return res.status(200).send({
    status: "succes",
    message: "Mensaj enviado desde :controllers/user.js",
  });
};
//registro
const register = (req, res) => {
  //recoger datos de la peticion
  let params = req.body;
  console.log(params);
  //Comprobar que me llegan bien
  if (!params.name || !params.nick || !params.email || !params.password) {
    return res.status(400).send({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }
  //Validar los datos

  //Control de usuarios duplicados

  //Cifrar la contraseña

  //Crear pbjeto del usuario

  //Guardas user en bbdd

  //Limpiar el objeto a devolver

  //Devolver un resultado

  return res.status(200).send({
    status: "succes",
    mensaje: "Metodo de registro",
  });
};

//exportar acciones
module.exports = {
  prueba,
  register,
};
