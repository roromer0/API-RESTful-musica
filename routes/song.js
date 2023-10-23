//Importar dependencias
const express = require("express");

// Cargar Router
const router = express.Router();
// IMportar controlador
const SongController = require("../controllers/song");
//definir rutas
router.get("/prueba", SongController.prueba);
//Exportar routes
module.exports = router;
