var mongoose = require('mongoose');
//var mongoDB = "mongodb+srv://nesf:<nesfnesf>@cluster0.an1bd.mongodb.net/nesfnesf?retryWrites=true&w=majority";
mongoose.connect('mongodb://localhost:27017/nesf', {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', ()=>{console.log("Connection réussi !")} );
module.exports = mongoose;