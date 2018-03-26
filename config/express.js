var Express = require('express');
var app = new Express();
app.set('view engine', 'ejs');
app.set('views','./app/views');
module.exports = function (){
    return app;
}

