var _ = require('lodash');
var fs = require('fs');

module.exports = function(){
    var Utils = {
        _ : _,
        fs : fs
    };

    return Utils;
};