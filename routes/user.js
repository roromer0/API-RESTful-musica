//Importar dependencias
const express = require("express");

// Cargar Router
const router = express.Router();
// IMportar controlador
const UserController = require("../controllers/user.js");
//definir rutas
router.get("/prueba", UserController.prueba);
router.post("/register", UserController.register);

//Exportar routes
module.exports = router;
