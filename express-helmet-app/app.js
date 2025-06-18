'use strict'

const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());

app.get('/', (req, res) => {
    console.log('route \'/\' called')
    res.send({ res: 'Sending 200 as repsonse'});
});

app.listen(3000);
console.log('Express app is up and running on port 3000');