module.exports = function(BWT){
    return function(App){
        var Router = this;
        /**
         * Generate BWT Object for requests
         * @param {fn} callback function
         * @returns {Function} Express function
         */
        var extendBWT = function(fn){
            return function(req,res,next){
                //console.log('Request in %s App',BWT.Id);
                var ext = {};
                if(!BWT.req) ext.req = req;
                if(!BWT.res) ext.res = res;
                if(!BWT.View) ext.View = new (BWT.load('View'))(ext);
                ext = BWT.Utils()._().assign(ext,BWT);
                fn(ext,next);
            };
        };

        /**
         * Generate BWT Object for endpoint requests
         * @param {rootPath} Endpoint route
         * @returns {Function} Express function
         */
        var endPointRouter = function(rootRoute){
          //TODO mirar un "limpia" urls
          return {
              get : function(route,fn){
                  Router.get(rootRoute+route,fn);
              },
              post : function(route,fn){
                  Router.post(rootRoute+route,fn);
              },
              put : function(route,fn){
                  Router.put(rootRoute+route,fn);
              },
              del : function(route,fn){
                  Router.del(rootRoute+route,fn);
              }
          };
        };

        /**
         * Generate Express Middleware
         * @param fn callback function
         * @returns {Function}
         */
        Router.middleware = function(fn){
            return App.use(extendBWT(fn));
        };

        /**
         * GET Request
         * @param {route} Express route & params
         * @param {fn} Express callback function
         * @returns {Function}
         */
        Router.get = function(route,fn){
            return App.get(route,extendBWT(fn));
        };

        /**
         * POST Request
         * @param {route} Express route & params
         * @param {fn} Express callback function
         * @returns {Function}
         */
        Router.post = function(route,fn){
            return App.post(route,extendBWT(fn));
        };

        /**
         * DELETE Request
         * @param {route} Express route & params
         * @param {fn} Express callback function
         * @returns {Function}
         */
        Router.del = function(route,fn){
            return App.delete(route,extendBWT(fn));
        };

        /**
         * PUT Request
         * @param {route} Express route & params
         * @param {fn} Express callback function
         * @returns {Function}
         */
        Router.put = function(route,fn){
            return App.put(route,extendBWT(fn));
        };

        /**
         * Add file with new routes
         * @param {filePath} File path
         * @returns {*}
         */
        Router.addFile = function(filePath){
            try{
                return require(filePath)(BWT);
            }catch(e){
                console.log('Error adding routing file '+filePath);
                console.log(e);
                return false;
            }
        };

        /**
         * Add a new EndPoint
         * @param {route} Route
         * @param {filePath} File path
         * @returns {*}
         */
        Router.addEndPoint = function(route,filePath){
            try{
                return require(filePath)(endPointRouter(route));
            }catch(e){
                console.log('Error adding route endpoint '+route);
                console.log(e);
                return false;
            }
        };
    };
};