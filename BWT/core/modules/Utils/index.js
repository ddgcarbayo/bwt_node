var _ = require('lodash');
var fs = require('fs');
module.exports = function(BWT){
    var Utils = {
        _ : _,
        fs : fs
    };

    return Utils;
};