const mongoose = require('mongoose');


/**
 * Message schema
 * 
 * A typical message that stores a title, body, stars (likes), and date posted
 */

let Message = mongoose.model('Message', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    body: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 400
    },

    stars: {
        type: Number,
        required: false
    },

    postedAt: {
        type: Date,
        required: true,
    }
});

module.exports = { Message };