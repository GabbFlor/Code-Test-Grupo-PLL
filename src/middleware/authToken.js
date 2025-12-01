require("dotenv").config();
const HttpException = require("../exceptions/HttpException")

const token = process.env.API_KEY;

function tokenMiddleware(req, res, next) {
    try {
        const rawHeaderToken = req.headers['authorization'];
        // Tira o "bearer", se não existir token deixa "undefined"
        const headerToken = rawHeaderToken?.split(" ")[1]

        if (!headerToken || headerToken == "") {
            throw new HttpException("É necessário um token para usar essa API", 401);
        } else if (headerToken != token) {
            throw new HttpException("O token inserido não é válido", 401);
        }

        next();
    } catch (error) {
        if (error instanceof HttpException) {
            return res.status(error.status).json ({ error: error.message });
        }

        console.log(error)
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
}

module.exports = tokenMiddleware;