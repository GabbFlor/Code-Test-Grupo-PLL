const express = require("express");
const router = express.Router();

const CidadeController = require("../controllers/CidadeController");

router.post('/', CidadeController.PostarCidade);
router.get('/', CidadeController.ListarTodas);
router.get('/:id', CidadeController.ProcurarUm);
router.delete('/:id', CidadeController.deletarUm);
router.put('/:id', CidadeController.editarCidade);

module.exports = router;