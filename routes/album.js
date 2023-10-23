//Importar dependencias
const express = require("express");

// Cargar Router
const router = express.Router();
// IMportar controlador
const AlbumController = require("../controllers/album");
//definir rutas
router.get("/prueba", AlbumController.prueba);
//Exportar routes
module.exports = router;
