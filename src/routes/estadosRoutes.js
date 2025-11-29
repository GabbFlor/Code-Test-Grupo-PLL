const express = require("express");
const router = express.Router();

const EstadoController = require("../controllers/EstadoController");

router.get('/', EstadoController.ListarTodas)
router.get('/:id', EstadoController.ProcurarUm)

module.exports = router;