module.exports = function(BWT){
    return function(App){
        var Router = this;
        var extend = function(fn){
            return function(req,res,next){
                //console.log('Request in %s App',BWT.Id);
                var ext = {
                    req : req,
                    res : res
                };
                ext = BWT.Utils()._.assign(ext,BWT);
                fn(ext,next);
            };
        };

        var endPointRouter = function(rootPath){
          //TODO mirar un "limpia" urls
          return {
              get : function(path,fn){
                  Router.get(rootPath+path,fn);
              },
              post : function(path,fn){
                  Router.post(rootPath+path,fn);
              },
              put : function(path,fn){
                  Router.put(rootPath+path,fn);
              },
              del : function(path,fn){
                  Router.del(rootPath+path,fn);
              }
          };
        };

        Router.middleware = function(fn){
            App.use(extend(fn));
        };

        Router.get = function(path,fn){
            App.get(path,extend(fn));
        };

        Router.post = function(path,fn){
            App.post(path,extend(fn));
        };

        Router.del = function(path,fn){
            App.delete(path,extend(fn));
        };

        Router.put = function(path,fn){
            App.put(path,extend(fn));
        };

        Router.addFile = function(path){
            try{
                require(path)(BWT);
            }catch(e){
                console.log('Error adding routing file '+path);
                console.log(e);
            }
        };

        Router.addEndPoint = function(path,file){
            try{
                require(file)(endPointRouter(path));
            }catch(e){
                console.log('Error adding route endpoint '+path);
                console.log(e);
            }
        };
    };
};