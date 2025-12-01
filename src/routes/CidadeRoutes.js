const express = require("express");
const router = express.Router();

const CidadeController = require("../controllers/CidadeController");

router.post('/', CidadeController.PostarCidade)

module.exports = router;