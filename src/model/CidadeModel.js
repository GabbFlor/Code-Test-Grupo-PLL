const db = require("../config/db");

class CidadesModel {
    postarCidade(nome, estado_uf) {
        return db.query("INSERT INTO cidades (nome, estado_uf) VALUES ($1, $2)", [nome, estado_uf])
    }

    listar() {
        return db.query("SELECT * FROM cidades");
    }

    pegarUm(id) {
        return db.query("SELECT * FROM cidades WHERE id = $1", [id]);
    }

    deletarUm(id) {
        return db.query("DELETE FROM cidades WHERE id = $1", [id]);
    }

    editarCidade(id, nome, estado_uf) {
        return db.query("UPDATE cidades SET nome = $1, estado_uf = $2 WHERE id = $3", [nome, estado_uf, id]);
    }
}

module.exports = new CidadesModel();