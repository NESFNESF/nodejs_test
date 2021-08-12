var mongoose = require('../config/mongo-config.js');

var Schema = mongoose.Schema;

var categorySchema = new Schema({
    id : {
        type : Number,
        require : true
         },
    name : {
        type : String,
        require : true,
        maxLength : 100
    },
    description : {
        type : String,
        require : true
    },
    imageUrl : {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('Category',categorySchema);