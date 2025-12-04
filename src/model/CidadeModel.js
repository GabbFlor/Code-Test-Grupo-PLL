const db = require("../config/db");

class CidadesModel {
    postarCidade(nome, estado_uf) {
        return db.query("INSERT INTO cidades (nome, estados_uf) VALUES ($1, $2)", [nome, estado_uf])
    }

    listar(busca, limit, offset) {
        // se não tiver o query param de pesquisa, ele coloca só o %, nesse caso, não filtra nada
        const pesquisa = busca ? `%${busca}%` : `%`;

        return db.query("SELECT * FROM cidades WHERE nome ILIKE $1 OR estados_uf ILIKE $1 LIMIT $2 OFFSET $3", [pesquisa, limit, offset]);
    }

    pegarUm(id) {
        return db.query("SELECT * FROM cidades WHERE id = $1", [id]);
    }

    deletarUm(id) {
        return db.query("DELETE FROM cidades WHERE id = $1", [id]);
    }

    editarCidade(id, nome, estado_uf) {
        return db.query("UPDATE cidades SET nome = $1, estados_uf = $2 WHERE id = $3", [nome, estado_uf, id]);
    }
}

module.exports = new CidadesModel();