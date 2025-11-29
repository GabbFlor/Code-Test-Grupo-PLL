const express = require("express");
const EstadoController = require("./controllers/EstadoController");


const app = express();
app.use(express.json());


app.get('/estados', EstadoController.ListarTodas)
app.get('/estados/:id', EstadoController.ProcurarUm)



app.listen(3001, () => {
    console.log("Servidor rodando...")
})