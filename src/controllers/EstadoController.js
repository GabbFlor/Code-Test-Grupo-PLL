const EstadosModel = require("../model/EstadosModel");

class EstadoController {
    async ListarTodas(req, res) {
        try {
            const result = await EstadosModel.listar();
            const estados = result.rows;

            if (!estados || estados.length == 0) {
                return res.status(204).send();
            }

            return res.status(200).json({ estados: estados });
        } catch (error) {
            if (error.code === "42P01") {
                return res.status(500).json({ error: `A tabela 'estados' não existe no banco de dados.` })
            }

            return res.status(500).json({ error: "Erro interno no servidor." })
        }
    }
}

module.exports = new EstadoController();