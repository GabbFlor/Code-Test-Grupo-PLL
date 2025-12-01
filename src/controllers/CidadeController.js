const HttpException = require("../exceptions/HttpException");
const CidadeModel = require("../model/CidadeModel");

class CidadeController {
    async PostarCidade(req, res) {
        try {
            const body_nome = req.body.nome;
            const body_estado_uf = req.body.estado_uf;

            if (!body_nome || !body_estado_uf || typeof body_nome != "string" || typeof body_estado_uf != "string") {
                throw new HttpException("O formato do body enviado está incorreto, certifique-se que contém o nome da cidade e o uf e de que ambos sejam string.", 422);
            }

            await CidadeModel.postarCidade(body_nome, body_estado_uf);

            return res.status(201).json({ message: "Cidade adicionada com sucesso!" });
        } catch(error) {
            if (error instanceof HttpException) {
                return res.status(error.status).json({ error: error.message });
            }

            // erros retornados quando o usuario preenche algum valor errado (da pra usar para validar forms)
            if (error.code === '23503') {
                return res.status(400).json({ error: "Esse UF não existe na tabela estados." })
            } else if (error.code === '22001') {
                return res.status(400).json({ error: "Algum dos valores excedem o limite de caracteres." })
            }

            console.error(error);
            return res.status(500).json({ error: "Erro interno no servidor." });
        }
    }
}

module.exports = new CidadeController();