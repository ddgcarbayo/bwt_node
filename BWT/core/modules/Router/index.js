module.exports = function(BWT){
    var extend = function(req,res){
        var ext = {
            req : req,
            res : res
        };
        ext = BWT.Utils._.assign(ext,BWT);
        // aquí se asignaría una new View();
        return ext;
    };
    var Router = {
        get : function(path,fn){
            BWT.App.get(path,function(req,res){
                fn(extend(req,res));
            });
        }
    };

    return Router;
};