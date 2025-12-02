const db = require("../config/db");

class EstadosModel {
    listar(busca, limit, offset) {
        // se não tiver o query param de pesquisa, ele coloca só o %, nesse caso, não filtra nada
        const pesquisa = busca ? `%${busca}%` : `%`;

        return db.query("SELECT * FROM estados WHERE nome ILIKE $1 OR uf ILIKE $1 LIMIT $2 OFFSET $3", [pesquisa, limit, offset]);
    }

    pegarUm(id) {
        // evita sql injection
        return db.query("SELECT * FROM estados WHERE id = $1", [id]);
    }
}

module.exports = new EstadosModel();