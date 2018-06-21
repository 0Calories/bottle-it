const mongoose = require('mongoose');


/**
 * Message schema
 * 
 * A typical message that stores a title, body, number of stars (likes), and date posted
 */

let Message = mongoose.model('Message', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
        trim: true
    },

    body: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
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