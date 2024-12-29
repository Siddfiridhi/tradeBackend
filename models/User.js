// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     email: { type: String, required: true },
//     answers: { type: [String], default: Array(19).fill(null) }, 
     
// });

// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }, // Ensure emails are unique
    answers: {
        type: [String],
        default: () => Array(19).fill(null), // Use a function to create a new array instance
    },
});

module.exports = mongoose.model('User', userSchema);

