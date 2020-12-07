const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    image: String
});
//DB Model name : Match
const user = mongoose.model('user', userSchema);

module.exports = user;