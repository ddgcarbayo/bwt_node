var app, app2, cms, api;

app = new (require(__dirname+'/BWT'))();
app.Router().addFile(__dirname+'/routes');
app.Router().endPoint('/end',__dirname+'/end');
app.Router().get('/api/feo', function (BWT) {
  BWT.res.status(200).send('Olé!f');
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
