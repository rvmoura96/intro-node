var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url == '/produtos'){
        res.end('<html><body>Listando os produtos da loja</body>');
    } else {
        res.end("<html><body>Oi</body></html>");
    }
}).listen(3000,'localhost');

console.log("Servidor Rodando");