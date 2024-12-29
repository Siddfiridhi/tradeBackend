const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    answers: { type: [String], default: Array(19).fill(null) }, 
     
});

module.exports = mongoose.model('User', userSchema);
