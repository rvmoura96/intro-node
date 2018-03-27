var Express = require('./config/express');//Import do express invocado no arquivo express alocado no diretório de configs.
var app = Express();

app.listen(3000, function(req, res){
    console.log('Servidor rodando na porta 3000');
});