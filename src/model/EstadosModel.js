const db = require("../config/db");

class EstadosModel {
    listar() {
        return db.query("SELECT * FROM estados");
    }
}

module.exports = new EstadosModel();