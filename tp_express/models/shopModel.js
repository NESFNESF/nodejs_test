var mongoose = require('../config/mongo-config.js');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
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
    },
    ref : {
        type : String,
        require : true
    },
    longitude : {
        type : String,
        require : true
    },
    latitude : {
        type : String,
        require : true
    },
    categoryList : [{type : Schema.Types.ObjectId, ref : 'Category'}]

});



module.exports = mongoose.model('Shop',shopSchema);