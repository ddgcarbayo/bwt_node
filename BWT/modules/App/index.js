module.exports = function(BWT){
    var express = require('express');
    var App = express();
    App.launcher = function(){
        var components = BWT.Config.server.components;
        for(var comp in components){
            var aux = components[comp];
            if(aux === false) continue;
            var req = require(comp);
            App.use((typeof aux === 'object')?req(aux):req);
        }
        App.use(express.static(BWT.Config.server.static));
    };
    App.route = {
        get : function(){
            App.get(arguments[0],)
            console.log(arguments);
        }
    };
    return App;
};