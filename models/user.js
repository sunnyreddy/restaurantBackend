var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    // this is taken care by the passportLocalMongoose // not sure how???
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: '',
    },
    admin: {
        type: Boolean,
        default: false,
    } 
});

userSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User',userSchema);

module.exports = User;

