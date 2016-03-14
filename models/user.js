// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var ContactSchema = require('contact.js').Schema;

// define the schema for our user model
var userSchema = mongoose.Schema({
    id: String,
    token: String,
    email: String,
    name: String,
    contactInfo: [ContactSchema]
});

// // generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
