module.exports = function(router) {

    //BWT.Router().get('/api/feo', function (app) {
    //  console.log('Feo');
    //  app.res.status(200).send('Feo : ' + app.req.url);
    //});
    console.log(router);

    router.get('/unend', function (BWT) {
        console.log('unend 1');
        BWT.res.status(200).send('End : ' + BWT.req.url);
    });
};
