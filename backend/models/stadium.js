const mongoose = require('mongoose');

const stadiumSchema = mongoose.Schema({
    name: String,
    country: String,
    capacity: String
});
//DB Model name :stadium
const stadium = mongoose.model('stadium', stadiumSchema);

module.exports = stadium;