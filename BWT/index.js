module.exports = (function(){
    var BWT = {};
    BWT.load = function(module,folder){
        if(!folder) folder = 'modules';
        return require(__dirname+'/'+folder+'/'+module)(BWT);
    };
    BWT.Config = BWT.load('index','config');
    BWT.App  = BWT.load('App');
    BWT.View = BWT.load('View');
    //Model : load('Model'),
    BWT.Utils = BWT.load('Utils');
    BWT.Server = BWT.load('Server');

    return BWT;
})();