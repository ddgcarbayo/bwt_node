module.exports = function(){
  return function(customConfig){
    var BWT=this;
    BWT.Id = new Date().getTime();
    var App,Router,Utils,View,Config;
    /**
     * Module loader
     * @param module
     * @param folder (if is not modules)
     * @returns The module
     */

    BWT.load = function(module,folder){
      if(!folder) folder = 'modules';
      return (require(__dirname+'/'+folder+'/'+module)(BWT));
    };

    /**
     * The Config of the app
     * @return Config
     */
    BWT.Config = function(){
      return Config;
    };

    /**
     * Router Object
     * @return {*}
     */
    BWT.Router = function(){
      return Router;
    };

    // la view se pasará en el objeto a las responses
    /**
     * Return Utils and Common modules
     * @return {*}
     */
    BWT.Utils = function(){
      return Utils;
    };

    /**
     * Express Use function (middleware)
     * @param {fn} Callback function
     * @return {Function|*}
     */
    BWT.use = function(fn) {
      return Router.middleware(fn);
    };

    /**
     * Return express App
     * @return {*}
     */
    BWT.App = function () {
      return App;
    };

    /**
     * Launch a Server and start the app
     * @param {cb} Callback function
     */
    BWT.start = function (cb) {
      App.start(cb);
    };


    Utils = BWT.load('Utils');
    Config = BWT.Utils()._().merge(BWT.load('index','config'),customConfig || {});
    App = new BWT.load('App')();
    Router = new (BWT.load('Router'))(App);
  };
};
