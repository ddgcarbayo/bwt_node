module.exports = function(BWT){
    var config = require(__dirname+'/default');
    var env = process.env.ENV;
    var pathCustom = __dirname+'/env/'+env;
    var customConfig = {};
    if(env && BWT.Utils.fs.existsSync(pathCustom)){
        customConfig = require(pathCustom);
        config=BWT.Utils._.assign(config,customConfig);
    }
    return config;
};