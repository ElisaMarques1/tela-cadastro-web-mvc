var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var enableHotReload = require("./hot-reload");

var cadastroController = require("./controllers/cadastro");

const app = express();

//Configuração do body parser
app.use(bodyParser.urlencoded({ extended: false }));


// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas

app.get("/cadastro", cadastroController.exibirPaginaDeCadastro);

app.post("/criar-conta", cadastroController.criarConta);


// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});