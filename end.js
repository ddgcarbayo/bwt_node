module.exports = function(router) {

    router.get('/unend', function (BWT) {
        console.log('unend 1');
        BWT.res.status(200).send('End : ' + BWT.req.url);
    });

    router.del('/unend', function (BWT) {
        console.log('delete unend 1');
        BWT.res.status(200).send('End : ' + BWT.req.url);
    });
};
