module.exports = function(){
  return function(Config){
    var BWT=this;
    var App,Server,Router,Utils,View;

    var init = function(){
      if(App) return;
      App = new BWT.load('App')(BWT,Server);
    };
    /**
     * Module loader
     * @param module
     * @param folder
     * @returns The module
     */

    BWT.load = function(module,folder){
      if(!folder) folder = 'modules';
      return require(__dirname+'/'+folder+'/'+module)(BWT);
    };

    /**
     * The Config of the app
     * @type {*|The}
     */
    BWT.Config = Config || BWT.load('index','config');
    BWT.Router = function(){
      init();
      return Router;
    };

    BWT.Server = function(){
      init();
      return Server;
    };

    // la view se pasará en el objeto a las responses

    BWT.Utils = function(){
      return Utils;
    };

    /**
     * Start an app with a Config
     */
    BWT.start = function(cb){
      init();
      cb();
    };
  };
};
