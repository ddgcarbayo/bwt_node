/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
        , jade = require('jade')
        , fs = require('fs');


var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'));

var bwt = (function(){
  var datos = {
    feo : 'feo',
    tonto : 'tonto',
    arr : ['uno','dos'],
    title : 'Título de la web'
  };
  return {
    get : function(field){
      return datos[field];
    },
    render : function(file){
      var $this=this;
      return jade.compile(fs.readFileSync(__dirname+'/views/'+file+'.jade','utf8'))({ bwt : $this });
    }
  };
})();

app.get('/', function (req, res) {
  res.render('layout', { bwt : bwt });
})

app.listen(3000)