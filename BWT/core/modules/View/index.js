module.exports = function(){
    return function(BWT){
        var View = this;
        View.render = function(template,vars){
            var jade = BWT.Utils().jade();
            var fs = BWT.Utils().fs();
            var q = BWT.Utils().q();
            var promises = [];
            BWT.tonto = function(){
                var p = q.promise(function(ok,ko){
                    setTimeout(function(){
                        p.resultado = 'Resultado';
                        ok();
                    },1000);
                });
                promises.push(p);
                return p;
            };
            var fn = jade.compileStreaming(fs.readFileSync(template,'utf8'));
            var str=fn({Tonto : BWT.tonto()});
            str.setEncoding('utf8');
            var res='';
            str.on('data',function(data){
               res+=data;
            });

            str.on('end',function(){
               console.log(res);
            });

            //jade.renderFile(template, { BWT : BWT }, function(error,result){
            //   BWT.res.status(200).send(result);
            //});
        };
    };
};