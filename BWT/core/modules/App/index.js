module.exports = function(BWT){
    return function(){
        var express = require('express');
        var App = express();
        var Server = require('http').createServer(App);
        var mount = function (Config){
            var components = Config.server.components;
            for(var comp in components){
                var aux = components[comp];
                if(aux === false) continue;
                var req = require(comp);
                App.use((typeof aux === 'object')?req(aux):req);
            }
            App.use(express.static(Config.server.static));
        };

        App.start = function(cb){
            var Config = BWT.Config();
            mount(Config);
            Server.listen(Config.server.port, Config.server.ip, function () {
                console.log('BWT Server from %s App listening on %d, in %s mode', BWT.Id, Config.server.port, Config.env);
                if(typeof cb === 'function') cb();
            });
        };

        return App;
    };
};
