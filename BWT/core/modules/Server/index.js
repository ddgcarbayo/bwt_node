module.exports = function(BWT){
    var Config = BWT.Config;
    return function(){
      var Server = {
        listen : function(cb){
          BWT.App.launcher();
          Server.instance=require('http').createServer(BWT.App);
          Server.instance.listen(Config.server.port, Config.server.ip, function () {
            console.log('Express BWT server listening on %d, in %s mode', Config.server.port, Config.env);
            if(typeof cb === 'function') cb();
          });
        }
      };
      return Server;
    };
};
