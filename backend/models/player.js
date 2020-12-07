const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name : String,
    date : Date,
    image : String
});
//DB Model name : Match
const player = mongoose.model('player', playerSchema);

module.exports = player ;