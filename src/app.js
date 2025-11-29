const express = require("express");
const app = express();
app.use(express.json());

const estadoRoutes = require("./routes/estadosRoutes");

app.use('/estados', estadoRoutes);

app.listen(3001, () => {
    console.log("Servidor rodando...")
})