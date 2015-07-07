var BWT = require('./BWT');
BWT.App.route.get('/api/*',function(req,res,BWT){
    console.log('hola');
});

BWT.Server.listen(function(){
    console.log('cb');
});