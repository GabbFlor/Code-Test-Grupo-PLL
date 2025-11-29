require("dotenv").config();
const { Pool } = require("pg");

// recupperando dados do .env
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME
const dbPort = process.env.DB_PORT

const pool = new Pool({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
    port: dbPort
})

pool.connect((err) => {
    if (err) {
        console.error(`Erro ao se conectar com o banco de dados: ${err}`)
    }
})

module.exports = pool;