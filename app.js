var app, app2, cms, api;

app = new (require(__dirname+'/BWT'))();

app.use(function(BWT,next){
  //TODO revisar porque sale dos veces en cada petición.
  console.log('middleware');
  next();
});

app.Router().addFile(__dirname+'/routes');
app.Router().addEndPoint('/end',__dirname+'/end');
app.Router().get('/api/feo', function (BWT) {
  BWT.View.render(__dirname+'/prueba.jade');
  //BWT.res.status(200).send('Olé!');
});

app.start(function(info){
  console.log('CB de start app');
});
/**
 * CMS que se podrá lanzar en otro puerto
 * App. en AngularJS para la gestión de los contenidos
 *
 */
//cms = new BWT().cms();
//cms.start();
