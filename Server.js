const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/index.html', (req, res) => {
        res.sendFile(__dirname + '/index.html');
});

app.post('/index.html', (req, res) => {
        const dataArr = req.body.data;

        let str = '하찮다';
        if (dataArr[0] == 'true')
                str = '현명하다';

        res.send(str);
});

app.listen(1818, () => {
        console.log('run on 1818');
});