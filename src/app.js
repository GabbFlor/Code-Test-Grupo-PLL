const express = require("express");
const app = express();
app.use(express.json());

const estadoRoutes = require("./routes/EstadoRoutes");
const cidadeRoutes = require("./routes/CidadeRoutes");
const authTokenMiddleware = require("./middleware/authToken");

app.use(authTokenMiddleware);

app.use('/estados', estadoRoutes);
app.use('/cidades', cidadeRoutes);

app.listen(3001, () => {
    console.log("Servidor rodando...")
})