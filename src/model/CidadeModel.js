const db = require("../config/db");

class CidadesModel {
    postarCidade(nome, estado_uf) {
        return db.query("INSERT INTO cidades (nome, estado_uf) VALUES ($1, $2)", [nome, estado_uf])
    }
}

module.exports = new CidadesModel();