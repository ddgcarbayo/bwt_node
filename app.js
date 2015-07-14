var BWT = require(__dirname+'/BWT');
var app, cms, api;

app = new BWT();
//app.Router.add(__dirname+'/routes');
app.start(function(info){
  console.log(info);
  console.log('qvy');
});

/**
 * CMS que se podrá lanzar en otro puerto
 * App. en AngularJS para la gestión de los contenidos
 *
 */
//cms = new BWT().cms();
//cms.start();
