module.exports = function(){
    return function(BWT,Server){

    };
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
    return App;
};
