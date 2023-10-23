//Importar dependencias
const express = require("express");

// Cargar Router
const router = express.Router();
// IMportar controlador
const ArtistController = require("../controllers/artist");
//definir rutas
router.get("/prueba", ArtistController.prueba);
//Exportar routes
module.exports = router;
