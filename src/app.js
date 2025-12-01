const express = require("express");
const app = express();
app.use(express.json());

const estadoRoutes = require("./routes/estadosRoutes");
const authTokenMiddleware = require("./middleware/authToken");

app.use(authTokenMiddleware);

app.use('/estados', estadoRoutes);

app.listen(3001, () => {
    console.log("Servidor rodando...")
})