const express = require('express');
const morgan = require('morgan');
const con = require('./db.js');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('W.I.P');
});

app.get('/sign-in', (req, res) => {
    res.send('On account sign in.');
});

let server = app.listen(3500, () => {
    console.log('Server listening on port : ', server.address().port);
});