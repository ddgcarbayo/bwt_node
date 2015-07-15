module.exports = function(){
  return function(customConfig){
    var BWT=this;
    BWT.Id = new Date().getTime();
    var App,Server,Router,Utils,View,Config;
    /**
     * Module loader
     * @param module
     * @param folder
     * @returns The module
     */

    BWT.load = function(module,folder){
      if(!folder) folder = 'modules';
      return (require(__dirname+'/'+folder+'/'+module)(BWT));
    };

    /**
     * The Config of the app
     * @type {*|The}
     */
    BWT.Config = function(){
      return Config;
    };

    BWT.Router = function(){
      return Router;
    };

    BWT.Server = function(){
      return Server;
    };

    // la view se pasará en el objeto a las responses

    BWT.Utils = function(){
      return Utils;
    };

    BWT.use = function(fn) {
      App.use(fn);
    };

    BWT.App = function () {
      return App;
    };

    /**
     * Start an app with a Config
     */
    BWT.start = function (cb) {
      App.start(cb);
    };

    Utils = BWT.load('Utils');
    Config = BWT.Utils()._.merge(BWT.load('index','config'),customConfig || {});

    App = new BWT.load('App')();
    Router = new (BWT.load('Router'))(App);
  };
};
