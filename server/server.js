const mongoose = require('mongoose');

let app = require('express')();
const {MONGODB_URI, PORT} = require('./config/config');

let {Message} = require('./models/message');

mongoose.connect(MONGODB_URI);

app.post('/messages', async (req, res) => {
    console.log('Received POST request to /messages');

    let message = new Message({
        title: 'Test Message',
        body: 'Hello World! :D',
        postedAt: new Date()
    });

    try {
        let doc = await message.save();
        res.send(doc);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.listen(PORT, () => console.log(`Launched BottleIt server on port ${PORT}`));
