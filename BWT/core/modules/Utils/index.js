var _ = require('lodash');
var fs = require('fs');
var jade = require('then-jade');
var q = require('q');

module.exports = function(){
    var Utils = {
        _ : function() {
            return _;
        },
        fs : function(){
            return fs;
        },
        jade : function(){
            return jade;
        },
        q : function(){
            return q;
        }
    };

    return Utils;
};