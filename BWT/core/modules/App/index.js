/**
 * App Module
 * Launch an express app with de custom configurations
 * @param BWT
 * @return {App} Express app object
 */
module.exports = function(BWT){
    return function(){
        var express = require('express');
        var App = express();
        var Server = require('http').createServer(App);

        /**
         * Mount an Express app with the components setted in the Config.
         * @param Config
         */
        var mountApp = function (Config){
            var components = Config.server.components;
            for(var comp in components){
                var aux = components[comp];
                if(aux === false) continue;
                var req = require(comp);
                App.use((typeof aux === 'object')?req(aux):req);
            }
            App.use(express.static(Config.server.static));
        };

        /**
         * Launch the Express app and the Server
         * @param {cb} Callback function
         */
        App.start = function(cb){
            var Config = BWT.Config();
            mountApp(Config);
            Server.listen(Config.server.port, Config.server.ip, function () {
                console.log('BWT Server from %s App listening on %d, in %s mode', BWT.Id, Config.server.port, Config.env);
                if(typeof cb === 'function') cb();
            });
        };

        /**
         * Return the Server object
         * @return {*}
         */
        App.Server = function(){
          return Server;
        };

        return App;
    };
};
