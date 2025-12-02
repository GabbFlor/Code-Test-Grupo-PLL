const HttpException = require("../exceptions/HttpException")
const EstadosModel = require("../model/EstadoModel");

class EstadoController {
    async Listar(req, res) {
        try {
            const pesquisa = req.query.q;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;

            // qtd de itens no retorno
            const offset = (page - 1) * limit;

            const result = await EstadosModel.listar(pesquisa, limit, offset);
            const estados = result.rows;

            if (!estados || estados.length == 0) {
                return res.status(204).send();
            }

            return res.status(200).json({ estados: estados });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro interno no servidor." })
        }
    }

    async ProcurarUm(req, res) {
        const id = req.params.id;
        try {
            if (isNaN(id)) {
                throw new HttpException("O id deve ser numerico", 400);
            }

            const result = await EstadosModel.pegarUm(id);
            // pega o primeiro objeto na lista para retornar certo no body
            const estado = result.rows[0];

            if (!estado || estado.length === 0) {
                throw new HttpException("Nenhum estado encontrado com esse id", 404)
            }

            return res.status(200).json({ estado });
        } catch (error) {
            if (error instanceof HttpException) {
                return res.status(error.status).json({ error: error.message })
            }

            console.error(error);
            return res.status(500).json({ error: "Erro interno no servidor." })
        }
    }
}

module.exports = new EstadoController();