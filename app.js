var BWT = require('./BWT');

BWT.Router.get('/api/feo',function(BWT){
    console.log('Feo');
    BWT.res.status(200).send('Feo : '+BWT.req.url);
});

BWT.Router.get('/api/tonto',function(BWT){
    console.log('Tonto 1');
    setTimeout(function(){
        console.log('Tonto 2');
        console.log(BWT.req.url);
        BWT.res.status(200).send('Tonto : '+BWT.req.url);
    },5000);
});

BWT.Server.listen(function(){
    console.log('cb');
});