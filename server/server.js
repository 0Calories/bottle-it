const mongoose = require('mongoose');

let app = require('express')();
const bodyParser = require('body-parser');
const {MONGODB_URI, PORT} = require('./config/config');

let {Message} = require('./models/message');

app.use(bodyParser.json());

mongoose.connect(MONGODB_URI);

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
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

app.listen(PORT, () => console.log(`Launched BottleIt server on port ${PORT}`));
