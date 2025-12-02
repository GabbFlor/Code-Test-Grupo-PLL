const HttpException = require("../exceptions/HttpException");
const CidadeModel = require("../model/CidadeModel");

class CidadeController {
    async PostarCidade(req, res) {
        const body_nome = req.body.nome;
        const body_estado_uf = req.body.estado_uf;

        try {
            if (!body_nome || !body_estado_uf || typeof body_nome != "string" || typeof body_estado_uf != "string") {
                throw new HttpException("O formato do body está incorreto! Verifique se contém as chaves 'nome' e 'estado_uf', e se ambas são do tipo 'string'", 422);
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

    async ListarTodas(req, res) {
        try {
            const result = await CidadeModel.listar();
            const cidades = result.rows;

            if (!cidades || cidades.length == 0) {
                return res.status(204).send();
            }

            return res.status(200).json({ cidades: cidades });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro interno no servidor." });
        }
    }

    async ProcurarUm(req, res) {
        const id = req.params.id;

        try {
            if (isNaN(id)) {
                throw new HttpException("O id deve ser numerico", 400);
            }

            const result = await CidadeModel.pegarUm(id);
            const cidade = result.rows[0];

            if (!cidade || cidade.length == 0) {
                throw new HttpException("Nenhuma cidade encontrada com esse id", 404);
            }

            return res.status(200).json({ cidade });
        } catch (error) {
            if (error instanceof HttpException) {
                return res.status(error.status).json({ error: error.message });
            }

            console.error(error);
            return res.status(500).json({ error: "Erro interno no servidor." })
        }
    }

    async deletarUm(req, res) {
        const id = req.params.id;

        try {
            if (isNaN(id)) {
                throw new HttpException("O id deve ser numerico", 400);
            }

            // verifica se a cidade existe antes de tentar deletar
            const result = await CidadeModel.pegarUm(id);
            const cidade = result.rows[0];

            if (!cidade || cidade.length == 0) {
                throw new HttpException("Cidade não encontrada", 404);
            }

            await CidadeModel.deletarUm(id);

            return res.status(200).json({ mensagem: "Cidade deletada com sucesso." })
        } catch (error) {
            if (error instanceof HttpException) {
                return res.status(error.status).json({ error: error.message });
            }

            console.error(error);
            return res.status(500).json({ error: "Erro interno no servidor." })
        }
    }

    async editarCidade(req, res) {
        try {
            const id = req.params.id;
            const body_nome = req.body.nome;
            const body_estado_uf = req.body.estado_uf;

            if (isNaN(id)) {
                throw new HttpException("O id deve ser numerico", 400);
            }

            if (!body_nome || !body_estado_uf || typeof body_nome != "string" || typeof body_estado_uf != "string") {
                throw new HttpException("O formato do body está incorreto! Verifique se contém as chaves 'nome' e 'estado_uf', e se ambas são do tipo 'string'", 422);
            }

            const result = await CidadeModel.pegarUm(id);
            const cidade = result.rows[0];

            if (!cidade || cidade.length == 0) {
                throw new HttpException("Cidade não encontrada", 404);
            }

            await CidadeModel.editarCidade(id, body_nome, body_estado_uf);

            return res.status(200).json({ mensagem: "Cidade atualizada com sucesso!" });
        } catch (error) {
            if (error instanceof HttpException) {
                return res.status(error.status).json({ error: error.message });
            }

            console.error(error);
            return res.status(500).json({ error: "Erro interno no servidor." });
        }
    }
}

module.exports = new CidadeController();