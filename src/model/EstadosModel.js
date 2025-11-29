const db = require("../config/db");

class EstadosModel {
    listar() {
        return db.query("SELECT * FROM estados");
    }

    pegarUm(id) {
        // evita sql injection
        return db.query("SELECT * FROM estados WHERE id = $1", [id]);
    }
}

module.exports = new EstadosModel();