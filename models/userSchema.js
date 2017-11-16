var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    gender: {
        type: String
    },
    name: {
        type: String
    },
    
});

module.exports = userSchema;