const prueba = (req, res) => {
  return res.status(200).send({
    status: "succes",
    message: "Mensaj enviado desde :controllers/artist.js",
  });
};

//exportar acciones
module.exports = {
  prueba,
};
