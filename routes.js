module.exports = function(app) {

  //BWT.Router().get('/api/feo', function (app) {
  //  console.log('Feo');
  //  app.res.status(200).send('Feo : ' + app.req.url);
  //});

  app.Router().get('/api/tonto', function (BWT) {
    console.log('Tonto 1');
    setTimeout(function () {
      console.log('Tonto 2');
      console.log(BWT.req.url);
      BWT.res.status(200).send('Tonto : ' + BWT.req.url);
    }, 5000);
  });
};
