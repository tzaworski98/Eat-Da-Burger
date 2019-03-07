var orm = require("../config/orm");

var burger =  {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    
    add: function(colInput, val, cb){
        orm.add("burgers", colInput, val, function(res){
            cb(res);
        });
    },
    update: function(colVals, condition, cb){
        orm.update("burgers", colVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;