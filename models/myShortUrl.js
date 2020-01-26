const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myUrlSchema = new Schema({
    theUrlInput: String,
    theShortUrl: String
}, {timestamps:true});

const ModelClass = mongoose.model('myShortUrl', myUrlSchema);

module.exports = ModelClass;