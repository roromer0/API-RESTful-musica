//Importar conexion a bbdd
const connection = require("./database/connection");
//Importar dependencias
const express = require("express");
const cors = require("cors");
//Mensaje de bienvenida
console.log("API REST con Node para la app de Música arrancada");
//Ejecutar conexion a bbdd
connection();
//Crear nodeServer
const app = express();
const port = 3911;
//Configurar cors
app.use(cors());
//convertir datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Cargar configuracion de rutas
const UserRoutes = require("./routes/user.js");
const ArtistRoutes = require("./routes/artist.js");
const SongRoutes = require("./routes/song.js");
const AlbumRoutes = require("./routes/album.js");

app.use("/api/user", UserRoutes);
app.use("/api/artist", ArtistRoutes);
app.use("/api/album", AlbumRoutes);
app.use("/api/song", SongRoutes);
// Ruta de prueba
app.get("/ruta-probando", (req, res) => {
  return res.status(200).send({
    id: 12,
    nombre: "Enrique",
    apellido: "El mejor jeje",
  });
});
//Poner el servidor a esucchar peticiones http
app.listen(port, () => {
  console.log("Servidor de node está escuchando en el puerto: ", port);
});
