const { default: mongoose } = require("mongoose");

module.exports= {
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongooses){
        return mongooses ? mongoose.toObject() : mongoose;
    }
};


