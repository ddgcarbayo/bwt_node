module.exports = function(){
    return function(BWT){
        var View = this;
        View.render = function(template,vars){
            var jade = BWT.Utils().jade();
            var q = BWT.Utils().q();
            BWT.tonto = function(arr,vif){
                return q.promise(function(ok,ko){
                    setTimeout(function(){
                       if(vif) return ok('true');
                        if(!arr) ok('REsultado');
                        else ok(['feo','tonto']);
                    },1000);
                });
            };
          var tpl = jade.compileFile(template);
          var data = {
            Model : {
              get : function(){
                return BWT.tonto()
              },
              list : function(filters){
                console.log(filters);
                return BWT.tonto(true);
              },
              vif : function(){
                return BWT.tonto(false,true);
              }
            }
          };

          tpl(data).done(function (html) {
            BWT.res.status(200).send(html);
          },function(){
            console.log('error');
            BWT.res.status(200).send('Error');
          });

        };
    };
};
