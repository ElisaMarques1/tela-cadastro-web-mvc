function exibirPaginaDeCadastro(req, res) {
    return res.render('cadastro');
}

function criarConta(req, res) {
    console.log(req.body)
}

module.exports = {
    exibirPaginaDeCadastro,
    criarConta
}