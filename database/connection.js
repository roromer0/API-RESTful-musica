//Importar mongoose
const mongoose = require("mongoose");
// mongoose.set("strictQuery,true");
//Hacer metodo de conexion
const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/app_musica");

    console.log("Conectado correctamente a la bbdd: app_musica");
  } catch (error) {
    throw new Error("No se ha establecido la conexion a la bbdd");
  }
};
//Exportar conexion
module.exports = connection;
