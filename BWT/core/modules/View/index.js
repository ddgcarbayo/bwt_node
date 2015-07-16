module.exports = function(){
    return function(BWT){
        var View = this;
        var extendVars = function(customVars){
            var q = BWT.Utils().q();
            var betaView = {
                ModelSQL : {
                    get : function(params) {
                        //devolver promesa
                        //params = {
                        //    filters : [
                        //        {
                        //            field : 'columnaX',
                        //            value : 'XXX',
                        //            filter : 'LIKE, =, ...'
                        //        }
                        //    ],
                        //    filterType : 'AND',
                        //    order : {
                        //        fieldName : 'ASC',
                        //        fieldName2 : 'DESC'
                        //    },
                        //    limit : 1, // SIEMPRE devuelve un elemento, por eso es un get
                        //    offset : 5
                        //};
                    },
                    list : function(params){
                        //igual que el get pero el param limit funciona.
                        // SIEMPRE Devuelve un array
                    }
                },
                View : {
                    import : function(template){
                        // importará templates de forma dinámica (en jade no se puede directamente, hay que indicar la ruta para que vaya)
                    }
                }
            };

            return BWT.Utils()._().merge(betaView,customVars);
        };

        /**
         * Render a template file
         * @param template
         * @param {vars} Vars for the template (can be a promise)
         */
        View.render = function(template,vars){
            var jade = BWT.Utils().jade();
            jade.compileFile(template)(extendVars(vars)).done(function (html) {
                BWT.res.status(200).send(html);
            },function(){
                console.log('Error compiling Jade file '+template);
                BWT.res.status(200).send('Error');
            });

        };
    };
};
