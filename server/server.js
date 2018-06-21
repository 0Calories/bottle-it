require('./config/config');

const mongoose = require('mongoose');
const app = require('express')();
const bodyParser = require('body-parser');

let {Message} = require('./models/message');

// Configure Express to use the body-parser module for processing requests
app.use(bodyParser.json());

// Initialize Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// POST route for handling new Message creation
app.post('/messages', async (req, res) => {
    try {
        let message = new Message({
            title: req.body.title,
            body: req.body.body,
            postedAt: new Date()
        });
        
        let doc = await message.save();
        res.send(doc);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get('/messages', async (req, res) => {
    try {
        let message = await Message.fetchRandom();
        res.send(message);
    } catch (err) {
        console.log(err);
        res.status(404).send();
    }
});

app.listen(process.env.PORT, () => console.log(`Launched BottleIt server on port ${process.env.PORT}`));

module.exports = { app };
