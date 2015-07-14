module.exports = function(BWT) {
  BWT.Router.get('/api/feo', function (app) {
    console.log('Feo');
    app.res.status(200).send('Feo : ' + app.req.url);
  });

  BWT.Router.get('/api/tonto', function (app) {
    console.log('Tonto 1');
    setTimeout(function () {
      console.log('Tonto 2');
      console.log(app.req.url);
      app.res.status(200).send('Tonto : ' + app.req.url);
    }, 5000);
  });
};
