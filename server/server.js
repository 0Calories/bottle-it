let app = require('express')();
const PORT = 3000;

app.post('/messages', (req, res) => {
    console.log('Received POST request to /messages');
    res.status(200).send();
});

app.listen(PORT, () => console.log(`Launched BottleIt server on port ${PORT}`));
