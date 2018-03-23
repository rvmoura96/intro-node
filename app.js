var config = require('./config/express');
var app = config();

app.get('/produtos', function(req,res){
    res.render('produtos/lista');
})
app.listen(3000, function(req, res){
    console.log('Servidor rodando na porta 3000');
});