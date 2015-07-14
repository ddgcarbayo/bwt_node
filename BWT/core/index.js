module.exports = function(){
  return function(Config){
    var BWT=this;
    var time = new Date().getTime();
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

    /**
     * Start an app with a Config
     */
    BWT.start = function(cb){
      console.log(BWT.Config);
      cb({
        port : 8080,
        time : time
      });
    };
  };
};
