const mongoose = require('mongoose');


/**
 * Message schema
 * 
 * A typical message that stores a title, body, number of stars (likes), and date posted
 */

let MessageSchema = new mongoose.Schema({
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
})

MessageSchema.statics.fetchRandom = function () {
    let Message = this;

    return Message.count().then((count) => {
        if (count === 0) {
            return Promise.reject('No messages available!');
        }

        return new Promise((resolve, reject) => {
            let rand = Math.floor(Math.random() * count);
            Message.findOne().skip(rand).then((message) => {
                if (!message) {
                    reject('Could not retrieve random message');
                }

                resolve(message);
            }).catch((err) => reject(err));
        });
    });
};


let Message = mongoose.model('Message', MessageSchema);

module.exports = { Message };