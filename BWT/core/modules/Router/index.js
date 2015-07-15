module.exports = function(BWT){
    return function(App){
        var Router = this;
        var extend = function(fn){
            return function(req,res){
                console.log('Request in %s App',BWT.Id);
                var ext = {
                    req : req,
                    res : res
                };
                ext = BWT.Utils()._.assign(ext,BWT);
                fn(ext);
            };
        };

        Router.get = function(path,fn){
            App.get(path,extend(fn));
        };

        Router.post = function(path,fn){
            App.post(path,extend(fn));
        };

        Router.delete = function(path,fn){
            App.delete(path,extend(fn));
        };

        Router.put = function(path,fn){
            App.put(path,extend(fn));
        };

        Router.addFile = function(path){
            try{
                require(path)(BWT);
            }catch(e){
                console.log('Error in path '+path);
                console.log(e);
            }
        };

        Router.endPoint = function(path,file){
            try{
                console.log(file);
                require(file)(endPointRouter);
            }catch(e){
                console.log('Error in path '+file);
                console.log(e);
            }
        };
    };
};