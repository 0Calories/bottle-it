const {ObjectID} = require('mongodb');
const {Message} = require('./../models/message');

const longTitle = 'This is a pretty long title that I am testing in order to ensure that my Message schema does not allow for ridiculously long titles!';
const longBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc elit, mattis at pretium a, tempus sollicitudin libero. Vestibulum suscipit nisl ut condimentum aliquam. Integer sed porta justo. Sed ultricies eros vitae felis semper, nec pharetra diam tincidunt. In faucibus libero justo, vitae dignissim dui pretium vitae. Nullam sagittis ligula iaculis dolor hendrerit porttitor. Suspendisse facilisis leo a elit sollicitudin sodales. Aenean elit odio, laoreet a sapien accumsan, maximus facilisis eros. Maecenas venenatis nulla in lectus rutrum consequat. Nunc non velit odio. Nam placerat sem a massa ullamcorper, vitae dapibus felis euismod.';

const testMessages = [{
    _id: new ObjectID(),
    title: 'This is a test message',
    body: 'This is a test message body',
    postedAt: new Date()
}, {
    _id: new ObjectID(),
    title: 'This is also a test message',
    body: 'This is also a test message body',
    postedAt: new Date()
}];

const populateMessages = (done) => {
    Message.remove({}).then(() => {
        return Message.insertMany(testMessages);
    }).then(() => done());
}

module.exports = { longTitle, longBody, populateMessages };