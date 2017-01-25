const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
        res.sendFile('./index.html');
});

app.post('/', (req, res) => {
        res.send(req.body);
});

app.listen(1818, () => {
        console.log('run on 1818');
});