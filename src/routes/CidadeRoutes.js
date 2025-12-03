const express = require("express");
const router = express.Router();

const CidadeController = require("../controllers/CidadeController");


router.post('/', CidadeController.PostarCidade);

// esse tem pesquisa, e paginação já no controller e na query
router.get('/', CidadeController.Listar);

router.get('/:id', CidadeController.ProcurarUm);
router.delete('/:id', CidadeController.DeletarUm);
router.put('/:id', CidadeController.EditarCidade);

module.exports = router;